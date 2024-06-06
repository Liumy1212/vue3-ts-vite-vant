<script setup lang="ts">
    import { inject } from 'vue';
    import { bannerList } from '@/api/task';
    import { taskStore } from '@/store/task'
    import { Toast } from 'vant';
    const { closeCitySwitch } = inject('popup')
    const store = taskStore()
    const props = defineProps({
        type: {
            type: Number
        }
    })
    const leftBack = () => closeCitySwitch();
    const getBannerList = async () => {
        const res = await bannerList({
            type: props.type
        })
        if(res){
            store.setBannerList(res.list)
        }else{
            Toast(res.msg)
        }
    }
    if(store.bannerList.length<=0) getBannerList()
</script>
<template>
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="(item, index) in store.bannerList" :key="index">
            <a :href="item.url" target="_blank" v-if="item.url">
                <img :src="item.picture" />
            </a>
            <img v-else="item.url" :src="item.picture" />
        </van-swipe-item>
    </van-swipe>
</template>
<style scoped>
    >>> .van-swipe__track{
        height: 7.47rem;
    }
    >>> .van-swipe__indicators{
        display: none;
    }
    img{
        width: 100%;
        height: 7.47rem;
        border-radius: 0.5rem;
    }
</style>