<!--  -->
<template>
  <div>
    <h2>home</h2>
   <button @click="btnClick">点击按钮</button>
  </div>
</template>

<script>
import emitter from './utils/eventBus.js'
export default { 
  data() {
    return {
      
    }
  },
  methods:{
    btnClick(){
      console.log(1111);
      emitter.emit('btnClick',{name:'lalala',age:18})
    }
  }
  
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>