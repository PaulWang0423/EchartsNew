
var data1 = ['2019-04-19', '2019-04-22', '2019-04-23', '2019-04-25', '2019-04-29', '2019-05-09', '2019-05-10', '2019-05-13', '2019-05-14', '2019-05-16', '2019-05-17', '2019-05-18', '2019-05-21', '2019-05-24', '2019-05-28', '2019-05-29', '2019-05-30', '2019-05-31', '2019-06-02', '2019-06-03', '2019-06-04', '2019-06-05', '2019-06-06', '2019-06-07', '2019-06-08', '2019-06-09', '2019-06-10', '2019-06-11', '2019-06-12', '2019-06-13', '2019-06-14', '2019-06-15'];
var data2 = ['1', '2', '4', '6', '6', '2', '1', '3', '2', '4', '9', '3', '1', '1', '3', '5', '2', '8', '1', '9', '2', '1', '3', '1', '2', '4', '11', '9', '26', '16', '98', '49'];

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
            data : data1,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60%',
            data:data2
        }
    ]
};
