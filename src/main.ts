/*
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 11:06:01
 * @LastEditTime: 2022-05-31 14:32:58
 * @LastEditors: ZiHao@hotmail.com
 * @Description:
 * @FilePath: \vite-pinia-vue\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";
const app = createApp(App);
setupStore(app);
setupRouter(app);
app.mount("#app");
