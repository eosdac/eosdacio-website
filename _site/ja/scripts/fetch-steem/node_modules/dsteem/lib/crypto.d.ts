/**
 * @file Steem crypto helpers.
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
import { SignedTransaction, Transaction } from './steem/transaction';
/**
 * Network id used in WIF-encoding.
 */
export declare const NETWORK_ID: Buffer;
/**
 * Return ripemd160 hash of input.
 */
declare function ripemd160(input: Buffer | string): Buffer;
/**
 * Return sha256 hash of input.
 */
declare function sha256(input: Buffer | string): Buffer;
/**
 * Return 2-round sha256 hash of input.
 */
declare function doubleSha256(input: Buffer | string): Buffer;
/**
 * Encode public key with bs58+ripemd160-checksum.
 */
declare function encodePublic(key: Buffer, prefix: string): string;
/**
 * Encode bs58+doubleSha256-checksum private key.
 */
declare function encodePrivate(key: Buffer): string;
/**
 * Decode bs58+doubleSha256-checksum encoded private key.
 */
declare function decodePrivate(encodedKey: string): Buffer;
/**
 * Return true if signature is canonical, otherwise false.
 */
declare function isCanonicalSignature(signature: Buffer): boolean;
/**
 * ECDSA (secp256k1) public key.
 */
export declare class PublicKey {
    readonly key: Buffer;
    readonly prefix: string;
    /**
     * Create a new instance from a WIF-encoded key.
     */
    static fromString(wif: string): PublicKey;
    /**
     * Create a new instance.
     */
    static from(value: string | PublicKey): PublicKey;
    constructor(key: Buffer, prefix?: string);
    /**
     * Verify a 32-byte signature.
     * @param message 32-byte message to verify.
     * @param signature Signature to verify.
     */
    verify(message: Buffer, signature: Signature): boolean;
    /**
     * Return a WIF-encoded representation of the key.
     */
    toString(): string;
    /**
     * Return JSON representation of this key, same as toString().
     */
    toJSON(): string;
    /**
     * Used by `utils.inspect` and `console.log` in node.js.
     */
    inspect(): string;
}
export declare type KeyRole = 'owner' | 'active' | 'posting' | 'memo';
/**
 * ECDSA (secp256k1) private key.
 */
export declare class PrivateKey {
    private key;
    /**
     * Convenience to create a new instance from WIF string or buffer.
     */
    static from(value: string | Buffer): PrivateKey;
    /**
     * Create a new instance from a WIF-encoded key.
     */
    static fromString(wif: string): PrivateKey;
    /**
     * Create a new instance from a seed.
     */
    static fromSeed(seed: string): PrivateKey;
    /**
     * Create key from username and password.
     */
    static fromLogin(username: string, password: string, role?: KeyRole): PrivateKey;
    constructor(key: Buffer);
    /**
     * Sign message.
     * @param message 32-byte message.
     */
    sign(message: Buffer): Signature;
    /**
     * Derive the public key for this private key.
     */
    createPublic(prefix?: string): PublicKey;
    /**
     * Return a WIF-encoded representation of the key.
     */
    toString(): string;
    /**
     * Used by `utils.inspect` and `console.log` in node.js. Does not show the full key
     * to get the full encoded key you need to explicitly call {@link toString}.
     */
    inspect(): string;
}
/**
 * ECDSA (secp256k1) signature.
 */
export declare class Signature {
    data: Buffer;
    recovery: number;
    static fromBuffer(buffer: Buffer): Signature;
    static fromString(string: string): Signature;
    constructor(data: Buffer, recovery: number);
    /**
     * Recover public key from signature by providing original signed message.
     * @param message 32-byte message that was used to create the signature.
     */
    recover(message: Buffer, prefix?: string): PublicKey;
    toBuffer(): Buffer;
    toString(): string;
}
/**
 * Return the sha256 transaction digest.
 * @param chainId The chain id to use when creating the hash.
 */
declare function transactionDigest(transaction: Transaction | SignedTransaction, chainId?: Buffer): Buffer;
/**
 * Return copy of transaction with signature appended to signatures array.
 * @param transaction Transaction to sign.
 * @param keys Key(s) to sign transaction with.
 * @param options Chain id and address prefix, compatible with {@link Client}.
 */
declare function signTransaction(transaction: Transaction, keys: PrivateKey | PrivateKey[], chainId?: Buffer): SignedTransaction;
/** Misc crypto utility functions. */
export declare const cryptoUtils: {
    decodePrivate: typeof decodePrivate;
    doubleSha256: typeof doubleSha256;
    encodePrivate: typeof encodePrivate;
    encodePublic: typeof encodePublic;
    isCanonicalSignature: typeof isCanonicalSignature;
    ripemd160: typeof ripemd160;
    sha256: typeof sha256;
    signTransaction: typeof signTransaction;
    transactionDigest: typeof transactionDigest;
};
export {};
