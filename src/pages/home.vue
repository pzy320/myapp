 <script>
 import {useCounterStore} from "../stores/counter";
 export default{
    setup(){
        //在组件或其他地方使用 store 时，首先需要引入并调用 useCounterStore 函数。        
        const counter=useCounterStore();       
        return{
            counter,           
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
                                    <span class="card-title">网络安全实战
</span>
                                    </div>
                                </template>  
                       
                                <el-form label-width="100px">
                                <el-form-item label="访问数:">
                                    {{ counter.num  }}
                                </el-form-item>
                                </el-form>
                          
                     <el-button type="primary" 
@click="counter.increment">递增</el-button>
                     <el-button type="primary" 
@click="counter.decrement">递减</el-button>
                     <el-button type="primary" 
@click="counter.resets()">复位</el-button>
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