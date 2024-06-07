<script setup lang="ts">
import { ref,reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Button } from 'vant';

const router = useRouter()
const gotologin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="guide-page">
    <div class="header">

      <h1>欢迎来到汪财简历</h1>

    </div>
    <div class="content">
      <van-button type="primary" @click="gotologin" class="login-button">立即登录</van-button>
    </div>
  </div>
</template>


<style scoped>
.guide-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
  padding: 1rem;
}

.header {
  margin-bottom: 2rem;
}

.logo {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.content {
  flex: 1;
}

.illustration {
  width: 80%;
  max-width: 400px;
  margin-bottom: 2rem;
}

.login-button {
  width: 80%;
  max-width: 200px;
}
</style>
