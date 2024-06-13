<script setup lang="ts">
    import { useRoute, useRouter} from 'vue-router'
    import {userStore} from '@/store/user'
    const store = userStore()
    const route = useRoute()
    const router = useRouter()
    const gotoPage = (path) =>{
        router.push(path)
    }
</script>
<template>
  <dl>
    <dt v-if="store.role == '1'" class="icon-task-bar" :class="route.path=='/task'?'active':''" @click="gotoPage('/task')">
        <i></i>
        <p>任务</p>
    </dt>
    <dt v-if="store.role == '2'" class="icon-task-bar" :class="route.path=='/admin/home'?'active':''" @click="gotoPage('/admin/home')">
        <i></i>
        <p>首页</p>
    </dt>
    <dt  v-if="store.role == '3'" class="icon-talent-bar" :class="route.path=='/talent'?'active':''" @click="gotoPage('/talent')">
        <i></i>
        <p>IT人才</p>
    </dt>
    <dt v-if="store.role != '2'" class="icon-contract-bar" :class="route.path=='/contract'?'active':''" @click="gotoPage('/contract')">
        <i></i>
        <p>合约</p>
    </dt>
    <dt v-if="store.role != '2'" class="icon-message-bar" :class="route.path=='/message'?'active':''" @click="gotoPage('/message')">
        <i></i>
        <p>消息</p>
    </dt>
    <dt class="icon-my-bar" :class="route.path=='/my'?'active':''" @click="gotoPage('/my')">
        <i></i>
        <p>我的</p>
    </dt>
  </dl>
</template>
<style scoped>
dl{
    display: flex;
    width: 100%;
    height: 3rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    border-top: 1px solid #dddddd;
    background: #ffffff;
}
dl dt{
    flex: 1;
    padding: 0.69rem 0;
    justify-content: center;
    text-align: center;
    font-size: 0.59rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
}
dl dt i{
    width: 0.91rem;
    height: 0.91rem;
    display: block;
    margin: 0 auto;
}
.icon-task-bar i{
    background: url('src/assets/img/icon/task.svg') no-repeat;
    background-size: 100%;
}
.icon-task-bar.active i{
    background: url('src/assets/img/icon/task (1).svg') no-repeat;
    background-size: 100%;
}
.icon-talent-bar i{
    background: url('src/assets/img/icon/人才培养.svg') no-repeat;
    background-size: 100%;
}
.icon-talent-bar.active i{
    background: url('src/assets/img/icon/人才培养 (1).svg') no-repeat;
    background-size: 100%;
}
.icon-contract-bar i{
    background: url('src/assets/img/icon/contract.svg') no-repeat;
    background-size: 100%;
}
.icon-contract-bar.active i{
    background: url('src/assets/img/icon/contract (1).svg') no-repeat;
    background-size: 100%;
}
.icon-message-bar i{
    background: url('src/assets/img/icon/message.svg') no-repeat;
    background-size: 100%;
}
.icon-message-bar.active i{
    background: url('src/assets/img/icon/message (1).svg') no-repeat;
    background-size: 100%;
}
.icon-my-bar i{
    background: url('src/assets/img/icon/彩友多_我的-个人主页.svg') no-repeat;
    background-size: 100%;
}
.icon-my-bar.active i{
    background: url('src/assets/img/icon/彩友多_我的-个人主页 (1).svg') no-repeat;
    background-size: 100%;
}
dl dt.active p{
    color: #007bff;
}
</style>