<template>
  关于
  <el-button type="success" :icon="Check" @click="handleClickBackendHealthCheck">Backend Health Check</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check } from '@element-plus/icons-vue'
import { GetBackendHealthCheck } from '@/api/request'
import { BackendHealthCheck } from '@/api/model'
import { ElMessage } from 'element-plus'

const backendHealthStatus = ref<BackendHealthCheck>(new BackendHealthCheck())

const handleClickBackendHealthCheck = async () => {
  backendHealthStatus.value = await GetBackendHealthCheck();
  try {
    backendHealthStatus.value = await GetBackendHealthCheck();
  } catch (err) {
    ElMessage.error(`后端健康检查 API 请求错误`)
    console.log("health check request api error")
    console.log(err)
    return
  }
  console.log(backendHealthStatus.value)
  if (backendHealthStatus.value.isHealth) {
    ElMessage.success("后端服务连接正常！")
    console.log("health check success")
  } else {
    ElMessage.error("后端服务异常！")
    console.log("health check fail")
  }
}

</script>

<style lang="less" scoped>

</style>
