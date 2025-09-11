<template>
   <el-row class="tac">
    <el-col :span="30">
      <el-card class="nav-card" shadow="hover">
        <div class="nav-header">
          <span class="nav-title">菜单导航</span>
        </div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#333"
          text-color="#FFFFE0"
          active-text-color="#FFA500"
          :default-active="activeIndex"
          style="height: 100%;"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <el-icon><House /></el-icon>平台首页
          </el-menu-item>

          <el-menu-item index="1-1">
            <el-icon><User /></el-icon>账户中心
          </el-menu-item>

          <el-menu-item index="1-2" >
            <el-icon><EditPen /></el-icon>导航一
          </el-menu-item>

          <el-menu-item index="1-3" >
            <el-icon><EditPen /></el-icon>导航二
          </el-menu-item>

          <el-menu-item index="1-4" >
            <el-icon><EditPen /></el-icon>导航三
          </el-menu-item>

          <el-menu-item index="1-5">
            <el-icon><View /></el-icon>导航四
          </el-menu-item>

          <el-menu-item index="1-6">
            <el-icon><View /></el-icon>导航五
          </el-menu-item>

          <el-menu-item index="1-7">
            <el-icon><View /></el-icon>导航六
          </el-menu-item>

          <el-menu-item index="1-8" >
            <el-icon><Picture /></el-icon>I导航七
          </el-menu-item>

          <el-menu-item index="1-9">
            <el-icon><EditPen /></el-icon>导航八
          </el-menu-item>

          <el-menu-item index="1-10">
            <el-icon><Check /></el-icon>导航九
          </el-menu-item>
        </el-menu>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { useRouter } from 'vue-router'; // 导入 useRouter
import { ref, onMounted, getCurrentInstance, watchEffect } from 'vue';
import { House,
        User,
        EditPen,
        View,
        Check,
        Picture } from '@element-plus/icons-vue'
export default {
  name: "Navigator",
  components: {
    House,
    User,
    EditPen,
    View,
    Check,
    Picture
  },
  setup() {
        const router = useRouter(); // 使用 useRouter 获取 router 实例  
        const activeIndex = ref('1');
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath)
        }

        const handleClose = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleSelect=(key)=>{
            activeIndex.value=key
             switch (key) {
                case '1': router.push('/'); break;
                case '1-1': router.push('/about'); break;
                case '1-2': router.push('/about'); break;
                case '1-3': router.push('/about'); break;
                case '1-4': router.push('/about'); break;
                case '1-5': router.push('/about'); break;
                case '1-6': router.push('/about'); break;
                case '1-7': router.push('/about'); break;
                case '1-8': router.push('/about'); break;
                case '1-9': router.push('/about'); break;
                case '1-10': router.push('/about'); break;
                default: this.$router.push('/');
            }
        }
        return{
            router,
            activeIndex,
            handleOpen,
            handleClose,
            handleSelect
        }
    }
}
</script>

<style>
.nav-card {
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(79, 40, 218, 0.06);
  padding: 0 0 16px 0;
  background: #f8f8ff;
  min-height: 100vh;
  border: none;
  transition: all 0.2s;
  width: 100%;
  max-width: 220px;
}

.nav-header {
  display: flex;
  justify-content: center;
  padding: 24px 0 12px 0;
  background-color: #333;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #4FC3F7;
  letter-spacing: 1px;
}
</style>
