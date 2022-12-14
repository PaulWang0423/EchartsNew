app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 4
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
         {
            name:'直接访问',
            type:'bar',
            barWidth: '20',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
