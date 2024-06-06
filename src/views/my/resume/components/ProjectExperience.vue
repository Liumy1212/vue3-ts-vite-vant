<script setup lang="ts">
  import { reactive,provide } from 'vue';
  import {myStore} from '@/store/my'
  import ProjectExperiencePopup from './ProjectExperiencePopup.vue'
  import {projectDelete} from '@/api/my'
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
    const res = projectDelete({
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
        <h3>项目经历<van-icon  v-if="props.page!=='preview'"  @click="addWork" name="add-o" /></h3>
        <van-swipe-cell v-if="store.projectList.length" v-for="(item,index) in store.projectList" :key="index">
            <h4>{{item.project_name}}<van-icon  v-if="props.page!=='preview'"  @click="editWork(item)" name="arrow" /></h4>
            <p>{{item.project_start_time}} - {{item.project_end_time}}</p>
            <h5>项目经历</h5>
            <van-field 
                v-model="item.project_duty"
                autosize
                readonly
                label=""
                type="textarea" />
            <template #right  v-if="props.page!=='preview'" >
                <img @click="submitDelete(item.project_id)" src="@/assets/img/icon/icon-delete.png" class="delete" />
            </template>
        </van-swipe-cell>
        <label v-else>请您填写项目经历</label>
    </div>
  
    <!--弹窗-->
    <van-popup v-model:show="state.show" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
      <ProjectExperiencePopup :item="state.item"></ProjectExperiencePopup>
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