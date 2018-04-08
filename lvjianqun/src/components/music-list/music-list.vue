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
</script>

<style>
</style>