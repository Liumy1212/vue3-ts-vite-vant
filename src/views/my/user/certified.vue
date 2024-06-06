<script setup lang="ts">
  import {reactive} from 'vue'
  import {addAuthReal} from '@/api/my'
  import {Toast} from 'vant'
  import UploadImage from '../components/UploadImage.vue'
  import {myStore} from '@/store/my'
  const store = myStore()
  const state = reactive({
    name: '',
    number: '',
    idCardJust: '',
    idCardBack: ''
  })
  const submit = async () => {
    if(!state.name){
        Toast('请输入真实姓名')
        return
    }
    if(!state.number){
        Toast('请输入证件号码')
        return
    }
    if(!state.idCardJust){
        Toast('请输入身份证正面')
        return
    }
    if(!state.idCardBack){
        Toast('请输入身份证反面')
        return
    }
    const res = await addAuthReal({
        "user_name": state.name, 
        "cert_no": state.number, 
        "idCard_just": state.idCardJust, 
        "idCard_back": state.idCardBack 
    })
    if(res){
        Toast('保存成功')
        history.back()
    }else{
        Toast('保存失败')
    }
  }
  const uploadJust = (value) => {
    state.idCardJust = value
  }
  const uploadBack = (value) => {
    state.idCardBack = value
  }
  const gotoBack = () => history.back()
</script>
<template>
    <van-icon class="back" name="arrow-left" @click="gotoBack" />
    <img class="cert-pic" src="@/assets/img/my/auth-real-certified.png" />
    <h5>已完成实名认证</h5>
    <van-field :model-value="store.userInfo.real_name" label="姓名" readonly placeholder="请输入真实姓名" />
    <van-field :model-value="store.userInfo.idcard" label="证件号码" readonly placeholder="请输入证件号码" />
    <div class="cert-bottom">
        <img src="@/assets/img/my/auth-real-safe.png" />
        <p>信息安全保护中，未经您授权不对外提供</p>
    </div>
</template>
<style scoped>
  >>> .van-field__control{
    text-align: right;
  }
  h5{
    font-size: 0.94rem;
    font-weight: 400;
    color: #FFFFFF;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 13.5rem;
  }
  .back{
    position: absolute;
    top: 1rem;
    left: 0.69rem;
    font-size: 1rem;
    color: #ffffff;
  }
  .cert-pic{
    width: 100%;
  }
  .cert-bottom{
    text-align: center;
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
  }
  .cert-bottom img{
    width: 0.93rem;
    height: 1.07rem;
    margin-bottom: 0.72rem;
  }
  .cert-bottom p{
    font-size: 0.61rem;
    line-height: 0.61rem;
    font-weight: 400;
    color: #999999;
    text-align: center;
  }
</style>