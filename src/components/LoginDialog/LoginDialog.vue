<template>
  <div class="dialog">
    <el-dialog class="dialog-form" v-model="isVisible" title="登录" style="width: 50vh;" @closed="handleClose">
      <div class="dialog-form__login" style="margin: 0px 2vh;">
        <el-form :model="form" label-position="left">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.userName" style="width: 80vh;" />
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.userPwd" style="width: 80vh;" show-password />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isVisible = false">取消</el-button>
          <el-button type="primary" @click="isVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

const props = defineProps<{
  isVisible: boolean,
}>()
const emit = defineEmits<{
  (event: 'updateIsVisible', isVisible: boolean): void
}>()

const isVisible = ref(props.isVisible)
const formLabelWidth = '10vh'

const form = reactive({
  userName: '',
  userPwd: '',
})

const handleClose = () => {
  emit('updateIsVisible', false)
}

watch(
  () => props.isVisible,
  () => {
    isVisible.value = props.isVisible
  })
</script>

<style lang="less" scoped></style>
