"use strict";
/**
 * @file Steem blockchain helpers.
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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
var BlockchainMode;
(function (BlockchainMode) {
    /**
     * Only get irreversible blocks.
     */
    BlockchainMode[BlockchainMode["Irreversible"] = 0] = "Irreversible";
    /**
     * Get all blocks.
     */
    BlockchainMode[BlockchainMode["Latest"] = 1] = "Latest";
})(BlockchainMode = exports.BlockchainMode || (exports.BlockchainMode = {}));
class Blockchain {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get latest block number.
     */
    getCurrentBlockNum(mode = BlockchainMode.Irreversible) {
        return __awaiter(this, void 0, void 0, function* () {
            const props = yield this.client.database.getDynamicGlobalProperties();
            switch (mode) {
                case BlockchainMode.Irreversible:
                    return props.last_irreversible_block_num;
                case BlockchainMode.Latest:
                    return props.head_block_number;
            }
        });
    }
    /**
     * Get latest block header.
     */
    getCurrentBlockHeader(mode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.database.getBlockHeader(yield this.getCurrentBlockNum(mode));
        });
    }
    /**
     * Get latest block.
     */
    getCurrentBlock(mode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.database.getBlock(yield this.getCurrentBlockNum(mode));
        });
    }
    /**
     * Return a asynchronous block number iterator.
     * @param options Feed options, can also be a block number to start from.
     */
    getBlockNumbers(options) {
        return __asyncGenerator(this, arguments, function* getBlockNumbers_1() {
            // const config = await this.client.database.getConfig()
            // const interval = config['STEEMIT_BLOCK_INTERVAL'] as number
            const interval = 3;
            if (!options) {
                options = {};
            }
            else if (typeof options === 'number') {
                options = { from: options };
            }
            let current = yield __await(this.getCurrentBlockNum(options.mode));
            if (options.from !== undefined && options.from > current) {
                throw new Error(`From can't be larger than current block num (${current})`);
            }
            let seen = options.from !== undefined ? options.from : current;
            while (true) {
                while (current > seen) {
                    yield yield __await(seen++);
                    if (options.to !== undefined && seen > options.to) {
                        return yield __await(void 0);
                    }
                }
                yield __await(utils_1.sleep(interval * 1000));
                current = yield __await(this.getCurrentBlockNum(options.mode));
            }
        });
    }
    /**
     * Return a stream of block numbers, accepts same parameters as {@link getBlockNumbers}.
     */
    getBlockNumberStream(options) {
        return utils_1.iteratorStream(this.getBlockNumbers(options));
    }
    /**
     * Return a asynchronous block iterator, accepts same parameters as {@link getBlockNumbers}.
     */
    getBlocks(options) {
        return __asyncGenerator(this, arguments, function* getBlocks_1() {
            var e_1, _a;
            try {
                for (var _b = __asyncValues(this.getBlockNumbers(options)), _c; _c = yield __await(_b.next()), !_c.done;) {
                    const num = _c.value;
                    yield yield __await(yield __await(this.client.database.getBlock(num)));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield __await(_a.call(_b));
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    /**
     * Return a stream of blocks, accepts same parameters as {@link getBlockNumbers}.
     */
    getBlockStream(options) {
        return utils_1.iteratorStream(this.getBlocks(options));
    }
    /**
     * Return a asynchronous operation iterator, accepts same parameters as {@link getBlockNumbers}.
     */
    getOperations(options) {
        return __asyncGenerator(this, arguments, function* getOperations_1() {
            var e_2, _a;
            try {
                for (var _b = __asyncValues(this.getBlockNumbers(options)), _c; _c = yield __await(_b.next()), !_c.done;) {
                    const num = _c.value;
                    const operations = yield __await(this.client.database.getOperations(num));
                    for (const operation of operations) {
                        yield yield __await(operation);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield __await(_a.call(_b));
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
    }
    /**
     * Return a stream of operations, accepts same parameters as {@link getBlockNumbers}.
     */
    getOperationsStream(options) {
        return utils_1.iteratorStream(this.getOperations(options));
    }
}
exports.Blockchain = Blockchain;
