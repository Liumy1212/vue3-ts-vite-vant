<script setup lang="ts">
  import {reactive, provide} from 'vue'
  import { useRouter } from 'vue-router';
  import TalentList from '@/components/list/TalentList.vue'
  import FooterTabbar from '@/components/FooterTabbar.vue'
  import Banner from '../task/components/Banner.vue'
  import CitySwitch from '../task/components/CitySwitch.vue'
  import PositionType from '../task/components/PositionType.vue'
  import Screen from './components/Screen.vue'
  import { taskStore } from '@/store/task'
  import { getTalent } from '@/api/talent'
  const router = useRouter()
  const store = taskStore()
  const state = reactive({
    citySwitchBool: false,
    positionTypeBool: false,
    screenBool: false,
    positionValue: '',
    highest: '',
    salary: '',
    experience: '',
    pageNum: 0,
    pageSize: 10,
    finished: false,
    loading:false,
    talentList: []
  })
  const getTalentList = async () => {
      state.loading = true
      if(state.pageNum == 1) state.talentList = []
      const res = await getTalent({
        "position_name": state.positionValue, 
        "highest_education": state.highest,
        "service_price": state.salary, 
        "job_experience": state.experience,
        "pageNum": state.pageNum,
        "pageSize": state.pageSize,
        "city": store.cityValue,
        "it_enterprise": 1 
      })
      if(res){
          state.talentList = state.talentList.concat(res.records)
          state.loading = false
          if (state.talentList.length>=res.total) {
            state.finished = true
          }else{
            state.finished = false
          }
      }else{
          Toast(res.msg)
          state.loading = false
      }
  }
  const gotoSearch = () => {
    router.push('/talent/search')
  }
  const onLoad = () => {
    state.pageNum = state.pageNum + 1
    getTalentList()
  }
  const onRefresh = () => {
    state.pageNum = 1
    getTalentList()
  }
  const closeCitySwitch = (name) => {
    if (name) {
      store.setCityValue(name)
      onRefresh()
    }
    state.citySwitchBool = false
  }
  const closePositionType = (name) => {
    if(name){
      state.positionValue = name
      onRefresh()
    }
    state.positionTypeBool = false
  }
  const closeScreen = (obj) => {
    if(obj){
      state.highest = obj.highest.value
      state.salary = obj.salary
      state.experience = obj.experience
      onRefresh()
    }
    state.screenBool = false
  }
  provide('popup',{
    closeCitySwitch,
    closePositionType,
    closeScreen
  })
</script>
<template>
  <div class="task-page">
    <div class="task-top">
      <!-- <div class="task-top-city" @click="state.citySwitchBool = true">
        <i></i>
        <strong>{{store.cityValue}}</strong>
        <span></span>
      </div> -->
      <input type="text" @click="gotoSearch" readonly placeholder="请输入想要搜素的内容" />
      <router-link to="/message/systemList" class="task-icon-message"></router-link>
    </div>
    <div class="task-title">
      <h3>IT人才<i></i></h3>
      <div class="task-positon-pop" @click="state.positionTypeBool = true">{{state.positionValue||'职位类型'}}<span></span></div>
      <div class="task-screen-pop" @click="state.screenBool = true">筛选<span></span></div>
    </div>
    <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text=""
        @load="onLoad"
      >
        <TalentList :talentList="state.talentList"></TalentList>
        <div class="wy-no-data" v-if="!state.loading && state.talentList.length==0">暂无数据</div>
      </van-list>
    </van-pull-refresh>
    <!--切换城市弹窗-->
    <van-popup v-model:show="state.citySwitchBool" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
      <CitySwitch></CitySwitch>
    </van-popup>
    <!--职位类型弹窗-->
    <van-popup v-model:show="state.positionTypeBool" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
      <PositionType></PositionType>
    </van-popup>
    <!--筛选弹窗-->
    <van-popup v-model:show="state.screenBool" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
      <Screen></Screen>
    </van-popup>
  </div>
  <FooterTabbar></FooterTabbar>
</template>
<style scoped>
  .task-page{
    background: #f9f9f9;
    padding: 0 0.59rem 3rem;
    min-height: calc(100vh - 3rem);
  }
  .task-top{
    display: flex;
    align-items: center;
    padding: 0.5rem 0 0.91rem;
  }
  .task-top-city{
    display: flex;
    align-items: center;
  }
  .task-top-city i{
    width: 1.04rem;
    height: 1.01rem;
    background: url('@/assets/img/icon/icon-place.png') no-repeat;
    background-size: 100%;
  }
  .task-top-city strong{
    font-size: 0.8rem;
    font-weight: 500;
    color: #333333;
    margin-left: 0.1rem;
  }
  .task-top-city span{
    margin: 0 0.6rem 0 0.2rem;
    display: inline-block;
    border-left: 0.18rem solid transparent;
    border-right: 0.18rem solid transparent;
    border-top: 0.36rem solid #333333;
  }
  .task-top input{
    flex: 1;
    height: 1.71rem;
    background: #ffffff url('@/assets/img/icon/icon-search.png') 0.35rem 0.3rem no-repeat;
    background-size: 9%; 
    border: 0.03px solid #EDEDED;
    border-radius: 0.85rem;
    font-size: 0.69rem;
    font-weight: 300;
    color: #999999;
    padding-left: 1.7rem;
  }
  .task-icon-message{
    width: 1.31rem;
    height: 1.28rem;
    background: url('@/assets/img/icon/icon-remind.png') no-repeat;
    background-size: 100%;
    margin-left: 0.27rem;
  }
  .task-title{
    display: flex;
    align-items: center;
    margin-bottom: 0.67rem;
    margin-top: 1.44rem;
  }
  .task-title h3{
    flex: 1;
    font-size: 0.96rem;
    line-height: 0.96rem;
    font-weight: bold;
    color: #333333;
    position: relative;
  }
  .task-title h3 i{
    width: 1.87rem;
    height: 0.64rem;
    background: linear-gradient(90deg, #FE8F27,#ffffff);
    opacity: 0.46;
    border-radius: 0.32rem;
    position: absolute;
    left: -0.1rem;
    top: 0.4rem;
    opacity: 0.4;
  }
  .task-positon-pop,.task-screen-pop{
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-weight: 300;
    color: #666666;
    margin-left: 0.56rem;
  }
  .task-positon-pop span,.task-screen-pop span{
    display: inline-block;
    border-left: 0.18rem solid transparent;
    border-right: 0.18rem solid transparent;
    border-top: 0.36rem solid #333333;
    margin-left: 0.25rem;
  }
</style>