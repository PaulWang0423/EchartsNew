options =

    [{
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                backgroundColor: 'rgba(255,255,255,1)',
                padding: [5, 10],
                textStyle: {
                    color: '#7588E4',
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
            },
            title: {
                text: '文章阅读人数'
            },
            xAxis: {
                type: 'category',
                name: '日期',
                splitLine: {
                    show: false
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
            },
            yAxis: {
                type: 'value',
                name: '阅读人数',
                min: 0,
            },
            series: [{
                name: '09月',
                type: 'line',
                data: [50, 44, 46, 2686, 1409, 146, 72, 70, 80, 57, 49, 43, 44, 42, 1793, 765, 859, 598, 83, 72, 71, 2659, 1559, 147, 126, 1136, 1780, 718, 715, 454]
            }, {
                name: '10月',
                type: 'line',
                data: [296, 102, 82, 61, 66, 46, 41, 38, 4058, 244, 129, 78, 53, 48, 62, 5498, 383, 164, 100, 93, 136, 68, 71, 86, 3598, 721, 212, 191, 120, 130, 4435]
            }]
        },

        {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                backgroundColor: 'rgba(255,255,255,1)',
                padding: [5, 10],
                textStyle: {
                    color: '#7588E4',
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
            },

            title: {
                text: '文章阅读次数'
            },
            xAxis: {
                type: 'category',
                name: '日期',
                splitLine: {
                    show: false
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
            },
            yAxis: {
                type: 'value',
                name: '阅读次数',
                min: 0,
            },
            series: [{
                name: '09月',
                type: 'line',
                data: [95, 72, 125, 4095, 2062, 236, 171, 105, 118, 165, 88, 96, 77, 113, 2401, 1063, 1028, 719, 171, 354, 222, 3776, 2283, 239, 203, 1333, 2570, 1072, 866, 609]
            }, {
                name: '10月',
                type: 'line',
                data: [424, 172, 170, 113, 121, 97, 80, 133, 6051, 398, 199, 112, 132, 119, 142, 7351, 532, 216, 189, 139, 208, 145, 139, 160, 4774, 1018, 279, 241, 206, 272, 6224]
            }]
        }
    ]