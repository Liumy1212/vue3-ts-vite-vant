<script setup lang="ts">
    const props = defineProps({
        item: {
            type: Object,
            default: () => []
        }
    })
</script>
<template>
    <div class="task-detail">
      <h3>{{ item.task_name }}</h3>
      <p class="task-h3-text">{{ item.position_name }}</p>
      <dl>
        <dt>
          <p>任务预算</p>
          <strong>{{ item.task_budget }}元</strong>
        </dt>
        <dt>
          <p>任务周期</p>
          <strong>{{ item.task_cycle }}天</strong>
        </dt>
        <dt>
          <p>服务方式</p>
          <strong>{{ item.service_mode }}</strong>
        </dt>
      </dl>
      <h4>任务信息</h4>
      <h5>任务要求</h5>
      <p class="task-h5-text">{{ item.task_ask }}</p>
      <h4>任务来源</h4>
      <router-link class="task-source" :to="'/task/companySource/' + item.company_id">
        <img :src="item.head_img" />
        <div>
          <h5>{{ item.company_name }}</h5>
          <p>{{ item.user_name }} . {{ item.city }}</p>
        </div>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .task-detail {
    padding: 1rem;
    font-size: 0.8rem;
    color: #333333;
    background: #f9f9f9;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #007bff;
    margin-bottom: 1rem;
  }
  .task-h3-text {
    font-size: 0.9rem;
    color: #666666;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.5rem;
  }
  dl {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1rem;
  }
  dl dt {
    flex: 1;
    text-align: center;
  }
  dl dt p {
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    color: #666666;
  }
  dl dt strong {
    font-size: 1rem;
    font-weight: 600;
    color: #007bff;
  }
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #007bff;
    margin-bottom: 0.75rem;
  }
  h5 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #333333;
    margin-bottom: 0.75rem;
  }
  .task-h5-text {
    font-size: 0.85rem;
    color: #666666;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1rem;
  }
  .task-source {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  .task-source img {
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    margin-right: 1rem;
  }
  .task-source h5 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #007bff;
  }
  .task-source p {
    font-size: 0.85rem;
    color: #666666;
  }
  </style>
  