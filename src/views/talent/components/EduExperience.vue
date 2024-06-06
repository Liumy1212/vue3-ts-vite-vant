<script setup lang="ts">
  const props = defineProps({
    item: {
      type: Object
    }
  })
</script>
<template>
  <div class="resume-label">
      <h3>教育经历</h3>
      <div v-if="props.item.school_name" class="education-item">
          <div class="education-header">
              <h4>{{ props.item.school_name }}</h4>
              <p>{{ props.item.teach_start_time }} - {{ props.item.teach_end_time }}</p>
          </div>
          <h5>{{ props.item.major }} | {{ props.item.highest_education }}</h5>
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
}
.education-item {
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.education-header h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #007bff;
  margin: 0;
}
.education-header p {
  font-size: 0.8rem;
  color: #888;
  margin: 0;
}
.education-item h5 {
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
  margin: 0.5rem 0;
}
</style>
