<template>
    <el-dialog :fullscreen="true" v-model="props.show" title="修改文章内容" width="30%" center @close="close">
        <div style="display: flex;">
            <h3>标题：</h3>
            <el-input style="width: 50%;" v-model="articleTitle" placeholder="请输入标题" />
        </div>
        <div style="border: 1px solid #ccc">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
            />
            <Editor
                style="height: 400px; overflow-y: hidden;"
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                @onCreated="handleCreated"
            />
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="close">取消</el-button>
                <el-button type="primary" @click="onSubmitArticle">
                提交
                </el-button>
            </span>
        </template>
    </el-dialog>
  </template>
  <script lang="ts" setup>
  import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { query,modify } from '../../../api/article';
import { ElMessage } from 'element-plus';

  const props=defineProps({
    show:Boolean,
    id:Number
  })
  let articleTitle=ref<string>('')
  const emit=defineEmits(['close'])
  function close(){
    emit('close')
  }
  


  // 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef()

// 内容 HTML
let valueHtml = ref<any>('')

// 模拟 ajax 异步获取内容
onMounted(() => {
    query({id:9}).then(res=>{
        valueHtml=res.data[0].content
        articleTitle=res.data[0].title
    })
})
function onSubmitArticle(){
    let data={
        id:props.id,
        title:articleTitle,
        content:valueHtml
    }
    modify(data).then(()=>{
        ElMessage({
                message:'修改成功',
                type:'success',
                duration:3*1000
            })
            close()
    })
}
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>
  