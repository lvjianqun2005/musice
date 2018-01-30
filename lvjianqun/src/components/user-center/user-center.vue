<template>
  <transition name="slide">
    <div clasxlass="back" @click="back">
          <i class="icon-back"></i>
    </div>
    <div class="switches-wrapper">
      <switches @switch="switchItem" :switches="switches" :currentIndex="currentIndex"></switches>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
import Switches from './../../base/switches/switches'
export default{
  name: 'UserCenter',
  data () {
    return {
      currentIndex: 0,
      switches: [
        {
          name: '我喜欢的'
        },
        {
          name: '最近听的'
        }
      ]
    }
  },
  methods: {
    back () {
       this.$router.back()
    },
    switchItem () {
      console.log('nihao')
    }
  },
  components: {
    Switches
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.user-center{
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  background: #222;
}
.slide-center-active ,.slide-leave-active{
  transition: all 0.3s;
}
.slide-center ,.slide-leave-to{
  transform:translate3d(100%, 0, 0)
}
.back{
  position: absolute;
  top: 0;
  left: 60px;
  z-index: 50;
}
.icon-back{
  display: block;
  padding: 10px;
  font-size: 22px;
  color: #ffcd32;
}
</style>
