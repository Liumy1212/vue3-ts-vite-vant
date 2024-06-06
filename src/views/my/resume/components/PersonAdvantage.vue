<script setup lang="ts">
  import { reactive,provide } from 'vue';
  import {myStore} from '@/store/my'
  import PersonAdvantagePopup from './PersonAdvantagePopup.vue'
  const store = myStore()
  const state = reactive({
    show: false
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
  provide('popup',{
    closeChange
  })
</script>
<template>
    <div class="resume-label" >
        <h3>个人优势<img src="@/assets/img/my/icon-feedback.png"  v-if="props.page!=='preview'" @click="state.show = true" /></h3>
        <label>{{store.resumeInfo.advantage||'请您填写个人优势'}}</label>
    </div>
  
    <!--弹窗-->
    <van-popup v-model:show="state.show" position="top" duration="0" :style="{ width: '100%',height: '100%' }">
      <PersonAdvantagePopup></PersonAdvantagePopup>
    </van-popup>
</template>
<style scoped>
.resume-label h3{
    display: flex;
    align-items: flex-end;
}
.resume-label img{
    width: 1rem;
    height: 1rem;
    margin-left: 0.32rem;
}
</style>