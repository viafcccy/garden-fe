<template>
  <el-row>
    <el-col :span="10">
      <div>
        <v-md-preview :text="BasicInfo"></v-md-preview>
      </div>
    </el-col>
    <el-col :span="14">
      <div class="timeline">
        <el-timeline>
          <el-timeline-item timestamp="2021/6 - 2021/9" placement="top">
            <el-card>
              <v-md-preview :text="ByteDanceSre"></v-md-preview>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2022/7 - 至今" placement="top">
            <el-card>
              <v-md-preview :text="TencentSre"></v-md-preview>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const BasicInfo =
  '# caven \n \
  #### :email:&nbsp;&nbsp;&nbsp;邮箱：[hereisfcy@gmail.com](mailto:hereisfcy@gmail.com) \n \
  #### :star:&nbsp;&nbsp;&nbsp;Github：[viafcccy](https://github.com/viafcccy) \n \
  #### :black_nib:&nbsp;&nbsp;&nbsp;Linkedin：[Chenyu Fang](https://www.linkedin.com/in/chenyu-fang-2720a2250) \n \
  #### :hourglass:&nbsp;&nbsp;&nbsp;中南大学 \n \
  - 自动化学院 \n \
  - 学士学位 \n \
  - 2018/9 - 2022/6 \n \
  ### 技术栈 \n \
  - 前端开发：TypeScript、Vue3、ElementPlus \n \
  - 后端开发：Golang、GORM、GIN、MySQL、Redis、Kafka \n \
  - 云原生：K8s、K8sClient、Istio \n \
  '
const ByteDanceSre =
  '#### 北京字节跳动科技有限公司 \n \
  ##### Data 推荐架构 \n \
  ##### SRE 实习生 \n \
  '
const TencentSre =
  '#### 腾讯科技（深圳）有限公司 \n \
  ##### 技术工程事业群 \n \
  ##### SRE \n \
  '
</script>

<style lang="less" scoped>
.timeline {
  padding: 3vh 0;
  width: 50vw;
}
</style>
