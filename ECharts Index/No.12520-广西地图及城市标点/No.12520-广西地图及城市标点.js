
/*注：源码就是下面这些，只要复制到开发工具就行，然后把
地图json数据（下载地址：https://share.weiyun.com/5x12K4r）的路径放对，
并且要导入echarts就可以渲染出来地图了*/
var zhongguo = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var hainan = "/asset/get/s/data-1528971693521-r18nZaybm.json";
var xizang = "/asset/get/s/data-1528970391616-BJeoh2JW7.json";
var zhejiang = "/asset/get/s/data-1528970380661-SkH93h1-m.json";
var yunnan = "/asset/get/s/data-1528970362114-r1MK321WQ.json";
var xinjiang = "/asset/get/s/data-1528970349852-H18u22kWX.json";
var tianjin = "/asset/get/s/data-1528970339987-Hk2wnh1ZX.json";
var sichuan = "/asset/get/s/data-1528970319531-Hy_8n3y-m.json";
var shanxi = "/asset/get/s/data-1528970298351-HyzB32JZ7.json";
var shangxi = "/asset/get/s/data-1528970273819-B1cmnnk-Q.json";
var shanghai = "/asset/get/s/data-1528970254015-HJLfhnyWX.json";
var shangdong = "/asset/get/s/data-1528970240242-Byu-hhybX.json";
var qinghai = "/asset/get/s/data-1528970209434-Bytyh3kZ7.json";
var ningxia = "/asset/get/s/data-1528970150882-SJJ2j2yWQ.json";
var neimenggu = "/asset/get/s/data-1528970102554-HyJKo31bQ.json";
var liaoning = "/asset/get/s/data-1528970052404-BJhHihkbQ.json";
var jilin = "/asset/get/s/data-1528970024458-rkeEjhy-Q.json";
var jiangxi = "/asset/get/s/data-1528969991368-BkkMi31Zm.json";
var jiangsu = "/asset/get/s/data-1528969864934-BJ-qchkWQ.json";
var hunan = "/asset/get/s/data-1528969831328-Sykuqh1bX.json";
var hubei = "/asset/get/s/data-1528969822119-Bk8v93kZ7.json";
var henan = "/asset/get/s/data-1528969802719-HyXIqhk-m.json";
var heilongjiang = "/asset/get/s/data-1528969789631-ryLHcnJbm.json";
var hebei = "/asset/get/s/data-1528969737020-HJWMqhy-Q.json";
var guizhou = "/asset/get/s/data-1528969712502-Hy_g92yZQ.json";
/*
广西地图 可以下载到本地,第一次下载到本地，有的朋友遇到跨域问题
方法一：可以弃用$.getJSON方法,把json的内容直接复制到代码中，替换 echarts.registerMap('广西', geoJson);
中的geoJson变量。
方法二：把代码放tomcat中
*/
var guangxi = "/asset/get/s/data-1528969706270-HJMg5hkWQ.json";
var guangdong = "/asset/get/s/data-1528969700634-BkT1qn1WQ.json";
var gansu = "/asset/get/s/data-1528969694316-BJLkc2yZX.json";
var chongqing = "/asset/get/s/data-1528969687660-r1ey9nkbX.json";
var aomen = "/asset/get/s/data-1528969612486-rJ4qtnyZm.json";
var anhui = "/asset/get/s/data-1528969607452-Hkk5tnJ-Q.json";
var beijing = "/asset/get/s/data-1528969604941-Hk6Ytn1WQ.json";
var fujian = "/asset/get/s/data-1528969599839-S1OFFn1ZQ.json";
var xianggang = "/asset/get/s/data-1528969589857-S1ROthJWm.json";



echarts.extendsMap = function(id, opt) {
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        
        '广西': guangxi
        
    };
    var geoCoordMap = {
        
		'贺州': [111.57,24.40],
		'南宁': [108.36,22.81],
		'柳州': [109.24,24.19],
		'防城港':[108.35,21.69],
		'崇左':[107.35,22.41],
		'来宾':[109.22,23.76],
		'桂林':[110.17,25.17],
		'梧州':[111.20,23.29],
		'玉林':[110.09,22.38],
		'贵港':[109.60,23.06],
		'百色':[106.36,23.54],
		'钦州':[108.65,21.98],
		'河池':[108.03,24.42],
		'北海':[109.12,21.48],
        
    };
    
    var levelColorMap = {
        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(0, 255, 127, 1)'
    };

    var defaultOpt = {
        mapName: 'guangxi', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#404a59', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function(name, option, instance) {}
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
    };

    var line = [
        [0, 0],
        [8, 11],
        [0, 22]
    ];
    // style
    var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function(i, o, n) {
            var breadcrumb = this.createBreadcrumb(n);
            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if (o.graphic.length > 2) {
                    var cityData = [];
                    var cityJson;
                    for (var x = 0; x < opt.data.length; x++) {
                        if(n === opt.data[x].city){
                            $([opt.data[x]]).each(function(index,data){
                                cityJson = {city:data.city,name:data.name,value:data.value,crew:data.crew,company:data.company,position:data.position,region:data.region};
                                cityData.push(cityJson)
                            }) 
                        }
                    }
                    
                    if(cityData!=null){
                        o.series[0].data = handleEvents.initSeriesData(cityData);
                    }else{
                        o.series[0].data = [];
                    }
                    
                    
                }
                name.push(n);
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    o.series[0].data = handleEvents.initSeriesData(opt.data);
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function(name) {
            var cityToPinyin = {
                
                '广西': 'guangxi'
                
            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff',
                        key: name
                        // lineWidth: 2,
                    },
                    onclick: function() {
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function() {
                        var name = this.style.text;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function() {
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(chart, option, name);
                    }
                }]
            }

            pos.leftCur += pos.leftPlus;

            return breadcrumb;
        },

       // 设置effectscatter
        initSeriesData: function(data) {
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value,data[i].level),
                        crew:data[i].crew,
						company:data[i].company,
						position:data[i].position,
						region:data[i].region
                    });
                }
            };
            return temp;
        },
        zoomAnimation: function() {
            var count = null;
            var zoom = function(per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count
                    }
                });
                if (count < 1) window.requestAnimationFrame(function() {
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function() {
                zoom(0.2);
            });
        }
    };

    var option = {
        backgroundColor: opt.bgColor,
         tooltip: {
            show: true,
            trigger:'item',
            alwaysShowContent:false,
            backgroundColor:'rgba(50,50,50,0.7)',
            hideDelay:100,
            triggerOn:'mousemove',
            enterable:true,
            position:['60%','70%'],
            formatter:function(params, ticket, callback){
                return '简称：'+params.data.name+'<br/>'+'公司名称：'+params.data.company+'<br/>'+'所属大区：'+params.data.region+'<br/>'+'所在位置：'+params.data.position
            }
        },
        graphic: [{
            type: 'group',
            left: pos.left,
            top: pos.top - 4,
            children: [{
                type: 'line',
                left: 0,
                top: -20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }, {
                type: 'line',
                left: 0,
                top: 20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 60,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }]
        }, 
        {
            id: name[idx],
            type: 'group',
            left: pos.left + 2,
            top: pos.top,
            children: [{
                type: 'polyline',
                left: 90,
                top: -12,
                shape: {
                    points: line
                },
                style: {
                    stroke: 'transparent',
                    key: name[0]
                },
                onclick: function() {
                    var name = this.style.key;
                    handleEvents.resetOption(chart, option, name);
                }
            }, {
                type: 'text',
                left: 0,
                top: 'middle',
                style: {
                    text: '广西',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                },
                onclick: function() {
                    handleEvents.resetOption(chart, option, '广西');
                }
            }, {
                type: 'text',
                left: 0,
                top: 10,
                style: {
                    text: 'guangxi',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function() {
                    handleEvents.resetOption(chart, option, '广西');
                }
            }]
        }],
        geo: {
            map: opt.mapName,
            roam: true,
            zoom: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            regions: opt.activeArea.map(function(item) {
                if (typeof item !== 'string') {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            })
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period:15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: function(params){
                        return levelColorMap[params.value[3]];
                    },
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: handleEvents.initSeriesData(opt.data)
        }]
    };

    chart.setOption(option);
    // 添加事件
    chart.on('click', function(params) {
        alert(params.name);
		
    });

    chart.setMap = function(mapName) {
        var _self = this;
        if (mapName.indexOf('市') < 0) mapName = mapName + '市';
        var citySource = cityMap[mapName];
        if (citySource) {
            var url = './map/' + citySource + '.json';
            $.get(url, function(response) {
                // console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
            });
        }
        
    };

    return chart;
};

$.getJSON(guangxi, function(geoJson) {
    echarts.registerMap('广西', geoJson);
    var myChart = echarts.extendsMap('chart-panel', {
        bgColor: '#154e90', // 画布背景色
        mapName: '广西', // 地图名
        text:'火电业务',
        goDown: true, // 是否下钻
        // 下钻回调
        callback: function(name, option, instance) {
            console.log(name, option, instance);
        },
        // 数据展示            	
        data: [
               {city:'广西',name: "贺州",company:"贺州有限公司",position:'广西贺州',region:'华南大区',level:'1'},
			{city:'广西',name: "南宁",company:"南宁有限公司",position:'广西南宁',region:'华南大区',level:'1'},
			{city:'广西',name: "柳州",company:"柳州有限公司",position:'广西柳州',region:'华南大区',level:'3'},
			{city:'广西',name: "防城港",company:"防城港有限公司",position:'广西防城港',region:'华南大区',level:'3'},
			{city:'广西',name: "崇左",company:"崇左有限公司",position:'广西崇左',region:'华南大区',level:'3'},
			{city:'广西',name: "来宾",company:"来宾有限公司",position:'广西来宾',region:'华南大区',level:'3'},
			{city:'广西',name: "桂林",company:"桂林有限公司",position:'广西桂林',region:'华南大区',level:'3'},
			{city:'广西',name: "梧州",company:"梧州有限公司",position:'广西梧州',region:'华南大区',level:'3'},
			{city:'广西',name: "贺州",company:"贺州有限公司",position:'广西贺州',region:'华南大区',level:'3'},
			{city:'广西',name: "玉林",company:"玉林有限公司",position:'广西玉林',region:'华南大区',level:'3'},
			{city:'广西',name: "贵港",company:"贵港有限公司",position:'广西贵港',region:'华南大区',level:'3'},
			{city:'广西',name: "百色",company:"百色有限公司",position:'广西百色',region:'华南大区',level:'3'},
            {city:'广西',name: "钦州",company:"钦州有限公司",position:'广西钦州',region:'华南大区',level:'3'},
            {city:'广西',name: "河池",company:"河池有限公司",position:'广西河池',region:'华南大区',level:'3'},
            {city:'广西',name: "北海",company:"北海有限公司",position:'广西北海',region:'华南大区',level:'3'},
             ]
    });
})