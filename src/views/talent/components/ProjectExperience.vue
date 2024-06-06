<script setup lang="ts">
  const props = defineProps({
    projectList: {
      type: Array
    }
  })
</script>
<template>
  <div class="resume-label">
      <h3>项目经历</h3>
      <div v-if="props.projectList.length" v-for="(item, index) in props.projectList" :key="index" class="project-item">
          <div class="project-header">
              <h4>{{ item.project_name }}</h4>
              <p>{{ item.project_start_time }} - {{ item.project_end_time }}</p>
          </div>
          <h5>项目描述</h5>
          <van-field 
              v-model="item.project_duty"
              autosize
              readonly
              label=""
              type="textarea" 
              class="project-description" />
      </div>
  </div>
</template>

<style scoped>
.resume-label h3 {
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}
.project-item {
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.project-header h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #007bff;
  margin: 0;
}
.project-header p {
  font-size: 0.8rem;
  color: #888;
  margin: 0;
}
.project-item h5 {
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
  margin: 0.5rem 0;
}
.project-description {
  margin-top: 0.5rem;
  background: #f9f9f9;
  border-radius: 0.3rem;
  padding: 0.5rem;
}
</style>
