<script setup lang="ts">
    import {useRouter} from 'vue-router'
    const props = defineProps({
        taskList: {
            type: Array,
            default: () => []
        }
    })
    const router = useRouter()
    const gotoDetail = (id) =>{
        router.push('/task/details/'+id)
    }
</script>
<template>
    <div class="task-item" v-for="(item, index) in taskList" :key="index" @click="gotoDetail(item.task_id)">
      <div class="task-item-top">
        <h3>{{item.task_name}}</h3>
        <span v-if="item.is_emergency == 1">紧急</span>
      </div>
      <dl>
        <dt>
          <h5>任务预算</h5>
          <strong>￥{{item.task_budget}}</strong>
        </dt>
        <dt>
          <h5>任务周期</h5>
          <strong>{{item.task_cycle}}天</strong>
        </dt>
        <dt>
          <h5>服务方式</h5>
          <strong>{{item.service_mode}}</strong>
        </dt>
      </dl>
      <p>任务要求：{{item.task_ask}}</p>
      <div class="task-item-bottom">
        <label>{{item.company_name}}</label>
        <span><van-icon name="location-o" />{{item.city}}</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .task-item {
    background: #FFFFFF;
    border-radius: 0.53rem;
    margin: 0 0 0.53rem;
    padding: 0.88rem 0.88rem 0.75rem;
    position: relative;
    font-size: 0.75rem;
    color: #333333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }
  .task-item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  .task-item-top h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #333333;
    margin: 0;
  }
  .task-item-top span {
    background: #007bff;
    color: #ffffff;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
  dl {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
  }
  dl dt {
    margin-right: 1rem;
  }
  dl dt h5 {
    font-size: 0.75rem;
    margin-bottom: 0.3rem;
    font-weight: 400;
    color: #999999;
  }
  dl dt strong {
    font-size: 0.85rem;
    font-weight: 600;
    color: #333333;
  }
  .task-item p {
    color: #666666;
    font-size: 0.75rem;
    margin: 0 0 0.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .task-item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f5f5f5;
    padding-top: 0.75rem;
    font-size: 0.75rem;
    color: #999999;
  }
  .task-item-bottom label {
    flex: 1;
    font-weight: 400;
  }
  .task-item-bottom span {
    display: flex;
    align-items: center;
    color: #007bff;
  }
  .task-item-bottom span .van-icon {
    margin-right: 0.3rem;
  }
  </style>
  