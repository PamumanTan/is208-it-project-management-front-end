import { api } from '..'

const classAction = {
    getClassStudent(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.get(`/classes/${id}/students`)
                const data = res.data.data

                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    getAllClass() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.get(`/classes/`)
                const data = res.data.data

                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
}
export default classAction
