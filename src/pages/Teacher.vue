<script>
 import { provide,ref } from 'vue';
 // ref 是一个函数 👉 创建响应式的基本类型
import Student from './Student.vue';
 export default{
 name: "Teacher",
    components:{
        Student
    },
    setup(){
        const teacherName = ref('Mr. John Doe');
        const age=ref(88);
        const role=ref("教授");
        provide('teacherName', teacherName);
        provide('age',age);
        provide('role',role);    
        return{
            teacherName,
            age,
            role       
        }
    }
 }
 </script>
 <template>
       <Student />
 
   
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