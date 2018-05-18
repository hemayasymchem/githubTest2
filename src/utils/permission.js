  import router from '@/router'
  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'
  import { getToken, setToken} from "./auth"

  const whiteList = ['/login'] // 不重定向白名单
  router.beforeEach((to, from, next) => {
    NProgress.start()
    if (getToken()) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) { //跳转的路由在名单里
        next()
      } else {
        next('/login')
        NProgress.done()
      }
    }
  })

  router.afterEach(() => {
    NProgress.done() // 结束Progress
  })



