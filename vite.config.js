/*
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 11:06:01
 * @LastEditTime: 2022-05-31 14:31:12
 * @LastEditors: ZiHao@hotmail.com
 * @Description: 
 * @FilePath: \vite-pinia-vue\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
import commonjsExternals from 'vite-plugin-commonjs-externals';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  commonjsExternals({
    externals: ['path'],
  }),],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/views': path.resolve(__dirname, './src/views'),
      '@/api': path.resolve(__dirname, './src/api'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
