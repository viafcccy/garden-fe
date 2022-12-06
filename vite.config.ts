import { fileURLToPath, URL } from 'node:url'

import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 源码根目录
      '@img': fileURLToPath(new URL('src/assets/img', import.meta.url)), // 图片
      '@less': fileURLToPath(new URL('src/assets/less', import.meta.url)), // 预处理器
      '@libs': fileURLToPath(new URL('src/libs', import.meta.url)), // 本地库
      '@plugins': fileURLToPath(new URL('src/plugins', import.meta.url)), // 本地插件
      '@cp': fileURLToPath(new URL('src/components', import.meta.url)), // 公共组件
      '@views': fileURLToPath(new URL('src/views', import.meta.url)), // 路由组件
    }
  },
  build: {
    outDir: './docker/dist'
  }
})
