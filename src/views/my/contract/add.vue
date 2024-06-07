<script setup lang="ts">
    import { reactive,inject,provide } from 'vue';
    import { useRouter } from 'vue-router';
    import { contractAdd } from '@/api/contract';
    import { Toast } from 'vant';
    import { taskStore } from '@/store/task'
    import {myStore} from '@/store/my'
    import TalentList from './components/TalentList.vue'
    import ContractDemand from './components/ContractDemand.vue'
    const store = myStore()
    const time = new Date()
    const state = reactive({
        talentBool: false,
        contractDemandBool: false,
        serviceModeBool: false,
        showStartTime: false,
        showEndTime: false,
        serviceModeList: [
            {
                name: '按月结算'
            },
            {
                name: '按任务结算'
            }
        ],
        loading: false,
        taskName: '',
        talentName: '',
        talentId: '',
        taskBudget: '',
        startTime: '',
        endTime: '',
        serviceMode: '',
        contractDemand: '',
        minDate: new Date(time.getFullYear()-1,time.getMonth(),time.getDate()),
        maxDate: new Date(time.getFullYear()+3,time.getMonth(),time.getDate())
    })
    const leftBack = () => history.back();
    const setTaskModify = async () => {
        if(!state.taskName){
            Toast('请填写合约名称')
            return
        }
        if(!state.talentName){
            Toast('请选择企业人才')
            return
        }
        if(!state.taskBudget){
            Toast('请输入合约预算')
            return
        }
        if(!state.startTime){
            Toast('请选择合约开始时间')
            return
        }
        if(!state.endTime){
            Toast('请选择合约结束时间')
            return
        }
        if(!state.serviceMode){
            Toast('请选择服务方式')
            return
        }
        if(!state.contractDemand){
            Toast('请选择合约要求')
            return
        }
        state.loading = true
        const res = await contractAdd({
            "contract_type": "技术服务",
            "contract_name": state.taskName,
            "task_salary": state.taskBudget,
            "start_cycle_time": state.startTime,
            "end_cycle_time": state.endTime,
            "check_out": state.serviceMode,
            "task_ask": state.contractDemand,
            "user_id": state.talentId
        })
        if(res){
            Toast('添加成功')
            leftBack()
        }else{
            Toast('添加失败')
        }
        state.loading = false
    }
    const closeTalent = (item) => {
        state.talentName = item.user_name
        state.talentId = item.id
        state.talentBool = false
    }
    const serviceModeSelect = (value) => {
        state.serviceMode = value.name
        state.serviceModeBool = false
    }
    const closeDemand = (value) => {
        if(value){
            state.contractDemand = value
        }
        state.contractDemandBool = false
    }
    const startTimeConfirm = (value) => {
        state.startTime = value.getFullYear() + '-' + (value.getMonth()+1) + '-' + value.getDate()
        state.showStartTime = false
    }
    const endTimeConfirm = (value) => {
        state.endTime = value.getFullYear() + '-' + (value.getMonth()+1) + '-' + value.getDate()
        state.showEndTime = false
    }
    provide('popup',{
        closeTalent,
        closeDemand
    })
</script>
<template>
    <van-nav-bar title="新建合约" left-arrow @click-left="leftBack"/>
    <div class="user-page">
        <van-form @submit="setTaskModify">
            <div class="user-item">
                <h5>合约名称</h5>
                <van-field v-model="state.taskName" label="" placeholder="请输入合约名称" />
            </div>
            <div class="user-item">
                <h5>IT企业人才</h5>
                <van-field v-model="state.talentName" label="" placeholder="请选择合约人才" 
                    readonly
                    is-link
                    @click="state.talentBool = true"/>
            </div>
            <div class="user-item">
                <h5>合约薪资</h5>
                <van-field class="budget" v-model="state.taskBudget" label="" type="number" placeholder="请输入合约薪资" />
            </div>
            <div class="user-item">
                <h5>合约周期</h5>
                    <div class="work-time-list">
                        <van-field v-model="state.startTime" readonly label="" placeholder="请选择" @click="state.showStartTime=true" />
                        <span></span>
                        <van-field v-model="state.endTime" readonly label="" placeholder="请选择" @click="state.showEndTime=true" />
                        <div class="van-field__right-icon"><i class="van-badge__wrapper van-icon van-icon-arrow"></i></div>
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
            <div class="user-item">
                <h5>结薪方式</h5>
                <van-field v-model="state.serviceMode" label="" placeholder="请选择结薪方式"
                    readonly
                    right-icon="arrow"
                    @click="state.serviceModeBool = true"/>
                <van-action-sheet 
                    v-model:show="state.serviceModeBool"
                    :actions="state.serviceModeList"
                    cancel-text="取消"
                    @select="serviceModeSelect"
                ></van-action-sheet>
            </div>
            <div class="user-item">
                <h5>合约要求</h5>
                <van-field v-model="state.contractDemand" label="" placeholder="请填写合约要求"
                    readonly
                    right-icon="arrow"
                    @click="state.contractDemandBool = true"/>
            </div>
            <button class="wy-confirm-btn" native-type="submit">完成</button>
        </van-form>
        <!--人才弹窗-->
        <van-popup v-model:show="state.talentBool" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
            <TalentList></TalentList>
        </van-popup>
        <!--任务要求-->
        <van-popup v-model:show="state.contractDemandBool" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
            <ContractDemand></ContractDemand>
        </van-popup>
    </div>
</template>
<style scoped>
>>>.van-image__img{
    border-radius: 50%;
}
>>>.van-uploader__upload{
    margin: 0;
}

.user-page{
    margin: 1.47rem 0.6rem;
    padding-bottom: 1rem;
}
.task-switch{
    position: relative;
}
>>>.van-switch{
    position: absolute;
    top: 0.4rem;
    right: 0.6rem;
    transform: scale(0.8);
}
>>>.van-switch--on{
    background: linear-gradient(90deg, #007bff, #007bff);
}
.budget{
    position: relative;
}
.budget::before{
    position: absolute;
    right: 0.9rem;
    content: '元';
    font-size: 0.8rem;
    font-weight: 300;
    color: #333333;
}
  .work-time-list{
    display: flex;
    align-items: center
  }
  .work-time-list span{
    width: 0.43rem;
    height: 0.05rem;
    margin-right: 2.4rem;
    background: #999999;
  }
  .work-time-list .van-cell{
    width: 6rem;
  }
  .work-time-list .van-field__right-icon{
    text-align: right;
    flex: 1;
    margin-right: 0.5rem;
  }
.wy-confirm-btn{
    height: 2.35rem;
    line-height: 2.35rem;
    background: linear-gradient(90deg, #007bff, #007bff);
    border-radius: 0.27rem;
    width: calc(100vw - 1.2rem);
    border: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0 0.6rem 0.6rem;
    font-size: 0.8rem;
    color: #FFFFFF;
}
</style>