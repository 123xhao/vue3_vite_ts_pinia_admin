<template>
    <el-container>
      <el-aside width="200px">
        <aside-vue></aside-vue>
      </el-aside>
      <el-container>
        <el-header>
            <header-vue></header-vue>
        </el-header>
        <div class="pages">
          <el-tag
            v-for="tag in pageTags"
            :key="tag.name"
            class="mx-1"
            :closable="tag.closable"
            :type="tag.type"
            @click="tagsChange(tag.path)"
            style="margin-right: 10px;"
          >
            {{ tag.name }}
          </el-tag>
        </div>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import AsideVue from '../../components/aside.vue';
import HeaderVue from '../../components/header.vue';
import { ref,computed } from 'vue'
import { useRouter } from 'vue-router';
import useStore from '../../store';
const router=useRouter()
const store=useStore()
const pageTags = computed(()=>{
  return store.$state.tagMenuList
})
function tagsChange(path:any) {
  store.$patch({
    checkMenu:path
  })
  pageTags.value.forEach(item=>{
    item.type='info'
    if(item.path===path){
      item.type=''
    }
  })
  router.push(path)
}
</script>

<style scoped>
.el-container{
    height: 100%;
}
.el-aside{
    width: auto;
}
.el-header{
    height: auto;
    padding: 0;
}
.pages{
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.pages .el-tag:hover{
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.pages .el-tag:hover::v-deep .el-tag__close{
  color: #409eff;
}
.pages .el-tag::v-deep .el-tag__close:hover {
  color: #fff;
  background-color: #409eff;
}
</style>