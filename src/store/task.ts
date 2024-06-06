import { defineStore } from 'pinia'
import { cityList } from '../api/task'
export const taskStore = defineStore({
    id: 'task',
    state: () => {
        return {
            cityValue: localStorage.getItem('city') ||  '北京',
            cityList: [],
            bannerList: [],
            positionList: [],
            screenList: {},
            hotSearchList: [],
            areaList: []
        }
    },
    actions: {
        setCityValue(value: string){
            this.cityValue = value
        },
        async getCityList(){
            const res:any = await cityList({})
            if(res){
                this.cityList = res
                let city:any = []
                for(var i = 0;i<res.length;i++){
                    city.push({
                        text: res[i].name,
                        children: []
                    })
                    if(res[i].children && res[i].children.length){
                        for(var j = 0;j<res[i].children.length;j++){
                            city[i].children.push({
                                text: res[i].children[j].name
                            })
                        }
                    }
                }
                this.areaList = city
            }
        },
        setCityList(data: any){
            this.cityList = data
        },
        setBannerList(data: any){
            this.bannerList = data
        },
        setPositionList(data: any){
            this.positionList = data
        },
        setScreenList(data: any){
            this.screenList = data
        },
        setHotSearchList(data: any){
            this.hotSearchList = data
        }
    }
})