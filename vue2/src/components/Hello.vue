<template>
  <div class="hello">
     <h2>{{formParents}}</h2>
    <button @click="showFather">点击我</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    showFather(){
      // 给父亲传递相应的方法名和参数
      this.$emit('formSon',this.msg)
    }
  },
  props:['formParents']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
 h2
  color red
</style>
