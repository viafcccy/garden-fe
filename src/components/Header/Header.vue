<template>
  <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" background-color="#ecf0f1"
    text-color="#2c3e50" active-text-color="#1abc9c" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="logo">
      <div class="logo-title__container"><img class="logo" src="@/assets/logo.svg" alt="logo">
        <span class="logo-title__text">FIND YOUR FUN</span>
      </div>
    </el-menu-item>
    <div class="flex-grow" />
    <img class="right-title__icon" src="@/assets/img/header-icon-github.svg" alt="GitHub" @click="handleClickGithub">
    <img class="right-title__icon" src="@/assets/img/header-icon-avatar.svg" alt="GitHub" @click="handleClickAvatar">
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
const handleClickAvatar = () => {
  //
}
</script>

<style lang="less" scoped>
.header-menu {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  .logo-title__container {
    .logo {
      height: 6vh;
    }

    .logo-title__text {
      padding-left: 2vh;
      font-family: Impact, Charcoal, sans-serif;
      font-size: x-large;
    }

  }

  .right-title__icon {
    height: 3vh;
    cursor: pointer;
    padding-right: 2vh;
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
