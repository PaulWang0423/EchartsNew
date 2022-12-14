//极值点的数据是用另外的手段处理的，echarts这个工作处理数据的能力不强
//所以以下的代码中你是无法看出来极值点是怎么找到的
var data = echarts.dataTool.prepareBoxplotData([[1.06, 1.11, 1.11, 1.34, 2.26, 2.5, 3.13, 6.27, 7.26, 7.43, 7.54, 7.99, 8.22, 8.49, 9.31, 10.36, 10.44, 10.53, 11.69, 11.85, 12.48, 14.32, 14.67, 16.12, 18.5, 20.52, 25.08, 32.5, 45.38, 131.0],
[1.61, 1.65, 1.88, 1.95, 1.98, 2.08, 2.48, 2.7, 3.33, 3.76, 4.85, 5.1, 6.1, 6.9, 7.29, 8.32, 9.35, 9.81, 10.39, 12.08, 12.37, 14.97, 15.76, 17.07, 17.4, 20.96, 22.66, 27.55, 32.05, 86.22],
[1.94, 2.1, 2.35, 3.18, 3.46, 3.85, 4.26, 4.65, 4.69, 7.06, 7.19, 7.6, 7.82, 8.77, 11.02, 11.61, 11.87, 12.08, 12.4, 12.45, 12.52, 13.13, 17.64, 24.27, 24.33, 25.56, 27.47, 35.42, 39.76, 109.0],
[3.39, 3.4, 3.57, 3.74, 4.18, 4.77, 6.96, 8.11, 8.14, 8.53, 8.77, 9.42, 10.43, 10.79, 11.8, 11.88, 13.38, 15.98, 17.41, 19.57, 22.15, 27.7, 28.05, 28.25, 29.87, 33.13, 36.06, 43.05, 45.15, 139.0],
[2.88, 3.21, 3.52, 3.92, 4.14, 4.62, 5.94, 6.91, 9.17, 11.43, 11.74, 12.54, 15.08, 15.51, 15.52, 16.82, 16.84, 17.25, 20.77, 22.9, 23.24, 29.74, 33.0, 44.27, 51.93, 58.19, 58.56, 68.94, 126.0, 182.0],
[4.11, 4.54, 5.14, 5.18, 5.27, 6.25, 7.7, 7.79, 11.01, 12.65, 13.98, 14.93, 14.95, 19.98, 21.18, 21.57, 21.93, 23.58, 25.45, 28.1, 30.07, 36.53, 41.6, 49.97, 55.57, 84.39, 90.06, 132.0, 132.0, 170.0],
[6.88, 6.93, 6.96, 7.12, 7.55, 8.21, 9.46, 10.69, 10.86, 10.99, 13.62, 17.99, 22.17, 23.14, 24.56, 26.2, 26.46, 28.92, 34.47, 36.52, 37.14, 45.31, 55.91, 57.17, 62.04, 92.32, 99.07, 171.0, 175.0, 232.0],
[7.04, 7.34, 8.07, 9.02, 9.94, 10.49, 10.58, 11.05, 11.79, 13.46, 14.75, 15.52, 15.58, 27.55, 27.65, 28.51, 29.77, 30.35, 32.01, 39.93, 41.33, 46.9, 48.33, 49.73, 50.06, 72.19, 93.38, 212.0, 233.0, 353.0],
[4.36, 5.02, 5.42, 6.15, 6.25, 6.94, 7.19, 8.5, 10.41, 13.61, 16.45, 19.31, 24.8, 27.83, 28.44, 29.15, 31.3, 32.87, 33.95, 35.7, 38.91, 38.96, 40.8, 60.24, 72.92, 104.0, 132.0, 142.0, 211.0, 421.0],
[3.54, 3.56, 3.98, 5.12, 6.05, 7.25, 7.48, 8.45, 9.38, 10.17, 10.3, 10.63, 11.32, 13.87, 20.95, 21.16, 22.19, 25.92, 28.97, 31.8, 32.42, 33.59, 40.65, 41.03, 45.17, 50.02, 50.38, 146.0, 199.0, 243.0],
[5.14, 5.58, 6.49, 7.18, 7.51, 7.98, 8.37, 11.09, 11.48, 11.49, 12.22, 13.11, 15.04, 16.01, 16.8, 21.05, 25.64, 28.85, 29.2, 36.83, 36.99, 50.26, 55.42, 61.82, 66.75, 67.45, 86.7, 193.0, 221.0, 238.0],
[6.27, 6.43, 6.79, 8.85, 9.43, 10.2, 10.67, 13.08, 13.81, 15.0, 16.34, 17.14, 17.67, 18.66, 22.68, 26.13, 31.3, 32.49, 37.88, 52.12, 55.16, 61.04, 66.15, 66.45, 81.32, 97.27, 130.0, 136.0, 159.0, 229.0],
[4.15, 5.68, 6.14, 6.95, 7.82, 9.25, 9.43, 12.09, 13.84, 14.98, 16.32, 16.89, 17.37, 20.46, 23.84, 29.54, 30.43, 43.17, 50.25, 50.84, 60.12, 62.0, 63.6, 68.67, 71.28, 79.12, 89.55, 165.0, 215.0, 249.0],
[5.2, 5.42, 7.75, 8.15, 8.38, 8.58, 11.21, 11.38, 12.23, 14.44, 19.05, 20.74, 20.75, 21.38, 22.59, 26.69, 30.47, 33.43, 46.38, 49.87, 51.17, 53.45, 60.46, 69.49, 77.81, 81.15, 85.5, 135.0, 148.0, 252.0],
[4.92, 5.25, 6.14, 8.91, 9.36, 10.21, 10.58, 10.76, 11.84, 14.13, 14.85, 15.22, 18.92, 24.43, 26.54, 31.35, 36.35, 40.31, 49.41, 53.97, 54.96, 57.51, 60.44, 60.47, 60.82, 73.76, 75.93, 84.37, 236.0, 288.0],
[2.49, 2.58, 2.88, 4.12, 4.14, 4.53, 7.27, 7.39, 8.58, 9.07, 10.26, 11.54, 13.38, 13.75, 15.36, 23.28, 26.56, 28.15, 28.97, 31.11, 32.11, 53.76, 65.83, 68.83, 74.88, 75.91, 106.0, 134.0, 288.0, 304.0],
[2.14, 2.34, 2.71, 2.87, 2.89, 3.84, 5.18, 6.92, 7.71, 8.23, 8.29, 11.88, 12.31, 14.3, 14.35, 14.89, 22.46, 23.01, 23.77, 25.54, 48.24, 50.46, 56.5, 65.87, 69.9, 72.79, 98.68, 187.0, 196.0, 290.0],]
);
// var data1=echarts.dataTool.prepareBoxplotData(
//     [[-403.0, -38.67, -33.79, -26.36, -24.22, -18.75, -15.49, -12.85, -10.34, -9.92, -9.82, -8.98, -4.6, -4.0, -2.69, -2.23, -2.06, -1.74, -1.55, -1.35, -1.05, -1.04, -1.03, -0.97, -0.94, -0.91, -0.9, -0.86, -0.82, -0.7],
// [-390.0, -34.76, -27.55, -23.21, -17.75, -12.67, -9.4, -7.99, -7.02, -5.95, -3.78, -3.27, -3.13, -2.23, -2.03, -1.75, -1.74, -1.43, -1.39, -1.25, -1.2, -1.1, -1.04, -0.84, -0.83, -0.82, -0.8, -0.76, -0.74, -0.74],
// [-451.0, -39.69, -26.26, -16.0, -14.88, -11.35, -9.58, -7.64, -5.54, -4.54, -4.32, -4.26, -3.38, -1.95, -1.86, -1.52, -1.4, -1.3, -1.29, -1.23, -1.22, -1.19, -1.11, -1.07, -1.02, -0.97, -0.86, -0.8, -0.78, -0.78],
// [-519.0, -39.63, -35.09, -29.31, -12.8, -11.88, -9.3, -8.35, -7.55, -6.83, -5.79, -5.47, -5.14, -3.31, -2.13, -2.12, -2.02, -1.93, -1.63, -1.54, -1.28, -1.12, -1.07, -1.04, -1.02, -0.95, -0.95, -0.94, -0.9, -0.85],
// [-632.0, -59.78, -56.76, -41.29, -15.81, -14.2, -13.85, -13.48, -8.85, -7.02, -6.46, -6.41, -6.38, -4.68, -4.46, -4.41, -4.36, -2.59, -1.8, -1.72, -1.68, -1.67, -1.64, -1.59, -1.37, -1.36, -1.19, -1.16, -1.0, -0.96],
// [-745.0, -87.01, -52.17, -43.34, -20.98, -19.54, -18.23, -17.02, -10.28, -9.05, -8.54, -8.03, -8.02, -7.98, -7.88, -7.64, -7.15, -5.13, -3.61, -3.35, -3.34, -2.81, -2.75, -2.65, -2.48, -2.47, -2.27, -1.99, -1.89, -1.89],
// [-806.0, -114.0, -84.32, -45.32, -31.17, -29.57, -28.75, -22.22, -13.89, -12.91, -12.08, -9.3, -8.12, -7.88, -7.86, -6.75, -6.5, -5.86, -5.45, -4.52, -4.0, -3.97, -3.3, -3.25, -3.22, -2.91, -2.59, -2.0, -1.79, -1.73],
// [-711.0, -143.0, -117.0, -64.16, -44.59, -36.95, -30.52, -27.43, -23.92, -23.52, -16.17, -13.85, -11.44, -9.95, -9.72, -9.32, -8.95, -8.72, -8.37, -8.3, -8.08, -7.52, -6.95, -6.43, -6.17, -6.02, -5.25, -4.63, -4.35, -3.6],
// [-681.0, -153.0, -134.0, -66.85, -52.12, -51.31, -39.42, -35.83, -31.95, -30.97, -28.19, -28.18, -24.99, -16.85, -16.41, -15.65, -15.3, -12.78, -11.88, -10.93, -10.82, -10.54, -10.26, -6.69, -6.66, -6.46, -6.27, -6.21, -5.32, -4.96],
// [-373.0, -92.25, -63.72, -48.9, -40.74, -40.32, -35.91, -26.19, -25.45, -24.31, -22.06, -17.87, -11.36, -8.62, -8.23, -7.91, -7.57, -6.74, -6.61, -6.13, -5.24, -5.0, -4.97, -4.93, -4.87, -4.65, -4.26, -4.12, -3.99, -3.35],
// [-431.0, -92.5, -75.76, -73.02, -58.16, -56.36, -54.52, -44.71, -44.62, -30.28, -25.88, -24.2, -22.03, -8.74, -8.48, -8.28, -7.55, -7.35, -5.64, -5.49, -4.5, -4.28, -4.21, -4.02, -3.93, -3.78, -3.43, -3.11, -3.02, -2.91],
// [-445.0, -76.97, -74.4, -68.23, -62.52, -62.18, -49.73, -47.06, -44.43, -29.49, -28.58, -27.36, -14.78, -13.23, -10.23, -9.8, -9.32, -9.28, -8.0, -5.49, -5.48, -5.34, -5.33, -5.09, -5.05, -5.02, -4.91, -4.9, -4.82, -4.62],
// [-426.0, -113.0, -91.47, -74.06, -65.7, -64.48, -47.96, -32.89, -24.42, -20.31, -18.61, -15.76, -14.34, -11.37, -10.71, -9.57, -9.56, -8.2, -7.32, -6.97, -6.89, -6.79, -6.26, -6.17, -5.76, -5.39, -5.38, -5.02, -4.91, -4.73],
// [-350.0, -152.0, -74.84, -63.62, -59.45, -49.12, -47.87, -31.08, -29.11, -24.38, -21.64, -16.52, -13.12, -12.5, -11.52, -11.24, -9.39, -7.84, -7.57, -6.75, -6.25, -5.85, -5.82, -5.7, -5.05, -4.99, -4.95, -4.86, -4.84, -4.73],
// [-374.0, -161.0, -104.0, -43.6, -43.58, -42.32, -37.36, -27.51, -27.31, -23.13, -19.76, -18.68, -11.6, -11.44, -9.51, -8.93, -8.67, -6.68, -6.6, -6.38, -6.37, -5.97, -5.8, -5.73, -5.34, -5.23, -4.67, -4.6, -4.5, -4.34],
// [-435.0, -150.0, -59.43, -58.06, -56.72, -53.08, -32.12, -28.85, -27.23, -22.46, -18.78, -17.52, -17.17, -16.79, -16.05, -15.76, -13.91, -10.97, -10.77, -10.27, -9.17, -8.05, -7.51, -5.97, -5.46, -5.25, -5.13, -5.04, -4.67, -4.29],
// [-452.0, -158.0, -50.63, -32.95, -32.63, -27.55, -26.18, -23.53, -22.97, -21.12, -20.13, -16.77, -14.53, -12.32, -12.31, -12.11, -9.8, -9.48, -8.93, -8.32, -8.27, -6.89, -5.3, -4.77, -4.53, -4.39, -4.19, -4.13, -3.87, -3.78],]
//     )
console.log(data.boxData)
option = {
    title: [{
            text: '2000-2016年主要经常账户盈余分布情况',
            left: 'center',
        },
        // {
        //     text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
        //     borderColor: '#999',
        //     borderWidth: 1,
        //     textStyle: {
        //         fontSize: 14
        //     },
        //     left: '10%',
        //     top: '90%'
        // }
    ],
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        top:'5%',
        bottom: '5%'
    },
    xAxis: {
        type: 'category',
        data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        },
        axisLabel: {
            interval:0
            // data:['"2000"', '"2001"', '"2002"', '"2003"', '"2004"', '"2005"', '"2006"', '"2007"', '"2008"', '"2009"', '"2010"', '"2011"', '"2012"', '"2013"', '"2014"', '"2015"', '"2016"']
            // formatter: '200{value}'
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: 'billion $',
        splitArea: {
            show: true
        }
    },
    series: [{
            name: 'boxplot1',
            type: 'boxplot',
            data: data.boxData,
            tooltip: {
                formatter: function(param) {
                    return [
                        param.name + ': ',
                        'upper: ' + param.data[5],
                        'Q3: ' + param.data[4],
                        'median: ' + param.data[3],
                        'Q1: ' + param.data[2],
                        'lower: ' + param.data[1]
                    ].join('<br/>')
                }
            }
        },
        //         {da
        //     name: 'outlier',
        //     type: 'scatter',
        //     data: data1.outliers
        // },
        // {
        //     name: 'boxplot',
        //     type: 'boxplot',
        //     data: data1.boxData,
        //     tooltip: {
        //         formatter: function(param) {
        //             return [
        //                 param.name + ': ',
        //                 'upper: ' + param.data[5],
        //                 'Q3: ' + param.data[4],
        //                 'median: ' + param.data[3],
        //                 'Q1: ' + param.data[2],
        //                 'lower: ' + param.data[1]
        //             ].join('<br/>')
        //         }
        //     }
        // },
        {
            name: '瑞士',
            type: 'scatter',
            symbolSize:5,
            data: [
                [0, 33, "瑞士"],
            ],
            label: {
                show: true,
                formatter: "{@[2]}",
                position: 'right',
            },
        }, {
            name: '沙特',
            type: 'scatter',
            itemStyle: {
                normal: {
                    color: 'purple'
                }
            },
            symbolSize:5,
            data: [
                [11, 159, "沙特"],
                [12, 165, "沙特"],
                [13, 135, "沙特"],
                [5, 90, "沙特"],
                [8, 132, "沙特"],
            ],
            label: {
                show: true,
                formatter: "{@[2]}",
                position: 'right',
            },
        }, {
            name: '俄罗斯',
            type: 'scatter',
            symbolSize:5,
            data: [
                [0, 45, "俄罗斯"],
                [8, 104, "俄罗斯"],
            ],
            label: {
                show: true,
                formatter: "{@[2]}",
                position: 'right',
            },
        }, {
            name: '日本',
            type: 'scatter',
            itemStyle: {
                normal: {
                    color: 'green'
                }
            },
            symbolSize:5,
            data: [
                [0, 131, "日本"],
                [1, 86, "日本"],
                [2, 109, "日本"],
                [3, 139, "日本"],
                [4, 182, "日本"],
                [5, 170, "日本"],
                [6, 175, "日本"],
                [7, 212, "日本"],
                [8, 142, "日本"],
                [9, 146, "日本"],
                [10, 221, "日本"],
                [16, 187, "日本"],
            ],
            label: {
                show: true,
                formatter: "{@[2]}",
                position: 'right',
            },
        }, {
            name: '德国',
            type: 'scatter',
            itemStyle: {
                normal: {
                    color: 'blue'
                }
            },
            symbolSize:5,
            data: [
                [2, 45, "德国"],
                [4, 126, "德国"],
                [5, 132, "德国"],
                [6, 164, "德国"],
                [7, 233, "德国"],
                [8, 211, "德国"],
                [9, 199, "德国"],
                [10, 187, "德国"],
                [11, 229, "德国"],
                [12, 249, "德国"],
                [13, 258, "德国"],
                [14, 288, "德国"],
                [15, 278, "德国"],
                [16, 290, "德国"],
            ],
            label: {
                show: true,
                formatter: "{@[2]}",
                position: 'right',
                // textStyle:{
                //     color:'black'
                // }
            },
        }, {
            name: '中国',
            type: 'scatter',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            },
            symbolSize:5,
            data: [
                [2, 35, "中国"],
                [5, 142, "中国"],
                [6, 232, "中国"],
                [7, 353, "中国"],
                [8, 421, "中国"],
                [9, 243, "中国"],
                [10, 238, "中国"],
                [12, 215, "中国"],
                [13, 148, "中国"],
                [14, 236, "中国"],
                [15, 304, "中国"],
                [16, 200, "中国"],
            ],
            label: {
                show: true,
                formatter: "{@[2]}",
                position: 'right',
            },
        }

    ]
};