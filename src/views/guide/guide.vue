<template>
  <div class="container">
    <div class="header">
      <h1>招人，找工作</h1>
      <p>就用旺财简历</p>
    </div>
    <div class="phone-mockup">
      <div class="choice-card">
        <p>请选择</p>
        <small>旺财简历帮您找到任务</small>
      </div>
      <van-button type="primary" class="action-button" @click="gotoLogin">我要找人才</van-button>
      <van-button type="primary" class="action-button" @click="gotoLogin">我要做任务</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from 'vant';

const router = useRouter();

const gotoLogin = () => {
  router.push('/login');
};


</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #0954b6, #259cb9);
  text-align: center;
  padding: 1rem;
}

.header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 2rem;
}

.phone-mockup {
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
}

.choice-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.choice-card p {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

.choice-card small {
  font-size: 0.8rem;
  color: #666;
}

.action-button {
  width: 100%;
  margin: 0.5rem 0;
  background-color: #ff7e5f;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  padding: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
