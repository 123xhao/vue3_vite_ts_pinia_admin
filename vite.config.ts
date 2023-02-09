import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  plugins: [vue()],
  base:'/',
  server:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:7001',
        changeOrigin:true,
      }
    }
  }
})
