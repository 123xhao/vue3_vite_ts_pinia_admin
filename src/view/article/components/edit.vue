<template>
    <el-dialog :fullscreen="true" v-model="props.show" title="修改文章内容" center @close="close">
      <div style="margin-bottom: 10px">
        <el-input v-model="title" placeholder="请输入文章标题" clearable />
      </div>
      <v-md-editor @save="articleSave" v-model="props.articleData.contentText" height="80vh"></v-md-editor>
    </el-dialog>
</template>
<script lang="ts" setup>

import { onBeforeUnmount, ref, shallowRef, onMounted, watch } from 'vue'
import { add,modify } from '../../../api/article';
import { ElMessage } from 'element-plus';
// 接收父组件传值
const props=defineProps({
    show: {
        type:Boolean,
        default:false
    },
    articleData: {
        type:Object,
        default:()=>{}
    },
})
// 向父组件传值
const emit=defineEmits(['close'])
function close(val:boolean){
  title.value=''
  emit('close',val)
}
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 文章修改及新增
const title=ref<string>(props.articleData.title)
function articleSave(text:any,html:any){
  if(props.articleData.type==='新增'&&!title.value){
    ElMessage({
      message:'请输入文章标题',
      type:'warning',
      duration:3*1000
    })
    return
  }
    let data={
        id:Number,
        title:title.value,
        contentText:text,
        contentHtml:html
    }
    if(props.articleData.type==='编辑'){
        data.id=props.articleData.id,
        // 编辑文章
        modify(data).then(()=>{
          ElMessage({
            message:'修改成功',
            type:'success',
            duration:3*1000
          })
          close(true)
        })
    }else if(props.articleData.type==='新增'){
        // 新增文章
        add(data).then(()=>{
          ElMessage({
            message:'新增成功',
            type:'success',
            duration:3*1000
          })
          close(true)
        })
    }
}
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
.el-input{
  height: 50px;
  font-size: 24px;
  border-bottom: 2px solid #ccc;
}
:deep(.el-input__wrapper){
  box-shadow: none;
}
</style>
