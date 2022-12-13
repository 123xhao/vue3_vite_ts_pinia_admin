<template>
    <div style="display: flex;width: 100%;height: 50%;">
        <div id="left"></div>
        <div id="right"></div>
    </div>
    <div id="main"></div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {echartsBottom,echartsLeft,echartsRight} from '../../utils/echarts'
onMounted(()=>{
    echartsBottom()
    echartsLeft()
    echartsRight()
})

</script>

<style scoped>
#left,#right{
    width: 45%;
    height: 50%;
}
#main{
    width: 100%;
    height: 50%;
}

</style>