<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      menu-trigger="click"
    >
      <el-menu-item style="height:auto;" index="0">
        <el-icon size="48px" v-if="store.$state.menuFold"><Expand /></el-icon>
        <el-icon size="48px" v-else><Fold /></el-icon>
      </el-menu-item>
      <div class="flex-grow" />
      <!-- <el-menu-item index="1">
        <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </el-menu-item> -->
      <el-sub-menu index="2">
        <template #title>
            <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </template>
        <el-menu-item index="2-1"><el-icon><User /></el-icon>个人中心</el-menu-item>
        <el-menu-item index="2-2"><el-icon><CloseBold /></el-icon>退出登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref,onMounted } from 'vue'
  import useStore from '../store';
  import {
    Expand,
    Fold,
    User,
    CloseBold
  } from '@element-plus/icons-vue'
  
  const store=useStore()
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if(key==='0'){
        store.$patch({
            menuFold:!store.$state.menuFold
        })
    }
  }
  onMounted(()=>{
    // 解决elementPlus样式
    const mW = document.querySelector('.el-menu--popup')
    if(mW){
        mW.style.minWidth='auto'
    }
  })
  </script>
  
  <style scoped>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  