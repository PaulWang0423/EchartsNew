const set1 = [
    ['销量', '销量', '累计销量百分比', '品牌'],
    [1, 993, 1.6, '海尔'],
    [2, 973, 3.17, '格力'],
    [3, 956, 4.71, '海尔'],
    [4, 927, 6.21, '小狗'],
    [5, 895, 7.65, '海尔'],
    [6, 893, 9.09, '海尔'],
    [7, 891, 10.53, '小狗'],
    [8, 880, 11.95, '美的'],
    [9, 879, 13.36, '美的'],
    [10, 879, 14.78, '格力'],
    [11, 879, 16.2, '格力'],
    [12, 877, 17.61, '小狗'],
    [13, 875, 19.02, '格力'],
    [14, 870, 20.43, '海尔'],
    [15, 862, 21.81, '海尔'],
    [16, 862, 23.2, '华帝'],
    [17, 851, 24.58, '格力'],
    [18, 843, 25.94, '格力'],
    [19, 815, 27.25, '美的'],
    [20, 813, 28.56, '美的'],
    [21, 810, 29.87, '美的'],
    [22, 798, 31.15, '华帝'],
    [23, 788, 32.42, '华帝'],
    [24, 784, 33.69, '格力'],
    [25, 774, 34.94, '美的'],
    [26, 773, 36.18, '海尔'],
    [27, 773, 37.43, '海尔'],
    [28, 764, 38.66, '海尔'],
    [29, 750, 39.87, '小狗'],
    [30, 749, 41.08, '华帝'],
    [31, 734, 42.26, '海尔'],
    [32, 723, 43.43, '华帝'],
    [33, 711, 44.57, '美的'],
    [34, 706, 45.71, '华帝'],
    [35, 703, 46.85, '格力'],
    [36, 694, 47.97, '华帝'],
    [37, 689, 49.08, '格力'],
    [38, 679, 50.17, '华帝'],
    [39, 679, 51.27, '海尔'],
    [40, 675, 52.35, '格力'],
    [41, 673, 53.44, '海尔'],
    [42, 672, 54.52, '小狗'],
    [43, 667, 55.6, '海尔'],
    [44, 662, 56.67, '美的'],
    [45, 656, 57.72, '华帝'],
    [46, 645, 58.76, '美的'],
    [47, 640, 59.8, '格力'],
    [48, 640, 60.83, '格力'],
    [49, 639, 61.86, '美的'],
    [50, 637, 62.89, '海尔'],
    [51, 633, 63.91, '华帝'],
    [52, 630, 64.92, '华帝'],
    [53, 626, 65.93, '小狗'],
    [54, 622, 66.93, '格力'],
    [55, 621, 67.94, '小狗'],
    [56, 618, 68.93, '小狗'],
    [57, 606, 69.91, '美的'],
    [58, 582, 70.85, '华帝'],
    [59, 577, 71.78, '华帝'],
    [60, 575, 72.71, '格力'],
    [61, 569, 73.62, '海尔'],
    [62, 566, 74.54, '海尔'],
    [63, 562, 75.44, '海尔'],
    [64, 556, 76.34, '美的'],
    [65, 555, 77.23, '海尔'],
    [66, 532, 78.09, '海尔'],
    [67, 532, 78.95, '小狗'],
    [68, 520, 79.79, '格力'],
    [69, 519, 80.62, '美的'],
    [70, 516, 81.46, '格力'],
    [71, 507, 82.27, '格力'],
    [72, 486, 83.06, '美的'],
    [73, 440, 83.77, '格力'],
    [74, 435, 84.47, '美的'],
    [75, 430, 85.16, '海尔'],
    [76, 430, 85.86, '华帝'],
    [77, 427, 86.54, '华帝'],
    [78, 416, 87.21, '海尔'],
    [79, 415, 87.88, '格力'],
    [80, 414, 88.55, '华帝'],
    [81, 414, 89.22, '格力'],
    [82, 404, 89.87, '海尔'],
    [83, 404, 90.52, '美的'],
    [84, 403, 91.17, '华帝'],
    [85, 400, 91.82, '美的'],
    [86, 400, 92.46, '华帝'],
    [87, 397, 93.1, '海尔'],
    [88, 387, 93.73, '华帝'],
    [89, 384, 94.35, '华帝'],
    [90, 375, 94.95, '华帝'],
    [91, 370, 95.55, '格力'],
    [92, 370, 96.14, '美的'],
    [93, 366, 96.73, '海尔'],
    [94, 353, 97.3, '华帝'],
    [95, 316, 97.81, '海尔'],
    [96, 314, 98.32, '格力'],
    [97, 306, 98.81, '华帝'],
    [98, 294, 99.29, '小狗'],
    [99, 229, 99.65, '海尔'],
    [100, 214, 100, '格力']
];

option = {
    dataset: [{
        source: set1,
    }],
    // backgroundColor: '#fff',
    dataZoom: {
        type: 'slider',
        handleSize: '80%',
        height: 16,
        bottom: 8
    },
    // legend: {
    //     left: 16,
    //     top: 8,
    //     data: set1[0].slice(1)
    // },
    visualMap: {
        type: 'piecewise',
        dimension: 3,
        categories: ['美的', '华帝', '小狗', '海尔', '格力'],
        color: ['#D96969', '#1A9E59', '#2684FF', '#262626', '#D4D2D3'],
        orient: 'horizontal',
        left: 16,
        top: 8,
    },
    grid: {
        left: 48,
        right: 48,
        top: 64,
        bottom: 64
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'category'
    },
    yAxis: [{
        type: 'value',
        name:'总销量'
    }, {
        type: 'value',
        name:'累加占比-%'
    }],
    series: [{
        type: 'bar'
    }, {
        type: 'line',
        yAxisIndex: 1

    }]


};
myChart.resize({
    width: 488,
    height: 290
});