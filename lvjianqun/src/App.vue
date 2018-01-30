<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tap></tap>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from './components/m-header/m-header'
import Tap from './components/tap/tap'
export default {
  name: 'App',
  components: {
    MHeader,
    Tap
  }
}
</script>

<style>
  @import './style/reset.css';
  body{
    background: #222;
  }
</style>
