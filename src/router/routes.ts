// 使用 TypeScript 时需要导入路由项目的类型声明
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// 使用路由项目类型声明一个路由数组
const ROUTES: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    // 同步组件
    component: HomeView 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 异步组件，路由懒加载
    component: () => import('../views/AboutView.vue')
  }
]

// 将路由数组导出给其他模块使用
export default ROUTES