/**
 * @file Steem account type definitions.
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
import { PublicKey } from './../crypto';
import { Asset } from './asset';
export interface AuthorityType {
    weight_threshold: number;
    account_auths: Array<[string, number]>;
    key_auths: Array<[string | PublicKey, number]>;
}
export declare class Authority implements AuthorityType {
    /**
     * Convenience to create a new instance from PublicKey or authority object.
     */
    static from(value: string | PublicKey | AuthorityType): Authority;
    weight_threshold: number;
    account_auths: Array<[string, number]>;
    key_auths: Array<[string | PublicKey, number]>;
    constructor({ weight_threshold, account_auths, key_auths }: AuthorityType);
}
export interface Account {
    id: number;
    name: string;
    owner: Authority;
    active: Authority;
    posting: Authority;
    memo_key: string;
    json_metadata: string;
    proxy: string;
    last_owner_update: string;
    last_account_update: string;
    created: string;
    mined: boolean;
    owner_challenged: boolean;
    active_challenged: boolean;
    last_owner_proved: string;
    last_active_proved: string;
    recovery_account: string;
    reset_account: string;
    last_account_recovery: string;
    comment_count: number;
    lifetime_vote_count: number;
    post_count: number;
    can_vote: boolean;
    voting_power: number;
    last_vote_time: string;
    voting_manabar: {
        current_mana: string | number;
        last_update_time: number;
    };
    balance: string | Asset;
    savings_balance: string | Asset;
    sbd_balance: string | Asset;
    sbd_seconds: string;
    sbd_seconds_last_update: string;
    sbd_last_interest_payment: string;
    savings_sbd_balance: string | Asset;
    savings_sbd_seconds: string;
    savings_sbd_seconds_last_update: string;
    savings_sbd_last_interest_payment: string;
    savings_withdraw_requests: number;
    reward_sbd_balance: string | Asset;
    reward_steem_balance: string | Asset;
    reward_vesting_balance: string | Asset;
    reward_vesting_steem: string | Asset;
    curation_rewards: number | string;
    posting_rewards: number | string;
    vesting_shares: string | Asset;
    delegated_vesting_shares: string | Asset;
    received_vesting_shares: string | Asset;
    vesting_withdraw_rate: string | Asset;
    next_vesting_withdrawal: string;
    withdrawn: number | string;
    to_withdraw: number | string;
    withdraw_routes: number;
    proxied_vsf_votes: number[];
    witnesses_voted_for: number;
    average_bandwidth: number | string;
    lifetime_bandwidth: number | string;
    last_bandwidth_update: string;
    average_market_bandwidth: number | string;
    lifetime_market_bandwidth: number | string;
    last_market_bandwidth_update: string;
    last_post: string;
    last_root_post: string;
}
export interface ExtendedAccount extends Account {
    /**
     * Convert vesting_shares to vesting steem.
     */
    vesting_balance: string | Asset;
    reputation: string | number;
    /**
     * Transfer to/from vesting.
     */
    transfer_history: any[];
    /**
     * Limit order / cancel / fill.
     */
    market_history: any[];
    post_history: any[];
    vote_history: any[];
    other_history: any[];
    witness_votes: string[];
    tags_usage: string[];
    guest_bloggers: string[];
    open_orders?: any[];
    comments?: any[];
    blog?: any[];
    feed?: any[];
    recent_replies?: any[];
    recommended?: any[];
}
