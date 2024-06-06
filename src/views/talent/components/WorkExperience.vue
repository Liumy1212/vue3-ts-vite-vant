<script setup lang="ts">
  const props = defineProps({
    companyList: {
      type: Array
    }
  })
</script>
<template>
  <div class="resume-label">
      <h3>工作经历</h3>
      <div v-if="props.companyList.length" v-for="(item, index) in props.companyList" :key="index" class="company-item">
          <h4>{{ item.company_name }}</h4>
          <div class="position-time">
              <h5>{{ item.work_position }}</h5>
              <p>{{ item.start_time }} - {{ item.end_time }}</p>
          </div>
          <h5>工作描述</h5>
          <van-field 
              v-model="item.company_describe"
              autosize
              readonly
              label=""
              type="textarea" 
              class="company-description" />
      </div>
  </div>
</template>

<style scoped>
.resume-label h3 {
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
}
.company-item {
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.company-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 0.5rem;
}
.position-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.position-time h5 {
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
  margin: 0;
}
.position-time p {
  font-size: 0.8rem;
  color: #888;
  margin: 0;
}
.company-description {
  margin-top: 0.5rem;
  background: #f9f9f9;
  border-radius: 0.3rem;
  padding: 0.5rem;
}
</style>
