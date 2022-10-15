var chinaGeoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]
};
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 0
    }],
    [{
        name: '内蒙古',
        value: 0
    }],
    [{
        name: '吉林',
        value: 0
    }],
    [{
        name: '辽宁',
        value: 0
    }],
    [{
        name: '河北',
        value: 0
    }],
    [{
        name: '天津',
        value: 0
    }],
    [{
        name: '山西',
        value: 0
    }],
    [{
        name: '陕西',
        value: 0
    }],
    [{
        name: '甘肃',
        value: 0
    }],
    [{
        name: '宁夏',
        value: 0
    }],
    [{
        name: '青海',
        value: 0
    }],
    [{
        name: '新疆',
        value: 0
    }],
    [{
        name: '西藏',
        value: 0
    }],
    [{
        name: '四川',
        value: 0
    }],
    [{
        name: '重庆',
        value: 0
    }],
    [{
        name: '山东',
        value: 0
    }],
    [{
        name: '河南',
        value: 0
    }],
    [{
        name: '江苏',
        value: 0
    }],
    [{
        name: '安徽',
        value: 0
    }],
    [{
        name: '湖北',
        value: 0
    }],
    [{
        name: '浙江',
        value: 0
    }],
    [{
        name: '福建',
        value: 0
    }],
    [{
        name: '江西',
        value: 0
    }],
    [{
        name: '湖南',
        value: 0
    }],
    [{
        name: '贵州',
        value: 0
    }],
    [{
        name: '广西',
        value: 0
    }],
    [{
        name: '海南',
        value: 0
    }],
    [{
        name: '上海',
        value: 1
    }]
];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [116.4551, 40.2539];
        if (fromCoord && toCoord) {
            res.push({
        coords: [ fromCoord,toCoord ],
        // 数据值
        value: dataItem[0].value,
    });
        }
    }
    return res;
};
var series = [];
[
    ['北京市', chinaDatas]
].forEach(function(item, i) {
    console.log(item)
    series.push({
        type: 'lines3D',

        coordinateSystem: 'geo3D',


        blendMode: 'lighter',

        effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 5, //图标大小
        },
        lineStyle: {
            normal: {
                width: 1, //尾迹线条宽度
                opacity: 1, //尾迹线条透明度
                curveness: .3 //尾迹线条曲直度
            }
        },
        data: convertData(item[1])
    }, {
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        label: {
            show: false
        },
        bevelSize: 1,
        bevelSmoothness: 5,
        itemStyle:{
            opacity: 0.6,
        },
        minHeight: 1,
        shading: 'realistic',
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
        }),
    }, {
        type: 'scatter3D',
        coordinateSystem: 'geo3D',
        rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
        },
        symbol: 'pin',
        symbolSize: 50,
        data: [{
            name: item[0],
            value: chinaGeoCoordMap[item[0]].concat([10]),
        }],
    });
});
console.log(series);
option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
        }
    },
    backgroundColor: "#013954",
    visualMap: { //图例值控制
        min: 0,
        max: 1,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: '#fff'
        }
    },
    geo3D: {
        map: 'china',
        roam: true,
        itemStyle: {
            areaColor: 'rgb(5,101,123)',
            opacity: 1,
            borderWidth: 0.8,
            borderColor: 'rgb(62,215,213)'
        },
        label: {
            show: true,
            textStyle: {
                color: '#fff', //地图初始化区域字体颜色
                fontSize: 16,
                opacity: 1,
                backgroundColor: 'rgba(0,0,0,0)'
                //backgroundColor: 'rgba(53,171,199,0)'
            },
        },
        emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                    backgroundColor: 'rgba(0,23,11,0)'
                }
            }
        },
        //shading: 'lambert',
        light: { //光照阴影
            main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                //shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                alpha: 55,
                beta: 10

            },
            ambient: {
                intensity: 0.3
            }
        },
        realisticMaterial: {
            detailTexture: 'asset/leather/leather_albedo.jpg'
        }
    },
    series: series
};