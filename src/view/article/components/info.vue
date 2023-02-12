<template>
    <el-dialog v-model="props.show" title="Warning" width="30%" center @close="close">
      <span>
        It should be noted that the content will not be aligned in center by
        default
      </span>
    </el-dialog>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const infoDialog = ref(false)
  const props=defineProps({
    show:Boolean
  })
  const emit=defineEmits(['close'])
  function close(){
    emit('close')
  }
  
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>
  