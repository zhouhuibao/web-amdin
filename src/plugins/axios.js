import axios from 'axios'
import {
  // dataType,
  isEmpty
} from '@/utils/utils'
 
// 创建axios实例
const service = axios.create({
 baseURL: '', // api 的 base_url
 // baseURL: process.env.BASE_API, // api 的 base_url
//  timeout: Config.timeout // 请求超时时间
  method:'post' // 默认是post
})
 
// request拦截器
service.interceptors.request.use(config => {

  const defaultData={ // 默认参数
    platform:'MALLADMIN',
    terminal:'PC'
  }
  const parmasData=config.data;

  if(isEmpty(parmasData)){
    config.data={
      ...parmasData,
      ...defaultData
    }
  }

  
  // if (getToken()) {
  //  config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  // config.headers['Content-Type'] = 'application/json'
  return config
 },
 error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
 }
)
 
// response 拦截器
service.interceptors.response.use(response => {
  const code = response.status
  console.log(response)
  if (code < 200 || code > 300) {
  //  Notification.error({
  //   title: response.message
  //  })
   return Promise.reject('error')
  } else {
   return response.data
  }
 },
 error => {
  return Promise.reject(error)
 }
)
export default service