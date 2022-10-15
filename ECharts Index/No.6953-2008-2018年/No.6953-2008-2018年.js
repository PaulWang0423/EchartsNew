//各省份的数据
var allData = [
    { name: '北京', value: 15.47533333 },
    { name: '天津', value: 15.86666667 },
    { name: '河北', value: 14.38566667 },
    { name: '山西', value: 16.19616667 },
    { name: '内蒙古', value: 12.38883333 },
    { name: '安徽', value: 13.46016667 },
    { name: '上海', value: 12.28266667 },
    { name: '江苏', value: 12.052 },
    { name: '浙江', value: 13.96866667 },
    { name: '江西', value: 14.16666667 },
    { name: '福建', value: 16.15466667 },
    { name: '山东', value: 12.7905 },
    { name: '河南', value: 14.97933333 },
    { name: '湖北', value: 12.42233333 },
    { name: '湖南', value: 13.82216667 },
    { name: '广东', value: 11.57333333 },
    { name: '广西', value: 15.0925 },
    { name: '海南', value: 9 },
    { name: '陕西', value: 13.64283333 },
    { name: '甘肃', value: 14.0555 },
    { name: '宁夏', value: 14.16666667 },
    { name: '青海', value: 16.23333333 },
    { name: '新疆', value: 14.25666667 },
    { name: '黑龙江', value: 15.83333333 },
    { name: '吉林', value: 12.3705 },
    { name: '辽宁', value: 13.19033333 },
    { name: '云南', value: 16.8975 },
    { name: '重庆', value: 12.24066667 },
    { name: '四川', value: 11.935 },
    { name: '西藏', value: 10 },
    { name: '贵州', value: 13.66666667 },
]

loadMap('/asset/get/s/data-1527045631990-r1dZ0IM1X.json', 'china');//初始化全国地图

var timeFn = null;


/**
 获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
 @params {String} mapCode:json数据的地址
 @params {String} name: 地图名称
 */
function loadMap(mapCode, name) {
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                tooltip: {
                    show: true,
                    formatter: function(params) {
                        if (params.data) return params.name + '：' + params.data['value']
                    },
                },
                visualMap: {
                    min: 0,
                    max: 1000,
                    left: 26,
                    bottom: 40,
                    showLabel: true,
                    pieces: [{
                        gt: 28,
                        label: "高质量",
                        color: "#b7d6f3"
                        // color: "#215096"
                    }, {
                        gt: 18,
                        lte: 28,
                        label: "中质量",
                        color: "#3598c1"
                        // color: "#FDE102"
                    }, {
                        gte: 13,
                        lte: 18,
                        label: "中低质量",
                        color: "#b7d6f3"
                        // color: "#2EFF88"
                    }, {
                        gt: 0,
                        lt: 13,
                        label: "低质量",
                        // color: "#6100FF"
                        color: "#edfbfb"
                    }],
                    show: true
                    
                    // color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
                },
                series: [{
                    name: 'MAP',
                    type: 'map',
                    mapType: name,
                    data: allData,
                    selectedMode: 'false',//是否允许选中多个区域
                    label: {
                        normal: {
                            show: true,
                            formatter:function(val){
                                var area_content = ''
                                if (val && val.name && val.value) {
                                    area_content = '{a|' + val.name + '}' + '\n' + '{b|' + val.value + '}'
                                }
                                return area_content
                                // return area_content.split("-").join("\n");
                            },//让series 中的文字进行换行
                            rich: {
                                a: {
                                },
                                b: {
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    textAlign: 'center',
                                    padding: 4,
                                }
                            },//富文本样式,就是上面的formatter中'{a|'和'{b|'
                        },
                        emphasis: {show: false}
                    },//地图中文字内容及样式控制
                    
                }]
            };
            myChart.setOption(option);
        } else {
            alert('无法加载该地图');
        }
    });
}