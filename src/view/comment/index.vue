<template>
    <el-form :inline="true" :model="formData" class="demo-form-inline">
        <el-form-item label="QQ号">
            <el-input v-model="formData.qqNumber" placeholder="请输入QQ号" />
        </el-form-item>
        <el-form-item label="昵称">
        <el-select v-model="formData.nickName" placeholder="请输入昵称">
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
      <el-table-column prop="qqNumber" label="QQ号"/>
      <el-table-column prop="nickName" label="昵称" />
      <el-table-column prop="createTime" label="评论时间" />
      <el-table-column prop="content" label="评论内容" />
    </el-table>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
type formDataType={
    nickName:string|null,
    qqNumber:number|null
}
const formData=reactive<formDataType>({
    nickName:null,
    qqNumber:null
})
const tableData=ref<object[]>([])
function getData(){}
function onSubmit(){}

</script>