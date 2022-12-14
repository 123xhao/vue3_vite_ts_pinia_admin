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
  PictorialBarSeriesOption,
  GaugeSeriesOption,
  GaugeChart
} from 'echarts/charts';
import { UniversalTransition,LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | BarSeriesOption
  | PictorialBarSeriesOption
  | GaugeSeriesOption
>;

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
  GridComponent,
  DataZoomComponent,
  BarChart,
  GaugeChart,
  LineChart,
  PictorialBarChart,
  UniversalTransition
]);
/*
首页下方echarts
*/
export const echartsBottom=function () {
    let myChart = echarts.getInstanceByDom(document.getElementById("main") as HTMLDivElement);
    //然后判断实例是否存在，如果不存在，就创建新实例
    //然后判断实例是否存在，如果不存在，就创建新实例
    if (myChart == null) {
        myChart = echarts.init(document.getElementById("main") as HTMLDivElement);
    }else{
        myChart.dispose()
        myChart = echarts.init(document.getElementById("main") as HTMLDivElement);
    }
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
        myChart?.resize()
    })
}
// 首页左边echarts饼图
export const echartsLeft=function (){
    let myChart = echarts.getInstanceByDom(document.getElementById("left") as HTMLDivElement);
    //然后判断实例是否存在，如果不存在，就创建新实例
    //然后判断实例是否存在，如果不存在，就创建新实例
    if (myChart == null) {
        myChart = echarts.init(document.getElementById("left") as HTMLDivElement);
    }else{
        myChart.dispose()
        myChart = echarts.init(document.getElementById("left") as HTMLDivElement);
    }
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
        bottom: '5%',
        left: 'center'
    },
    series: [
        {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
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
        myChart?.resize()
    })
}
// 首页中间echarts时钟
export const echartsCenter=function (){
    let myChart = echarts.getInstanceByDom(document.getElementById("center") as HTMLDivElement);
    //然后判断实例是否存在，如果不存在，就创建新实例
    //然后判断实例是否存在，如果不存在，就创建新实例
    if (myChart == null) {
        myChart = echarts.init(document.getElementById("center") as HTMLDivElement);
    }else{
        myChart.dispose()
        myChart = echarts.init(document.getElementById("center") as HTMLDivElement);
    }
    let option: EChartsOption;

    option = {
    series: [
        {
        name: 'hour',
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 12,
        splitNumber: 12,
        clockwise: true,
        axisLine: {
            lineStyle: {
            width: 6,
            color: [[1, 'rgba(0,0,0,0.7)']],
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 15
            }
        },
        splitLine: {
            lineStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 3,
            shadowOffsetX: 1,
            shadowOffsetY: 2
            }
        },
        axisLabel: {
            fontSize: 12,
            distance: 14,
            formatter: function (value) {
            if (value === 0) {
                return '';
            }
            return value + '';
            }
        },
        anchor: {
            show: true,
            icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
            showAbove: false,
            offsetCenter: [0, '-35%'],
            size: 48,
            keepAspect: true,
            itemStyle: {
            color: '#707177'
            }
        },
        pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 12,
            length: '55%',
            offsetCenter: [0, '8%'],
            itemStyle: {
            color: '#C0911F',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4
            }
        },
        detail: {
            show: false
        },
        title: {
            offsetCenter: [0, '30%']
        },
        data: [
            {
            value: 0
            }
        ]
        },
        {
        name: 'minute',
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 60,
        clockwise: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 8,
            length: '70%',
            offsetCenter: [0, '8%'],
            itemStyle: {
            color: '#C0911F',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4
            }
        },
        anchor: {
            show: true,
            size: 10,
            showAbove: false,
            itemStyle: {
            borderWidth: 15,
            borderColor: '#C0911F',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4
            }
        },
        detail: {
            show: false
        },
        title: {
            offsetCenter: ['0%', '-40%']
        },
        data: [
            {
            value: 0
            }
        ]
        },
        {
        name: 'second',
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 60,
        animationEasingUpdate: 'bounceOut',
        clockwise: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 4,
            length: '85%',
            offsetCenter: [0, '8%'],
            itemStyle: {
            color: '#C0911F',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4
            }
        },
        anchor: {
            show: true,
            size: 8,
            showAbove: true,
            itemStyle: {
            color: '#C0911F',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 8,
            shadowOffsetX: 2,
            shadowOffsetY: 4
            }
        },
        detail: {
            show: false
        },
        title: {
            offsetCenter: ['0%', '-40%']
        },
        data: [
            {
            value: 0
            }
        ]
        }
    ]
    };

    setInterval(function () {
    var date = new Date();
    var second = date.getSeconds();
    var minute = date.getMinutes() + second / 60;
    var hour = (date.getHours() % 12) + minute / 60;

    option.animationDurationUpdate = 300;
    myChart.setOption<echarts.EChartsOption>({
        series: [
        {
            name: 'hour',
            animation: hour !== 0,
            data: [{ value: hour }]
        },
        {
            name: 'minute',
            animation: minute !== 0,
            data: [{ value: minute }]
        },
        {
            animation: second !== 0,
            name: 'second',
            data: [{ value: second }]
        }
        ]
    });
    }, 1000);
    option && myChart.setOption(option);
    window.addEventListener('resize',()=>{
        myChart?.resize()
    })
}
// 首页右边echarts
export const echartsRight=function (){
    let myChart = echarts.getInstanceByDom(document.getElementById("right") as HTMLDivElement);
    //然后判断实例是否存在，如果不存在，就创建新实例
    if (myChart == null) {
        myChart = echarts.init(document.getElementById("right") as HTMLDivElement);
    }else{
        myChart.dispose()
        myChart = echarts.init(document.getElementById("right") as HTMLDivElement);
    }
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