import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router'

// 这边由于后端没有区分测试和正式，姑且都写成一个接口。
axios.defaults.baseURL = ''
axios.defaults.timeout =5000
// 携带 cookie，对目前的项目没有什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = true
// 请求头，headers 信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
    config => {
        // 请求头添加参数
        config.headers['Authorization'] = localStorage.getItem('token')
        return config
    },
error=>{
    return Promise.reject(error)
  }
)
// 响应拦截器，内部根据返回值，重新组装，统一管理。
axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
      ElMessage.error('服务端异常！')
      return Promise.reject(res)
    }
    if (res.data.code !== 200) {
      if (res.data.message) ElMessage.error(res.data.message)
      if (res.data.code === 419) {
        router.push({ path: '/login' })
      }
      return Promise.reject(res.data)
    }
    return Promise.resolve(res.data)
  },error=>{
    return Promise.reject(error)
  })
  
  export default axios