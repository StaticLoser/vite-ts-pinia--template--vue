<!--
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 14:14:04
 * @LastEditTime: 2022-05-31 14:24:44
 * @LastEditors: ZiHao@hotmail.com
 * @Description: 
 * @FilePath: \vite-pinia-vue\src\views\Home\index.vue
-->
<template>
  <div class="">我是home</div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
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
