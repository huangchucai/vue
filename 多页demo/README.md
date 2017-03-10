# sunny

> 黄楚才的多页练习

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```



#### 1.package.json
* package.json 首先研究基本配置文件，这个里面包含了你的项目的基本信息和重要依赖，版本等基本信息
   ![基本信息和依赖版本](http://upload-images.jianshu.io/upload_images/3635292-edf14f33ee0a8fbc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* 通过package.json的脚本配置，知道有build文件夹下面的`dev-server.js`和build.js两个不同的脚本配置，**所以在启动的时候`npm run dev`和`npm run build`**是不同的二个脚本。本文章研究`npm run dev`
#### 2.build文件夹
build文件中配置`1. webpack.base.conf.js` `2. webpack.dev.conf.js`
1. webpack.base.conf.js
```
//第10行左右的入口配置相应的js依赖
module.exports={
    entry:{
      main: './src/main.js', // 默认的单页文件位置
      j0201:"./src/morepage/j0201.js",  //多页练习的配置地址
      j0202:"./src/morepage/j0202.js"    //多页练习的配置地址
    }
.......
}
```
2. webpack.dev.conf.js配置相应的文件。配置了相应的js，但是没有启动相应的配置文件
```
//在最后的plugins插件位置
plugins:[
.......
 //默认的单页配置
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks:["main"], //配置base的位置
    }),
//添加的相应的配置
    new HtmlWebpackPlugin({
      filename: 'h0201.html',  //根路径下的文件名
      template: 'h0201.html',  //根路径下的文件模板来源
      inject: true,
      chunks:["j0201"], //配置base的位置
    }),
    new HtmlWebpackPlugin({
      filename: 'h0202.html',  //根路径下的文件名
      template: 'h0202.html',  //根路径下的文件模板来源
      inject: true,
      chunks:["j0202"], //配置base的位置
    }),
    new FriendlyErrorsPlugin()
]
```
3. src文件夹
   src文件放置了所有的资源文件（.js . vue等）
   **举例分析相应的联系**
   【main.js和App.vue和index.html】
```
//1. 通过webpack.dev.conf.js配置，我们已经知道index.html和main绑定
//2. 那到什么地方去找main文件呢？有一个老程序员知道的定律，一般开始的页面的接口都是在src下面的main.js中
//3. 找到main.js
import Vue from 'vue'
import App from './App'  //3. 这里说明App在当前文件夹下的App.vue（默认隐藏vue文件的后缀）
/* eslint-disable no-new */
new Vue({
  el: '#app', // 1.绑定了id为app的元素
  render: h => h(App) //2.默认语法，寻找App
})
//4. 找到当前文件下的App.vue文件。App.vue文件分三部分
//4-1 html样式放置位置
<template> //html样式
<div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>  //注意这里有一个hello，不是默认标签，就在脚本位置寻找对应的模板
</div>
</template>
//4-2 脚本放置位置
<script>
  import Hello from './components/Hello'  //告诉我们在当前文件夹下的components下的Hello.vue文件中
  export default {
    components: {
      Hello
    }
  }
</script>
//4-2 当前页面样式放置位置
<style>  //<style scoped>表示只对当前页面有效的css
......
</style>
```