const path = require('path');
const {CleanWebpackPlugin}=require("clean-webpack-plugin")
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {DefinePlugin} =require("webpack")
// const CopyWebpackPlugin =require("copy-webpack-plugin")
const {VueLoaderPlugin}=require('vue-loader/dist/index')


//webpack配置文件
module.exports = {
  //设置模式 development 开发阶段设置，production 准备打包上线的时候设置
  mode:"development",
  //设置source-map 建立js映射文件，方便调试与发现错误
  //devtool:"source-map",
  //入口
  entry: "./src/main.js",
  //打包出口
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js"
  },
  //文件打包过大设置
  performance:{
    hints:"warning",
    maxAssetSize:30000000, //生成文件的最大体积 整数类型（以字节为单位）
    maxEntrypointSize:50000000,//入口文件的最大体积
    //只给出js文件或css文件的性能提示
    assetFilter:function(assetFilename){

      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  devServer:{
    //如果一个资源没有从webpack打包的文件中得到支持，则会从contentBase中的地址获得支持（主要是一些不被打包的静态资源）
    //在开发阶段，在使用devServer时没有copy-webpack来进行静态资源的复制，有可能会找不到，在这时候使用contentBase
    contentBase:"./public",

    //模块热更新，无需刷新页面，只变换改变模块，可保留某些状态
    hot:true,

    //host 地址

    //port 端口号

    //是否自动打开浏览器
    open:true,

    //compress  是否队静态资源进行gzip压缩

    //跨域代理
    // proxy:{
    //   "/api":{
    //      taget:'代理的地址',
    //      pathRewrite:{
    //          "^/api":''   //重写地址为空
    //        },

    //      secure:false,    //是否接受没有证书的https请求 false为允许

    //      changeOrigin:true  //请求时是否换成代理的源地址 
    //   }
    // }
  },
  //loader配置
  module:{
    rules:[
      {
        test:/\.css$/,  //正则表达式
        //loader写法语法糖
        //loader:"css-loader"

        //use执行顺序从后往前
        //postcss配置单独提出在postcss.config.js中 preset-env中包含autoprefixer
        use:[
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
        //postcss配置不提出写法
        // use:[
        //   "style-loader",
        //   "css-loader",
        //   {
        //     loader:"postcss-loader",
        //     options:{
        //       postcssOptions:{
        //         plugins:[
        //           require('autoprefixer')
        //         ]
        //       }
        //     }
        //   }
        // ]
      },


      //webpack5 使用asset来替代file-loader和url-loader
      {
        test:/\.(jpe?g|png|gif|svg)$/,
        //类型 asset =>自动选择 asset/resource ->file-loader asset/inline -> url-loader
        type:"asset",
        //生成路径及名字配置placeHolder [name]原文件名字 [hash:6]六位hash值 [ext]文件后缀
        generator:{
          filename:'img/[name]_[hash:6][ext]'
        },
        //限制配置
        parser:{
          dataUrlCondition:{
            maxSize:50*1024
          }
        }
      },
      
      //.vue文件的编译loader @vue/compiler-sfc
      {
        test:/\.vue$/,
        loader:"vue-loader"
      }
    ]
  },
  //插件的注册
  plugins:[
    //打包自动清理之前打包的文件 插件
    new CleanWebpackPlugin(),
    //index.html打包插件(可以自动生成)
    new HtmlWebpackPlugin({
      // template:'模板所在位置'  按照你所提供的模板生成index.html
      template:'./public/index.html',
      //修改生成出来的index.html的title
      title:"哈哈哈哈哈"
    }),

    
    //webpack自带插件 可定义一些打包时的变量
    new DefinePlugin({
      BASE_URL:"'./'",
      //vue是否向下兼容vue2
      __VUE_OPTIONS_API__:true,
      //在生产阶段是否需要使用vue的调试工具
      __VUE_PROD_DEVTOOLS__:false
    }),

    //webpack打包时拷贝文件到打包位置（静态资源等）
    // new CopyWebpackPlugin({
    //   patterns:[
    //     {
    //       from:'需要拷贝的文件地址（一般情况为pubilc中的静态资源）',
    //       to:'到哪里 到打包文件最外层时可以忽略',
    //       
    //       配置忽略文件  
    //       globalOptions:{
    //         ignore:[
    //           "**/文件名"
    //         ]
    //       }
    //     }
    //   ]
    // })


    //.vue文件解析插件 
    new VueLoaderPlugin()
  ]
}
