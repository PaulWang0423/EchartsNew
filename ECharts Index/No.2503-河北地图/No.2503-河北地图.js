var hb = "https://cdn.jsdelivr.net/gh/SHJ33/EchartsMapJson@master/json/province/hebei.json";
var sjz = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130100.json"; //石家庄
var ts = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130200.json"; //唐山
var qhd = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130300.json"; //秦皇岛
var hd = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130400.json"; //邯郸
var xt = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130500.json"; //邢台
var bd = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130600.json"; //保定
var zjk = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130700.json"; //张家口
var cd = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130800.json"; //承德
var cz = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/130900.json"; //沧州
var lf = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/131000.json"; //廊坊
var hs = "https://cdn.jsdelivr.net/gh/SHJ33/echartsMapData@master/geometryCouties-json/131100.json"; //衡水

var mapname = hb;

var color1 = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
            {
                //第一节下面
                offset: 0,
                color: 'rgb(22,255,255, 0)',//'#000E1A',
            },
            {
                offset: 1,
    
                color: 'rgb(22,255,255, 0.6)',
            },
        ],
    };

var dataV = [
    { name: '河北医科大学第二医院', value: [114.488673,38.064447], datas:1 },
    { name: '河北省人民医院', value: [114.472023,38.064649], datas:1 },
    { name: '石家庄现代中医血液肾病医院', value: [114.57895,38.061112], datas:1 },
    { name: '河北仁德口腔医院', value: [114.568026,38.049089], datas:1 },
    { name: '河北中医肝病医院', value: [114.597027,38.16367], datas:1 },
    { name: '石家庄市中医院', value: [114.478806,38.050003], datas:1 },
    { name: '石家庄明瀚医院', value: [114.501995,38.097416], datas:1 },
    { name: '唐山市工人医院', value: [118.192642,39.635097], datas:1 },
    { name: '石家庄爱尔眼科医院', value: [114.483294,38.032093], datas:1 },
    { name: '石家庄糖尿病医院', value: [114.688743,38.040155], datas:1 },
    { name: '圣禄嘉妇产医院', value: [114.46097,38.000081], datas:1 },
    { name: '石家庄爱眼医院', value: [114.488695,38.049382], datas:1 },
    { name: '石家庄市桥西区口腔医院', value: [114.48335,38.046753], datas:1 },
    { name: '石家庄霍文发中医骨伤医院', value: [114.485041,38.031863], datas:1 },
    { name: '石家庄市第八医院', value: [114.42603,38.056994], datas:1 },
    { name: '石家庄和协口腔医院', value: [114.452034,38.041157], datas:1 },
    { name: '石家庄庭瑞中医精神康复医院', value: [114.391406,38.067751], datas:1 },
    { name: '石家庄中冀康复医院', value: [114.483104,38.024075], datas:1 },
    { name: '河北省优抚医院', value: [114.468618,38.056507], datas:1 },
    { name: '石家庄市第二医院', value: [114.47697,38.052536], datas:1 },
    { name: '石家庄真仁中医钩活术总医院', value: [114.484462,38.104441], datas:1 },
    { name: '石家庄市新华区杜北乡卫生院', value: [114.44429,38.132608], datas:1 },
    { name: '石家庄市新华区赵陵铺镇卫生院', value: [114.489951,38.101809], datas:1 },
    { name: '石家庄市新华区大郭镇卫生院', value: [114.41203,38.085278], datas:1 },
    { name: '河北省生殖医院', value: [114.4693,38.085656], datas:1 },
    { name: '冀中能源井陉矿业集团有限公司总医院', value: [114.073297,38.070468], datas:1 },
    { name: '衡水市人民医院', value: [115.699925,37.737768], datas:1 },
    { name: '石家庄市井陉矿区医院', value: [114.073297,38.070468], datas:1 },
    { name: '石家庄眼科医院', value: [114.613896,38.054964], datas:1 },
    { name: '石家庄港大妇产医院', value: [114.540162,38.038098], datas:1 },
    { name: '石家庄长城中西医结合医院', value: [114.60986,38.050595], datas:1 },
    { name: '石家庄平安医院', value: [114.509597,37.997689], datas:1 },
    { name: '河北省老年病医院', value: [114.524673,38.029889], datas:1 },
    { name: '河北工程大学附属医院', value: [114.507673,36.625206], datas:1 },
    { name: '石家庄金冠中医骨病医院', value: [114.654767,38.022978], datas:1 },
    { name: '河北友爱医院', value: [114.561796,38.035462], datas:1 },
    { name: '河北省眼科医院', value: [114.531981,37.09908], datas:1 },
    { name: '石家庄京冀康复医院', value: [114.540185,38.039108], datas:1 },
    { name: '石家庄市藁城中西医结合医院', value: [114.832498,38.02584], datas:1 },
    { name: '京东誉美中西医结合肾病医院', value: [116.816923,39.966512], datas:1 },
    { name: '开滦总医院', value: [118.205552,39.631827], datas:1 },
    { name: '石家庄市栾城人民医院', value: [114.65902,37.89258], datas:1 },
    { name: '石家庄市栾城区精神病医院', value: [114.64785,37.896854], datas:1 },
    { name: '井陉县中医院', value: [114.146978,38.037621], datas:1 },
    { name: '正定县妇幼保健计划生育服务中心', value: [114.562055,38.150715], datas:1 },
    { name: '河北省儿童医院', value: [114.554158,38.040675], datas:1 },
    { name: '赞皇县中医医院', value: [114.384839,37.66647], datas:1 },
    { name: '无极血康中医医院', value: [114.956807,38.246318], datas:1 },
    { name: '无极人和医院', value: [114.990582,38.17356], datas:1 },
    { name: '河北医科大学第四医院', value: [114.51556,38.05574], datas:1 },
    { name: '平山县人民医院', value: [114.182666,38.26858], datas:1 },
    { name: '河北省沧州中西医结合医院', value: [116.842122,38.299282], datas:1 },
    { name: '保定市第二医院', value: [115.46595,38.878897], datas:1 },
    { name: '河北省胸科医院', value: [114.524818,38.095093], datas:1 },
    { name: '唐山南湖医院', value: [118.186208,39.625599], datas:1 },
    { name: '晋州市人民医院', value: [115.076403,38.038543], datas:1 },
    { name: '保定市第一中医院', value: [115.496581,38.864002], datas:1 },
    { name: '唐山市工人医院集团康复医院', value: [118.195006,39.642679], datas:1 },
    { name: '河北省民政总医院', value: [114.481684,37.089854], datas:1 },
    { name: '开滦（集团）有限责任公司唐家庄医院', value: [118.477571,39.748195], datas:1 },
    { name: '唐山市丰南区医院', value: [118.101312,39.589617], datas:1 },
    { name: '唐山市妇幼保健院', value: [118.147545,39.593057], datas:1 },
    { name: '唐山市丰润区中医医院', value: [118.121383,39.833995], datas:1 },
    { name: '河北中西医结合儿童医院', value: [114.476786,38.037947], datas:1 },
    { name: '河北医科大学第一医院', value: [114.559384,38.022797], datas:1 },
    { name: '承德市中心医院', value: [117.939165,40.988108], datas:1 },
    { name: '滦南县医院', value: [118.704529,39.513904], datas:1 },
    { name: '乐亭县医院', value: [118.911714,39.432975], datas:1 },
    { name: '秦皇岛市中医医院', value: [119.561808,39.93748], datas:1 },
    { name: '保定市妇幼保健院', value: [115.511264,38.922928], datas:1 },
    { name: '河北生殖妇产医院', value: [114.466767,38.026065], datas:1 },
    { name: '冀中能源邢台矿业集团有限责任公司总医院', value: [114.473891,37.071648], datas:1 },
    { name: '中国科学院大学附属华北医院', value: [116.104676,38.694252], datas:1 },
    { name: '遵化市第二医院', value: [117.974691,40.205119], datas:1 },
    { name: '秦皇岛市第三医院', value: [119.622723,39.959092], datas:1 },
    { name: '河北医科大学口腔医院', value: [114.542765,38.049257], datas:1 },
    { name: '滦州市中医医院', value: [118.700222,39.729718], datas:1 },
    { name: '秦皇岛军工医院', value: [119.587727,39.961482], datas:1 },
    { name: '广阳区妇幼保健院', value: [116.702031,39.533407], datas:1 },
    { name: '秦皇岛市工人医院', value: [119.772664,40.0026], datas:1 },
    { name: '河北燕达陆道培医院', value: [116.799644,39.942444], datas:1 },
    { name: '邯郸市中心医院', value: [114.54117,36.627256], datas:1 },
    { name: '邯郸市第一医院', value: [114.497261,36.625659], datas:1 },
    { name: '廊坊市人民医院', value: [116.716713,39.52299], datas:1 },
    { name: '邯郸市华安医院', value: [114.467931,36.615281], datas:1 },
    { name: '邯郸市妇幼保健院', value: [114.511819,36.606599], datas:1 },
    { name: '邯郸市第二医院', value: [114.491925,36.602204], datas:1 },
    { name: '冀中能源峰峰集团有限公司总医院', value: [114.213401,36.425346], datas:1 },
    { name: '邯郸市中医院', value: [114.505989,36.60819], datas:1 },
    { name: '邯郸市永年区妇幼保健院', value: [114.501541,36.774684], datas:1 },
    { name: '唐山市协和医院', value: [118.155639,39.630869], datas:1 },
    { name: '临漳县妇幼保健院', value: [114.616114,36.351698], datas:1 },
    { name: '石家庄市第一医院', value: [114.53335,38.045812], datas:1 },
    { name: '河北北方学院附属第一医院', value: [114.896406,40.833387], datas:1 },
    { name: '河北燕达医院', value: [116.799644,39.942444], datas:1 },
    { name: '邢台市人民医院', value: [114.506412,37.075648], datas:1 },
    { name: '滦州市人民医院', value: [118.699382,39.745547], datas:1 },
    { name: '魏县妇幼保健院', value: [114.936052,36.348321], datas:1 },
    { name: '武安市妇幼保健院', value: [114.209728,36.698133], datas:1 },
    { name: '保定市第一医院', value: [115.494938,38.871926], datas:1 },
    { name: '邢台医学高等专科学校第二附属医院', value: [114.46857,37.097319], datas:1 },
    { name: '三河市妇幼保健院', value: [117.084282,39.991206], datas:1 },
    { name: '廊坊市第四人民医院', value: [116.408228,39.122967], datas:1 },
    { name: '邢台市中医院', value: [114.579579,37.069639], datas:1 },
    { name: '临城县人民医院', value: [114.549571,37.44464], datas:1 },
    { name: '柏乡县中心医院', value: [114.689629,37.500386], datas:1 },
    { name: '涿州市医院', value: [115.982765,39.491981], datas:1 },
    { name: '沧州市人民医院', value: [116.870334,38.321578], datas:1 },
    { name: '唐山中都白癜风医院', value: [118.128386,39.628798], datas:1 },
    { name: '河北省中医院', value: [114.544015,38.050047], datas:1 },
    { name: '张家口市第一医院', value: [114.879764,40.832746], datas:1 },
    { name: '邢台市第九医院', value: [115.057358,37.22648], datas:1 },
    { name: '河北大学附属医院', value: [115.52166,38.860056], datas:1 },
    { name: '清河县中心医院', value: [115.683412,37.069386], datas:1 },
    { name: '临西县中医院', value: [115.499626,36.877172], datas:1 },
    { name: '石家庄市第三医院', value: [114.540537,38.045836], datas:1 },
    { name: '秦皇岛市第一医院', value: [119.607654,39.944451], datas:1 },
    { name: '邢台经济开发区医院', value: [114.582405,37.044118], datas:1 },
    { name: '沙河市人民医院', value: [114.523929,36.862158], datas:1 },
    { name: '保定新视眼科医院', value: [115.478979,38.895965], datas:1 },
    { name: '邢台市第三医院', value: [114.469953,37.071043], datas:1 },
    { name: '保定市优抚医院', value: [115.502239,38.868989], datas:1 },
    { name: '河北医科大学第三医院', value: [114.474636,38.048597], datas:1 },
    { name: '保定心脑血管病医院', value: [115.529692,38.853404], datas:1 },
    { name: '保定市儿童医院', value: [115.512436,38.928101], datas:1 },
    { name: '承德医学院附属医院', value: [117.941701,40.975976], datas:1 },
    { name: '保定第七医院', value: [115.354843,38.945491], datas:1 },
    { name: '保定市第二中心医院', value: [116.000499,39.492565], datas:1 },
    { name: '保定市清苑区人民医院', value: [115.49426,38.769935], datas:1 },
    { name: '保定市徐水区妇幼保健院', value: [115.63559,39.030617], datas:1 },
    { name: '保定大午医院', value: [115.615767,39.080041], datas:1 },
    { name: '唐山市中医医院', value: [118.19298,39.633366], datas:1 },
    { name: '石家庄市第五医院', value: [114.515649,38.010552], datas:1 },
    { name: '沧州市中心医院', value: [116.85278,38.317938], datas:1 },
    { name: '容城县中医医院', value: [115.876333,39.047782], datas:1 },
    { name: '唐山市人民医院', value: [118.218768,39.625741], datas:1 },
    { name: '石家庄市妇产医院', value: [114.519893,38.048388], datas:1 },
    { name: '华北理工大学附属医院', value: [118.184743,39.646611], datas:1 },
    { name: '易县医院', value: [115.512643,39.357268], datas:1 },
    { name: '顺平县医院', value: [115.14198,38.858084], datas:1 },
    { name: '唐县人民医院', value: [114.985494,38.765886], datas:1 },
    { name: '容城县妇幼保健院', value: [115.885134,39.067258], datas:1 },
    { name: '涿州市妇幼医院', value: [115.973098,39.487281], datas:1 },
    { name: '河北省第七人民医院', value: [114.946719,38.549638], datas:1 },
    { name: '安国市妇幼保健院', value: [115.331282,38.428146], datas:1 },
    { name: '河北省妇幼保健中心', value: [115.885134,39.067258], datas:1 },
    { name: '秦皇岛市妇幼保健院', value: [119.59364,39.968075], datas:1 },
    { name: '河北省尚义县医院', value: [113.978467,41.08296], datas:1 },
    { name: '衡水市中医医院', value: [115.681425,37.736548], datas:1 },
    { name: '蔚县人民医院', value: [114.604661,39.851066], datas:1 },
    { name: '怀来同济医院', value: [115.540001,40.409202], datas:1 },
    { name: '涿鹿县医院', value: [115.211104,40.382414], datas:1 },
    { name: '河北省赤城县人民医院', value: [115.865427,40.886448], datas:1 },
    { name: '廊坊市中医医院', value: [116.703559,39.541984], datas:1 },
    { name: '邯郸市眼科医院', value: [114.490191,36.608243], datas:1 },
    { name: '定州市人民医院', value: [114.99255,38.518705], datas:1 },
    { name: '唐山市第二医院', value: [118.185868,39.655632], datas:1 },
    { name: '兴隆县中医医院', value: [117.511339,40.424461], datas:1 },
    { name: '丰宁满族自治县医院', value: [116.629407,41.24894], datas:1 },
    { name: '围场满族蒙古族自治县中医院', value: [117.765672,41.951406], datas:1 },
    { name: '承德围场大都医院', value: [117.771549,41.927888], datas:1 },
    { name: '保定市第一中心医院', value: [115.518738,38.879407], datas:1 },
    { name: '秦皇岛市第二医院', value: [119.176221,39.717547], datas:1 },
    { name: '霸州市妇幼保健院', value: [116.404275,39.119672], datas:1 },
    { name: '河北北方学院附属第二医院', value: [115.070372,40.622338], datas:1 },
    { name: '沧州市传染病医院', value: [116.830024,38.321331], datas:1 },
    { name: '献县中医医院', value: [116.118452,38.188224], datas:1 },
    { name: '泊头市医院', value: [116.561275,38.08852], datas:1 },
    { name: '泊头市第二医院', value: [116.288768,38.031004], datas:1 },
    { name: '廊坊爱德堡医院', value: [116.690956,39.555499], datas:1 },
    { name: '河北中石油中心医院', value: [116.729883,39.52581], datas:1 },
    { name: '三河市燕郊二三医院', value: [116.829593,39.95992], datas:1 },
    { name: '三河市燕郊人民医院', value: [116.81193,39.949895], datas:1 },
    { name: '唐山中心医院', value: [118.144942,39.675146], datas:1 },
    { name: '衡水市第二人民医院', value: [115.722736,37.725825], datas:1 },
    { name: '衡水市妇幼保健院', value: [115.646519,37.727038], datas:1 },
    { name: '辛集和平眼科医院', value: [115.243684,37.923757], datas:1 },
    { name: '衡水市第六人民医院', value: [115.58552,37.553855], datas:1 },
    { name: '武强县医院(武强县急救站)', value: [115.962616,38.047671], datas:1 },
    { name: '唐山曹妃甸唐海中医医院', value: [118.466151,39.281658], datas:1 },
]

var mapDate = [
    {name: '阜平县', value: [114.198801, 38.847276], datas: 1354,},
    {name: '涞源县', value: [114.723966, 39.292095], datas: 1402,},
    {name: '易县', value: [115.245576, 39.311674], datas: 2468,},
    {name: '定州市', value: [115.050014, 38.460198], datas: 768,},
    {name: '曲阳县', value: [114.654083, 38.700813], datas: 589,},
    {name: '唐县', value: [114.798254, 38.898656], datas: 1500,},
];

var geoCoordMap = {
      阜平县: [114.198801, 38.847276],
      涞源县: [114.723966, 39.292095],
      易县: [115.245576, 39.311674],
      定州市: [115.050014, 38.460198],
      曲阳县: [114.654083, 38.700813],
      唐县: [114.798254, 38.898656],
    };
var customerBatteryCityData = [
    {name: "阜平县", value: 50},
    {name: "涞源县", value: 20},
    {name: "易县", value: 60},
    {name: "定州市", value: 70},
    {name: "曲阳县", value: 120},
    {name: "唐县", value: 70},
];

var domImg = document.createElement('img');
domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px';
domImg.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MTE0OTgyQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MTE0OTgzQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgxMTQ5ODBBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgxMTQ5ODFBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v4trwAAAAVklEQVR42mL0D225cu0hAzWAjpY8C9CsL19/wIV4uDnI5gKNYmKgKhjcxrFAggBZiBIuyDhqRQWQOxoVo1ExGhWjUTEaFYMiKoB1LVq1TXZUAI0CCDAAcAlaxCt7dtQAAAAASUVORK5CYII=';

var domImgHover = document.createElement('img');
domImgHover.style.height = domImgHover.height = domImgHover.width = domImgHover.style.width = '8px';
domImgHover.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII=';

    // 动态计算柱形图的高度（定一个max）
    function lineMaxHeight () {
        const maxValue = Math.max(...customerBatteryCityData.map(item => item.value))
        return 0.9/maxValue
    }
        // 柱状体的主干
    function lineData () {
        return customerBatteryCityData.map((item) => {
          return {
            coords: [geoCoordMap[item.name], [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]]
          }
        })
    }
    // 柱状体的顶部
    function scatterData () {
        return customerBatteryCityData.map((item) => {
          return [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + item.value * lineMaxHeight()]
        })
    }
    // 柱状体的底部
    function scatterData2 () {
        return customerBatteryCityData.map((item) => {
          return {
            name: item.name,
            value: geoCoordMap[item.name]
          }
        })
    }

$.get(mapname, function (geoJson) {
    echarts.registerMap('hebei', geoJson);    
    
    option = {
        backgroundColor: '#2957A2',
        /*title: {
            top: 20,
            text: '河北省',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 100,
                fontSize: 14,
            },
        },*/
        tooltip: {
            trigger: 'item',
            show: true,
            enterable: true,
            textStyle:{
                fontSize:13,
                color: '#fff'
            },
            backgroundColor: 'rgba(0,2,89,0.8)',
            //formatter: '{b}<br />{c}',
            formatter: function (params) {
                var name = params.name;
                //var value = params.value[2];
                var text = `${name}`;
                return text;
            },
        },
        geo: [{ 
            map: 'hebei',
            roam: false,
            aspectScale: 0.75, 
            zoom: 1.23,
            scaleLimit:{
                min:1.25,
                max:5,
            },
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show:false,
                },
            },
            itemStyle: {
                normal: {
                    borderColor: '#2ab8ff',
                    borderWidth: 1,
                    areaColor: {
                        image: domImg,
                        repeat: 'repeat',
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 1,
                },
                emphasis: {
                    areaColor: {
                        image: domImgHover,
                        repeat: 'repeat',
                    },
                    borderColor: '#2ab8ff',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 255, 255, 0.7)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 1,
                    label: {
                        show: false,
                    },
                },
            },
            zlevel: 2,
            //z: 1,
            silent: true,
            
        },{
            map: 'hebei',
            roam: true,
            aspectScale: 0.75, 
            zoom: 1.03,
            scaleLimit:{
                min:1.03,
                max:1.03,
            },
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show:false,
                },
            },
            itemStyle: {
                normal: {
                    areaColor: 'rgba(0, 15, 40, 0.5)',
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 20,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    borderColor: 'rgba(0, 0, 0, 0.7)',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: domImgHover,//'#2AB8FF',
                    borderWidth: 1,
                    color: 'green',
                    label: {
                        show: false,
                    },
                },
            },
            zlevel: 1,
            z: 0,
            layoutCenter: ['50%', '50%'], 
            layoutSize: '100%',
            silent: false,
        }],
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: [3, 3],
            rippleEffect: {
                scale: 7,
                brushType: 'stroke',
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    shadowColor: '#0ff',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    color: 'rgb(22,255,255, 1)',
                },
            },
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show:false,
                },
            },
            data: dataV,
        }],
    }
    
    myChart.setOption(option);
});
