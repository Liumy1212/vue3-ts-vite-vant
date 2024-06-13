<script setup lang="ts">
import { ref,reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getCode, login } from '@/api/user';
import { userStore } from '@/store/user';
import { Toast } from 'vant';
const store = userStore()
const state = reactive({
  checked: true,
  accounts: '',
  code: '',
  codeText: '获取验证码',
  time: 60,
  interTimeCode: null
})
// const onClickLeft = () => history.back()
const getCodeChange = async () => {
  if(state.interTimeCode) return;
  const res = await getCode({
    accounts: state.accounts
  })
  if(res){
    // 验证码倒计时
    state.interTimeCode = setInterval(()=>{
      state.time--
      if(state.time<=0){
        clearInterval(state.interTimeCode)
        state.time = 60
        state.codeText = '获取验证码'
      }else{
        state.codeText = '重新发送('+state.time+'s)'
      }
    },1000)
    // 手机接收码采用接口返回
    state.code = res.code
  }
}




const router = useRouter()
const registerSubmit = async () => {
   router.push('/login')
}


const pushToLogin = () => {
  router.push("/login")
}

const pushToRegister = () => {
  router.push("/login/loginAccount")
}
</script>

<template>
  <div>
    <!-- <van-icon class="icon-left" name="arrow-left" @click-left="onClickLeft" /> -->
    <div class="login-form">
      <h3>账号注册</h3>
      <div class="login-form-item">
        <i class="icon-phone"></i>
        <input placeholder="请输入手机号" v-model="state.accounts" type="text" />
      </div>
      <div class="login-form-item">
        <i class="icon-phone"></i>
        <input placeholder="请输入账号"  type="text" />
      </div>
      <div class="login-form-item">
        <i class="icon-phone"></i>
        <input placeholder="请输入密码"  type="text" />
      </div>
      <div class="login-form-item">
        <i class="icon-code"></i>
        <input placeholder="请输入验证码" v-model="state.code" type="text" />
        <span @click="getCodeChange">{{state.codeText}}</span>
      </div>

      <van-button type="primary" block @click="registerSubmit">注册</van-button>
      <div class="login-form-label">
        <van-checkbox v-model="state.checked">我已阅读</van-checkbox>
        <router-link to="/login/serviceAgree">《IT企业平台服务协议》</router-link>和
        <router-link to="/login/privacyPolicy">《隐私政策》</router-link>
      </div>
    </div>

    <div class="login-method-change">
      <div>
        <button class="login-account" @click="pushToLogin">
          <i class="icon-account"></i>
          <span>手机号登录</span>
        </button>
        <button class="login-register" @click="pushToRegister">
          <i class="icon-register"></i>
          <span>账号登录</span>
        </button>        
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-left{
  font-size: 0.8rem;
  margin: 0.67rem 0 0 0.67rem;
}
.login-form{
  padding: 0 1.07rem;
}
.login-form h3{
  font-size: 1.39rem;
  line-height: 1.39rem;
  font-weight: 400;
  color: #333333;
  margin-top: 2.35rem;
  margin-bottom: 4rem;
  padding-left: 0.3rem;
}
.login-form-item{
  display: flex;
  font-size: 0.75rem;
  font-weight: 300;
  color: #9FA7AD;
  margin: 0 0.18rem 2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #E7E7E7;
  align-items: center;
}
.icon-phone{
  background: url('@/assets/img/icon/icon-phone.png') no-repeat;
  background-size: 100%;
  width: 1.01rem;
  height: 1.01rem;
}
.icon-code{
  background: url('@/assets/img/icon/icon-code.png') no-repeat;
  background-size: 100%;
  width: 1.01rem;
  height: 1.01rem;
}
.login-form-item input{
  flex: 1;
  margin-left: 0.48rem;
}
.login-form-item span{
  font-size: 0.75rem;
  font-weight: 300;
  color: #007bff;
  border-left: 1px solid #007bff;
  line-height: 0.75rem;
  padding-left: 0.56rem;
}
.login-form-label{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
}


>>> .van-button--primary{
  width: 10rem;
  padding: 1.25rem 1rem;
  margin: 0 auto;
  
}


.login-method-change{
  margin: 5rem auto;
  display: flex;
  justify-content: center;
}

.login-method-change {
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}

.login-method-change > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-account,
.login-register {
  display: flex;
  align-items: center;
  background-color: #007bff;
  border-radius: 0.8rem;
  margin: 1.5rem 0;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 10rem; /* Adjust as needed */
}

.login-account:hover,
.login-register:hover {
  background-color: #0056b3;
}

.login-account i,
.login-register i {
  margin-right: 0.5rem;
  background-size: contain;
  width: 1.2rem;
  height: 1.2rem;
}

.login-account router-link,
.login-register router-link{
  color: #333333;
}

.icon-account {
  background: url('@/assets/img/icon/icon-phone.png') no-repeat;
}

.icon-register {
  background: url('@/assets/img/icon/icon-register.png') no-repeat;
}
</style>
