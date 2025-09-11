<template>
  <div class="custom-footer">
    <div class="footer-content">
      <el-icon class="footer-icon">
        <Edit />
      </el-icon>
      <el-text class="footer-text" type="info" size="small">重庆工院智能科技团队 (Chongqing College of Engineering Intelligent Technology Team) © 2025</el-text>
      
    </div>
  </div>
</template>

<script>
import { Edit } from '@element-plus/icons-vue';
export default {
  name: "Footer",
  components: {
    Edit
  }
};
</script>

<style scoped>
.custom-footer {
  background-color: #f8f9fa;
  padding: 16px 0;
  border-top: 1px solid #dee2e6;
  color: #6c757d;
  font-size: 14px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-icon {
  margin-right: 8px;
  font-size: 18px;
}

.footer-text {
  font-weight: 400;  
}


</style>
