<template>
	<transition name="slide">
	  <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
	</transition>
</template>

<script type="text/ecmascript-6">
	import MusicList from 'components/music-list/music-list'
	import {getSongList} from 'api/recommend'
	import {REE_OK} from 'api/config'
	import {mapGetters} from 'Vuex'
	import {createSong} from 'common/js/song'
	 export default {
	 	computed: {
	 		title() {
	 			return this.disc.dissname
	 		},
	 		bgImage() {
	 			return this.disc.imgurl
	 		},
	 		...mapGetters{[
	 			'disc'
	 		]}
	 	},
	 	data() {
	 		return {
	 			songs: []
	 		}
	 	},
	 	created() {
	 		this._getSongList()
	 	},
	 	methods: {
	 		_getSongList() {
	 			if(!this.disc.dissid) {
	 				this.$router.push('/recommend')
	 				return
	 			}
	 			getSongList(this.disc.dissid).then((res) =>{
	 				if(red.code === ERR_OK){
	 					this.songs = this._normalizeSongs(res.cdlist[0].songlist)
	 				}
	 			})
	 		},
	 		_normalizeSongs(list) {
	 			let ret =[]
	 			list.forEach((musicData) => {
	 				if(musicData.songid && musicData.albummid){
	 					ret.push(createSong(musicData))
	 				}
	 			})
	 			return ret
	 		}
	 	},
	 	components: {
	 		MusicList
	 	}
	 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider-enter-active, .slider-leave-active
    transition: all 0.3s
  .slider-enter, .slider-leave-to
    transform: translate3d(100%, 0, 0)
</style>