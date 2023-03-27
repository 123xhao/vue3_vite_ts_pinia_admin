<template>
    <div class="box">
      <div class="bgCenter">
        <div :class="['text', userForm.userName?'has-content':'']">
          <input v-model="userForm.userName" type="text">
          <label>账户</label>
          <span class="focus-border"></span>
        </div>
        <div :class="['password', userForm.passWord?'has-content':'']">
          <input v-model="userForm.passWord" type="password">
          <label>密码</label>
          <span class="focus-border"></span>
        </div>
      </div>
      <div class="operationBox">
        <button @click="login" class="custom-btn btn-7"><span>登 录</span></button>
      </div>
      <three></three>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { loginUser,userInfo } from '../../api/user';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import Three from '../three/index.vue'
const router =useRouter()
const userForm=reactive({
    userName:'',
    passWord:''
})

const login = () => {
  if(!userForm.userName){
    ElMessage({
      message:'请输入账户',
      type:'warning',
      duration:3*1000
    })
    return
  }
  if(!userForm.passWord){
    ElMessage({
      message:'请输入密码',
      type:'warning',
      duration:3*1000
    })
    return
  }
    loginUser(userForm).then((res: any)=>{
        ElMessage({
            message:'登录成功',
            type:'success',
            duration:3*1000
        })
        localStorage.setItem('token',res.data.token)
        setTimeout(()=>{
            userInfo().then(res=>{
                let data=JSON.stringify(res.data)
                sessionStorage.setItem('userInfo', data);
            })
        },1000)
        router.push('/home')
    })
}

</script>

<style scoped>
.box{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bgCenter{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
input{
  height: 72px;
  width: 400px;
  border: none;
  background: none;
  font-size: 48px;
  color: skyblue;
}
/*= input focus effects css
=========================== */
:focus{outline: none;}
/*= input type=password 颜色修改
=========================== */
input[type="password"]::-ms-reveal{
  display: none;
}
.text{
  position: relative;
  margin-bottom: 80px;
}
.password{
  position: relative;
}
.text input:focus ~ .focus-border,
.password input:focus ~ .focus-border
{
  width: 100%;
  transition: 0.4s;
  left: 0;
}
.focus-border{
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: skyblue;
  transition: 0.4s;
}
/*input有值状态下显示内容*/
.has-content .focus-border{
  width: 100%;
  transition: 0.4s;
  left: 0;
}
label{
  position: absolute;
  top: 50%;
  left: 87%;
  transform: translate(-50%,-50%);
  width: 100%;
  transition: 0.4s;
  color: skyblue;
  font-size: 48px;
  z-index: -1;
}
.text input:focus ~ label,
.password input:focus ~ label
{
  top: 0;
  left: 0;
  transform: translateY(-100%);
}
/*input有值状态下显示内容*/
.has-content label{
  top: 0;
  left: 0;
  transform: translateY(-100%);
}
.operationBox{
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
}
.custom-btn {
  width: 200px;
  height: 80px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 32px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 2px 2px 2px 0 rgba(255,255,255,.5),
  7px 7px 20px 0 rgba(0,0,0,.1),
  4px 4px 5px 0 rgba(0,0,0,.1);
  outline: none;
}
/* 7 */
.btn-7 {
  background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  line-height: 80px;
  padding: 0;
  border: none;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(2,126,251,1);
  box-shadow:
      -7px -7px 20px 0 rgba(255,255,255,.9),
      -4px -4px 5px 0 rgba(255,255,255,.9),
      7px 7px 20px 0 rgba(0,0,0,.2),
      4px 4px 5px 0 rgba(0,0,0,.3);
  transition: all 0.3s ease;
}
.btn-7:before{
  height: 0;
  width: 2px;
}
.btn-7:after {
  width: 0;
  height: 2px;
}
.btn-7:hover{
  color: rgba(2,126,251,1);
  background: transparent;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(2,126,251,1);
  box-shadow:
      -7px -7px 20px 0 rgba(255,255,255,.9),
      -4px -4px 5px 0 rgba(255,255,255,.9),
      7px 7px 20px 0 rgba(0,0,0,.2),
      4px 4px 5px 0 rgba(0,0,0,.3);
  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0;
}
.btn-7 span:after {
  height: 2px;
  width: 0;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}

</style>
