/*
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 11:08:19
 * @LastEditTime: 2022-05-31 14:00:39
 * @LastEditors: ZiHao@hotmail.com
 * @Description:
 * @FilePath: \vite-pinia-vue\src\store\index.ts
 */
import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
const store = createPinia();
store.use(piniaPluginPersist);
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };


