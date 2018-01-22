<template>
  <div id="app">
    <user-conter></user-conter>
  </div>
</template>

<script type="text/ecmascript-6">
import UserConter from './components/user-conter/user-conter'
export default {
  name: 'App',
  components: {
    UserConter
  }
}
</script>

<style>
  @import './style/reset.css';
  body{
    background: #222;
  }
</style>
