<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
    	<div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
       <div class="recommend-list">
         <h1 class="listTitle">热门歌单推荐</h1>
         <ul>
         	<li @click="selectItem(item)" class="item" v-for="item in discList">
         		<div class="icon">
         			<img width="60" height="60" v-lazy="item.imgurl"/>
         		</div>
                <div class="text">
                	<h2 class="name" v-html="item.creator.name"></h2>
                	<p class="desc" v-html="item.dissname"></p>
                </div>         	
         	</li>
         </ul>
       </div>
       </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
    import Slider from 'base/slider/slider'
    import Scroll from 'base/scroll/scroll'
	import {getRecommend, getDiscList} from 'api/recommend'
	import {ERR_OK} from 'api/config'
    import {playlistMixin} from '../../common/js/mixin'
	import {mapMutations} from 'vuex'
export default{
	mixins: [playlistMixin],
    data() {
      return {
		json1 :{
			a:true
		},
        recommends: [],
        discList:[]
      }
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''

        this.$refs.recommend.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })


      },
      _getDiscList() {
      	getDiscList().then((res) => {
            this.discList = res.data
            console.log(this.discList)
        })
      },
     ...mapMutations({
        setDisc: 'SET_DISC'
     })
  },

  components: {
      Slider,
      Scroll
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .red
          display:block
          height:200px
          text-align:center
        .listTitle
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display:flex
          box-sizing:border-box
          align-items: center
          padding:0 20px 20px 20px 
          .icon
            flex: 0 60px 60px
            width: 60px
            padding-right:20px   
        .text
          display:flex
          flex-direction:column
          justify:center
          flex:1
          line-height:20px
          font-size:14px
          overflow:hide
          color:#ffffff
          h2
            margin-bottom:10px
            color:#ffffff
          .desc
            color:rgba(255,255,255,0.3)
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)      
</style>
