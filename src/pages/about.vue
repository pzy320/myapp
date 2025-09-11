<script>
import MainLayout from '../layouts/MainLayout.vue';
export default{
   name: "index",
  setup() {
     //在组件或其他地方使用 store 时，首先需要引入并调用 useCounterStore 函数。     
  },

  components: {
    MainLayout
  },
};   
 </script>
 <template>
    <MainLayout>
     <h2>关于页面</h2>
    </MainLayout>
 </template>

 <style>
 
 </style>