<template>
  <div class="waterfall-width-column">
    <div class="image-box" v-for="item in props.list" :key="item.id">
      <!-- 你要渲染的图片啦，文字一类的代码块 -->
      <img :src="imgUrl(item.url)" alt="">
    </div>
  </div>

</template>
<script setup lang='ts'>
// 图片列表
const props:any=defineProps({
  list:Array
})
function imgUrl(url:any){
  return new URL('http://127.0.0.1:7001/'+url, import.meta.url).href
}

</script>
<style scoped>
.waterfall-width-column {
  column-count: 3;
  column-gap: 10px;
}
img {
  display: block;
  max-width: 100%;
  transition: 0.2s;
}
img:hover{
  transform: scale(1.2);
}
</style>
