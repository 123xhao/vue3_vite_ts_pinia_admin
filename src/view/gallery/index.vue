<template>
    <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="http://127.0.0.1:7001/api/homeImg/upload"
    :headers="uploadHeaders"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :multiple="true"
    list-type="picture"
  >
    <el-button type="primary">添加亿点点图片</el-button>
  </el-upload>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">
      <Waterfall :list="imgData" />
    </el-tab-pane>
    <el-tab-pane label="风景" name="second">风景</el-tab-pane>
    <el-tab-pane label="壁纸" name="third">壁纸</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref,onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { query } from '../../api/user';
import Waterfall from "./components/waterfall.vue";
// 上传图片部分开始
const uploadHeaders={
  Authorization:localStorage.getItem('token')
}
const fileList = ref<UploadUserFile[]>([
])
const imgData=ref<Object[]>([])
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (file) => {
  console.log(file)
}
// 上传图片部分结束
const activeName = ref<string>('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
// 加载图片
onMounted(()=>{
    query().then(res=>{
      imgData.value=res.data
    })
  })
</script>

<style>

</style>
