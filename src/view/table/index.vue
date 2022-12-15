<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="要看点啥">
        <el-input v-model="formInline.user" placeholder="请输入你要看的" />
        </el-form-item>
        <el-form-item label="要看点啥">
        <el-input v-model="formInline.user" placeholder="请输入你要看的" />
        </el-form-item>
        <el-form-item label="要看点啥">
        <el-input v-model="formInline.user" placeholder="请输入你要看的" />
        </el-form-item>
        <el-form-item label="有啥条件">
        <el-select v-model="formInline.region" placeholder="你有啥条件">
            <el-option label="一点点💴" value="shanghai" />
            <el-option label="多一点💴" value="beijing" />
        </el-select>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  interface User {
    date: string
    name: string
    address: string
  }
  
const formInline = reactive({
    user: '',
    region: '',
})

const onSubmit = () => {
  console.log('submit!')
}
  const tableRowClassName = ({
        row,
        rowIndex,
    }: {
        row: User
        rowIndex: number
    }) => {
        if (rowIndex === 1) {
        return 'warning-row'
        } else if (rowIndex === 3) {
        return 'success-row'
        }
        return ''
    }
  
  const tableData: User[] = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script>
  
  <style scoped>
  .el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
  }
  .el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
  }
  </style>
  