<template>
    <div style="display: flex;width: 100%;height: 34%;justify-content: space-between;">
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
    margin-right: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px #ccc;
}
#right{
    margin-right: 0;
}
#main{
    width: 100%;
    height: 65%;
    box-shadow: 0 2px 8px #ccc;
}

</style>
