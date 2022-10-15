option = {
    backgroundColor: "#fff",
    color: ["#37A2DA"],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '25', '27', '28', '29', '30', ]
    },
    yAxis: {
        x: 'center',
        type: 'value',
    },
    series: [{
        name: '销量',
        type: 'line',
        data: [10, 13, 24, 22, 33, 31, 28, 30, 33, 32, 33.5, 24.7, 32, 30, 20, 27, 28, 33, 34, 39, 32, 33, 31, 28, 31, 36, 39, 37.5, 39, 37.5]
    }]
};