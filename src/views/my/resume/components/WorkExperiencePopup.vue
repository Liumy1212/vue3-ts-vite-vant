<script setup lang="ts">
    import {reactive,inject,provide,watch} from 'vue'
    import PositionType from '../../../task/components/PositionType.vue'
    import ServiceTypePopup from './ServiceTypePopup.vue'
    import {myStore} from '@/store/my'
    import {addWorkExper,editWorkExper} from '@/api/my'
    import {Toast} from 'vant'
    const store = myStore()
    const {closeChange} = inject('popup')
    const state = reactive({
        showPositionType: false,
        showStartTime: false,
        showEndTime: false,
        positionValue: '',
        companyName: '',
        startTime: '',
        endTime: '',
        workDesc: '',
        minDate: new Date(1980,1,1),
        maxDate: new Date()
    })
    const props = defineProps({
        item: {
            type: Object
        }
    })
    const setInfo = () => {
        state.positionValue = props.item.work_position
        state.companyName = props.item.company_name
        state.workDesc = props.item.company_describe
        state.startTime = props.item.start_time
        state.endTime = props.item.end_time
    }
    watch(()=>props.item,(newValue,oldValue) => {
        setInfo()
    })
    setInfo()
    const priceSelect = (value) => {
        state.priceValue = value.name
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
        if(!state.companyName){
            Toast('请填写公司名称')
            return
        }
        if(!state.positionValue){
            Toast('请选择职位类型')
            return
        }
        if(!state.startTime && !state.endTime){
            Toast('请选择工作时间')
            return
        }
        if(!state.workDesc){
            Toast('请填写工作描述')
            return
        }
        let res;
        if(props.item.id){
            res = await editWorkExper({
                "id": props.item.id, 
                "company_describe": state.workDesc, 
                "company_name": state.companyName, 
                "end_time": state.endTime, 
                "start_time": state.startTime, 
                "work_position": state.positionValue 
            })
        }else{
            res = await addWorkExper({
                "uuid": props.item.uuid, 
                "company_describe": state.workDesc, 
                "company_name": state.companyName, 
                "end_time": state.endTime, 
                "start_time": state.startTime, 
                "work_position": state.positionValue 
            })
        }

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
    <van-nav-bar title="工作经历" left-arrow @click-left="closeChange"/>
    <div class="position-list">
        <div class="user-item">
            <h5>公司名称</h5>
            <van-field v-model="state.companyName" label="" placeholder="请填写您的公司名称" />
        </div>
        <div class="user-item">
            <h5>职位类型</h5>
            <van-field v-model="state.positionValue" label="" placeholder="请选择您的职位类型" 
                readonly
                is-link
                @click="state.showPositionType = true"/>
        </div>
        <div class="user-item">
            <h5>工作时间</h5>
            <div class="work-time-list">
                <van-field v-model="state.startTime" readonly label="" placeholder="请选择" @click="state.showStartTime=true" />
                <span></span>
                <van-field v-model="state.endTime" readonly label="" placeholder="请选择" @click="state.showEndTime=true" />
            </div>
            <van-action-sheet v-model:show="state.showStartTime">
                <van-datetime-picker
                type="date"
                title="选择年月"
                :min-date="state.minDate"
                :max-date="state.maxDate"
                @confirm="startTimeConfirm"
                @cancel="state.showStartTime=false"
                />
            </van-action-sheet>
            <van-action-sheet v-model:show="state.showEndTime">
                <van-datetime-picker
                type="date"
                title="选择年月"
                :min-date="state.minDate"
                :max-date="state.maxDate"
                @confirm="endTimeConfirm"
                @cancel="state.showEndTime=false"
                />
            </van-action-sheet>
        </div>
        <div class="user-item">
            <h5>工作描述</h5>
            <van-field v-model="state.workDesc" label="" placeholder="请填写您的工作描述"
                type="textarea"
                rows="10"
                autosize />
        </div>
        <button class="wy-submit" @click="submit">完成</button>
        <!--职位类型弹窗-->
        <van-popup v-model:show="state.showPositionType" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
        <PositionType></PositionType>
        </van-popup>
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
</style>