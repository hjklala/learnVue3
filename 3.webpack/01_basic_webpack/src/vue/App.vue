<!--  -->
<template>
<div>
  <h2>我是vue文件渲染出来的</h2>
   <h2>{{ title }}</h2>
</div>
</template>

<script>
export default {
data() {
return {
  title:'lalalala'
}
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
h2{
  color: red;
}
</style>