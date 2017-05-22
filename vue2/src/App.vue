<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input type="text" v-model="value" @keyup.enter="changeItems">
    <li v-for="item in items" :class="{finish:item.isFinished}" @click="finish(item)">
      {{item.name}}
    </li>
    <!--v-on@formSon  规定接受的子元素的formSon,然后调用相应的自己的方法接受参数-->
    <hello formParents="这是我的儿子" @formSon="showSon"></hello>
    <h1>{{this.son}}</h1>
  </div>
</template>

<script>
import Hello from './components/Hello'
import store from './store'
export default {
  name: 'app',
  data(){
    return {
     title: 'This is a ToDoList',
     items: store.fetch(),
     value: '',
     son: ''
    }
  },
  methods:{
    changeItems(){
      this.items.unshift({name:this.value,isFinished:false})
      this.a++
      this.value = ''
    },
    finish(item){
      item.isFinished = !item.isFinished;
    },
    showSon(msg){
      console.log(msg)
      this.son=msg
    }
  },
  watch:{
    items: {
      handler:  function(items){
        store.save(items)
      },
      deep: true
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  cursor: pointer;
}
.finish{
  text-decoration: line-through;
}
</style>
