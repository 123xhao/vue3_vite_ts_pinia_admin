<template>
    <div class="d_space-between">
        <el-card class="user-box-card" header="个人信息">
            <div class="d_center">
                <el-image
                    style="width: 100px; height: 100px"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    fit="cover"
                    />
            </div>
            <el-divider />
            <div v-for="item in userData">
                <div class="d_space-between">
                    <div class="d_center">
                        <el-icon><Avatar /></el-icon>
                        <span style="font-weight: 550;">{{item.title}}</span>
                    </div>
                    <div style="font-size: 14px;">
                        {{item.value}}
                    </div>
                </div>
                <el-divider />
            </div>
        </el-card>
        <el-card class="base-data-card" header="基本资料">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="基本资料" name="first">
                    <el-form
                        ref="ruleFormRef"
                        :model="baseData"
                        status-icon
                        :rules="rules"
                        class="demo-ruleForm"
                    >
                        <el-form-item label="用户昵称" prop="nickName">
                        <el-input v-model="baseData.nickName" type="text" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="手机号码" prop="phone">
                        <el-input
                            v-model="baseData.phone"
                            type="text"
                            autocomplete="off"
                        />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">保存</el-button>
                            <el-button>关闭</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="修改密码" name="second">
                    <el-form
                        ref="modify"
                        :model="modifyData"
                        status-icon
                        :rules="rules"
                        class="demo-ruleForm"
                    >
                        <el-form-item label="旧密码" prop="oldPassword">
                          <el-input v-model="modifyData.oldPassword" type="password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="新密码" prop="newPassword">
                          <el-input v-model="modifyData.newPassword" type="password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="确认密码" prop="confirmPassword">
                          <el-input v-model="modifyData.confirmPassword" type="password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">保存</el-button>
                            <el-button>关闭</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import {
    Avatar,
  } from '@element-plus/icons-vue'
import { reactive,ref } from 'vue';
import type { FormInstance, TabsPaneContext } from 'element-plus'
  const userData=reactive([
    {
        title:'用户昵称',
        icon:'Avatar',
        value:'一只蟹'
    },
    {
        title:'手机号码',
        icon:'Avatar',
        value:'18888888888'
    },
    {
        title:'所属部门',
        icon:'Avatar',
        value:''
    },
    {
        title:'所属角色',
        icon:'Avatar',
        value:'管理员'
    },
    {
        title:'创建日期',
        icon:'Avatar',
        value:'2022-12-13 14:28'
    }
  ])
  const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}


const ruleFormRef = ref<FormInstance>()
const baseData=reactive({
    nickName:'一只蟹',
    phone:'18888888888'
})
const modifyData=reactive({
    oldPassword:'',
    newPassword:'',
    confirmPassword:''
})
const rules = reactive({
  nickName:  [{ required: true, message: '请填写用户昵称', trigger: 'blur' }],
  phone: [{ required: true, message: '请填写手机号码', trigger: 'blur' }],
  oldPassword:  [{ required: true, message: '请填写旧密码', trigger: 'blur' }],
  newPassword: [{ required: true, message: '请填写新密码', trigger: 'blur' }],
  confirmPassword:  [{ required: true, message: '请填写确认密码', trigger: 'blur' }],
})
</script>

<style scoped>
.user-box-card {
  width: 300px;
  margin-right: 10px;
}
.base-data-card{
    width: 90%;
    align-self: flex-start;
}
.el-divider--horizontal{
    margin: 10px 0;
}
</style>