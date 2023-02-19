<template>
    <el-dialog :fullscreen="true" v-model="props.show" center @close="close">
        <v-md-preview :text="props.articleData.contentText"></v-md-preview>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
//  接收父组件传值
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
function close(){
  emit('close')
}
  
</script>
<style scoped>
</style>
  