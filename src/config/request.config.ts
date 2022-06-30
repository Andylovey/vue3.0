import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const axiosConfig: AxiosRequestConfig = {
    headers: {
        // ...['Api-Version']: 'v1.0.0',
    },
}
const AxiosInstance = Axios.create({
    ...axiosConfig,
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})


AxiosInstance.interceptors.request.use(
    function (config) {
        //   if (store.token) {
        config.headers = {
            Authorization: `Bearer token`,
            // }
        }
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)


AxiosInstance.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('error res', error, error.response)
        const response = error.response as AxiosResponse
        //  统一处理 http code 情况，对于 http code 为 200，response 中的异常 code ，留到业务层处理
        console.warn(error.message)
        // switch(response.status) {
        //     case 400:
        //         return
        // }
        return Promise.reject(error)
    }
)


export const get = (url: string, params?: any, config?: AxiosRequestConfig) =>
    AxiosInstance.get(url, { ...config, params })
export const post = (url: string, data?: any, config?: AxiosRequestConfig) =>
    AxiosInstance.post(url, data, { ...config })
export const _delete = (url: string, data?: any, config?: AxiosRequestConfig) =>
    AxiosInstance.delete(url, { ...config, data })
export const put = (url: string, data?: any, config?: AxiosRequestConfig) =>
    AxiosInstance.put(url, data, { ...config })
export const update = (url: string, data?: any, config?: AxiosRequestConfig) =>
    AxiosInstance.put(url, { ...config, data })
export const patch = (url: string, data?: any, config?: AxiosRequestConfig) =>
    AxiosInstance.patch(url, data, { ...config })