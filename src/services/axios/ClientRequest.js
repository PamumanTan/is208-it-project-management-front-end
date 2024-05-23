import axios from 'axios'

export default class ClientRequest {
    /**
     * @private
     * @type {ClientRequest}
     */
    static clientInstance = null

    /**
     * @private
     * @type {import('axios').AxiosInstance}
     */
    static api = null

    static getAPI() {
        if (!ClientRequest.api) {
            ClientRequest.api = new axios.create({
                baseURL: import.meta.env.VITE_BASE_URL,
                timeout: 5000,
            })

            ClientRequest.api.interceptors.request.use((config) => {
                const token = ClientRequest.getClientInstance().getAccessToken()
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            })

            ClientRequest.api.interceptors.response.use(
                (value) => value,
                (error) => {
                    if (error.response?.status === 401) {
                    }

                    return Promise.reject(error)
                },
            )
        }

        return ClientRequest.api
    }

    static getClientInstance() {
        if (!ClientRequest.clientInstance) {
            ClientRequest.clientInstance = new ClientRequest()
        }

        return ClientRequest.clientInstance
    }

    /**
     * @type {(() => void)[]}
     */
    listeners = []

    getAccessToken() {
        return localStorage.getItem('access-token')
    }

    /**
     * @param {string} accessToken
     */
    setAccessToken(accessToken) {
        localStorage.setItem('access-token', accessToken)
    }

    removeAccessToken() {
        localStorage.removeItem('access-token')
    }

    /**
     * @param {() => void} callback
     */
    on(callback) {
        this.listeners.push(callback)
    }

    /**
     * @param {() => void} callback
     */
    off(callback) {
        this.listeners = this.listeners.filter((value) => value !== callback)
    }
}
