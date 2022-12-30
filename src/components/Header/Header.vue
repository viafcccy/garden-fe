<template>
  <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" background-color="#ecf0f1"
    text-color="#2c3e50" active-text-color="#1abc9c" :router="true" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="logo" :route="{ name: 'home' }">
      <div class="logo-title__container"><img class="logo" src="@/assets/logo.svg" alt="logo">
        <span class="logo-title__text">FIND YOUR FUN</span>
      </div>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="github" @click="handleClickGithub"><img style="height: 3vh;" src="@/assets/img/github.svg"
        alt="GitHub"></el-menu-item>
    <el-sub-menu index="more">
      <template #title>更多</template>
      <el-menu-item index="more-about" :route="{ name: 'about' }">关于</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('logo')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClickGithub = () => {
  window.open("https://github.com/viafcccy", "_blank");
}
</script>

<style lang="less" scoped>
.header-menu {
  width: 100%;
  height: 100%;

  .logo-title__container {
    display: flex;
    align-items: center;

    .logo {
      height: 6vh;
    }

    .logo-title__text {
      padding-left: 20px;
      font-family: Impact, Charcoal, sans-serif;
      font-size: x-large;
    }

  }
}

.flex-grow {
  flex-grow: 1;
}

:deep(.el-menu-item.is-active) {
  background-color: #ecf0f1 !important;
}

.el-submenu__title:hover {
  background-color: #ecf0f1 !important;
}

.el-menu-item:hover {
  background-color: #ecf0f1 !important;
}
</style>
