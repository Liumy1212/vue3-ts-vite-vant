<script setup lang="ts">
    import {useRouter} from 'vue-router'
    import ProgressBar from '@/components/ProgressBar.vue'
    const props = defineProps({
        contractList: {
            type: Array,
            default: () => []
        }
    })
    const router = useRouter()
    const gotoDetail = (id) =>{
        router.push('/contract/details/'+id)
    }
</script>
<template>
  <dl v-for="(item, index) in contractList" :key="index" @click="gotoDetail(item.contract_id)" class="contract-item">
    <dd class="contract-header">
      <h3>{{ item.contract_name }}</h3>
      <span class="contract-status">{{ item.is_contract_type_text }}</span>
      <van-icon name="arrow" class="arrow-icon" />
    </dd>
    <dt>
      <label>公司名称</label>
      <span>{{ item.company_name }}</span>
    </dt>
    <dt>
      <label>合约类型</label>
      <span>{{ item.contract_type }}</span>
    </dt>
    <dt>
      <label>合约周期</label>
      <span>{{ item.start_cycle_time }} - {{ item.end_cycle_time }}</span>
    </dt>
    <dt>
      <label>签约时间</label>
      <span>{{ item.signing_time }}</span>
    </dt>
    <dt>
      <label>合约进度</label>
      <span></span>
    </dt>
    <dt>
      <ProgressBar :item="item"></ProgressBar>
    </dt>
  </dl>
</template>

<style scoped>
.contract-item {
  background: #ffffff;
  border-radius: 0.5rem;
  margin: 0 0 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  color: #333333;
  transition: box-shadow 0.3s;
}
.contract-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.contract-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.contract-header h3 {
  font-size: 1.1rem;
  font-weight: 500;
  color: #007bff;
}
.contract-header span{
    margin-left: auto;
}
.contract-status {
  font-size: 0.9rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #ffffff;
}
.arrow-icon {
  font-size: 1rem;
  color: #007bff;
}
dt {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
label {
  font-weight: 500;
  color: #666666;
}
span {
  color: #333333;
}
</style>
