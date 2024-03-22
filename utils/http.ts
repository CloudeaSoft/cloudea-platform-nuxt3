import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'
import { resetRouter } from '@/router'

const baseURL = import.meta.env.VITE_SERVER

// 基础axios对象
const http = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
http.interceptors.request.use(
  // 发送请求前
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `bearer ${userStore.token}`
    }

    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    //设置请求头

    return config
  },
  // 请求错误时
  (error) => {
    return Promise.reject(error)
  }
)
// response 拦截器
//可以在接口响应后统一处理结果
http.interceptors.response.use(
  // 成功回调 - 2xx范围内的状态码
  (response) => {
    //    response.data即为后端返回的Result
    let res = response.data
    //    兼容服务器返回的字符串数据
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    return res
  },
  // 失败回调 - 2xx范围外的状态码
  (error) => {
    let message = ''
    const status = error.response.status
    const userStore = useUserStore()
    switch (status) {
      case 400:
        message = '网络错误'
        break
      case 401:
        message = '401 Unauthorized'
        // 清除token
        userStore.removeToken();
        userStore.logout();
        resetRouter()
        break
      case 403:
        message = '403 Permission Denied'
        break
      case 404:
        message = '404 Not Found'
        break
      case 500:
        message = '500 Internal Server Error'
        break
      default:
        message = '请求失败'
        break
    }
    //提示错误信息
    ElMessage({
      type: 'error',
      message
    })
    console.log('err:' + error)
    return Promise.reject(error)
  }
)

// export
export default http
