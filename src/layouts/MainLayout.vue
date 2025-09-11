<!-- src/layouts/MainLayout.vue -->
<template>
  <el-container class="main-layout">
    <!-- 顶部 header -->
    <el-header class="main-header">
      <Header />
    </el-header>

    <el-container>
      <!-- 左侧导航 -->
      <el-aside class="main-aside" width="170px">
        <Navigator />
      </el-aside>

      <!-- 内容容器 -->
      <el-container class="main-content-container">
        <!-- 主体内容 -->
        <el-main class="main-content">
          <slot />
        </el-main>

        <!-- 底部 footer -->
        <el-footer class="main-footer">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// 引入基础布局组件
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Navigator from '../components/Navigator.vue'

export default {
  name: "MainLayout",
  setup() {
    

    return {
     
    };    
  },
  components: {
    Navigator,
    Header,
    Footer
  },
};
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}

.main-header,
.main-footer {
  padding: 0;
  height: auto;
}

.main-aside {
  background-color: #f8f8ff;
  height: 100vh;
  position: sticky;
  top: 0;
}

.main-content-container {
  background-color: #f5f5f5;
}

.main-content {
  padding: 20px;
}
</style>
