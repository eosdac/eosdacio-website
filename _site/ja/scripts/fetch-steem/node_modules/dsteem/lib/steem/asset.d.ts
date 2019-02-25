/**
 * @file Steem asset type definitions and helpers.
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
export interface SMTAsset {
    amount: string | number;
    precision: number;
    nai: string;
}
/**
 * Asset symbol string.
 */
export declare type AssetSymbol = 'STEEM' | 'VESTS' | 'SBD' | 'TESTS' | 'TBD';
/**
 * Class representing a steem asset, e.g. `1.000 STEEM` or `12.112233 VESTS`.
 */
export declare class Asset {
    readonly amount: number;
    readonly symbol: AssetSymbol;
    /**
     * Create a new Asset instance from a string, e.g. `42.000 STEEM`.
     */
    static fromString(string: string, expectedSymbol?: AssetSymbol): Asset;
    /**
     * Convenience to create new Asset.
     * @param symbol Symbol to use when created from number. Will also be used to validate
     *               the asset, throws if the passed value has a different symbol than this.
     */
    static from(value: string | Asset | number, symbol?: AssetSymbol): Asset;
    /**
     * Return the smaller of the two assets.
     */
    static min(a: Asset, b: Asset): Asset;
    /**
     * Return the larger of the two assets.
     */
    static max(a: Asset, b: Asset): Asset;
    constructor(amount: number, symbol: AssetSymbol);
    /**
     * Return asset precision.
     */
    getPrecision(): number;
    /**
     * Return a string representation of this asset, e.g. `42.000 STEEM`.
     */
    toString(): string;
    /**
     * Return a new Asset instance with amount added.
     */
    add(amount: Asset | string | number): Asset;
    /**
     * Return a new Asset instance with amount subtracted.
     */
    subtract(amount: Asset | string | number): Asset;
    /**
     * Return a new Asset with the amount multiplied by factor.
     */
    multiply(factor: Asset | string | number): Asset;
    /**
     * Return a new Asset with the amount divided.
     */
    divide(divisor: Asset | string | number): Asset;
    /**
     * For JSON serialization, same as toString().
     */
    toJSON(): string;
}
export declare type PriceType = Price | {
    base: Asset | string;
    quote: Asset | string;
};
/**
 * Represents quotation of the relative value of asset against another asset.
 * Similar to 'currency pair' used to determine value of currencies.
 *
 *  For example:
 *  1 EUR / 1.25 USD where:
 *  1 EUR is an asset specified as a base
 *  1.25 USD us an asset specified as a qute
 *
 *  can determine value of EUR against USD.
 */
export declare class Price {
    readonly base: Asset;
    readonly quote: Asset;
    /**
     * Convenience to create new Price.
     */
    static from(value: PriceType): Price;
    /**
     * @param base  - represents a value of the price object to be expressed relatively to quote
     *                asset. Cannot have amount == 0 if you want to build valid price.
     * @param quote - represents an relative asset. Cannot have amount == 0, otherwise
     *                asertion fail.
     *
     * Both base and quote shall have different symbol defined.
     */
    constructor(base: Asset, quote: Asset);
    /**
     * Return a string representation of this price pair.
     */
    toString(): string;
    /**
     * Return a new Asset with the price converted between the symbols in the pair.
     * Throws if passed asset symbol is not base or quote.
     */
    convert(asset: Asset): Asset;
}
