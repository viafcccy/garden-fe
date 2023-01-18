// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
import { createRouter, createWebHistory } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import ROUTES from './routes'
import cookie from '@/utils/cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES
})

router.beforeEach((to, from) => {
  // 移动端判断
  const mobile = isMobile()
  if (mobile && cookie.getCookie('isMobileFirstVisit') !== 'false') {
    ElMessageBox.alert('为保证最佳体验，推荐使用 PC 端访问', '提示', {
      autofocus: false,
      confirmButtonText: '确认',
    })
    cookie.setCookie('isMobileFirstVisit', 'false', 1)
  }
})

const isMobile = () => {
  const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag
}

export default router
