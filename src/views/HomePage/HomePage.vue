<template>
  <el-row>
    <el-col :span="10">
      <div>
        <el-empty description="功能开发中..." />
      </div>
    </el-col>
    <el-col :span="14">
      <el-scrollbar height="86vh" always>
        <div class="right-container">
          <div class="article-filter">
            <el-descriptions>
              <el-descriptions-item label="排序">
                <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </el-descriptions-item>
            </el-descriptions>
          </div>
          <div class="article-list">
            <el-card class="article-card__item" shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>Card name</span>
                  <el-button class="button" text>新页面阅读</el-button>
                </div>
              </template>
              <el-descriptions title="User Info">
                <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
                <el-descriptions-item label="Remarks">
                  <el-tag size="small">School</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
                  Province</el-descriptions-item>
              </el-descriptions>
            </el-card>
          </div>
        </div>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style lang="less" scoped>
.right-container {
  border-left-style: solid;
  border-width: 0.5vh;
  border-color: #1abc9c;

  .article-filter {
    margin-top: 1vh;
    display: flex;
    justify-content: center;
  }

  .article-list {
    display: flex;
    justify-content: center;

    .article-card__item {
      margin: 1vh 0;
      width: 80%;
    }
  }
}
</style>
