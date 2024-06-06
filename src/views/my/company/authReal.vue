<script setup lang="ts">
  import {reactive} from 'vue'
  import {companyCertification} from '@/api/my'
  import {Toast} from 'vant'
  import UploadImage from '../components/UploadImage.vue'
  const state = reactive({
    company_name: '',
    organization_code: '',
    contacts: '',
    phone: '',
    permit: ''
  })
  const submit = async () => {
    if(!state.company_name){
        Toast('请输入企业名称')
        return
    }
    if(!state.organization_code){
        Toast('请输入机构代码')
        return
    }
    if(!state.contacts){
        Toast('请输企业法人')
        return
    }
    if(!state.phone){
        Toast('请输入联系电话')
        return
    }
    if(!state.permit){
        Toast('请上传营业执照')
        return
    }
    const res = await companyCertification({
      "company_name": state.company_name,
      "organization_code": state.organization_code,
      "contacts": state.contacts,
      "phone": state.phone,
      "permit": state.permit
    })
    if(res){
        closeChange()
        Toast('保存成功')
    }else{
        Toast('保存失败')
    }
  }
  const closeChange = () => {
    history.back()
  }
  const uploadJust = (value) => {
    state.permit = value
  }
</script>
<template>
    <van-nav-bar title="企业认证" left-arrow @click-left="closeChange"/>
    <h3>请如实填写信息，平台承诺保障客户的信息安全</h3>
    <van-field v-model="state.company_name" label="企业名称" placeholder="请输入企业名称" />
    <van-field v-model="state.organization_code" label="机构代码" placeholder="请输入统一社会信用码/工商执照注册号" />
    <van-field v-model="state.contacts" label="企业法人" placeholder="请输入企业法人姓名" />
    <van-field v-model="state.phone" label="联系电话" placeholder="请输入联系电话" />
    <div class="auth-pic">
        <UploadImage @uploadChange="uploadJust"></UploadImage>
    </div>
    <p>上传企业营业执照</p>
    <button class="wy-submit" @click="submit">提交企业认证</button>
</template>
<style scoped>
  h3{
    width: 100%;
    height: 2.14rem;
    line-height: 2.14rem;
    background: #FFF2E3;
    font-size: 0.75rem;
    text-align: center;
    font-weight: 100;
    color: #FF9415;
  }
  .auth-pic{
    width: 18.73rem;
    height: 8.62rem;
    background: #FFFCF8;
    border: 0.03px solid #FE9127;
    border-radius: 0.27rem;
    display: flex;
    justify-content: space-around;
    margin-top: 1.09rem;
    align-items: center;
    margin: 1rem auto 0;
  }
  .auth-pic div{
    display: flex;
  }
  p{
    font-size: 0.8rem;
    font-weight: 300;
    color: #666666;
    margin-top: 1.6rem;
    text-align: center;
  }
</style>