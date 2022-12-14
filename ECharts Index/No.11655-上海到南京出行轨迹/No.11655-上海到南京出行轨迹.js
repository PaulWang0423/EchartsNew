//关于这个图表我做的视频简介：https://www.bilibili.com/video/BV1pD4y127tW
//各位观众老爷们一键三连，下次一定！

var uploadedDataURL = "/asset/get/s/data-1555851394070-aGGRVy22M.json";


 //原始数据为栅格数据，需将栅格转化为经纬度后可视化

//mapboxgl.accessToken = mapboxglToken;

myChart.showLoading();

function coltowgs(LONCOL, LATCOL) { //定义栅格转换经纬度的函数
var lon1 = 118.36;
var lon2 = 121.986379;
var lat1 = 30.67;
var lat2 = 33.402324;
    var accuracy = 1000;
    var latStart = Math.min(lat1, lat2);
    var lonStart = Math.min(lon1, lon2);
    var deltaLon = accuracy * 360 / (2 * Math.PI * 6371004 * Math.cos((lat1 + lat2) * Math.PI / 360));
    var deltaLat = accuracy * 360 / (2 * Math.PI * 6371004);
    var HBLON = LONCOL * deltaLon + (lonStart - deltaLon / 2)
    var HBLAT = LATCOL * deltaLat + (latStart - deltaLat / 2)
    return [HBLON, HBLAT]
}
//读取MapboxStyle数据
var option = {
    title: {
        text: "上海到南京出行轨迹",
        textStyle: {
            color: '#fff',
            fontSize: 30
        },
        right: '0%'
    },

    visualMap: {
        show: false,
        calculable: true,
        realtime: false,
        dimension:3,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        outOfRange: {
            colorAlpha: 0
        }

    },


    maptalks3D      : {
    center          : [120.0693, 31.713070],
    zoom            : 8,
    pitch           : 10,
    urlTemplate     : 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    // altitudeScale: 1,
    postEffect      : {
    enable          : true,
    FXAA            : {
    enable          : true
            }
        },
        light: {
            main: {
                intensity: 1,
                shadow: true,
                shadowQuality: 'high'
            },
            ambient: {
                intensity: 0
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                exposure: 1,
                diffuseIntensity: 0.5,
                specularIntensity: 2
            }
        }
    },
    series: [{
        type: 'lines3D',

        coordinateSystem: 'maptalks3D',

        

        blendMode: 'lighter',
            effect: {
                show: true,
                trailWidth: 1,
                trailOpacity: 0.5,
                trailLength: 0.2,
                constantSpeed: 5
            },

        data: [],
        polyline: true,
        large: true,

        lineStyle: {
            //color: 'orange',
            //width: 0.5,
            opacity: 0.5
        }
    }]
}


$.getJSON(uploadedDataURL, function(linedata) { //读取可视化数据
myChart.hideLoading();

    var data = []

    for (var i = 0; i < linedata.length; i += 1) {
            var linedatatmp = []
    for (var j = 0; j < linedata[i].length; j += 1) {
if(linedata[i].length>0){
        loncol = linedata[i][j][0]
        latcol = linedata[i][j][1]
        
        coor = coltowgs(loncol, latcol)
        linedatatmp.push( [coor[0], coor[1]])}
    }
        data.push(linedatatmp)
    }

    option.visualMap.max = 30000
    option.series[0].data = data



if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
});

 