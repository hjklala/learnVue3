const path = require('path');

//webpack配置文件
module.exports = {
  //入口
  entry: "./src/main.js",
  //打包出口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  //loader配置
  module:{
    rules:[
      {
        test:/\.css$/,  //正则表达式
        //loader写法语法糖
        //loader:"css-loader"
        use:[
          "css-loader"
        ]
      }
    ]
  }
}
