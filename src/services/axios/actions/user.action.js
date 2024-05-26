import { api } from '..'
import userEndpoint from '../endpoints/users.endpoint'

const userAction = {
    getCurrentUser() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.get(userEndpoint['current-user'])
                const data = res.data.data

                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
}

export default userAction
