<!--  -->
<template>
  <div>
    HomeContent
  </div>
</template>

<script>
import emitter from './utils/eventBus.js'
export default {
 
  data() {
    return {

    }
  },
  created(){
    emitter.on('btnClick',(info)=>{
      console.log(info);
    })
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>