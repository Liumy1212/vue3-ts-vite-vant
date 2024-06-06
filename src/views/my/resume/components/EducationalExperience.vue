<script setup lang="ts">
  import { reactive,provide } from 'vue';
  import {myStore} from '@/store/my'
  import EducationalExperiencePopup from './EducationalExperiencePopup.vue'
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
  const editWork = () => {
    state.show = true
  }
  provide('popup',{
    closeChange
  })
</script>
<template>
    <div class="resume-label">
        <h3>教育经历<van-icon @click="editWork" v-if="props.page!=='preview'"  name="add-o" /></h3>
        <div v-if="store.resumeInfo.school_name">
            <h4>{{store.resumeInfo.school_name}}<van-icon v-if="props.page!=='preview'"  @click="editWork" name="arrow" /></h4>
            <p>{{store.resumeInfo.teach_start_time}} - {{store.resumeInfo.teach_end_time}}</p>
            <h5>{{store.resumeInfo.major}} | {{store.resumeInfo.highest_education}}</h5>
        </div>
        <label v-else>请您填写教育经历</label>
        <!--弹窗-->
        <van-popup v-model:show="state.show" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
          <EducationalExperiencePopup></EducationalExperiencePopup>
        </van-popup>
    </div>
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