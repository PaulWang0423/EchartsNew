var outname = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南'];
var outvalue = [353.713, 141.0428, 381.5532, 236.0577, 351.045, 542.592, 232.2375, 249.095, 136.127, 397.5212, 371.14, 710.675, 135.9711, 996.3152, 623.52, 247.575, 458.2831, 212.3714, 87.183, 170.2668, 172.125, 257.9317, 117.268, 423.95, 167.6934, 106.7107, 29.6595, 16.9782, 466.1582, 37.4848, 53.0894];
var outdata = [];

var max = 8000,
    min = 10;
var maxSize4Pin = 150,
    minSize4Pin = 20;

for (var i = 0; i < outname.length; i++) {
    outdata.push({
        name: outname[i],
        value: outvalue[i]
    })
}

var geoCoordMap = {};
/*获取地图数据*/
var mapFeatures = echarts.getMap('china').geoJson.features;
//  console.log(mapFeatures)
mapFeatures.forEach(function(v) {
    console.info(v)
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});
var convertData = function(outdata) {
    var res = [];
    for (var i = 0; i < outdata.length; i++) {
        var geoCoord = geoCoordMap[outdata[i].name];
        if (geoCoord) {
            res.push({
                name: outdata[i].name,
                value: geoCoord.concat(outdata[i].value),
            });
        }
    }
    return res;
};


option = {
    backgroundColor: '#0F1C3C',
    tooltip: {
        show: true,
        formatter: function(params) {
            if (params.value.length > 1) {
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2] + '百亿元&nbsp;&nbsp;';
            } else {
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '百亿元&nbsp;&nbsp;';
            }
        },

    },
    title: {
        top: 20,
        text: '2019年31省市区GDP总量',
        subtext: '',
        x: 'center',
        textStyle: {
            color: '#ccc'
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
        layoutSize: "100%",
        itemStyle: {
            normal: {
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00F6FF'
                }, {
                    offset: 1,
                    color: '#53D9FF'
                }], false),
                borderWidth: 3,
                shadowColor: 'rgba(10,76,139,1)',
                shadowOffsetY: 0,
                shadowBlur: 60
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
                areaColor: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#073684' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#061E3D' // 100% 处的颜色
                    }],
                },
                borderColor: '#215495',
                borderWidth: 1,
            },
            emphasis: {
                areaColor: {

                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#073684' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#061E3D' // 100% 处的颜色
                    }],
                },
            }
        },
        data: outdata,
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
            brushType: 'stroke'
        },
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(5,80,151,0.2)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(5,80,151,0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,108,255,0.7)'
                    }],
                    global: false // 缺省为 false
                },
            }

        },
        label: {
            normal: {
                show: true,
                color: '#fff',
                fontWeight: 'bold',
                position: 'inside',
                formatter: function(para) {
                    return '{cnNum|' + para.data.value[2] + '}'
                },
                rich: {
                    cnNum: {
                        fontSize: 13,
                        color: '#D4EEFF',
                    }
                }
            },
        },
        symbol: 'circle',
        symbolSize: function(val) {
            if (val[2] === 0) {
                return 0;
            }
            var a = (maxSize4Pin - minSize4Pin) / (max - min);
            var b = maxSize4Pin - a * max;
            return a * val[2] + b * 1.2;
        },
        data: convertData(outdata),
        zlevel: 1,
    }]
};