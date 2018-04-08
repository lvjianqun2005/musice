import {mapGetters, mapMutations, MapActions} from 'vuex'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'
export const playlistMixin = {
	computed: {
		...mapGetters([
			'playlist'
		])
	},
	mounted() {
		this.handlePlaylist(this.playlist)
	},
	activated() {
		this.handlePlaylist(this.playlist)
	},
	watch:{
		playlist(newVal){
			this.handlePlaylist(newVal)
		}
	},
	mothods: {
		handlePlaylist(){
			throw new Error('component must implement handlePlaylist method')
		}
	}
}
