var icon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABDCAMAAABjnP3jAAAAilBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAADT09MAAAAAAAAAAAAAAAD////8/Pz5+fnr6+v8/Pzr6+vZ2dn09PTFxcX+/v719fX6+vrf39+5ubnDw8MSEhIrKytRUVF2dnZAQEDi4uLi4uLk5OTk5OT///+tdFIzAAAALXRSTlMABQgNFBwDNS4mCxEYIyAamisoMS364t9b57qWj3b0s6mec28rJhMNDKemZ2YvJtR9AAACMUlEQVRo3u2ZaW/iMBBAaTDdxI7tOCeF0vvaY/7/39sZJ2BgKyUrxNBKfh+RyHtMJkhJZl+Ja+LqzHjJ53rvTs5OX/Gp/n350DZwZu66h+X7vwmoT5YtMNEuE0w48n/cAiO3H0NB+P2cfioYZhDmD8yEs0ABydsNMHPzllDA4Jd/gJ3fEguGADm/B3bu5xIDhgGoFthpFY2gD5iLBthpxHwbIFUOFyBX8osE4ApYuAAWl4ACaAUuE0BLMAQs4AIsYkAMiAExIAbEgBgQA2JADIgB+wF3wE5zENABO+1+gF0BOytLAdt7ww2ws6F7w93d8Sv/M6LXg9tz8wzMPJsQQFuoH4GVR007uA2gEbz8AkZ+vtAAKMAXSBpB+dQBE91TSQOQ5N+NAAvSzapr4Mw03WqToj8MoN8CX+DSqvoxjQKOKCZ+sapS5/20AeFZsaQCozPn6jodpcLO4tiPH6aj1LVzmTbkl1d9QCgQmGC0zsYpHc6qOPDj73JlNo7WBvVi5w8FiU/IrV2MY2hWabHnT11GRx7H2tzrk+APBZiglJhATqerTIvgL2msuZiAUqgP/lBACYnEiAlgJu1sXQz+mrZK4JEnINFO+utT3prJfmczKiB/1m+V/I+3Zie+N8QGJazJ3Bpg7TJjhUL7ae8Np+Mr+wJdrtel7v3+2DMWqIGuGkG7SNsnaKtZ7McFIrc2F+z+UKAUXVfM/lDg/zr8Rc3tDwUefn9I8PDrQ4Jn9q35C4Ev35B0ZZBdAAAAAElFTkSuQmCC';

var wanchengData = [180, 119, 155, 101, 65];
var mubiaoData = [250, 250, 250, 250, 250];

colors = [
    ['#389af4', '#dfeaff'],
    ['#ff8c37', '#ffdcc3'],
    ['#ffc257', '#ffedcc'],
    ['#fd6f97', '#fed4e0'],
    ['#a181fc', '#e3d9fe'],
];
option = {
    backgroundColor: '#fff',
    title: [
        {
            text: 'a',
            left: '13.5%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#389af4',
                textAlign: 'center',
            },
        },
        {
            text: 'b',
            left: '31.5%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#ff8c37',
                textAlign: 'center',
            },
        },
        {
            text: 'c',
            left: '49.5%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#ffc257',
                textAlign: 'center',
            },
        },
        {
            text: 'd',
            left: '67.5%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#fd6f97',
                textAlign: 'center',
            },
        },
        {
            text: 'e',
            left: '85.5%',
            top: '80%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#a181fc',
                textAlign: 'center',
            },
        },
    ],
    grid: [
        {
            left: '5%',
            top: '5%',
            bottom: '30%',
            right: '5%',
        },
        {
            left: '5%',
            top: '15%',
            bottom: '30%',
            right: '5%',
        },
    ],
    legend: {
        show: false,
        data: ['完成', '目标'],
        align: 'left',
        right: 0,
        textStyle: {
            color: '#434e79',
            fontSize: 14,
            fontWeight: 400,
        },
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 35,
    },
    tooltip: {
        show: false,
        trigger: 'axis',
        padding: [8, 10],
        textStyle: {
            color: '#fff',
        },
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer: {
            type: 'none',
        },
    },
    xAxis: [
        {
            type: 'category',
            gridIndex: 0,
            data: ['A', 'B', 'C', 'D', 'E'],
            axisLine: {
                lineStyle: {
                    color: '#E0E2E5',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#434e79',
                    fontSize: 16,
                    fontWeight: 400,
                },
            },
        },
        {
            type: 'category',
            gridIndex: 1,
            data: ['a', 'b', 'c', 'd', 'e'],
            axisLine: {
                lineStyle: {
                    color: '#E0E2E5',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#434e79',
                    fontSize: 16,
                    fontWeight: 400,
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            position: [-20, 0, 0, 0],
            show: true,
            interval: 50,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#E0E2E5',
                },
            },
        },
        {
            type: 'value',
            gridIndex: 1,
            position: [20, 0, 0, 0],
            offset: [-50],
            show: true,
            max: 200,
            interval: 50,
            axisLine: {
                show: false,
            },
            axisLabel: {
                padding: [20, 0, 0, 0],
                verticalAlign: 'top',
                // backgroundColor:'red',
                formatter: function (value, index) {
                    if (value === 0) {
                        value = '';
                        return value;
                    } else {
                        return value;
                    }
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#E0E2E5',
                },
            },
        },
    ],
    series: [
        {
            name: '目标',
            type: 'bar',
            max: 250,
            silent: true,
            barMaxWidth: 20,
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbol: 'none',
            z: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0)',
                },
            },
            data: mubiaoData,
            markLine: {
                symbol: ['none', 'none'],
                symbolSize: 15,
                lineStyle: {
                    color: '#E0E2E5',
                },
                label: {
                    show: false,
                },
                data: [
                    {
                        xAxis: 'A',
                    },
                    {
                        xAxis: 'B',
                    },
                    {
                        xAxis: 'C',
                    },
                    {
                        xAxis: 'D',
                    },
                    {
                        xAxis: 'E',
                    },
                ],
            },
            markPoint: {
                symbol: 'circle',
                symbolSize: 15,
                label: {
                    show: false,
                },
                data: [
                    {
                        yAxis: 250,
                        xAxis: 'A',
                        itemStyle: {
                            normal: {
                                color: '#389af4',
                            },
                        },
                    },
                    {
                        yAxis: 250,
                        xAxis: 'B',
                        itemStyle: {
                            normal: {
                                color: '#ff8c37',
                            },
                        },
                    },
                    {
                        yAxis: 250,
                        xAxis: 'C',
                        itemStyle: {
                            normal: {
                                color: '#ffc257',
                            },
                        },
                    },
                    {
                        yAxis: 250,
                        xAxis: 'D',
                        itemStyle: {
                            normal: {
                                color: '#fd6f97',
                            },
                        },
                    },
                    {
                        yAxis: 250,
                        xAxis: 'E',
                        itemStyle: {
                            normal: {
                                color: '#a181fc',
                            },
                        },
                    },
                ],
            },
        },
        {
            name: '完成',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            silent: false,
            barMaxWidth: 20,
            z: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 10, 0, 0],
                    color: (params) => {
                        let colors = ['#dfeaff', '#ffdcc3', '#ffedcc', '#fed4e0', '#e3d9fe'];
                        return colors[params.dataIndex];
                    },
                    label: {
                        show: true,
                        position: 'top',
                        distance: 0,
                        color: '#000',
                        fontSize: 16,
                        backgroundColor: {
                            image: icon,
                        },
                        padding: [10, 15, 20, 15],
                    },
                },
            },
            data: wanchengData,
            emphasis: {
                itemStyle: {
                    color: '#389af4',
                },
            },
        },
        {//折线
            data: [120, 75, 100, 80, 45],
            type: 'line',
            smooth: true,

            name: '折线图',
            symbol: 'none',
            lineStyle: {
                color: '#3275FB',
                width: 4,
                shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
                shadowBlur: 5,
                shadowOffsetY: 20,
            },
               areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(25,163,223,.3)"


                    },
                    {
                        offset: 1,
                        color: "rgba(25,163,223, 0)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        }
        },
        {//piek
            name: 'a',
            type: 'pie',
            xAxisIndex: 2,
            yAxisIndex: 2,
            clockWise: true,
            radius: [55, 65],
            itemStyle: {
                normal: {
                    borderRadius: 7,
                    color: '#82C0F9',
                    shadowColor: '#389af4',
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: true,
            center: ['14%', '85%'],
            data: [
                {
                    value: 54,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: '#389af4',
                            },
                        },
                    },
                },
                {
                    value: 46,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#dfeaff',
                        },
                        emphasis: {
                            color: '#dfeaff',
                        },
                    },
                },
            ],
        },
        {
            name: 'b',
            type: 'pie',
            clockWise: true,
             radius: [55, 65],
            itemStyle: {
                normal: {
                    borderRadius: 7,
                    color: '#FFB379', 
                    shadowColor: '#ff8c37',
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            center: ['32%', '85%'],
            data: [
                {
                    value: 44,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: '#ff8c37',
                            },
                        },
                    },
                },
                {
                    value: 56,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#ffdcc3',
                        },
                        emphasis: {
                            color: '#ffdcc3',
                        },
                    },
                },
            ],
        },
        {
            name: 'c',
            type: 'pie',
            clockWise: true,
            radius: [55, 65],
            itemStyle: {
                normal: {
                    borderRadius: 7,
                    color: '#FFD184',
                    shadowColor: '#ffc257',
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            center: ['50%', '85%'],
            data: [
                {
                    value: 35,
                    name: 'c',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: '#ffc257',
                            },
                        },
                    },
                },
                {
                    value: 65,
                    name: 'invisible',
                    itemStyle: {
                        borderRadius: 7,
                        normal: {
                            color: '#ffedcc',
                        },
                        emphasis: {
                            color: '#ffedcc',
                        },
                    },
                },
            ],
        },
        {
            name: 'd',
            type: 'pie',
            clockWise: true,
             radius: [55, 65],
            itemStyle: {
                normal: {
                    borderRadius: 7,
                    color: '#FD84A5',
                    shadowColor: '#fd6f97',
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            center: ['68%', '85%'],
            data: [
                {
                    value: 30,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },

                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: '#fd6f97',
                            },
                        },
                    },
                },
                {
                    value: 70,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#fed4e0',
                        },
                        emphasis: {
                            color: '#fed4e0',
                        },
                    },
                },
            ],
        },
        {
            name: 'e',
            type: 'pie',
            clockWise: true,
            radius: [55, 65],
            itemStyle: {
                normal: {
                    borderRadius: 7,
                    color: '#C0ACFD',
                    shadowColor: '#a181fc',
                    shadowBlur: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            center: ['86%', '85%'],
            data: [
                {
                    value: 20,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: '#a181fc',
                            },
                        },
                    },
                },
                {
                    value: 80,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#e3d9fe',
                        },
                        emphasis: {
                            color: '#e3d9fe',
                        },
                    },
                },
            ],
        },
    ],
};

myChart.on('mouseover', (params) => {
    if (params.componentSubType === 'bar' && params.seriesName != '目标') {
         console.log(option,params.dataIndex);
        let colors = ['#389af4', '#ff8c37', '#ffc257', '#fd6f97', '#a181fc'];
        var color = colors[params.dataIndex];
        option.series[1].emphasis.itemStyle.color = color;
        var PIEindex =params.dataIndex+3;
      option.series[PIEindex].radius = [60,70];
         option.series[PIEindex].itemStyle.normal.color=colors[params.dataIndex];
        myChart.setOption(option);
    }
});

myChart.on('mouseout', (params) => {
    if (params.componentSubType === 'bar' && params.seriesName != '目标') {
        //  console.log(params);
        let colors = ['#82C0F9', '#FFB379', '#FFD184', '#FD84A5', '#C0ACFD'];
        option.series[1].itemStyle.normal.label.show = false;
         var PIEindex =params.dataIndex+3;
      option.series[PIEindex].radius = [55,65];
    option.series[PIEindex].itemStyle.normal.color=colors[params.dataIndex];
        myChart.setOption(option);
    }
});
