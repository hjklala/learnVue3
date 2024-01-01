<!--  -->
<template>
  <div>
    <my-slot>
      <div>哈哈哈哈</div>
    </my-slot>
  </div>
</template>

<script>
import MySlot from './MySlot.vue'

export default {
  components: {
    MySlot
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>