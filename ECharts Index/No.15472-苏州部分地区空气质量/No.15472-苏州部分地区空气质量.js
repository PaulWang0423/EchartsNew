var data = [{
        name: '安丰派出所',
        value: 37
    },
    {
        name: '安丰中队',
        value: 92
    },
    {
        name: '城北派出所',
        value: 91
    },
    {
        name: '城东派出所',
        value: 79
    },
    {
        name: '东台河闸边防派出所',
        value: 3
    },
    {
        name: '富安派出所',
        value: 49
    },
    {
        name: '富安中队',
        value: 58
    },
    {
        name: '海道桥派出所',
        value: 99
    },
    {
        name: '何垛桥派出所',
        value: 65
    },
    {
        name: '花舍派出所',
        value: 6
    },
    {
        name: '弶港边防派出所',
        value: 15
    },
    {
        name: '弶港派出所',
        value: 5
    },
    {
        name: '交大开发区中队',
        value: 91
    },
    {
        name: '廉贻中队',
        value: 74
    },
    {
        name: '梁垛河闸边防派出所',
        value: 4
    },
    {
        name: '梁垛派出所',
        value: 58
    },
    {
        name: '南沈灶派出所',
        value: 22
    },
    {
        name: '农干桥派出所',
        value: 2
    },
    {
        name: '溱东派出所',
        value: 36
    },
    {
        name: '溱东中队',
        value: 46
    },
    {
        name: '三仓派出所',
        value: 42
    },
    {
        name: '三仓中队',
        value: 52
    },
    {
        name: '三里桥派出所',
        value: 99
    },
    {
        name: '时堰派出所',
        value: 44
    },
    {
        name: '事故中队',
        value: 271
    },
    {
        name: '水上派出所',
        value: 2
    },
    {
        name: '唐洋派出所',
        value: 23
    },
    {
        name: '唐洋中队',
        value: 62
    },
    {
        name: '头灶派出所',
        value: 41
    },
    {
        name: '头灶中队',
        value: 72
    },
    {
        name: '五烈派出所',
        value: 46
    },
    {
        name: '新坝派出所',
        value: 50
    },
    {
        name: '新东边防派出所',
        value: 3
    },
    {
        name: '新港边防派出所',
        value: 1
    },
    {
        name: '新街派出所',
        value: 23
    },
    {
        name: '许河派出所',
        value: 29
    },
    {
        name: '沿海高速公路一大队',
        value: 14
    },
    {
        name: '沿海中队',
        value: 29
    }

];
var geoCoordMap = {
    '安丰派出所': [120.414229, 32.742268],
    '安丰中队': [120.413761, 32.736904],
    '城北派出所': [119.87366, 34.026293],
    '城东派出所': [120.295584, 33.77327],
    '东台河闸边防派出所': [120.914194, 32.878284],
    '富安派出所': [120.491024, 32.679186],
    '富安中队': [120.485251, 32.676356],
    '海道桥派出所': [120.311399, 32.866706],
    '何垛桥派出所': [120.329357, 32.859149],
    '花舍派出所': [120.745484, 32.922478],
    '弶港边防派出所': [120.855964, 32.755594],
    '弶港派出所': [120.763107, 32.88946],
    '交大开发区中队': [119.138774, 34.847127],
    '廉贻中队': [120.252287, 32.898852],
    '梁垛河闸边防派出所': [120.914194, 32.878284],
    '梁垛派出所': [120.377517, 32.778627],
    '南沈灶派出所': [120.53594, 32.784559],
    '农干桥派出所': [120.77285, 32.77131],
    '溱东派出所': [120.154838, 32.666296],
    '溱东中队': [120.154838, 32.666296],
    '三仓派出所': [120.670724, 32.773948],
    '三仓中队': [120.690483, 32.779491],
    '三里桥派出所': [120.324364, 32.850973],
    '时堰派出所': [120.200697, 32.718924],
    '事故中队': [120.330384, 32.864492],
    '水上派出所': [118.872702, 34.766416],
    '唐洋派出所': [120.7009, 32.638111],
    '唐洋中队': [120.700838, 32.638034],
    '头灶派出所': [120.557013, 32.894402],
    '头灶中队': [120.572059, 32.892228],
    '五烈派出所': [120.264926, 32.853785],
    '新坝派出所': [119.145258, 34.449991],
    '新东边防派出所': [120.862021, 32.683683],
    '新港边防派出所': [120.842036, 32.614245],
    '新街派出所': [120.7855, 32.677219],
    '许河派出所': [120.653076, 32.73319],
    '沿海高速公路一大队': [120.390438, 33.180384],
    '沿海中队': [120.062776, 34.309956]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};


option = {
    backgroundColor: '#404a59',
    textStyle: {
        color: 'white'
    },
    tooltip: {
        trigger: 'item'
    },
    geo: {
        show: true,
        roam: true,
        center: [120.58108655195974, 32.501001169106716],
        zoom: 20,
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },

    series: [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            //zlevel: 1
        }
    ]
};