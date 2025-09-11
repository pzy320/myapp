 <script>
 import { inject,ref } from 'vue';
 export default{
    name: "Student", 
    components:{
       
    },  
    setup(){
        // 注入 teacherName 数据       
        const teacherName=inject('teacherName'); 
        const age=inject('age');
        const role=inject('role');
 
        return{
            teacherName,
            age,
            role       
        }
    }
 }
 </script>
 <template>
        <el-row style="height: 100%;">
            <el-col :span="12" :offset="6" style="border-style: solid; 
border-color: #e6e6e6; margin-top: 5%;">
                 <el-row>
                  <el-col :span="16" :offset="4">
                        <el-card  shadow="hover" :body-style="{ 
borderRadius: '20px' }">
                                <template #header>
                                    <div class="card-header">
                                    <span class="card-title">学生组件
</span>
                                    </div>
                                </template>  
                       
                                <el-form label-width="100px">
                                <el-form-item label="教师姓名:">
                                    {{ teacherName }}
                                </el-form-item>
                                <el-form-item label="年龄:">
                                    {{ age }}
                                </el-form-item>
                                <el-form-item label="角色:">
                                    {{ role }}
                                </el-form-item>
                                </el-form>
                          
                    
                     </el-card>
                    </el-col>
                </el-row>
            
            </el-col>
        </el-row>
 
   
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
