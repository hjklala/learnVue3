<!--  -->
<template>
  <div>
    HomeContent-{{ name }}-{{ age }}
  </div>
</template>

<script>

export default {
  inject:['name','age'],
  data() {
    return {

    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>