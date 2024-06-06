<script setup lang="ts">
    import { reactive,inject } from 'vue';
    import { useRouter } from 'vue-router';
    import { uploadImage,userModify } from '@/api/my';
    import { Toast } from 'vant';
    import { taskStore } from '@/store/task'
    import {myStore} from '@/store/my'
    import { common } from '@/utils/common'
    const { closeChange } = inject('popup')
    const store = myStore()
    const tsStore = taskStore()
    if(!tsStore.areaList.length) tsStore.getCityList()
    
    const router = useRouter()
    const id = router.currentRoute.value.params.id
    const state = reactive({
        fileList: [],
        showSex: false,
        showBirthday: false,
        showWorkTime: false,
        showCity: false,
        loading: false,
        userName: '',
        sex: '',
        birthday: '',
        workTime: '',
        city: '',
        area: '',
        minDate: new Date(1970,1,1),
        maxDate: new Date()
    })
    const sexList = [
        { name: '男'},
        { name: '女'}
    ]
    // const leftBack = () => history.back();
    const setInfo = () => {
        state.userName = store.userInfo.user_name;
        state.sex = common.sex(store.userInfo.sex)
        state.birthday = store.userInfo.birthday
        state.workTime = store.userInfo.work_time
        state.city = store.userInfo.city
        state.area = store.userInfo.area
        if(store.userInfo.it_head){
            state.fileList = [{
                url: store.userInfo.it_head
            }]
        }
    }
    if(!store.userInfo.user_name) {
        (async function(){
            await store.getUserInfo()
            setInfo()
        })()
    }else{
        setInfo()
    }
    const afterRead = async (file) => {
        file.status = 'uploading'
        file.message = '上传中...'
        let param = new FormData()
        param.append('user','test')
        param.append('file',file.file)
        const res = await uploadImage(param)
        file.url = res.imageUrl
        file.status = 'done'
        file.message = '上传成功'
        state.fileList = [file]
    }
    const birthdayConfirm = (value) => {
        state.birthday = value.getFullYear() + '-' + (value.getMonth()+1)
        state.showBirthday = false
    }
    const workTimeConfirm = (value) => {
        state.workTime = value.getFullYear() + '-' + (value.getMonth()+1)
        state.showWorkTime = false
    }
    const cityConfirm = (value) => {
        state.city = value[0].text
        state.area = value[1].text
        state.showCity = false
    }
    const deleteFile = () => {
        state.fileList = []
    }
    const sexSelect = (value) => {
        state.sex = value.name
    }
    const setUserModify = async () => {
        if(state.fileList.length===0){
            Toast('请上传头像')
            return
        }
        if(!state.userName){
            Toast('请填写姓名')
            return
        }
        if(!state.sex){
            Toast('请选择性别')
            return
        }
        if(!state.birthday){
            Toast('请选择出生年月')
            return
        }
        if(!state.workTime){
            Toast('请选择参加工作时间')
            return
        }
        if(!state.city){
            Toast('请选择城市')
            return
        }
        state.loading = true
        const res = await userModify({
            "user_name": state.userName, 
            "sex": state.sex==='男'?1:state.sex==='女'?2:'', 
            "birthday": state.birthday, 
            "work_time": state.workTime, 
            "city": state.city, 
            "area": state.area, 
            "it_head": state.fileList[0].url,
            "type": 1 
        })
        if(res){
            store.getUserInfo()
        }
        Toast(res.msg)
        state.loading = false
    }
</script>
<template>
    <van-nav-bar title="个人信息" left-arrow @click-left="closeChange"/>
    <div class="user-page">
        <van-form @submit="setUserModify">
            <div class="user-pic">
                <van-uploader v-model="state.fileList" accept=".jpg,.png" 
                    :after-read="afterRead" 
                    :before-delete ="deleteFile"
                    max-count="1" />
            </div>
            <div class="user-item">
                <h5>姓名</h5>
                <van-field v-model="state.userName" label="" placeholder="请输入您的姓名" />
            </div>
            <div class="user-item">
                <h5>性别</h5>
                <van-field v-model="state.sex" label="" placeholder="请选择您的性别" 
                    readonly
                    is-link
                    @click="state.showSex = true"/>
                <van-action-sheet
                    v-model:show="state.showSex"
                    :actions="sexList"
                    cancel-text="取消"
                    close-on-click-action
                    @select="sexSelect"
                    />
            </div>
            <div class="user-item">
                <h5>出生日期</h5>
                <van-field v-model="state.birthday" label="" placeholder="请选择您的出生日期"
                    readonly
                    is-link
                    @click="state.showBirthday = true"/>
                <van-action-sheet v-model:show="state.showBirthday">
                    <van-datetime-picker
                    type="year-month"
                    title="选择年月"
                    :min-date="state.minDate"
                    :max-date="state.maxDate"
                    @confirm="birthdayConfirm"
                    @cancel="state.showBirthday = false"
                    />
                </van-action-sheet>
            </div>
            <div class="user-item">
                <h5>参加工作时间</h5>
                <van-field v-model="state.workTime" label="" placeholder="请选择您的工作时间"
                    readonly
                    is-link
                    @click="state.showWorkTime = true"/>
                <van-action-sheet v-model:show="state.showWorkTime">
                    <van-datetime-picker
                    type="year-month"
                    title="选择年月"
                    :min-date="state.minDate"
                    :max-date="state.maxDate"
                    @confirm="workTimeConfirm"
                    @cancel="state.showWorkTime = false"
                    />
                </van-action-sheet>
            </div>
            <div class="user-item">
                <h5>所在城市</h5>
                <van-field v-model="state.city" label="" placeholder="请选择您的城市"
                    readonly
                    is-link
                    @click="state.showCity = true"/>
                <van-action-sheet v-model:show="state.showCity">
                    <van-picker
                        :columns="tsStore.areaList"
                        @confirm="cityConfirm"
                        @cancel="state.showCity = false"
                    />
                </van-action-sheet>
            </div>
            <button class="wy-confirm-btn" native-type="submit">完成</button>
        </van-form>
    </div>
</template>
<style scoped>
>>>.van-image__img{
    border-radius: 50%;
}
>>>.van-uploader__upload{
    margin: 0;
}

.user-page{
    margin: 0 0.6rem;
}
.user-pic{
    text-align: center;
    padding: 0.67rem;
    margin-bottom: 1.47rem;
    border-bottom: 1px solid #f3f3f3;
}
.user-pic img{
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 50%;
}

.wy-confirm-btn{
    height: 2.35rem;
    line-height: 2.35rem;
    background: linear-gradient(90deg, #FEA829, #FE8F27);
    border-radius: 0.27rem;
    width: calc(100vw - 1.2rem);
    border: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0 0.6rem 0.6rem;
    font-size: 0.8rem;
    color: #FFFFFF;
}
</style>