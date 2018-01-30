<template>
    <div class="m-header">
        <div class="icon"></div>
        <h1 class="text">网 易 云 音 乐</h1>
        <router-link tag="div" class="mine" to="/user">
          <i class="icon-mine"></i>
        </router-link>
    </div>
</template>
<script type="text/ecmascript-6">
export default{
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .m-header
    height: 44px
    position: relative
    text-align: center
    font-size:0;
    color: #ffcd32
    .icon
     display: inline-block
     vertical-align:tap
     margin-top: 6px
     width: 30px
     height: 32px
     margin-right: 9px
     background-image:url('./logo.png')
     background-size:30px 32px
    .text
     display: inline-block
     vertical-align: top
     line-height: 44px
     font-size: 18px
    .mine
      position: absolute
      top: 0
      right: 0
     .icon-mine
      display:block
      padding:12px
      font-size:20px
      color: $color-theme
</style>
