"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asset_1 = require("./asset");
/**
 * Buffer wrapper that serializes to a hex-encoded string.
 */
class HexBuffer {
    constructor(buffer) {
        this.buffer = buffer;
    }
    /**
     * Convenience to create a new HexBuffer, does not copy data if value passed is already a buffer.
     */
    static from(value) {
        if (value instanceof HexBuffer) {
            return value;
        }
        else if (value instanceof Buffer) {
            return new HexBuffer(value);
        }
        else if (typeof value === 'string') {
            return new HexBuffer(Buffer.from(value, 'hex'));
        }
        else {
            return new HexBuffer(Buffer.from(value));
        }
    }
    toString(encoding = 'hex') {
        return this.buffer.toString(encoding);
    }
    toJSON() {
        return this.toString();
    }
}
exports.HexBuffer = HexBuffer;
/**
 * Return the vesting share price.
 */
function getVestingSharePrice(props) {
    const totalVestingFund = asset_1.Asset.from(props.total_vesting_fund_steem);
    const totalVestingShares = asset_1.Asset.from(props.total_vesting_shares);
    if (totalVestingFund.amount === 0 || totalVestingShares.amount === 0) {
        return new asset_1.Price(new asset_1.Asset(1, 'VESTS'), new asset_1.Asset(1, 'STEEM'));
    }
    return new asset_1.Price(totalVestingShares, totalVestingFund);
}
exports.getVestingSharePrice = getVestingSharePrice;
/**
 * Returns the vests of specified account. Default: Subtract delegated & add received
 */
function getVests(account, subtract_delegated = true, add_received = true) {
    let vests = asset_1.Asset.from(account.vesting_shares);
    const vests_delegated = asset_1.Asset.from(account.delegated_vesting_shares);
    const vests_received = asset_1.Asset.from(account.received_vesting_shares);
    const withdraw_rate = asset_1.Asset.from(account.vesting_withdraw_rate);
    const already_withdrawn = (Number(account.to_withdraw) - Number(account.withdrawn)) / 1000000;
    const withdraw_vests = Math.min(withdraw_rate.amount, already_withdrawn);
    vests = vests.subtract(withdraw_vests);
    if (subtract_delegated) {
        vests = vests.subtract(vests_delegated);
    }
    if (add_received) {
        vests = vests.add(vests_received);
    }
    return vests.amount;
}
exports.getVests = getVests;
