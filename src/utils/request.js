  import axios from 'axios'
  import store from '../store/index'
  import { getToken } from '@/utils/auth'

  //创建axios 实例
  const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000,
    withCredentials: true
  })

  service.interceptors.request.use( config => {
    //if (store.getters.token) {
    if (getToken()) {
      config.headers['ERPSECOOID'] = getToken()
    }
    return config
  }, error => {
    Promise.reject(error)
  })

  service.interceptors.response.use( response => {
    const res = response.data
    const { flag, msg, code} = res
    if (code == '5001') {

    } else {

    }
    return response
  }, error => {
    return Promise.reject(error)
  })

  export default service
