<!--  -->
<template>
  <div>
    <home></home>    
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  components: {
    Home
  },
  // provide:{
  //   name:'lalala',
  //   age:18
  // },
  
  //vue2中如果provide想使用data中的数据 则需要写成函数形式才能通过this访问
  provide(){
   return {
    name:'lalala',
    age:this.age
   }
  },
  data() {
    return {
      age:18
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>