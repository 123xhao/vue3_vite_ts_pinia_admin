<template>
    <el-menu
      :default-active="checkMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="menuChange"
    >
      <el-menu-item disabled class="noHover" index="0">
        <el-avatar fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        <template #title><span style="margin-left: 10px;">vue3-admin</span></template>
      </el-menu-item>
      <el-menu-item index="/homepage">
        <el-icon><setting /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/user/userInfo">
        <el-icon><location /></el-icon>
        <template #title>我的信息</template>
      </el-menu-item>
      <el-menu-item index="/home/table">
        <el-icon><location /></el-icon>
        <template #title>表格信息</template>
      </el-menu-item>
      <el-menu-item index="/ceshi/upload">
        <el-icon><location /></el-icon>
        <template #title>测试</template>
      </el-menu-item>
      <el-menu-item index="/article">
        <el-icon><Files /></el-icon>
        <template #title>文章管理</template>
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
    Files
  } from '@element-plus/icons-vue'
import { el } from 'element-plus/es/locale';
  
  const store=useStore()
  const router=useRouter()
  const isCollapse =computed(()=>{
    return store.$state.menuFold
  })
  const checkMenu=computed(()=>{
    return store.$state.checkMenu
  })
  const menuChange = (key: string,) => {

    let data: { name: string; type: string; closable: boolean; path: string; }[]=store.tagMenuList
    let old: string[]=[]
    let add: { name: string; type: string; closable: boolean; path: string; }[]=[]

    switch (key) {
      case '/homepage':
          data.forEach((item,index)=>{
            item.type='info'
            if(index===0){
              item.type=''
            }
          })
        router.push('/homepage')
        break;
      case '/user/userInfo':
        store.$patch((store)=>{
          data.forEach(item=>{
            item.type='info'
            old.push(item.path)
          })
          if(old.includes('/user/userInfo')){
            let index = old.indexOf('/user/userInfo')
            data[index]={
                name: '我的信息',
                type: '',
                closable: true,
                path: '/user/userInfo'
            }
          }else{
            add.push({
                name: '我的信息',
                type: '',
                closable: true,
                path: '/user/userInfo'
              })
          }
          store.tagMenuList=[...data,...add]
        })
        router.push('/user/userInfo')
        break;
      case '/home/table':
        store.$patch((store)=>{
            data.forEach(item=>{
              add=[]
              item.type='info'
              old.push(item.path)
            })
            if(old.includes('/home/table')){
              let index = old.indexOf('/home/table')
              data[index]={
                  name: '表格信息',
                  type: '',
                  closable: true,
                  path: '/home/table'
              }
            }else{
              add.push({
                  name: '表格信息',
                  type: '',
                  closable: true,
                  path: '/home/table'
                })
            }
            store.tagMenuList=[...data,...add]
          })
        router.push('/home/table')
        break;
        case '/ceshi/upload':
            console.log(1);
            
        store.$patch((store)=>{
            data.forEach(item=>{
              item.type='info'
              old.push(item.path)
            })
            if(old.includes('/ceshi/upload')){
              let index = old.indexOf('/ceshi/upload')
              data[index]={
                  name: '测试',
                  type: '',
                  closable: true,
                  path: '/ceshi/upload'
              }
            }else{
              add.push({
                  name: '测试',
                  type: '',
                  closable: true,
                  path: '/ceshi/upload'
                })
            }
            store.tagMenuList=[...data,...add]
          })
        router.push('/ceshi/upload')
        break;
        case '/article':
            console.log(1);
            
        store.$patch((store)=>{
            data.forEach(item=>{
              item.type='info'
              old.push(item.path)
            })
            if(old.includes('/article')){
              let index = old.indexOf('/article')
              data[index]={
                  name: '测试',
                  type: '',
                  closable: true,
                  path: '/article'
              }
            }else{
              add.push({
                  name: '文章管理',
                  type: '',
                  closable: true,
                  path: '/article'
                })
            }
            store.tagMenuList=[...data,...add]
          })
        router.push('/article')
        break;
      default:
        break;
    }
  }
  </script>
  
  <style scoped>
  .el-menu-item.is-disabled{
    opacity: 10;
    cursor: pointer;
  }
  .noHover:hover{
    background: skyblue;
    color: #000;
  }
  .noHover{
    color: #000;
    padding: 0;
  }
  .noHover::v-deep .el-menu-tooltip__trigger{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0
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
  