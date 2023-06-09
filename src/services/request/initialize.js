import { BASE_URL, TIMEOUT } from '@/config/service.js'
import axios from 'axios'

// 简洁封装的目的: 有效的降低耦合度, 提高可维护性
class Request {
    constructor (baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        this.setInterceptor()
    }

    // 设置拦截器
    setInterceptor () {
        // 请求拦截器
        this.instance.interceptors.request.use(
            async config => {
                const handleConfig = { ...config }
                if (localStorage.get('token')) {
                    // 设置token
                    handleConfig.headers.Authorization = localStorage.get('token') || ''
                }
                return handleConfig
            }
        )
        // 响应拦截器
        this.instance.interceptors.response.use(
            response => {
                const { status } = response
                if (status === 200 || status < 300 || status === 304) {
                    const backend = response.data
                    const { code } = backend
                    // 请求成功
                    if (code === 200) {
                        return Promise.resolve(backend)
                    }
                }
            },
            axiosError => {
                return Promise.reject(axiosError)
            }
        )
    }

    // 封装request实例
    request (config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }

    // 封装get实例
    get (config) {
        return this.request({
            ...config,
            method: 'GET'
        })
    }

    // 封装post实例
    post (config) {
        return this.request({
            ...config,
            method: 'POST'
        })
    }
}

export default new Request(BASE_URL, TIMEOUT)
