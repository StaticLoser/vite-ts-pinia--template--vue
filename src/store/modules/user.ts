/*
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 11:21:25
 * @LastEditTime: 2022-05-31 13:59:11
 * @LastEditors: ZiHao@hotmail.com
 * @Description:
 * @FilePath: \vite-pinia-vue\src\store\modules\user.ts
 */
import { defineStore } from "pinia";
import { store } from "../index";
interface nameinter {
  name: string;
  age: number;
}
export const useUserStore = defineStore({
  id: "user",
  state: (): nameinter => {
    return {
      name: "张三",
      age: 16,
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
        // paths: ["name", "age"], //可以选择保存的字段  其余的不保存
      },
    ],
  },
  getters: {
    getUserInfo(): string {
      return this.name || "";
    },
  },
  actions: {
    increment() {
      console.log("this.age++✨");
      this.age++;
    },
    decrement() {
      console.log("this.age--✨");
      this.age--;
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
