var geoCoordMap = {
    //备用
    '中山': [113.4229,22.478],
    '佛山': [112.8955,23.1097],
    '咸阳': [108.4131,34.8706],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '泰州': [120.0586,32.5525],
    //湖南
    '长沙': [113.0823,28.2568],
    '张家界': [109.4000,28.5200],
    '常德': [111.6800,29.0500],
    '衡阳': [112.5700,26.9000],
    '岳阳': [113.1200,29.3700],
    '湘潭': [112.5439,27.7075],
    //云南
    '昆明': [102.9199,25.4663],
    '保山': [99.1700,25.1200],
    '西双版纳': [100.8000,22.0200],
    '临沧': [100.8000,23.8800],
    '迪庆': [99.7000,27.8300],
    '德宏': [98.5800,24.4300],
    '普洱': [101.0300,23.7000],
    '昭通': [103.7200,27.3300],
    '丽江': [100.2300,26.8800],
    '大理': [100.2300,25.6000],
    '怒江': [98.8500,25.8500],
    '文山': [104.2500,23.3700],
    '玉溪': [101.9312,23.8898],
    //单独
    '北京': [116.4551,40.2539],
    '上海': [121.4648,31.2891],
    '天津': [117.4219,39.4189],
    //四川
    '成都': [103.9526,30.7617],
    '凉山': [102.2700,27.9000],
    '绵阳': [104.7300,31.4700],
    '德阳': [104.3800,31.1300],
    '宜宾': [104.6200,28.7700],
    //宁夏
    '银川': [106.3586,38.1775],
    //新疆
    '乌鲁木齐': [87.9236,43.5883],
    //内蒙古
    '呼和浩特': [111.4124,40.4901],
    '鄂尔多斯': [108.9734,39.2487],
    '赤峰': [118.9200,42.2700],
    '呼伦贝尔': [119.7700,43.9500],
    '锡林郭勒': [116.0700,43.9500],
    //吉林
    '长春': [125.8154,44.2584],
    //安徽
    '合肥': [117.2900,32.0581],
    '芜湖': [118.3800,31.3300],
    '六安': [116.5000,31.7700],
    '淮南': [117.0000,32.6300],
    //重庆
    '重庆': [107.7539,30.1904],
    //甘肃
    '兰州': [103.5901,36.3043],
    //山东
    '威海': [122.1200,37.5200],
    '青岛': [120.3800,36.0700],
    '济南': [116.9800,36.6700],
    //山西
    '大同': [113.7854,39.8035],
    '太原': [112.3352,37.9413],
    '运城': [110.9800,35.0200],
    '吕梁': [111.1300,37.5200],
    '长治': [113.1200,36.2000],
    //广东
    '广州': [113.5107,23.2196],
    '深圳': [114.5435,22.5439],
    '梅州': [116.1200,24.2800],
    '东莞': [113.8953,22.901],
    '清远': [112.9175,24.3292],
    '珠海': [113.7305,22.1155],
    '揭阳': [116.3700,23.5500],  
    //广西
    '南宁': [108.479,23.1152],
    '钦州': [108.6200,21.9500],
    '桂林': [110.2800,25.2800],
    '柳州': [109.3799,24.9774],
    '北海': [109.314,21.6211],
    //江苏
    '南京': [118.8062,31.9208],
    '苏州': [120.6519,31.3989],
    '南通': [121.1023,32.1625],
    '常州': [119.4543,31.5582],
    '无锡': [120.3442,31.5527],
    //江西
    '南昌': [116.0046,28.6633],
    '吉安': [114.9800,27.1200],
    '赣州': [114.9300,25.8300],
    '抚州': [116.3500,28.0000],
    '萍乡': [113.8500,27.6300],
    //河北
    '廊坊': [116.521,39.0509],
    '石家庄': [114.4995,38.1006],
    '秦皇岛': [119.2126,40.0232],
    '保定': [115.0488,39.0948],
    //河南
    '郑州': [113.4668,34.6234],
    '南阳': [112.5200,33.0000],
    '信阳': [114.0700,32.1300],
    '焦作': [113.5200,35.2200],
    //浙江
    '温州': [120.498,27.8119],
    '杭州': [119.5313,29.8773],
    '宁波': [121.5967,29.6466],
    //海南
    '海口': [110.3893,19.8516],
    '三亚': [109.5000,18.2500],
    '东方': [108.6300,19.10000],
    //湖北
    '武汉': [114.3896,30.6628],
    '宜昌': [111.2800,30.7000],
    //福建
    '厦门': [118.1689,24.6478],
    '福州': [119.4543,25.9222],    
    //西藏
    '拉萨': [91.1865,30.1465],
    '阿里': [80.1000,32.5000],
    '日喀则': [88.8800,29.2700],
    '昌都': [97.1800,31.13],
    //贵阳
    '贵阳': [106.6992,26.7682],
    '毕节': [105.2800,27.3000],
    '黔东南': [107.9700,26.5800],
    '兴义': [104.9000,25.0800],
    //辽宁
    '大连': [122.2229,39.4409],
    '沈阳': [123.1238,42.1216],
    '阜新': [121.6700,42.0200],  
    //陕西
    '西安': [109.1162,34.2004],
    '榆林': [109.7300,38.2800],
    //青海
    '西宁': [101.4038,36.8207],
    '海西': [97.3700,37.3700],
    //黑龙江
    '哈尔滨': [127.9688,45.368],
    '鹤岗': [130.2700,47.3300],
    
};

var KMData = [
    //湖南
    [{name:'昆明'}, {name:'长沙',value:162}],
    [{name:'昆明'}, {name:'张家界',value:28}],
    [{name:'昆明'}, {name:'常德',value:12}],
    [{name:'昆明'}, {name:'衡阳',value:15}],
    [{name:'昆明'}, {name:'岳阳',value:5}],
    [{name:'昆明'}, {name:'湘潭',value:6}],
    //云南
    [{name:'昆明'}, {name:'保山',value:131}],
    [{name:'昆明'}, {name:'西双版纳',value:101}],
    [{name:'昆明'}, {name:'临沧',value:69}],
    [{name:'昆明'}, {name:'迪庆',value:65}],
    [{name:'昆明'}, {name:'德宏',value:80}],
    [{name:'昆明'}, {name:'普洱',value:56}],
    [{name:'昆明'}, {name:'昭通',value:74}],
    [{name:'昆明'}, {name:'丽江',value:53}],
    [{name:'昆明'}, {name:'大理',value:8}],
    [{name:'昆明'}, {name:'怒江',value:14}],
    [{name:'昆明'}, {name:'文山',value:12}],
    [{name:'昆明'}, {name:'玉溪',value:2}],
    //单独
    [{name:'昆明'}, {name:'上海',value:33}],
    [{name:'昆明'}, {name:'北京',value:338}],
    [{name:'昆明'}, {name:'长春',value:11}],
    [{name:'昆明'}, {name:'天津',value:16}],
    [{name:'昆明'}, {name:'银川',value:4}],
    [{name:'昆明'}, {name:'乌鲁木齐',value:5}],
    [{name:'昆明'}, {name:'兰州',value:6}],
    [{name:'昆明'}, {name:'重庆',value:47}],
    //安徽
    [{name:'昆明'}, {name:'合肥',value:16}],
    [{name:'昆明'}, {name:'芜湖',value:16}],
    [{name:'昆明'}, {name:'六安',value:2}],
    [{name:'昆明'}, {name:'淮南',value:2}],
    //内蒙古
    [{name:'昆明'}, {name:'呼和浩特',value:4}],
    [{name:'昆明'}, {name:'鄂尔多斯',value:1}],
    [{name:'昆明'}, {name:'赤峰',value:1}],
    [{name:'昆明'}, {name:'呼伦贝尔',value:1}],
    [{name:'昆明'}, {name:'锡林郭勒',value:1}],
    //四川
    [{name:'昆明'}, {name:'成都',value:275}],
    [{name:'昆明'}, {name:'凉山',value:31}],
    [{name:'昆明'}, {name:'宜宾',value:2}],
    [{name:'昆明'}, {name:'德阳',value:2}],
    [{name:'昆明'}, {name:'绵阳',value:4}],
    //山东
    [{name:'昆明'}, {name:'威海',value:4}],
    [{name:'昆明'}, {name:'青岛',value:5}],
    [{name:'昆明'}, {name:'济南',value:28}],
    //山西
    [{name:'昆明'}, {name:'大同',value:24}],
    [{name:'昆明'}, {name:'太原',value:43}],
    [{name:'昆明'}, {name:'运城',value:18}],
    [{name:'昆明'}, {name:'吕梁',value:16}],
    [{name:'昆明'}, {name:'长治',value:5}],
    //广东
    [{name:'昆明'}, {name:'广州',value:228}],
    [{name:'昆明'}, {name:'深圳',value:20}],
    [{name:'昆明'}, {name:'梅州',value:40}],
    [{name:'昆明'}, {name:'东莞',value:6}],
    [{name:'昆明'}, {name:'清远',value:3}],
    [{name:'昆明'}, {name:'珠海',value:6}],
    [{name:'昆明'}, {name:'揭阳',value:5}],
    //广西
    [{name:'昆明'}, {name:'南宁',value:54}],
    [{name:'昆明'}, {name:'钦州',value:20}],
    [{name:'昆明'}, {name:'桂林',value:12}],
    [{name:'昆明'}, {name:'柳州',value:6}],
    [{name:'昆明'}, {name:'北海',value:5}],
    //江苏
    [{name:'昆明'}, {name:'南京',value:81}],
    [{name:'昆明'}, {name:'苏州',value:10}],
    [{name:'昆明'}, {name:'南通',value:5}],
    [{name:'昆明'}, {name:'无锡',value:5}],
    [{name:'昆明'}, {name:'常州',value:7}],
    //江西
    [{name:'昆明'}, {name:'南昌',value:58}],
    [{name:'昆明'}, {name:'吉安',value:16}],
    [{name:'昆明'}, {name:'赣州',value:15}],
    [{name:'昆明'}, {name:'抚州',value:7}],
    [{name:'昆明'}, {name:'萍乡',value:6}],
    //河北
    [{name:'昆明'}, {name:'保定',value:3}],
    [{name:'昆明'}, {name:'廊坊',value:14}],
    [{name:'昆明'}, {name:'石家庄',value:9}],
    [{name:'昆明'}, {name:'秦皇岛',value:3}],
    //河南
    [{name:'昆明'}, {name:'南阳',value:4}],
    [{name:'昆明'}, {name:'信阳',value:5}],
    [{name:'昆明'}, {name:'焦作',value:4}],
    [{name:'昆明'}, {name:'郑州',value:31}],
    //浙江
    [{name:'昆明'}, {name:'宁波',value:4}],
    [{name:'昆明'}, {name:'杭州',value:51}],
    [{name:'昆明'}, {name:'温州',value:2}],
    //海南
    [{name:'昆明'}, {name:'三亚',value:3}],
    [{name:'昆明'}, {name:'东方',value:32}],
    [{name:'昆明'}, {name:'海口',value:14}],
    //湖北
    [{name:'昆明'}, {name:'宜昌',value:16}],
    [{name:'昆明'}, {name:'武汉',value:64}],
    //福建
    [{name:'昆明'}, {name:'厦门',value:7}],
    [{name:'昆明'}, {name:'福州',value:2}],
    //西藏
    [{name:'昆明'}, {name:'拉萨',value:24}],
    [{name:'昆明'}, {name:'日喀则',value:5}],
    [{name:'昆明'}, {name:'昌都',value:14}],
    [{name:'昆明'}, {name:'阿里',value:3}],
    //贵州
    [{name:'昆明'}, {name:'毕节',value:7}],
    [{name:'昆明'}, {name:'贵阳',value:20}],
    [{name:'昆明'}, {name:'黔东南',value:7}],
    [{name:'昆明'}, {name:'兴义',value:6}],
    //辽宁
    [{name:'昆明'}, {name:'大连',value:3}],
    [{name:'昆明'}, {name:'沈阳',value:15}],
    [{name:'昆明'}, {name:'阜新',value:5}],
    //陕西
    [{name:'昆明'}, {name:'榆林',value:16}],
    [{name:'昆明'}, {name:'西安',value:42}],
    //青海
    [{name:'昆明'}, {name:'西宁',value:3}],
    [{name:'昆明'}, {name:'海西',value:1}],
    //哈尔滨
    [{name:'昆明'}, {name:'哈尔滨',value:9}],
    [{name:'昆明'}, {name:'鹤岗',value:3}],

];

//var planePath = 'arrow'; 
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                value: dataItem[1].value
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
//var color = ['#fff', '#FFFFA8', '#46bee9']；
var series = [];
[['昆明', KMData]].forEach(function (item, i) {
    series.push({
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 10,
            trailLength: 0.7,
            color: '#fff',
            //color: '#46bee9',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 10,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 9;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

option = {
    backgroundColor: '#404a59',
    title : {
        text: '2017-2020年出差情况',
        //subtext: '数据纯属虚构',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    /*
    tooltip : {
        trigger: 'item',
        formatter:function(params, ticket, callback){
            console.log(params);
            if(params.seriesType=="effectScatter") {
                return params.data.name+""+params.data.value[2];
            }else{
                return params.name;
            }
        }
    },
    */
    tooltip : {
        trigger: 'item',
        formatter:function(params, ticket, callback){
            console.log(params);
            if(params.seriesType=="effectScatter") {
                return params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines"){
                return params.data.fromName+"->"+params.data.toName+"<br />"+params.data.value;
            }else{
                return params.name;
            }
        }
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['昆明'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};