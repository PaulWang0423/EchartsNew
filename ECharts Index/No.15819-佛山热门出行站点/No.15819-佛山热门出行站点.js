var uploadedDataURL = "/asset/get/s/data-1479372708751-SJpo1lsbl.txt";

function convertData(sourceData) {
    return [].concat.apply([], $.map(sourceData, function(stop, index) {
        return {
            name: stop.stopName,
            value: [stop.jingdu, stop.weidu, Math.random() * 100, Math.random() * 100]
        };
    }));
}

var option = {
    bmap: {
        roam: true,
        mapStyle: {
            'styleJson': [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#031628'
                }
            }, {
                'featureType': 'land',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000102'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#0b3d51'
                }
            }, {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry.stroke',
                'stylers': {
                    'color': '#08304b'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                    'lightness': -70
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#857f7f'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': {
                    'color': '#000000'
                }
            }, {
                'featureType': 'building',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#062032'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#465b6c'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#022338'
                }
            }, {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }]
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        selectedMode: 'single',
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['热门出行站点', '热门换乘站点'],
        textStyle: {
            color: '#fff'
        }
    },
    /*visualMap: [{
        left: 'right',
        top: '10%',
        dimension: 2,
        min: 0,
        max: 100,
        itemWidth: 30,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        inRange: {
            symbolSize: [3, 10]
        },
        outOfRange: {
            symbolSize: [3, 10],
            color: ['rgba(255,255,255,.2)']
        }
    }],*/
    series: [{
        name: '热门出行站点',
        type: 'scatter',
        coordinateSystem: 'bmap',
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
                color: '#a6c84c'
            }
        }
    }, {
        name: '热门出行站点',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        symbolSize: function(val) {
            return val[2] / 5;
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
                color: '#9FC33D',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }, {
        name: '热门换乘站点',
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: function(val) {
            return val[3] / 10;
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
                color: '#ffa022'
            }
        }
    }, {
        name: '热门换乘站点',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        symbolSize: function(val) {
            return val[3] / 5;
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
                color: '#FF960D',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }]
};

$.getJSON(uploadedDataURL, function(rawData) {
    var data = convertData(rawData);
    option.series[0].data = data;
    option.series[1].data = data.sort(function(a, b) {
        return b.value[2] - a.value[2];
    }).slice(0, 10);
    option.series[2].data = data;
    option.series[3].data = data.sort(function(a, b) {
        return b.value[3] - a.value[3];
    }).slice(0, 10);
    myChart.setOption(option);
    // console.log(option);
    //获取echart中使用的bmap实例
    var map = myChart.getModel().getComponent('bmap').getBMap();
    map.disableDoubleClickZoom();
    map.centerAndZoom("佛山", 13);

});