<template>
  <el-row class="header-row">
    <el-col :span="8">
      <div class="grid-content ep-bg-purple-dark" />
    </el-col>
    <el-col :span="8">
      <div class="header-content">
        <h2 class="custom-center">基于Web漏洞检测与分析平台</h2>
        <el-button type="primary" @click="logout">
          <el-icon><User /></el-icon>
          登出
        </el-button>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple-dark" />
    </el-col>
  </el-row>
</template>

<script>
import { ElMessageBox } from 'element-plus';
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router'; // 导入 useRouter
import { User } from '@element-plus/icons-vue';

export default {
  name: "Header",
  components: {
    User
  },
  setup() {
    const { proxy } = getCurrentInstance(); // 获取全局实例
    const router = useRouter(); // 使用 useRouter 获取 router 实例

    // 将原本的 mounted 生命周期钩子逻辑移到 onMounted 钩子
    onMounted(() => {
       
    });

    const logout = () => {
      
      ElMessageBox.alert('确认退出！', '警告', {
           confirmButtonText: '用户注销',
           type: 'warning'
         });
    };

    return {
      logout
    };
  }
};
</script>

<style scoped>
.header-row {
  background-color: #ffffff;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4f28da;
}

.custom-center {
  text-align: center;
  color: inherit;
  margin-right: 16px;
}

.el-button {
  margin-left: 0;
  background-color: #4f28da;
  border-color: #4f28da;
}

.el-button:hover {
  background-color: #3f1fba;
  border-color: #3f1fba;
}

h2 {
  font-size: 20px;
  margin: 0;
}

.el-row {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

@media (max-width: 600px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
  }

  .custom-center {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .el-button {
    width: 100%;
  }

  h2 {
    font-size: 18px;
  }
}
</style>
