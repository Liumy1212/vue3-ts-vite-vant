<script setup lang="ts">
  import { reactive,provide } from 'vue';
  import UserInfoPage from '../components/UserInfoPage.vue'
  const closeChange = () => {
    history.back();
  }
  provide('popup',{
    closeChange
  })
</script>
<template>
    <UserInfoPage></UserInfoPage>
</template>
<style scoped>
</style>