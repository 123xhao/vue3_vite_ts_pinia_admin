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
      <div class="flex-grow"></div>
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
  import { useRouter } from 'vue-router';
  import {
    Expand,
    Fold,
    User,
    CloseBold
  } from '@element-plus/icons-vue'
import { log } from 'console';
  
  const store=useStore()
  const router=useRouter()
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key)
    switch (key) {
      case '0':
        store.$patch({
          menuFold:!store.$state.menuFold
        })
        break;
      case '2-1':
        router.push('/user/userInfo')
        break;
      case '2-2':
        localStorage.removeItem('token')
        router.push('/')
        break;
      default:
        break;
    }
  }
  onMounted(()=>{
    // 解决elementPlus样式
    const mW = <HTMLElement>document.querySelector('.el-menu--popup')
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
  