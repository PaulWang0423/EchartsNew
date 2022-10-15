var hours = ['0点-2点', '2点-4点', '4点-6点', '6点-8点', '8点-10点', '10点-12点', '12点-14点',
    '14点-16点', '16点-18点', '18点-20点', '20点-22点', '22点-0',
];
var days = ['07-01', '07-02', '07-03', '07-04', '07-05'];

var data = [
    [0, 0, 53.6],
    [0, 1, 7.7],
    [0, 2, 26.4],
    [0, 3, 34.1],
    [0, 4, 12.4],

    [1, 0, 39.9],
    [1, 1, 3.21],
    [1, 2, 43.3],
    [1, 3, 15.4],
    [1, 4, 31.0],

    [2, 0, 19.0],
    [2, 1, 12.5],
    [2, 2, 17.9],
    [2, 3, 18.2],
    [2, 4, 22.0],

    [3, 0, 31.0],
    [3, 1, 38.5],
    [3, 2, 52.5],
    [3, 3, 11.4],
    [3, 4, 6.9],

    [4, 0, 9.5],
    [4, 1, 9.0],
    [4, 2, 3.9],
    [4, 3, 2.3],
    [4, 4, 18.8],

    [5, 0, 9.5],
    [5, 1, 1.0],
    [5, 2, 9.9],
    [5, 3, 2.3],
    [5, 4, 12.8],

    [6, 0, 53.6],
    [6, 1, 7.7],
    [6, 2, 26.4],
    [6, 3, 34.1],
    [6, 4, 12.4],

    [7, 0, 39.9],
    [7, 1, 3.21],
    [7, 2, 43.3],
    [7, 3, 15.4],
    [7, 4, 31.0],

    [8, 0, 19.0],
    [8, 1, 12.5],
    [8, 2, 17.9],
    [8, 3, 18.2],
    [8, 4, 22.0],

    [9, 0, 31.0],
    [9, 1, 38.5],
    [9, 2, 42.5],
    [9, 3, 11.4],
    [9, 4, 6.9],

    [10, 0, 9.5],
    [10, 1, 0.0],
    [10, 2, 1.9],
    [10, 3, 2.3],
    [10, 4, 18.8],

    [11, 0, 31.0],
    [11, 1, 38.5],
    [11, 2, 60.5],
    [11, 3, 11.4],
    [11, 4, 6.9],
];


option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        },
        axisTick: {
            lineStyle: {
                color: '#c4c4c4'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        },
        axisTick: {
            show: false
        }
    },
    visualMap: {
        min: 0,
        max: 70,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        color: ['#0d59b7', '#bee8ff']
    },
    series: [{
        name: '',
        type: 'heatmap',
        data: data,
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};