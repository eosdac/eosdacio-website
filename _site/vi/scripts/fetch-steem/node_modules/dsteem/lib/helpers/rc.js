"use strict";
/* tslint:disable:no-string-literal */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const misc_1 = require("./../steem/misc");
class RCAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Convenience for calling `rc_api`.
     */
    call(method, params) {
        return this.client.call('rc_api', method, params);
    }
    /**
     * Returns RC data for array of usernames
     */
    findRCAccounts(usernames) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.call('find_rc_accounts', { accounts: usernames }))['rc_accounts'];
        });
    }
    /**
     * Returns the global resource params
     */
    getResourceParams() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.call('get_resource_params', {}))['resource_params'];
        });
    }
    /**
     * Returns the global resource pool
     */
    getResourcePool() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.call('get_resource_pool', {}))['resource_pool'];
        });
    }
    /**
     * Makes a API call and returns the RC mana-data for a specified username
     */
    getRCMana(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const rc_account = (yield this.findRCAccounts([username]))[0];
            return this.calculateRCMana(rc_account);
        });
    }
    /**
     * Makes a API call and returns the VP mana-data for a specified username
     */
    getVPMana(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = (yield this.client.call(`condenser_api`, 'get_accounts', [[username]]))[0];
            return this.calculateVPMana(account);
        });
    }
    /**
     * Calculates the RC mana-data based on an RCAccount - findRCAccounts()
     */
    calculateRCMana(rc_account) {
        return this._calculateManabar(Number(rc_account.max_rc), rc_account.rc_manabar);
    }
    /**
     * Calculates the RC mana-data based on an Account - getAccounts()
     */
    calculateVPMana(account) {
        const max_mana = misc_1.getVests(account) * Math.pow(10, 6);
        return this._calculateManabar(max_mana, account.voting_manabar);
    }
    /**
     * Internal convenience method to reduce redundant code
     */
    _calculateManabar(max_mana, { current_mana, last_update_time }) {
        const delta = Date.now() / 1000 - last_update_time;
        current_mana = Number(current_mana) + (delta * max_mana / 432000);
        let percentage = Math.round(current_mana / max_mana * 10000);
        if (!isFinite(percentage) || percentage < 0) {
            percentage = 0;
        }
        else if (percentage > 10000) {
            percentage = 10000;
        }
        return { current_mana, max_mana, percentage };
    }
}
exports.RCAPI = RCAPI;
