<template>
    <el-container>
      <el-aside width="200px">
        <aside-vue></aside-vue>
      </el-aside>
      <el-container>
        <el-header>
            <header-vue></header-vue>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import asideVue from '../../components/aside.vue';
import headerVue from '../../components/header.vue';

</script>

<style scoped>
.el-container{
    height: 100%;
}
.el-aside{
    width: auto;
}
.el-header{
    padding: 0;
}
</style>