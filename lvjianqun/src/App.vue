<template>
  <div id="app">
    <user-center></user-center>
  </div>
</template>

<script type="text/ecmascript-6">
import UserCenter from './components/user-center/user-center'
export default {
  name: 'App',
  components: {
    UserCenter
  }
}
</script>

<style>
  @import './style/reset.css';
  body{
    background: #222;
  }
</style>
