option = {
    backgroundColor: '#212121',
    color: ['#43a6f7', '#f5cb62'],
    grid: {
        left: '5%',
        right: '6%',
        top: '14%',
        bottom: '6%',
        containLabel: true
    },
    legend: {
        show: true,
        left: 20,
        textStyle: {
            fontSize: 14,
            color: '#eeeeee'
        },
        selectedMode: 'single',
        selected: {
            '轮次': true
        },
        itemWidth: 19,
        data: [{
            name: '轮次',
            textStyle: {
                color: '#43a6f7'
            },
            icon: 'path://M214.3,306.9c0-6.7,0.2-13.3,0.7-20l-63.1-33.3c-2,17.4-3.1,35.1-3.1,53.3c0,81.6,21.2,155.4,55.2,207.1l39-87.3C225.2,395.2,214.3,353.2,214.3,306.9L214.3,306.9L214.3,306.9z M432.9,306.9c0,46.2-10.9,88.3-28.7,119.8l39,87.3c34-51.9,55.2-125.5,55.2-207.1c0-18.2-1.1-36.1-3.1-53.3l-63.2,33.3C432.6,293.6,432.9,300.2,432.9,306.9L432.9,306.9L432.9,306.9zM345.4,133c31.4,10.4,57.9,42.6,73.2,86.5l63.2-33.3C456.8,99.8,405.9,37.4,345.4,25V133L345.4,133L345.4,133z M228.5,219.4c15.3-43.9,41.8-76.1,73.2-86.5V25c-60.5,12.2-111.4,74.8-136.4,161.1L228.5,219.4L228.5,219.4L228.5,219.4z M368.9,468.7c-13.8,10.2-29.1,15.9-45.3,15.9c-16.2,0-31.5-5.7-45.3-15.9l-39,87.3c25,22.4,53.7,35.1,84.3,35.1s59.3-12.7,84.3-35.1L368.9,468.7L368.9,468.7L368.9,468.7z'
        }, {
            name: '金额',
            textStyle: {
                color: '#f5cb62'
            },
            icon: 'path://M406.3,127.2c-5.1-2.9-10.4-5.3-15.6-8c1-1.2,1.9-2,2.8-2.8c9.1-8.5,17.2-18.4,21.4-30c2.1-5.6,2.6-8.1,4-13.3c2.7-16.5-0.4-26.6-10.4-34.9c-13.5-11.3-28.8-12.6-44.9-6c-1.1,0.5-1.9,0.8-3-0.2c-20.8-19.4-54.1-19.5-75.1-0.4c-1,0.9-1.7,1.1-3,0.5c-8.5-3.8-17.4-4.7-26.5-2.8c-17.3,3.5-31.5,18-29,37.7c2.2,17.1,8.9,32,20.6,44.8c2.4,2.6,4.9,5.1,7.5,7.8c-0.6,0.3-1.3,0.6-1.9,0.9c-59.4,26.8-99.5,84.9-104.2,151c-1.3,18.3-1.9,34.7,4.4,54.3c8.9,27.7,32.6,49.4,62.8,49.3c71.3-0.2,142.7,0,214.1-0.1c22.9,0,40.6-10.2,53.4-28.6c6.5-9.4,8.9-20.2,11.3-31.2c1-4.5,2.2,4.3,2.2-14.8c0-19-0.4-42.4-5.8-62.3C478.4,189.8,450.3,152.5,406.3,127.2L406.3,127.2z M479,301.9c-1.6,10.2-3.3,20.9-9,29.5c-11.3,16.9-33,26.1-53.2,26.2c-63,0.1-126-0.1-189,0.1c-26.7,0.1-52-14.8-58.4-40.6c-4.1-16.4-3.7-36.9-2.5-53.6C171,203,225.6,146,278.1,121.6c0.6-0.3-15.1-14-17.2-16.4c-10.3-11.7-16.7-21.1-18.6-36.8c-2.4-19.2,12-24.9,20.7-26.7c8-1.7,25.1,6.9,26,6.1c18.5-17.5,47.9-17.3,66.3,0.4c1,1,1.6,0.6,2.6,0.2c14.3-6.1,26.3-9.8,38.2,0.5c8.8,7.6,9,13.3,6.8,25.3c-1.3,5-9.5,18.3-12.6,22.4c-11.5,15.2-22.7,24.9-23.5,25.7c-0.1,0.1,24.5,11.6,28.7,14.8c38,29,63.7,51.4,75.3,95.5C476.8,255.6,482.7,278.2,479,301.9L479,301.9z M300,177.9c-2.9-3.1-11.8-12.2-11.8-12.2h-17.5c0,0,0.1,6,0.1,7.7c0,1.8,43.5,44.6,43.5,44.6h-43.6v17.4h43.6v17.6h-43.5v17.3h43.6v34.9h17.5l-0.2-34.9h43.8v-17.4h-43.6l-0.2-17.5h43.7V218h-43.7l43.7-44.6v-7.7H358c0,0-15.2,14.7-18.5,18.3c-1.4,1.2-11.5,11.9-16.4,16.9L300,177.9L300,177.9z'
        }]
    },
    xAxis: {
        show: true,
        type: 'category',
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#eeeeee'
            }
        },
        data: ['未开始', '上市', '天使轮', 'A轮', 'b轮', 'c轮', '上市']
    },
    yAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3a4b61'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#eeeeee'
            }
        }
    },
    series: [{
        name: '轮次',
        type: 'bar',
        barWidth: 16,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#43a6f7'
                }, {
                    offset: 1,
                    color: '#02f3ff'
                }]),
                barBorderRadius: [2.7, 2.7, 0, 0]
            }
        },
        data: [90, 113, 60, 50, 55, 77, 88]
    }, {
        name: '金额',
        type: 'bar',
        barWidth: 32,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f5cb62'
                }, {
                    offset: 1,
                    color: '#fbff0f'
                }]),
                barBorderRadius: [2, 2, 0, 0]
            }
        },
        data: [90, 113, 60, 50, 55, 77, 88]
    }]
};
app.timeTicket = setInterval(function() {
    option.legend.selected = {
        '轮次': !option.legend.selected.轮次
    };
    myChart.setOption(option, true);
}, 1000);