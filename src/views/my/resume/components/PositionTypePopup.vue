<script setup lang="ts">
    import {reactive,inject,provide} from 'vue'
    import PositionType from '../../../task/components/PositionType.vue'
    import ServiceTypePopup from './ServiceTypePopup.vue'
    import {myStore} from '@/store/my'
    import {jobIntention} from '@/api/my'
    import {Toast} from 'vant'
    const store = myStore()
    const {closeChange} = inject('popup')
    const state = reactive({
        showPositionType: false,
        showServiceType: false,
        showPriceType: false,
        positionValue: '',
        serviceValue: '',
        priceValue: ''
    })
    if(Object.keys(store.resumeInfo).length!==0){
        state.positionValue = store.resumeInfo.position_name
        state.serviceValue = store.resumeInfo.service_mode
        state.priceValue = store.resumeInfo.service_price
    }
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
    const submit = async () => {
        if(!state.positionValue){
            Toast('请选择职位类型')
            return
        }
        if(!state.serviceValue){
            Toast('请选择服务类型')
            return
        }
        if(!state.priceValue){
            Toast('请选择服务价格')
            return
        }
        const res = await jobIntention({
            "position_name": state.positionValue, 
            "service_mode": state.serviceValue, 
            "service_price": state.priceValue 
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
    <van-nav-bar title="求职意愿" left-arrow @click-left="closeChange"/>
    <div class="position-list">
        <div class="user-item">
            <h5>职位类型</h5>
            <van-field v-model="state.positionValue" label="" placeholder="请选择您的职位类型" 
                readonly
                is-link
                @click="state.showPositionType = true"/>
        </div>
        <div class="user-item">
            <h5>服务类型</h5>
            <van-field v-model="state.serviceValue" label="" placeholder="请选择您的服务类型" 
                readonly
                is-link
                @click="state.showServiceType = true"/>
        </div>
        <div class="user-item">
            <h5>服务价格</h5>
            <van-field v-model="state.priceValue" label="" placeholder="请选择您的服务价格" 
                readonly
                is-link
                @click="state.showPriceType = true"/>
            <van-action-sheet
                v-model:show="state.showPriceType"
                :actions="store.salaryScope"
                cancel-text="取消"
                close-on-click-action
                @cancel="state.showPriceType=false"
                @select="priceSelect"
                />
        </div>
        <button class="wy-submit" @click="submit">保存</button>
        <!--职位类型弹窗-->
        <van-popup v-model:show="state.showPositionType" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
        <PositionType></PositionType>
        </van-popup>
        <!--服务类型弹窗-->
        <van-popup v-model:show="state.showServiceType" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
        <ServiceTypePopup></ServiceTypePopup>
        </van-popup>
    </div>
</template>
<style scoped>
  .position-list{
    margin: 1.52rem 0.67rem 0;
  }
</style>