//以下为测试数据，实际开发中肯定要从后台获取。
//x轴月份
var months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
//单位数组
var dwArr = [23, 27, 28, 30, 34, 36, 39, 41, 45, 46, 56, 60];
//职工数组
var zgArr = [1500, 1700, 1750, 1800, 1850, 1900, 1910, 1941, 1980, 2000, 2100, 2200];
//金额数组
var jeArr = [3500, 3600, 4200, 4800, 5500, 6500, 4900, 3500, 5400, 5500, 6500, 7000];
var colors = ['#FD2446', '#248EFD', '#C916F2', '#6669B1']; //自定义一个颜色数组，多系时会按照顺序使用自己定义的颜色数组，若不定义则使用默认的颜色数组

// 指定图表的配置项和数据
var option = {
    color: colors,
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: months
    },
    yAxis: {},
    toolbox: {
        show: true,
        orient: 'horizontal',
        showTitle: true,
        feature: {
            magicType: {
                type: ['line', 'bar']
            },
            dataView: {
                show: true,
                title: '某地区单位人数金额统计',
                readOnly: false,
                optionToContent: function(opt) {
                    var colName = "序号";
                    var typeName = "月份";
                    var dataview = opt.toolbox[0].feature.dataView; //获取dataview
                    var table = '<div style="position:absolute;top: 5px;left: 0px;right: 0px;line-height: 1.4em;text-align:center;font-size:14px;">' + dataview.title + '</div>'
                    table += getTable(opt, colName, typeName);
                    return table;
                }
            },
            saveAsImage: {
                type: 'png',
                show: true,
                title: '保存为图片',
            },
            restore: {
                show: true
            }
        }
    },
    series: [{
            name: '单位数',
            type: 'bar',
            barMaxWidth: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: dwArr
        },
        {
            name: '职工数',
            type: 'bar',
            barMaxWidth: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: zgArr
        },
        {
            name: '平均工资',
            type: 'bar',
            barMaxWidth: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: jeArr
        }
    ]
};

function getTable(opt, colName, typeName) {
    var axisData = opt.xAxis[0].data; //获取图形的data数组
    var series = opt.series; //获取series
    var num = 0; //记录序号
    var sum = new Array(); //获取合计数组（根据对应的系数生成相应数量的sum）
    for (var i = 0; i < series.length; i++) {
        sum[i] = 0;
    }
    var table = '<div><table class="bordered"><thead><tr>' +
        '<th>' + colName + '</th>' +
        '<th>' + typeName + '</th>';
    for (var i = 0; i < series.length; i++) {
        table += '<th>' + series[i].name + '</th>'
    }
    table += '</tr></thead><tbody>';
    for (var i = 0, l = axisData.length; i < l; i++) {
        num += 1;
        for (var n = 0; n < series.length; n++) {
            if (series[n].data[i]) {
                sum[n] += Number(series[n].data[i]);
            } else {
                sum[n] += Number(0);
            }

        }
        table += '<tr>' +
            '<td>' + num + '</td>' +
            '<td>' + axisData[i] + '</td>';
        for (var j = 0; j < series.length; j++) {
            if (series[j].data[i]) {
                table += '<td>' + series[j].data[i] + '</td>';
            } else {
                table += '<td>' + 0 + '</td>';
            }

        }
        table += '</tr>';
    }
    //最后一行加上合计
    table += '<tr>' + '<td>' + (num + 1) + '</td>' + '<td>合计</td>';
    for (var n = 0; n < series.length; n++) {
        if (String(sum[n]).indexOf(".") > -1)
            table += '<td>' + (Number(sum[n])).toFixed(2) + '</td>';
        else
            table += '<td>' + Number(sum[n]) + '</td>';
    }
    table += '</tr></tbody></table></div>';
    return table;
}