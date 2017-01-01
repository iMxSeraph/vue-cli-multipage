<template>
  <div id="index">
    <img src="../assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './Hello'

export default {
  name: 'index',
  components: {
    Hello
  }
}
</script>

<style>
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
