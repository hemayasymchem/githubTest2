  import { login } from '@/api/login' //获取登录的接口
  import { getToken, setToken, removeToken} from '@/utils/auth'

  export default {
    namespaced: true,
    state: {
      token: getToken(),
      name: '',
      roles: [],
      justTest: 'this is just for test',
    },

    mutations: {
      SET_TOKEN: (state, token) => {
        state.token = token
      },
      SET_NAME: (state, name) => {
        console.log( 'come herer')
        state.name = name
      }
    },

    actions: {
      //登录
      Login({commit}, userInfo) {
        console.log(userInfo,'come actions')
        // return new Promise((resolve, reject) => {
        //   login(userInfo).then(response => {
        //     const data = response.data
        //     const { flag, msg} = data
        //     if (flag) {
        //       setToken(msg)
        //       commit('SET_TOKEN',msg)
        //     }
        //     resolve(data)
        //   }).catch(error => {
        //     reject(error)
        //   })
        // })
      },

    }
  }
