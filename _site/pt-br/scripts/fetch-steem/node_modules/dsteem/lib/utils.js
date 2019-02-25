"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const fetch = global['fetch']; // tslint:disable-line:no-string-literal
/**
 * Return a promise that will resove when a specific event is emitted.
 */
function waitForEvent(emitter, eventName) {
    return new Promise((resolve, reject) => {
        emitter.once(eventName, resolve);
    });
}
exports.waitForEvent = waitForEvent;
/**
 * Sleep for N milliseconds.
 */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
exports.sleep = sleep;
/**
 * Return a stream that emits iterator values.
 */
function iteratorStream(iterator) {
    const stream = new stream_1.PassThrough({ objectMode: true });
    const iterate = () => __awaiter(this, void 0, void 0, function* () {
        var e_1, _a;
        try {
            for (var iterator_1 = __asyncValues(iterator), iterator_1_1; iterator_1_1 = yield iterator_1.next(), !iterator_1_1.done;) {
                const item = iterator_1_1.value;
                if (!stream.write(item)) {
                    yield waitForEvent(stream, 'drain');
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1.return)) yield _a.call(iterator_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    iterate().then(() => {
        stream.end();
    }).catch((error) => {
        stream.emit('error', error);
        stream.end();
    });
    return stream;
}
exports.iteratorStream = iteratorStream;
/**
 * Return a deep copy of a JSON-serializable object.
 */
function copy(object) {
    return JSON.parse(JSON.stringify(object));
}
exports.copy = copy;
/**
 * Fetch API wrapper that retries until timeout is reached.
 */
function retryingFetch(url, opts, timeout, backoff, fetchTimeout) {
    return __awaiter(this, void 0, void 0, function* () {
        const start = Date.now();
        let tries = 0;
        do {
            try {
                if (fetchTimeout) {
                    opts.timeout = fetchTimeout(tries);
                }
                const response = yield fetch(url, opts);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                return yield response.json();
            }
            catch (error) {
                if (timeout !== 0 && Date.now() - start > timeout) {
                    throw error;
                }
                yield sleep(backoff(tries++));
            }
        } while (true);
    });
}
exports.retryingFetch = retryingFetch;
// Hack to be able to generate a valid witness_set_properties op
// Can hopefully be removed when steemd's JSON representation is fixed
const ByteBuffer = require("bytebuffer");
const serializer_1 = require("./steem/serializer");
function serialize(serializer, data) {
    const buffer = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
    serializer(buffer, data);
    buffer.flip();
    return Buffer.from(buffer.toBuffer());
}
function buildWitnessUpdateOp(owner, props) {
    const data = {
        extensions: [], owner, props: []
    };
    for (const key of Object.keys(props)) {
        let type;
        switch (key) {
            case 'key':
            case 'new_signing_key':
                type = serializer_1.Types.PublicKey;
                break;
            case 'account_subsidy_budget':
            case 'account_subsidy_decay':
            case 'maximum_block_size':
                type = serializer_1.Types.UInt32;
                break;
            case 'sbd_interest_rate':
                type = serializer_1.Types.UInt16;
                break;
            case 'url':
                type = serializer_1.Types.String;
                break;
            case 'sbd_exchange_rate':
                type = serializer_1.Types.Price;
                break;
            case 'account_creation_fee':
                type = serializer_1.Types.Asset;
                break;
            default:
                throw new Error(`Unknown witness prop: ${key}`);
        }
        data.props.push([key, serialize(type, props[key])]);
    }
    data.props.sort((a, b) => a[0].localeCompare(b[0]));
    return ['witness_set_properties', data];
}
exports.buildWitnessUpdateOp = buildWitnessUpdateOp;
