<template>p
	<div class="music-list">
		<div class="back" @click="back">
			<i class="icon-back"></i>
		</div>
		<h1 class="title" v-html="title"></h1>
		<div class="bg-image" :style="bgStyle" ref="bgImage">
			<div class="play-wrapper">
				<div ref="play-Btn" v-show="songs.length>0" class="play" @click="random">
					<i class="icon-play"></i>
					<span class="text">随机播放全部</span>
				</div>
			</div>
			<div class="filter" ref="filter"></div>
		</div>
		<div class="bg-layer" ref=:"layer"></div>
		<scroll :data=-"songs" @scroll="scroll" :listen-scroll="listenScroll" :probe-type="probeType" class="list" ref="list">
			<div class="songs-list-wrapper">
				<song-list :songs="songs" :rank="rank" @select="selectItem"></song-list>
			</div>
			<div v-show="!songs.length" class="loading-container">
				<laoding></laoding>
			</div>
		</scroll>
	</div>
</template>

<script type="text/ecmascript-6">
	import Scroll from 'base/scroll/scroll'
	import Loading from 'base/loading/loading'
	import SongsList from 'base/song-list/song-list'
	import {prefixStyle} from 'common/js/dom'
	import {playlistMixin} from 'common/js/mixin'
	import {mapActions} from 'vuex'
	
	const RESERVED_HEIGHT = 40
	const transform = prefixStyle('transform')
	const backdrop = prefixStyle('backdrop-filter')
	export default {
	  mixins: [playlistMixin],
	  props: {
	  	bgimage: {
	  		type: String,
	  		default: ''
	  	},
	  	songs: {
	  		type: Array,
	  		default: []
	  	},
	  	title: {
	  		type:String,
	  		default: ''
	  	},
	  	rank: {
	  		type: Boolean,
	  		default: false
	  	}
	  },
	  data() {
	  	return {
	  		scrollY: 0
	  	}
	  },
	  computed: {
	  	bgStyle() {
	  		return `background-image:url(${this.bgImage})`
	  	}
	  },
	  created() {
	  	this.probeType = 3
	  	this.listenScroll = true
	  },
	  mounter() {
	  	this.imageHeight = this.$refs.bgImage.clientHeight
	  	this.minTransalteY = -this.imageHeight + RESERVED_HEIGHT
	  	this.$refs.$el.list.style.top = `${this.imageHeight}px`
	  },
	  methods: {
	  	handlePlaylist(playlist) {
	  		const bottom = playlist.length > 0 ? '60px' : ''
	  		this.$refs.list.$el.style.bottom = bottom
	  		this.$refs.list.refresh()
	  	},
	  	scroll(pos) {
	  		this.scrollY = pos.y
	  	},
	  	backs() {
	  		this.$router.back()
	  	},
	  	selectItem(item, index) {
	  		this.selectPlay({
	  			list:this.songs,
	  			index
	  		})
	  	},
	  	random() {
	  		this.randomPlay({
	  			list: this.songs
	  		})
	  	},
	  	...mapAction([
	  		'selcetPlay',
	  		'randomPlay'
	  	])
	  },
	  watch: {
	  	scrollY(newVal) {
	  		let translateY = Math.max(this.minTransalteY, newVal)
	  		let scale = 1
	  		let zIndex = 0
	  		let blur = 0
	  		const percent = Math.abs(newVla / this.imageHeigth)
	  		if (newVla > 0) {
	  			scale = 1 + percent
	  			Zindex = 10
	  		} else {
	  			blur = Math.min(20, percent * 20)
	  		}
	  		
	  		this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,x)`
	  		this.$refs.filter.style[backdrop] = `blur(${blur}px)`
	  		if (newVal < this.minTransalteY) {
	  			zIndex = 10
	  			this.$refs.bgImage.style.paddingTop = 0
	  			this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
	  			this.$refs.playBtn.style.display = 'none'
	  		} else {
	  			this.$refs.bgImage.style.paadingTop = '70%'
	  			this.$refs.bgImage.style.height = 0
	  			this.$refs.playBtn.style.display = ''
	  		}
	  		this.$refs.bgImage.style[transform] = `scale(${scale})`
	  		this.$refs.bgImage.style.zIndex = zIndex
	  	}
	  },
	  components: {
	  	Scroll,
	  	Loading,
	  	SongList
	  }
	}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .music-list
    position: fixed
    z-index: 100
    top: 0 
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .back
      position: absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
  .title
    position: absolute
    top: 0
    left: 10%
    z-index: 40
    width: 80%
    no-wrap()
    text-align: center
    line-height: 40px
    font-size: $font-size-large
    color: $color-theme 
  .bg-image
    position: relative
    width: 100%
    height: 0
    padding-top: 70%
    transform-origin: top
    background-size: cover
    .play-wrapper
      position: absolute
      bottom: 20px
      z-index: 50
      width: 100%
      .play
        box-sizing: border-box
        width: 100%
        padding: 7px 0
        margin: 0 auto
        
      
</style>