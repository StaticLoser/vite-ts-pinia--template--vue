<!--
 * @Author: ZiHao@hotmail.com
 * @Date: 2022-05-31 11:06:01
 * @LastEditTime: 2022-05-31 14:27:00
 * @LastEditors: ZiHao@hotmail.com
 * @Description: 
 * @FilePath: \vite-pinia-vue\src\App.vue
-->
<script lang="ts" setup></script>

<template>
  <router-link to="/">首页</router-link> |
  <router-link to="/about">about</router-link>
  <RouterView></RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
