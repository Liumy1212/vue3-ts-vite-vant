<script setup lang="ts">
    import {reactive,watch} from 'vue'
    import AccountInfo from '../components/AccountInfo.vue'
    import AccountList from '../components/AccountList.vue'
    import {withdrawal} from '@/api/my'
    import { Toast } from 'vant';
    import {myStore} from '@/store/my'
    const store = myStore()
    const leftBack = () => history.back()
    const state = reactive({
      price: null,
      loading: false
    })
    const submitAdvance = async () => {
        if(state.price < 0.1){
            Toast('提现金额不能小于0.1元')
            return
        }
        const res = await withdrawal({
            price: state.price
        })
        if(res){
            store.getUserInfo()
        }
        Toast(res.msg)
    }
    const allAdvance = () => {
        state.price = store.userInfo.account_price
    }
    watch(()=>state.price,(newValue,oldValue) =>{
        if(parseFloat(newValue)<0){
            Toast('提现金额不能为负数')
            return
        }
        if(parseFloat(newValue)>50000){
            Toast('每次提现金额不能超过50000')
            return
        }
        if(newValue){
            newValue = newValue.toString()
            let index = newValue.indexOf('.')
            if(index>0 && newValue.length-index>3){
                state.price = parseFloat(oldValue)
                return
            }
        }
    })
</script>
<template>
  <van-nav-bar title="提现" left-arrow @click-left="leftBack"/>
  <div class="advance">
    <van-form @submit="submitAdvance">
        <div class="advance-amount">
            <h5>提现金额</h5>
            <div>
                <span>￥</span>
                <input v-model="state.price" type="number" />
            </div>
            <p>
                <span>可提现余额￥{{store.userInfo.account_price}}</span>
                <label @click="allAdvance">全部提现</label>
            </p>
        </div>
        <button class="advance-btn" native-type="submit">提现至支付宝</button>
    </van-form>
  </div>
</template>
<style scoped>
  >>>.van-nav-bar__content{
    background: #FF8E00;
  }
  >>>.van-nav-bar__title,>>>.van-icon-arrow-left:before{
    color: #ffffff;
  }
  .advance{
    padding: 1.17rem 0.64rem 0 ;
    background: #f9f9f9;
    height: calc(100vh - 46px - 1.17rem);
  }
  .advance-amount{
    background: #FFFFFF;
    border-radius: 0.27rem;
    padding: 1.31rem 0.72rem 0rem;
  }
  h5{
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-weight: 400;
    color: #999999;
    margin-bottom: 2.43rem;
  }
  .advance-amount div{
    font-size: 1.28rem;
    line-height: 1.28rem;
    font-weight: 400;
    color: #333333;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid #eeeeee;
  }
  .advance-amount p{
    padding: 0.93rem 0;
    display: flex;
    justify-content: space-between;
  }
  .advance-amount p label{
    color: #FF8E00;
  }
  .advance-amount p span{
    color: #999999;
  }
.advance-btn{
    height: 2.35rem;
    line-height: 2.35rem;
    background: linear-gradient(90deg, #FFA400, #FF8900);
    border-radius: 0.27rem;
    font-size: 0.8rem;
    color: #FFFFFF;
    border: 0;
    text-align: center;
    width: calc(100vw - 1.28rem);
    margin-top: 1.33rem;
}
</style>