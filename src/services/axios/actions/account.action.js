import { api } from '..'
import accountEndpoint from '../endpoints/accounts.endpoint'
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
                const res = await api.get(accountEndpoint['get-accounts'])
                const data = res.data.data

                resolve(data.reverse())
            } catch (error) {
                reject(error)
            }
        })
    },
    postNewAccount({ email, teacherName, password }) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.post(accountEndpoint['post-account'], {
                    email,
                    teacherName,
                    password,
                })

                const data = res.data
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    putAccountById(id, { email, teacherName }) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.patch(`${accountEndpoint['put-account-by-id']}/${id}`, {
                    email,
                    teacherName,
                })
                const data = res.data
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    deleteAccountById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.delete(`${accountEndpoint['delete-account-by-id']}/${id}`)
                const data = res.data
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
}

export default accountAction
