<script setup lang="ts">
import { ref,reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';

const router = useRouter()
const gotologin = () => {
  router.push('/login')
}
</script>

<template>
  <div>
    <van-button type="primary" @click="gotologin">主要按钮</van-button>
  </div>
</template>
