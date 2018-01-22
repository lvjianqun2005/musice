<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click="back">
          <i class="icon-back"></i>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
export default{
  name: 'UserCenter',
  methods: {
    back () {
      console.log('nihao')
    }
  }
}
</script>

<style>
@import './../../common/stylus/icon.styl';
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
