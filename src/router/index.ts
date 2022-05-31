/*
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 14:08:36
 * @LastEditTime: 2022-05-31 14:32:27
 * @LastEditors: ZiHao@hotmail.com
 * @Description:
 * @FilePath: \vite-pinia-vue\src\router\index.ts
 */
import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import About from "@/views/About/index.vue";
// import { Home } from "./baseRouter";
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      //   children: [
      //     {
      //       path: "new",
      //       component: PostsNew,
      //       // only authenticated users can create posts
      //       meta: { requiresAuth: true },
      //     },
      //     {
      //       path: ":id",
      //       component: PostsDetail,
      //       // anybody can read a post
      //       meta: { requiresAuth: false },
      //     },
      //   ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
