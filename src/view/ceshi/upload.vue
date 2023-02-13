<template>
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="http://127.0.0.1:7001/api/homeImg/upload"
      :headers="uploadHeaders"
      method="post"
      multiple
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="3"
      :on-exceed="handleExceed"
    >
      <el-button type="primary">Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </el-upload>
    <el-image style="width: 100px; height: 100px" :src="url" />
  </template>
  <script lang="ts" setup>
  import { onMounted, ref,reactive } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { query } from '../../api/user';
  
  import type { UploadProps, UploadUserFile } from 'element-plus'
  
  const fileList = ref<UploadUserFile[]>([])
  const uploadHeaders={
    Authorization:localStorage.getItem('token')
  }
  let url=ref<string>('')
  onMounted(()=>{
    query().then(res=>{
      console.log(res)
        url.value=new URL('http://127.0.0.1:7001/'+res.data[0].url, import.meta.url).href
        console.log(url); 
    })
  })
  
  const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file, uploadFiles)
  }
  
  const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
  }
  
  const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
      `The limit is 3, you selected ${files.length} files this time, add up to ${
        files.length + uploadFiles.length
      } totally`
    )
  }
  
  const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
      `Cancel the transfert of ${uploadFile.name} ?`
    ).then(
      () => true,
      () => false
    )
  }
  </script>
  