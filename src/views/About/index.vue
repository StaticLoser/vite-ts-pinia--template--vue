<!--
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 14:13:42
 * @LastEditTime: 2022-05-31 14:34:13
 * @LastEditors: ZiHao@hotmail.com
 * @Description: 
 * @FilePath: \vite-pinia-vue\src\views\About\index.vue
-->
<template>
  <div class="">
    <p>我是about</p>
    <button type="button" @click="userstore.increment()">
      userstore ++: {{ userstore.$state.age }}
    </button>
    &nbsp;&nbsp;&nbsp;
    <button type="button" @click="userstore.decrement()">
      userstore --: {{ userstore.$state.age }}
    </button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStoreWithOut } from "../../store/modules/user";
const router = useRouter();
const userstore = useUserStoreWithOut();
console.log("1-开始创建组件-setup");
const states = reactive({});
onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});
onMounted(() => {
  console.log("3.-组件挂载到页面之后执行-------onMounted");
});
const {} = toRefs(states);
</script>
<style scoped lang="less"></style>
