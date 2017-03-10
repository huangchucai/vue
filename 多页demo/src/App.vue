<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      欢迎学习多页运用
    </p>
    <div align="center">
      <a href='https://github.com/bhnddowinf/vuejs2-learn'>学习地址</a>
      <h3>黄楚才学习多页运用</h3>
      <ul>
        <li>
          <span class="list-item">多页应用 Hello 组件</span>
          <a href='h0201.html'>示例1</a>|
          <a href='h0202.html'>示例2</a>|
          <a href='https://github.com/bhnddowinf/vuejs2-learn/blob/master/my-project/src/vuejs2-demo/02-GattingStarted/v0201.vue' target="_new">源码</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Hello from './components/Hello'

  export default {
    components: {
      Hello
    }
  }
</script>
<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 900px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;


  }

  .logo {
    width: 100px;
    height: 100px
  }

  li {
    list-style-type: none;
    text-align:left;
    line-height:20px;
  }
  .right {
    /*
    text-align: left;
    float: left;
    */
  }
  .list-item {
    display: inline-block;
    width:500px;
  }
</style>
