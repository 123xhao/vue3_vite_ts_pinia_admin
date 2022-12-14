<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="menuChange"
    >
      <el-menu-item class="noHover" index="0">
        <el-avatar style="margin-right: 10px;" size="100" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        <template #title>vue3-admin</template>
      </el-menu-item>
      <el-menu-item index="1">
        <el-icon><setting /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><location /></el-icon>
        <template #title>我的信息</template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref,computed } from 'vue'
  import useStore from '../store';
  import { useRouter } from 'vue-router';
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  
  const store=useStore()
  const router=useRouter()
  const isCollapse =computed(()=>{
    return store.$state.menuFold
  }) 
  const menuChange = (key: string) => {
    switch (key) {
      case '1':
        router.push('/homepage')
        break;
      case '2':
        router.push('/user/userInfo')
        break;
      default:
        break;
    }
  }
  </script>
  
  <style scoped>
  .noHover:hover{
    background: skyblue;
    color: #000;
  }
  .noHover{
    color: #000;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
    background: skyblue;
  }
  .el-menu--collapse{
    background: skyblue;
    height: 100%;
  }
  </style>
  