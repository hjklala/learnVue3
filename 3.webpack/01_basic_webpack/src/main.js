import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import "./js/element";

//导入vue
import { createApp } from "vue/dist/vue.esm-bundler";

//导入vue文件
import App from "./vue/App.vue";

console.log(sum(20, 30));
console.log(priceFormat());

//挂载
// const app=createApp({
//   template:'<h2>我是vue渲染出来的</h2>',
//   data(){
//     return {
//       title:'hello world'
//     }
//   }

// });

//单独.vue文件方式进行挂载
const app=createApp(App);
app.mount('#app')
