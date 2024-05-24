import { api, clientInstance } from '..'
import authEndpoint from '../endpoints/auth.endpoint'

const authAction = {
    loginAdmin(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.post(authEndpoint['admin-login'], {
                    email,
                    password,
                })
                const data = res.data.data

                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
}

export default authAction
