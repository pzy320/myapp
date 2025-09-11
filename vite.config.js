 import { defineConfig } from 'vite'
 import vue from '@vitejs/plugin-vue'
 import Pages from 'vite-plugin-pages'
 // https://vite.dev/config/
 export default defineConfig({
  server:{
    host:'0.0.0.0',
    port:5000,
  },
  proxy:{
    '/api': {
      target: 'http://127.0.0.1:8080', // 后端服务器地址
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '/'), // 重写路径去掉 /api 前缀
    },
  }, 

  plugins: [vue(),Pages({
      dirs: 'src/pages',
    }),],
 })