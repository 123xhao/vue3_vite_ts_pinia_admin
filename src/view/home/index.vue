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
            closable
            :type="tag.type"
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
import asideVue from '../../components/aside.vue';
import headerVue from '../../components/header.vue';
import { ref } from 'vue'

const pageTags = ref([
  { name: 'Tag 1', type: '' },
  { name: 'Tag 2', type: '' },
  { name: 'Tag 3', type: '' },
  { name: 'Tag 4', type: '' },
  { name: 'Tag 5', type: '' },
])

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
}
</style>