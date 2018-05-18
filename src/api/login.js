  import request from '@/utils/request'
  //import qs from 'qs'


  /**
   *
   * @param {string} username
   * @param {string} password
   */
  export function login(params) {
    return request ({
      url: 'login.do',
      method: 'post',
      data: params
    })
  }
