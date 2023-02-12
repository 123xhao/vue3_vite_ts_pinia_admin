<template>
    <el-form :inline="true" :model="formData" class="demo-form-inline">
        <el-form-item label="标题">
            <el-input v-model="formData.title" placeholder="请输入你要看的" />
        </el-form-item>
        <el-form-item label="状态">
        <el-select v-model="formData.status" placeholder="你看啥状态">
            <el-option label="未发布" value="未发布" />
            <el-option label="已发布" value="已发布" />
        </el-select>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
    >
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="lookNumber" label="评论数" />
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="status" label="发布状态" />
      <el-table-column label="操作" width="300">
        <template #default="scope">
            <el-button text type="primary" @click="infoDialog=true">查看</el-button>
            <el-button text type="success" @click="editDialog=true">编辑</el-button>
            <el-button text type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <info-vue :show="infoDialog" @close="infoDialog=false"></info-vue>
    <edit-vue :show="editDialog" @close="editDialog=false"></edit-vue>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, reactive,Ref,ref } from 'vue'
  import { query } from '../../api/article';
  import infoVue from './components/info.vue';
  import editVue from './components/edit.vue'

  const infoDialog=ref<boolean>(false)
  const editDialog=ref<boolean>(false)
const formData = reactive({
    title: undefined,
    status: undefined,
})

const onSubmit = () => {
  articleQuery(formData)
}
  
  let tableData:Ref<never[]> = ref([])
  function articleQuery(params:any){
    query(params).then(res=>{
        tableData.value=res.data
    })
  }

  onMounted(()=>{
    articleQuery(null)
  })
  </script>
  
  <style scoped>
  .el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }
  .el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
  </style>
  