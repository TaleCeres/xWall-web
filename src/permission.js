import router from './router'
import { getToken } from '@/utils/cookie' // get token from cookie

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    next()
  } else if (to.path === '/login') {
    next()
  } else {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath // 将跳转的路由path作为参数，登录成功后跳转到该路由
      }
    })
  }
})

// router.afterEach(() => {
// finish progress bar
// NProgress.done()
// })
