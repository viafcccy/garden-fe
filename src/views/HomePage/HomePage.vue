<template>
  <el-row>
    <el-col :span="10">
      <div class="left-container">
        <div class="carousel">
          <el-carousel :interval="4000" type="card" height="25vh" arrow="never">
            <el-carousel-item v-for="item in 6" :key="item">
              <div style="background-color: antiquewhite;height: 25vh">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <el-empty description="功能开发中..." />
        </div>
      </div>
    </el-col>
    <el-col :span="14">
      <el-scrollbar height="86vh" always>
        <div class="right-container">
          <div class="article-filter">
            <el-button-group>
              <el-button round :icon="Flag">综合排序</el-button>
              <el-button round :icon="Opportunity">最新发布</el-button>
              <el-button round :icon="TrendCharts">最多点击</el-button>
            </el-button-group>
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
          <div class="article-pagination">
            <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
              :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background"
              layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
              @current-change="handleCurrentChange" />
          </div>
        </div>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { Flag, Opportunity, TrendCharts } from '@element-plus/icons-vue'
import { ref } from 'vue'

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)


const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="less" scoped>
.right-container {

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

  .article-pagination {
    padding-top: 2vh;
    display: flex;
    justify-content: center;
  }
}

.left-container {
  .carousel {
    margin: 2vh;
  }
}
</style>
