/*
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 11:10:11
 * @LastEditTime: 2022-05-31 11:10:12
 * @LastEditors: ZiHao@hotmail.com
 * @Description: 
 * @FilePath: \www\vite-pinia-vue\src\.ts
 */
// /src/shims-vue.d.ts
declare module '*.vue' {
    // Vue 3
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
  }
  