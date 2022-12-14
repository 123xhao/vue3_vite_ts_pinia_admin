<template>
    <div style="display: flex;width: 100%;height: 35%;justify-content: space-around;">
        <div id="left"></div>
        <div id="center"></div>
        <div id="right"></div>
    </div>
    <div id="main"></div>
</template>

<script setup lang="ts">
import {onMounted,nextTick} from 'vue'
import {echartsBottom,echartsLeft,echartsRight,echartsCenter} from '../../utils/echarts'
onMounted(()=>{
    nextTick(()=>{
        echartsBottom()
        echartsLeft()
        echartsRight()
        echartsCenter()
    })
})
</script>

<style scoped>
#left,#right,#center{
    width: 500px;
}
#main{
    width: 100%;
    height: 65%;
}

</style>