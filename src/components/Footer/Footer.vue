<template>
  <div class="footer-content__container">
    <el-divider style="height: 3vh;">
      <div>
        <el-icon>
          <UserFilled />
        </el-icon>
        <span style="padding-left: 1vh;">caven</span>
        <el-divider direction="vertical" />
        <span>
          <el-icon>
            <Promotion />
          </el-icon>
          <span style="padding-left: 1vh;">
            <el-link href="mailto:hereisfcy@gmail.com" target="_blank">hereisfcy@gmail.com</el-link>
          </span>
        </span>
      </div>
    </el-divider>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="less" scoped>
.footer-content__container {
  display: flex;
  align-items: center;
  height: 6vh;
}
</style>
