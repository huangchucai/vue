<template>
  <div id="app">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="tab">
      I am tab
    </div>
    <div class="content">
      I am content
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  console.log(header);
  export default{
    components: {
      'v-header': header
    }
  };
</script>

<style>

</style>
