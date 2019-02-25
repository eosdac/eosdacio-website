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
import { Client } from './../client';
import { ExtendedAccount } from './../steem/account';
import { Price } from './../steem/asset';
import { BlockHeader, SignedBlock } from './../steem/block';
import { Discussion } from './../steem/comment';
import { DynamicGlobalProperties } from './../steem/misc';
import { ChainProperties, VestingDelegation } from './../steem/misc';
import { AppliedOperation } from './../steem/operation';
import { SignedTransaction, TransactionConfirmation } from './../steem/transaction';
/**
 * Possible categories for `get_discussions_by_*`.
 */
export declare type DiscussionQueryCategory = 'active' | 'blog' | 'cashout' | 'children' | 'comments' | 'feed' | 'hot' | 'promoted' | 'trending' | 'votes' | 'created';
export interface DisqussionQuery {
    /**
     * Name of author or tag to fetch.
     */
    tag: string;
    /**
     * Number of results, max 100.
     */
    limit: number;
    filter_tags?: string[];
    select_authors?: string[];
    select_tags?: string[];
    /**
     * Number of bytes of post body to fetch, default 0 (all)
     */
    truncate_body?: number;
    /**
     * Name of author to start from, used for paging.
     * Should be used in conjunction with `start_permlink`.
     */
    start_author?: string;
    /**
     * Permalink of post to start from, used for paging.
     * Should be used in conjunction with `start_author`.
     */
    start_permlink?: string;
    parent_author?: string;
    parent_permlink?: string;
}
export declare class DatabaseAPI {
    readonly client: Client;
    constructor(client: Client);
    /**
     * Convenience for calling `database_api`.
     */
    call(method: string, params?: any[]): Promise<any>;
    /**
     * Return state of server.
     */
    getDynamicGlobalProperties(): Promise<DynamicGlobalProperties>;
    /**
     * Return median chain properties decided by witness.
     */
    getChainProperties(): Promise<ChainProperties>;
    /**
     * Return all of the state required for a particular url path.
     * @param path Path component of url conforming to condenser's scheme
     *             e.g. `@almost-digital` or `trending/travel`
     */
    getState(path: string): Promise<any>;
    /**
     * Return median price in SBD for 1 STEEM as reported by the witnesses.
     */
    getCurrentMedianHistoryPrice(): Promise<Price>;
    /**
     * Get list of delegations made by account.
     * @param account Account delegating
     * @param from Delegatee start offset, used for paging.
     * @param limit Number of results, max 1000.
     */
    getVestingDelegations(account: string, from?: string, limit?: number): Promise<VestingDelegation[]>;
    /**
     * Return server config. See:
     * https://github.com/steemit/steem/blob/master/libraries/protocol/include/steemit/protocol/config.hpp
     */
    getConfig(): Promise<{
        [name: string]: string | number | boolean;
    }>;
    /**
     * Return header for *blockNum*.
     */
    getBlockHeader(blockNum: number): Promise<BlockHeader>;
    /**
     * Return block *blockNum*.
     */
    getBlock(blockNum: number): Promise<SignedBlock>;
    /**
     * Return all applied operations in *blockNum*.
     */
    getOperations(blockNum: number, onlyVirtual?: boolean): Promise<AppliedOperation[]>;
    /**
     * Return array of discussions (a.k.a. posts).
     * @param by The type of sorting for the discussions, valid options are:
     *           `active` `blog` `cashout` `children` `comments` `created`
     *           `feed` `hot` `promoted` `trending` `votes`. Note that
     *           for `blog` and `feed` the tag is set to a username.
     */
    getDiscussions(by: DiscussionQueryCategory, query: DisqussionQuery): Promise<Discussion[]>;
    /**
     * Return array of account info objects for the usernames passed.
     * @param usernames The accounts to fetch.
     */
    getAccounts(usernames: string[]): Promise<ExtendedAccount[]>;
    /**
     * Convenience to fetch a block and return a specific transaction.
     */
    getTransaction(txc: TransactionConfirmation | {
        block_num: number;
        id: string;
    }): Promise<SignedTransaction>;
    /**
     * Verify signed transaction.
     */
    verifyAuthority(stx: SignedTransaction): Promise<boolean>;
}
