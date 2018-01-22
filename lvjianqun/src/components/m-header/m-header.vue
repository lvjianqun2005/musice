<template>
    <div class="m-header">
        <div class="icon"></div>
        <h1 class="text">网 易 云 音 乐</h1>
    </div>
</template>
<script type="text/ecmascript-6">
export default{
  name: 'Header'
}
</script>
<style>
  .m-header{
    height: 44px;
    position: relative;
    text-align: center;
    font-size:0;
    color: #ffcd32;
    }
  .icon{
    display: inline-block;
    vertical-align:tap;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    background-image:url('./logo.png');
    background-size:30px 32px ;
    }
  .text{
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: 18px;
    }
</style>
