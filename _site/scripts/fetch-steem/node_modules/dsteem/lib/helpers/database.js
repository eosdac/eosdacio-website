"use strict";
/**
 * @file Database API helpers.
 * @author Johan Nordberg <code@johan-nordberg.com>
 * @license
 * Copyright (c) 2017 Johan Nordberg. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *  1. Redistribution of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *
 *  2. Redistribution in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  3. Neither the name of the copyright holder nor the names of its contributors
 *     may be used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * You acknowledge that this software is not designed, licensed or intended for use
 * in the design, construction, operation or maintenance of any military facility.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const asset_1 = require("./../steem/asset");
class DatabaseAPI {
    constructor(client) {
        this.client = client;
    }
    /**
     * Convenience for calling `database_api`.
     */
    call(method, params) {
        return this.client.call('condenser_api', method, params);
    }
    /**
     * Return state of server.
     */
    getDynamicGlobalProperties() {
        return this.call('get_dynamic_global_properties');
    }
    /**
     * Return median chain properties decided by witness.
     */
    getChainProperties() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.call('get_chain_properties');
        });
    }
    /**
     * Return all of the state required for a particular url path.
     * @param path Path component of url conforming to condenser's scheme
     *             e.g. `@almost-digital` or `trending/travel`
     */
    getState(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.call('get_state', [path]);
        });
    }
    /**
     * Return median price in SBD for 1 STEEM as reported by the witnesses.
     */
    getCurrentMedianHistoryPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            return asset_1.Price.from(yield this.call('get_current_median_history_price'));
        });
    }
    /**
     * Get list of delegations made by account.
     * @param account Account delegating
     * @param from Delegatee start offset, used for paging.
     * @param limit Number of results, max 1000.
     */
    getVestingDelegations(account, from = '', limit = 1000) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.call('get_vesting_delegations', [account, from, limit]);
        });
    }
    /**
     * Return server config. See:
     * https://github.com/steemit/steem/blob/master/libraries/protocol/include/steemit/protocol/config.hpp
     */
    getConfig() {
        return this.call('get_config');
    }
    /**
     * Return header for *blockNum*.
     */
    getBlockHeader(blockNum) {
        return this.call('get_block_header', [blockNum]);
    }
    /**
     * Return block *blockNum*.
     */
    getBlock(blockNum) {
        return this.call('get_block', [blockNum]);
    }
    /**
     * Return all applied operations in *blockNum*.
     */
    getOperations(blockNum, onlyVirtual = false) {
        return this.call('get_ops_in_block', [blockNum, onlyVirtual]);
    }
    /**
     * Return array of discussions (a.k.a. posts).
     * @param by The type of sorting for the discussions, valid options are:
     *           `active` `blog` `cashout` `children` `comments` `created`
     *           `feed` `hot` `promoted` `trending` `votes`. Note that
     *           for `blog` and `feed` the tag is set to a username.
     */
    getDiscussions(by, query) {
        return this.call(`get_discussions_by_${by}`, [query]);
    }
    /**
     * Return array of account info objects for the usernames passed.
     * @param usernames The accounts to fetch.
     */
    getAccounts(usernames) {
        return this.call('get_accounts', [usernames]);
    }
    /**
     * Convenience to fetch a block and return a specific transaction.
     */
    getTransaction(txc) {
        return __awaiter(this, void 0, void 0, function* () {
            const block = yield this.client.database.getBlock(txc.block_num);
            const idx = block.transaction_ids.indexOf(txc.id);
            if (idx === -1) {
                throw new Error(`Unable to find transaction ${txc.id} in block ${txc.block_num}`);
            }
            return block.transactions[idx];
        });
    }
    /**
     * Verify signed transaction.
     */
    verifyAuthority(stx) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.call('verify_authority', [stx]);
        });
    }
}
exports.DatabaseAPI = DatabaseAPI;
