<template>
  <ul class="switches">
    <li class="switch-item" v-for="(item,index) in switches" :class="{'active':currentIndex === index}" @click="switechItem(index)"></li>
  	<span>{{item.name}}</span>
  </ul>
</template>

<script type="text/ecmascript-6">
export default{
  name: 'switch'
}
</script>

<style>
.switches{
  display: flex;
  align-items: center;
  width: 240px;
  margin: 0 auto;
  border: 1px solid #333333;
  border-radius: 5px;
}
</style>