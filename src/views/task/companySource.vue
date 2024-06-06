<script setup lang="ts">
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { taskAllList } from '@/api/task';
    import CompanySource from './components/CompanySource.vue'
    import CompanyTask from './components/CompanyTask.vue'
    import { Toast } from 'vant';
    const router = useRouter()
    const companyId = router.currentRoute.value.params.id
    const state = reactive({
        item: '',
        taskList: [],
        loading: false
    })
    const leftBack = () => history.back();
    const gotoMessage = () => {
        router.push('/message/talk/'+ state.item.user_id)
    }
    const getTaskAllList = async () => {
        state.loading = true
        const res = await taskAllList({
            company_id: companyId
        })
        if(res){
            state.taskList = res.records
            state.item = res.records[0]
            state.loading = false
        }else{
            Toast(res.msg)
            state.loading = false
        }
    }
    getTaskAllList()
</script>
<template>
    <van-nav-bar title="任务来源" left-arrow @click-left="leftBack"/>
    <CompanySource :item="state.item"></CompanySource>
    <CompanyTask :taskList="state.taskList"></CompanyTask>
</template>
<style scoped>

</style>