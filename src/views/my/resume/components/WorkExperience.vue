<script setup lang="ts">
  import { reactive,provide } from 'vue';
  import {myStore} from '@/store/my'
  import WorkExperiencePopup from './WorkExperiencePopup.vue'
  import {workDelete} from '@/api/my'
import { Toast } from 'vant';
  const store = myStore()
  const state = reactive({
    show: false,
    item: {}
  })
  const props = defineProps({
    page: {
      type: String
    }
  })
  const closeChange = () => {
    state.show = false
    store.getResumeDetail()
  }
  const submitDelete = async (id) => {
    const res = workDelete({
        id: id
    })
    if(res){
        Toast('删除成功')
        store.getResumeDetail()
    }else{
        Toast('删除失败')
    }
  }
  const addWork = () => {
    state.item = {
        uuid: store.resumeInfo.id
    }
    state.show = true
  }
  const editWork = (item) => {
    state.item = item
    state.show = true
  }
  provide('popup',{
    closeChange
  })
</script>
<template>
    <div class="resume-label">
        <h3>工作经历<van-icon @click="addWork"  v-if="props.page!=='preview'"  name="add-o" /></h3>
        <van-swipe-cell v-if="store.companyList.length" v-for="(item,index) in store.companyList" :key="index">
            <h4>{{item.company_name}}<van-icon v-if="props.page!=='preview'"  @click="editWork(item)" name="arrow" /></h4>
            <h5>{{item.work_position}}</h5>
            <p>{{item.start_time}} - {{item.end_time}}</p>
            <h5>工作描述</h5>
            <van-field 
                v-model="item.company_describe"
                autosize
                readonly
                label=""
                type="textarea" />
            <template #right>
                <img v-if="props.page!=='preview'"  @click="submitDelete(item.id)" src="@/assets/img/icon/icon-delete.png" class="delete" />
            </template>
        </van-swipe-cell>
        <label v-else>请您填写工作经历</label>
    </div>
  
    <!--弹窗-->
    <van-popup v-model:show="state.show" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
      <WorkExperiencePopup :item="state.item"></WorkExperiencePopup>
    </van-popup>
</template>
<style scoped>
.text-list dt{
    font-size: 0.59rem;
    line-height: 0.59rem;
    font-weight: 300;
    color: #666666;
    padding: 0.4rem 0.5rem;
    margin-right: 0.27rem;
    margin-bottom: 0.3rem;
    background: #F6F7F8;
    border-radius: 0.16rem;
    display: inline-block;
}
</style>