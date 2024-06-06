<script setup lang="ts">
    import {reactive,inject,provide} from 'vue'
    import PositionType from '../../../task/components/PositionType.vue'
    import ServiceTypePopup from './ServiceTypePopup.vue'
    import {myStore} from '@/store/my'
    import {editEdu} from '@/api/my'
    import {Toast} from 'vant'
    const store = myStore()
    const {closeChange} = inject('popup')
    const state = reactive({
        showEducation: false,
        showStartTime: false,
        showEndTime: false,
        schoolName: '',
        education: '',
        major: '',
        startTime: '',
        endTime: '',
        minDate: new Date(1990,1,1),
        maxDate: new Date()
    })
    if(Object.keys(store.resumeInfo).length!==0){
        state.schoolName = store.resumeInfo.school_name
        state.education = store.resumeInfo.highest_education
        state.major = store.resumeInfo.major
        state.startTime = store.resumeInfo.teach_start_time
        state.endTime = store.resumeInfo.teach_end_time
    }
    const educationSelect = (value) => {
        state.education = value.name
    }
    const closePositionType = (name) =>{
        if(name) state.positionValue = name
        state.showPositionType = false
    }
    const closeServiceType = (name) => {
        if(name) state.serviceValue = name
        state.showServiceType = false
    }
    const startTimeConfirm = (value) => {
        state.startTime = value.getFullYear() + '-' + (value.getMonth()+1) + '-' + value.getDate()
        state.showStartTime = false
    }
    const endTimeConfirm = (value) => {
        state.endTime = value.getFullYear() + '-' + (value.getMonth()+1) + '-' + value.getDate()
        state.showEndTime = false
    }
    const submit = async () => {
        if(!state.schoolName){
            Toast('请填写学校名称')
            return
        }
        if(!state.education){
            Toast('请选择学历')
            return
        }
        if(!state.major){
            Toast('请填写专业')
            return
        }
        if(!state.startTime){
            Toast('请选择开始时间')
            return
        }
        if(!state.endTime){
            Toast('请选择结束时间')
            return
        }
        const res = await editEdu({
            "uuid": store.resumeInfo.id,
            "school_name": state.schoolName, 
            "highest_education": state.education, 
            "major": state.major, 
            "teach_start_time": state.startTime,
            "teach_end_time": state.endTime,
        })
        if(res){
            closeChange()
            Toast('保存成功')
        }else{
            Toast('保存失败')
        }
    }
    provide('popup',{
        closePositionType,
        closeServiceType
    })
</script>
<template>
    <van-nav-bar title="教育经历" left-arrow @click-left="closeChange"/>
    <div class="position-list">
        <div class="user-item">
            <h5>学校名称</h5>
            <van-field v-model="state.schoolName" label="" placeholder="请填写您的学校名称" />
        </div>
        <div class="user-item">
            <h5>学历</h5>
            <van-field v-model="state.education" label="" placeholder="请选择您的学历" 
                readonly
                is-link
                @click="state.showEducation = true"/>
            <van-action-sheet
                v-model:show="state.showEducation"
                :actions="store.highestEducation"
                cancel-text="取消"
                close-on-click-action
                @cancel="state.showEducation=false"
                @select="educationSelect"
                />
        </div>
        <div class="user-item">
            <h5>专业</h5>
            <van-field v-model="state.major" label="" placeholder="请填写您的专业" />
        </div>
        <div class="user-item">
            <h5>就读时间</h5>
            <div class="work-time-list">
                <van-field v-model="state.startTime" readonly label="" placeholder="请选择" @click="state.showStartTime=true" />
                <span></span>
                <van-field v-model="state.endTime" readonly label="" placeholder="请选择" @click="state.showEndTime=true" />
            </div>
            <van-action-sheet v-model:show="state.showStartTime">
                <van-datetime-picker
                type="date"
                title="选择年月日"
                :min-date="state.minDate"
                :max-date="state.maxDate"
                @confirm="startTimeConfirm"
                @cancel="state.showStartTime=false"
                />
            </van-action-sheet>
            <van-action-sheet v-model:show="state.showEndTime">
                <van-datetime-picker
                type="date"
                title="选择年月日"
                :min-date="state.minDate"
                :max-date="state.maxDate"
                @confirm="endTimeConfirm"
                @cancel="state.showEndTime=false"
                />
            </van-action-sheet>
        </div>
        <button class="wy-submit" @click="submit">保存</button>
        
    </div>
</template>
<style scoped>
  .position-list{
    margin: 1.52rem 0.67rem 0;
  }
  .work-time-list{
    display: flex;
    align-items: center
  }
  .work-time-list span{
    width: 0.83rem;
    height: 0.05rem;
    margin-right: 2.4rem;
    background: #333333;
  }
  .work-time-list .van-cell{
    width: 6rem;
  }
  .resume-label h5{
    margin-bottom: 0;
  }
</style>