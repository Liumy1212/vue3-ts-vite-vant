<script setup lang="ts">
    import {reactive,inject,onMounted} from 'vue'
    const echarts = inject('echarts')
    const props = defineProps({
        data: {
            type: Object
        }
    })
    const state = reactive({
        option: {
            toolbox: {
                show: true,
            },
            grid: {
                top: '5%',
                left: '0%',
                right: '0%',
                bottom: '5%',
                containLabel: true
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [10, 60],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 1
                    },
                    data: [],
                    label: {
                        fontSize: 10,
                        formatter(param){
                            return param.name + ' ' + param.percent + '%'
                        }
                    }
                }
            ]
            }
    })
    onMounted(()=>{
        state.option.series[0].data=props.data
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chartPie'));
        // 绘制图表
        myChart.setOption(state.option);
        // 图表响应式
        window.addEventListener('resize',()=>{
            myChart.resize()
        })
    })
</script>
<template>
    <div id="chartPie"></div>
</template>
<style scoped>
    #chartPie{
        height: 11.63rem;
        background: #FFFFFF;
        border-radius: 0.27rem;
        width: 100%;
    }
</style>