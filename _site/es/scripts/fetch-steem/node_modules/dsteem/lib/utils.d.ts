/**
 * @file Misc utility functions.
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
/// <reference types="node" />
import { EventEmitter } from 'events';
/**
 * Return a promise that will resove when a specific event is emitted.
 */
export declare function waitForEvent<T>(emitter: EventEmitter, eventName: string | symbol): Promise<T>;
/**
 * Sleep for N milliseconds.
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * Return a stream that emits iterator values.
 */
export declare function iteratorStream<T>(iterator: AsyncIterableIterator<T>): NodeJS.ReadableStream;
/**
 * Return a deep copy of a JSON-serializable object.
 */
export declare function copy<T>(object: T): T;
/**
 * Fetch API wrapper that retries until timeout is reached.
 */
export declare function retryingFetch(url: string, opts: any, timeout: number, backoff: (tries: number) => number, fetchTimeout?: (tries: number) => number): Promise<any>;
import { PublicKey } from './crypto';
import { Asset, PriceType } from './steem/asset';
import { WitnessSetPropertiesOperation } from './steem/operation';
export interface WitnessProps {
    account_creation_fee?: string | Asset;
    account_subsidy_budget?: number;
    account_subsidy_decay?: number;
    key: PublicKey | string;
    maximum_block_size?: number;
    new_signing_key?: PublicKey | string | null;
    sbd_exchange_rate?: PriceType;
    sbd_interest_rate?: number;
    url?: string;
}
export declare function buildWitnessUpdateOp(owner: string, props: WitnessProps): WitnessSetPropertiesOperation;
