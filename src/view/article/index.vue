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
    <!-- 文章新增开始 -->
    <div style="margin: 10px 0;">
        <el-button type="primary" @click="articleEdit('新增',null)">新增文章</el-button>
    </div>
    <!-- 文章新增结束 -->
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
            <el-button text type="primary" @click="articleInfo(scope.row)">查看</el-button>
            <el-button text type="warning" @click="articleEdit('编辑',scope.row)">编辑</el-button>
            <el-button text type="danger" @click="articleDelete(scope.row)">删除</el-button>
            <el-button text type="success" @click="articleStatus(scope.row.id,scope.row.status)">{{scope.row.status==='未发布'?'发布':'取消'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <info-vue :show="infoDialog" :article-data="articleData" @close="infoDialog=false"></info-vue>
    <edit-vue :show="editDialog" :article-data="articleData" @close="closeDialog"></edit-vue>
</template>
<script lang="ts" setup>
import { onMounted, reactive,Ref,ref } from 'vue'
import { query,deleteArticle,modify } from '../../api/article';
import infoVue from './components/info.vue'
import editVue from './components/edit.vue'
import { ElMessage,ElMessageBox } from 'element-plus';


// 打开新增文章弹窗
function addArticle(){

}
// 传递给子组件数据
const articleData=ref<object>({})
// 打开文章详情弹窗 赋值传给子组件
const infoDialog=ref<boolean>(false)
function articleInfo(row:any){
  infoDialog.value=true
  articleData.value=row
}
// 打开编辑文章弹窗 赋值传给子组件
function articleEdit(type:string,row:any){
  editDialog.value=true
  articleData.value={type,...row}
}
// 控制编辑文章弹窗
const editDialog=ref<boolean>(false)
// 表格条件数据
const formData = reactive({
    title: undefined,
    status: undefined,
})
// 表格条件搜索
const onSubmit = () => {
  articleQuery(formData)
}
// 表格数据
let tableData:Ref<never[]> = ref([])
// 表格查询文章列表
function articleQuery(params:any){
  query(params).then(res=>{
    tableData.value=res.data
  })
}
// dom挂载完毕
onMounted(()=>{
  articleQuery(null)
})
// 编辑文章关闭表格触发刷新
function closeDialog(val:boolean){
  editDialog.value=false
  if(val){
    articleQuery(null)
}
}
// 删除文章
function articleDelete(params:any){
  deleteArticle({id:params.id}).then(()=>{
    ElMessage({
        message:'删除成功',
        type:'success',
        duration:3*1000
    })
    articleQuery(null)
  })
}
function articleStatus(id:number,status: string){
    status==='未发布'?status='已发布':status='未发布'
    let params={
        id,
        status
    }
    ElMessageBox.confirm(
    status==='已发布'?'是否确认发布?':'是否确认取消？',
    status==='已发布'?'文章发布':'文章取消',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        modify(params).then(()=>{
            articleQuery(null)
            ElMessage({
                type: 'success',
                message: status==='已发布'?'文章发布成功':'文章取消成功',
            })
        })
    })
}
</script>

<style scoped>
</style>
