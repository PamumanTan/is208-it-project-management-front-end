import { api } from "..";
import accountEndpoint from "../endpoints/accounts.endpoint";
/**
 * @typedef Account
 * @type {import('~/types/account.d').Account} 
 */

const accountAction = {
    /**
     * 
     * @returns {Promise<Array<Account>>}
     */
    getAllAccounts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.get(accountEndpoint["get-accounts"])
                const data = res.data.data

                resolve(data)
            } catch (error) {
                reject(error);
            }
        })
    }
}

export default accountAction