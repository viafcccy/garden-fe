<script setup lang="ts">
import { RouterView } from 'vue-router'

import Aside from './components/Aside'
import Header from './components/Header'
import Footer from './components/Footer'
</script>

<template>
  <div class="common-layout">
    <el-container class="app-container">
      <el-header class="app-header">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="auto" class="app-aside">
          <Aside />
        </el-aside>
        <el-container>
          <el-main class="app-main">
            <RouterView />
          </el-main>
          <el-footer class="app-footer">
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.app-header {
  height: 8vh;
  padding: 0;
  margin: 0;
}

.app-aside {
  padding: 0;
  margin: 0;
}

.app-main {
  min-height: 86vh;
  padding: 0 1vh;
  margin: 0;
}

.app-footer {
  height: 6vh;
  padding: 0;
  margin: 0;
}
</style>
