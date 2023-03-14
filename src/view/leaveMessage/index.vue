<template>
    <el-form :inline="true" :model="formData" class="demo-form-inline">
        <el-form-item label="QQ号">
            <el-input v-model="formData.qqNumber" placeholder="请输入QQ号" />
        </el-form-item>
        <el-form-item label="昵称">
            <el-input v-model="formData.nickName" placeholder="请输入昵称" />
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
      <el-table-column prop="qqCode" label="QQ号"/>
      <el-table-column prop="nickName" label="昵称" />
      <el-table-column prop="createTime" label="留言时间" />
      <el-table-column prop="content" label="留言内容" />
      <el-table-column prop="avatarUrl" label="用户头像">
        <template #default="scope">
            <el-avatar :size="40" :src="scope.row.avatarUrl" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
            <el-button text type="danger" @click="leaveMessageDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { query,deleteLeaveMessage } from '../../api/leaveMessage';
import { ElMessage } from 'element-plus'
type formDataType={
    nickName:string|null,
    qqNumber:number|null
}
const formData=reactive<formDataType>({
    nickName:null,
    qqNumber:null
})
const tableData=ref<object[]>([])
function getData(data:any){
    query(data).then((res:any)=>{
        tableData.value=res.data
    })
}
onMounted(()=>{
    getData(null)
})
function leaveMessageDelete(id:number){
    deleteLeaveMessage({id}).then(()=>{
        ElMessage({
            message:'删除成功！',
            type:'success'
        })
        getData(null)
    })
}
function onSubmit(){
    getData(formData)
}
</script>