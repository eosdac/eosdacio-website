import { Client } from './../client';
import { Account } from './../steem/account';
import { Manabar, RCAccount, RCParams, RCPool } from './../steem/rc';
export declare class RCAPI {
    readonly client: Client;
    constructor(client: Client);
    /**
     * Convenience for calling `rc_api`.
     */
    call(method: string, params?: any): Promise<any>;
    /**
     * Returns RC data for array of usernames
     */
    findRCAccounts(usernames: string[]): Promise<RCAccount[]>;
    /**
     * Returns the global resource params
     */
    getResourceParams(): Promise<RCParams>;
    /**
     * Returns the global resource pool
     */
    getResourcePool(): Promise<RCPool>;
    /**
     * Makes a API call and returns the RC mana-data for a specified username
     */
    getRCMana(username: string): Promise<Manabar>;
    /**
     * Makes a API call and returns the VP mana-data for a specified username
     */
    getVPMana(username: string): Promise<Manabar>;
    /**
     * Calculates the RC mana-data based on an RCAccount - findRCAccounts()
     */
    calculateRCMana(rc_account: RCAccount): Manabar;
    /**
     * Calculates the RC mana-data based on an Account - getAccounts()
     */
    calculateVPMana(account: Account): Manabar;
    /**
     * Internal convenience method to reduce redundant code
     */
    private _calculateManabar;
}
