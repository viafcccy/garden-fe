<template>
  <el-menu default-active="2" class="menu-vertical" :collapse="isCollapse" @open="handleOpen" @close="handleClose"
    active-text-color="#1abc9c" background-color="#ecf0f1" text-color="#2c3e50">
    <el-sub-menu index="document">
      <template #title>
        <el-icon>
          <Document />
        </el-icon>
        <span>文章</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="document-1">item one</el-menu-item>
        <el-menu-item index="document-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="document-3">item three</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <Link />
      </el-icon>
      <template #title>推荐站点</template>
    </el-menu-item>
    <el-menu-item v-if="isCollapse === true" @click="handleClickOpenMenu" index="clickOpen">
      <el-icon>
        <DArrowRight />
      </el-icon>
      <template #title>展开</template>
    </el-menu-item>
    <el-menu-item v-if="isCollapse === false" @click="handleClickCloseMenu" index="clickClose">
      <el-icon>
        <DArrowLeft />
      </el-icon>
      <template #title>收起</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(true)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClickOpenMenu = () => {
  isCollapse.value = false
}

const handleClickCloseMenu = () => {
  isCollapse.value = true
}

</script>

<style lang="less" scoped>
.menu-vertical {
  font-weight: 900;
  height: 100%;
}

.menu-vertical:not(.el-menu--collapse) {
  height: 100%;
}

:deep(.el-sub-menu) {
  font-weight: 900;
}
</style>
