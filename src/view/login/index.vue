<template>
    <div class="load_box">
        <div class="glass"></div>
        <el-form
            ref="ruleFormRef"
            :model="userForm"
            status-icon
            :rules="rules"
            class="demo-ruleForm"
        >
            <el-form-item label="账号" prop="userName">
            <el-input v-model="userForm.userName" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
            <el-input
                v-model="userForm.passWord"
                type="password"
                autocomplete="off"
            />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login(ruleFormRef)">登录</el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
import { loginUser,userInfo } from '../../api/user';
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import { log } from 'console';

const router =useRouter()
const ruleFormRef = ref<FormInstance>()
const userForm=reactive({
    userName:'',
    passWord:''
})
const rules = reactive({
    userName:  [{ required: true, message: '请填写账号', trigger: 'blur' }],
    passWord: [{ required: true, message: '请填写账号密码', trigger: 'blur' }],
})

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
        loginUser(userForm).then((res: any)=>{
            ElMessage({
                message:'登录成功',
                type:'success',
                duration:3*1000
            })
            localStorage.setItem('token',res.token)
            setTimeout(()=>{
                userInfo().then(res=>{
                    let data=JSON.stringify(res)
                    sessionStorage.setItem('userInfo', data);
                })
            },1000)
            router.push('/home')
    })
    } else {
        ElMessage({
            message:'请输入账号及密码',
            type:'warning',
            duration:3*1000
        })
      return false
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style scoped>
.load_box{
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../../assets/bgImg/bg1.png) no-repeat;
    background-size: 100%;
}
.glass{
    width: 100%;
    height: 100%;
    background: url(../../assets/bgImg/bg1.png) no-repeat;
    background-size: 100%;
    clip-path: circle(15% at 50% 55%);
    filter: blur(20px);
}
.el-form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
}
::v-deep .el-form-item__content{
    justify-content: center;
    opacity: 0.8;
}
::v-deep .el-form-item__label{
    color: aqua;
    opacity: 0.5;
}
::v-deep .el-input__wrapper{
    opacity: 0.1;
}
</style>