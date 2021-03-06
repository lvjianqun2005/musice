<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
   // slide 基于better-scroll实现，监听了它的几个事件{snap,snapLoop，snapThreshold,snapSpeed }  **注：better-scroll因为版本原因，以上几个事件会有出入，请参考官方文档，下面在实例化better-scroll时有做详细说明**
   export default {
     data() {
       return {
         dots: [], // 定义一个名为dots的数组，小圆点数组
         currentPageIndex: 0 // 当前的页码
       }
     },
     props: { // 这里定义可在外部控制的属性
       loop: { // 是否是循环轮播
         type: Boolean,
         default: true
       },
       autoPlay: { // 自动播放
         type: Boolean,
         default: true
       },
       interval: { // 自动轮播间隔
         type: Number,
         default: 4000
       }
     },
     mounted() { // 初始化 better-scroll时机(*一般初始化better-scroll不成功，会引起*)
       setTimeout(() => {
         this._setSliderWideth()
         this._initDots()
         this._initSlider()
         if (this.autoPlay) {
           this._play()
         }
       }, 20)// 保证DOM被渲染，做了20ms的延时(*为何值为20？？* 因为浏览器刷新时间一般为17ms一次)
       //
       window.addEventListener('resize', () => {
         if (!this.slider) {
           return
         }
         this._setSliderWideth(true)
         this.slider.refresh()
       })
     },
     methods: {
      // 因为是横向滚动，需计算slide 的宽度并且赋值
       _setSliderWideth(isResize) {
         this.children = this.$refs.sliderGroup.children // 获取整个列表有多少个元素

         let width = 0 // 总的宽度
         let slideWidth = this.$refs.slider.clientWidth // slide 父元素的宽度
         for (let i = 0; i < this.children.length; i++) {
           let child = this.children[i] // 获取每个子元素
           child.classList.add('slider-item') // 添加名为slider-item的类名

           child.style.width = slideWidth + 'px'
           console.log(child.style.width)
           width += slideWidth
         }
         if (this.loop && !isResize) { // 如果slide是需要循环的话，slide会在左右两侧copy两个子元素从而保证循环切换
           width += 2 * slideWidth
         }
         this.$refs.sliderGroup.style.width = width + 'px'
       },
       _initDots() {
         this.dots = new Array(this.children.length)
       },
       _initSlider() { // 初始化slide
         this.slider = new BScroll(this.$refs.slider, {
           scrollX: true, // 横向滚动
           scrollY: false, // 不允许纵向滚动
           momentum: false, // 是否开启动量动画，关闭可以提升效率
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400
         })
         this.slider.on('scrollEnd', () => {
          // 参考文档 https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api-specific.html#getcurrentpage
           let pageIndex = this.slider.getCurrentPage().pageX
           if (this.loop) {
             pageIndex -= 1 // 因为设置自动播放之后，会自动在左右两侧copy两个子元素，所以在设置pageIndex时应减一
           }
           this.currentPageIndex = pageIndex
           if (this.autoPlay) {
             this._play()
           }
         })
         // 参考文档 https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/events.html#beforescrollstart
         this.slider.on('beforeScrollStart', () => {
           if (this.autoPlay) {
             clearTimeout(this.timer)
           }
         })
       },
       _play() {
         let pageIndex = this.currentPageIndex + 1
         if (this.loop) {
           pageIndex += 1
         }
         this.timer = setTimeout(() => {
           this.slider.goToPage(pageIndex, 0, 400)
         }, this.interval)
       }
     }
   }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>