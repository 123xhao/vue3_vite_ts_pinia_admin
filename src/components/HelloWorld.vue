<script setup lang="ts">
import useStore from '../store';
import { computed,onMounted } from 'vue';
import { login } from '../api/user'
const store=useStore()
const countNum=computed(()=>{
  return store.$state.count
})
const onClick=()=>{
  let num =countNum.value
  num=num+1
  store.$patch({
    count:num
  })
}
onMounted(()=>{
  login({account:'admin',password:'123456'}).then(res=>{
    console.log(res);
    
  })
})
</script>

<template>
  <button type="button" @click="onClick">count is {{ countNum }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
