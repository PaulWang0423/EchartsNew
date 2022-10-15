var outname = ["南海诸岛", '北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'];
var outvalue = [0, 524, 13, 140, 75, 13, 83, 11, 19, 15, 69, 260, 39, 4, 31, 104, 36, 1052, 33, 347, 9, 157, 22, 4, 18, 5, 6398, 41, 0, 484, 404, 22, 3, 5, 225];
var outdata = [];
for (var i = 0; i < outname.length; i++) {
    outdata.push({
        name: outname[i],
        value: outvalue[i]
    })
}

option = {
    tooltip: {
        show: true,
        formatter: function(params) {
            return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '人&nbsp;&nbsp;';
        }
    },
    visualMap: {
        type: 'piecewise',
        left: '15',
        bottom: '15',
        itemWidth: 27,
        itemHeight: 15,
        textStyle: {
            color: '#333333',
            fontSize: 14,
        },
        pieces: [{
            min: 500,
            label: '>500',
        }, {
            max: 500,
            min: 200,
            label: '200-500',
        }, {
            max: 200,
            min: 0,
            label: '<200',
        }, {
            value: 0,
            label: '无数据',
        }, ],
        inRange: {
            color: ['#B2CAE0', '#D2EAFF', '#8AC6FD', '#45A5F8']
        },
        outOfRange: {
            color: ['#999999']
        }
    },
    geo: {
        map: 'china',
        show: true,
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0,63,140,0.2)',
                shadowColor: 'rgba(0,63,140,0.2)',
                shadowOffsetY: 20,
                shadowBlur: 30
            }
        }
    },
    series: [{
        type: 'map',
        map: 'china',
        aspectScale: 0.75,
        //zoom:1.1,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#B2CAE0',
                borderColor: '#fff',
                borderWidth: 1,
            },
            emphasis: {
                areaColor: '#FFAE00',
            }
        },
        data: outdata
    }]
};