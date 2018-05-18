  import request from '@/utils/request'
  import qs from 'qs'

  //砍价活动提交接口
  export function bargainSubmit (params) {
    console.log("come barginSubmit",params)
    return request ({
      url: '/bargain/activity/add',
      method: 'GET',
      params: params,
    })
  }

  //砍价活动搜索接口
  export function bargainSearch (params) {
    console.log("come bargainSearch")
    return request ({
      url: '/bargain/activity/query',
      method: 'POST',
      data: qs.stringify(params),
    })
  }
