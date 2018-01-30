<template>
  <div ref="wrapper">
    <slot></slot>  	
  </div>
</template>

<script type="text/ecmascript-6">
import Better from 'better-scroll'
export default{
  props: {
  	probeType: {
  		type: Number,
  		default: 1
  	},
  	click: {
  		type: Boolean,
  		default: true
  	},
  	listenScroll: {
  		type: Boolean,
  		default: false
  	},
  	data: {
  		type: Array,
  		default: null
  	},
  	pullup: {
  		type: Boolean,
  		default: false
  	},
  	beforeScroll: {
  		type: Boolean,
  		default: false
  	},
  	refreshDelay: {
  		type: Number,
  		default: 20
  	}
  },
  mounted () {
  	setTimeout(()=>{
  		this._initScroll()
  	}, 20)
  },
  methods: {
  	
  }
}
</script>

<style>
</style>