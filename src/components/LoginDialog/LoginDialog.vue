<template>
  <el-dialog v-model="isVisible" title="Shipping address" @closed="handleClose">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isVisible = false">Cancel</el-button>
        <el-button type="primary" @click="isVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

console.log("456")

const props = defineProps<{
  isVisible: boolean,
}>()
const emit = defineEmits<{
  (event: 'updateIsVisible', isVisible: boolean): void
}>()

const isVisible = ref(props.isVisible)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
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

<style lang="less" scoped>

</style>
