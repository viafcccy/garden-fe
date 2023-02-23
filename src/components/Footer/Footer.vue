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
            <el-link href="mailto:geekcaven@gmail.com" target="_blank">geekcaven@gmail.com</el-link>
          </span>
        </span>
      </div>
    </el-divider>
  </div>
  <div class="record-link">
    <el-link href="https://beian.miit.gov.cn" target="_blank">粤 ICP 备 2023008016 号</el-link>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="less" scoped>
.footer-content__container {
  display: flex;
  align-items: center;
  height: 3vh;
}

.record-link {
  display: flex;
  justify-content: center;
  height: 2vh;
}

:deep(.el-divider.el-divider--horizontal) {
  margin: 0px;
}
</style>
