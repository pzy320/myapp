<script>
import MainLayout from '../layouts/MainLayout.vue'
import { useCounterStore } from "../stores/counter";
import { ref, onMounted } from 'vue';
import http from '../utils/http'; // 引入封装的 Axios 实例
// 新增：导入 ECharts
import * as echarts from 'echarts';

export default {
  name: "index",
  setup() {
    const counter = useCounterStore();
    const responseText = ref('');

    onMounted(() => {
      // 原有：后端数据请求逻辑
      http.get('/public/test')
        .then((response) => {
          responseText.value = response.data;
        })
        .catch(error => {
          console.error('Error during login:', error);
          alert('查询过程中发生错误，请重试。');
        });

      // 新增：初始化 ECharts 图表
      const chartDom = document.getElementById('chartContainer');
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        // 图表配置项
        const option = {
          title: {
            text: '访问数据统计',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['访问量'],
            bottom: 10
          },
          xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '访问量',
            type: 'line',
            data: [120, 150, 130, 190, 140, 210, 170],
            smooth: true
          }]
        };
        myChart.setOption(option);

        // 监听窗口大小变化，自动调整图表尺寸
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      }
    });

    return {
      counter,
      responseText
    };
  },
  components: {
    MainLayout
  },
};
</script>
<template>
  <MainLayout>
    <el-row style="height: 100%;">
      <el-col :span="12" :offset="6" style="border-style: solid; border-color: #e6e6e6; margin-top: 5%;">
        <el-row>
          <el-col :span="16" :offset="4">
            <el-card shadow="hover" :body-style="{ borderRadius: '20px' }">
              <template #header>
                <div class="card-header">
                  <span class="card-title">网络安全实战</span>
                </div>
              </template>

              <!-- 新增：ECharts 图表容器 -->
              <div id="chartContainer" style="width: 100%; height: 300px; margin-bottom: 20px;"></div>

              <el-form label-width="100px">
                <el-form-item label="访问数:">
                  {{ counter.num }}
                </el-form-item>
                <el-form-item label="后端数据:">
                  {{ responseText }}
                </el-form-item>
              </el-form>

              <el-button type="primary" @click="counter.increment">递增</el-button>
              <el-button type="primary" @click="counter.decrement">递减</el-button>
              <el-button type="primary" @click="counter.resets()">复位</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </MainLayout>
</template>
<style>
.card-header {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%; /* 确保高度占满卡片标题区域 */
}
.card-title {
  font-weight: bold; /* 加粗 */
  font-size: 18px; /* 字号 */
  color: #4FC3F7; /* 字体颜色 */
  letter-spacing: 0.5px; /* 字间距 */
}
</style>
