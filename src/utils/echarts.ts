
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TitleComponent,
  DataZoomComponent,
  LegendComponentOption
} from 'echarts/components';
import {
  LineChart,
  LineSeriesOption,
  BarChart,
  BarSeriesOption,
  PictorialBarChart,
  PieChart,
  PictorialBarSeriesOption
} from 'echarts/charts';
import { UniversalTransition,LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  BarChart,
  PictorialBarChart,
  CanvasRenderer,
  UniversalTransition
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | BarSeriesOption
  | PictorialBarSeriesOption
>;

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

echarts.use([
  TitleComponent,
  GridComponent,
  DataZoomComponent,
  BarChart,
  CanvasRenderer
]);

/*
首页下方echarts
*/
export const echartsBottom=function () {
    let chartDom = document.getElementById('main')!;
    let myChart = echarts.init(chartDom);
    let option: EChartsOption;

    // Generate data
    let category = [];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];

    for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
    );
    let b = Math.random() * 200;
    let d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
    }

    // option
    option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'shadow'
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc'
        },
    },
    xAxis: {
        data: category,
        axisLine: {
        lineStyle: {
            color: '#ccc'
        }
        }
    },
    yAxis: {
        splitLine: { show: false },
        axisLine: {
        lineStyle: {
            color: '#ccc'
        }
        }
    },
    series: [
        {
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
        },
        {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' }
            ])
        },
        data: barData
        },
        {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
            { offset: 1, color: 'rgba(20,200,212,0)' }
            ])
        },
        z: -12,
        data: lineData
        },
        {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            color: '#0f375f'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
        }
    ]
    };
    option && myChart.setOption(option);
    window.addEventListener('resize',()=>{
        myChart.resize()
    })
}
// 首页左边echarts饼图
export const echartsLeft=function (){
    let chartDom = document.getElementById('left');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
    title: {
        text: '',
        subtext: 'Fake Data',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
        name: 'Access From',
        type: 'pie',
        radius: '100%',
        data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
            itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
        }
    ]
    };

    option && myChart.setOption(option);
    window.addEventListener('resize',()=>{
        myChart.resize()
    })
}
// 首页右边echarts
export const echartsRight=function (){
    let chartDom = document.getElementById('right');
    let myChart = echarts.init(chartDom);
    let option;

    // prettier-ignore
    let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
    // prettier-ignore
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    let yMax = 500;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
    }
    option = {
    title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
        inside: true,
        color: '#fff'
        },
        axisTick: {
        show: false
        },
        axisLine: {
        show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
        show: false
        },
        axisTick: {
        show: false
        },
        axisLabel: {
        color: '#999'
        }
    },
    dataZoom: [
        {
        type: 'inside'
        }
    ],
    series: [
        {
        type: 'bar',
        showBackground: true,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
            ])
        },
        emphasis: {
            itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
            ])
            }
        },
        data: data
        }
    ]
    };
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
    });

    option && myChart.setOption(option);
    window.addEventListener('resize',()=>{
        myChart.resize()
    })

}