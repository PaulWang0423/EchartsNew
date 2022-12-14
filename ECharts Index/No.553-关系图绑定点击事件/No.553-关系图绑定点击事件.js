// 调试页面回打印出点击的节点名称

var person = "/asset/get/s/data-1561621393298-zQTG-TuDS.png";
var car = "/asset/get/s/data-1561621386236-0IGCc48l6.png";
var phone = "/asset/get/s/data-1561621379686-rZHoryrBV.png";

var size = 50; //节点大小


var listdata = [];
var links = [];
var legendes = ["手机IMSI", "人脸ID", "车牌号码", "人脸ID"];
var texts = [];


var phoneNum = {
    "手机号:13856978256": "13856978256",
    "手机号:13998745632": "13998745632",
    "手机号:18812345678": "18812345678",
    "手机号:16812345678": "16812345678",
    "手机号:13856971111": "13856978256",
    "手机号:13998742222": "13998745632",
    "手机号:18812344444": "18812345678",
    "手机号:16812343333": "16812345678",
    "手机号:13878978256": "13856978256",
    "手机号:137895632": "13998745632",
};

var phoneIMSI = ["次数:1，匹配度:6%", "次数:3，匹配度:30%", "次数:2，匹配度:26%",
    "次数:2，匹配度:26%", "次数:2，匹配度:26%", "次数:2，匹配度:26%",
    "匹配手机号码", "匹配手机号码", "匹配手机号码", "匹配手机号码"
];


var carNum = {
    "车牌号码:豫AJ9685": "豫AJ9685",
    "车牌号码:豫AG5123": "豫AG5123",
    "车牌号码:豫AG6822": "豫AG6822",
    "车牌号码:豫CJ9685": "豫AJ9685",
    "车牌号码:豫AD5123": "豫AG5123",
    "车牌号码:豫AT6822": "豫AG6822",
    "车牌号码:豫AG6622": "豫AG6822",
    "车牌号码:豫CJ9885": "豫AJ9685",
};
const relationShipCar = ["匹配车牌号码", "匹配车牌号码", "匹配车牌号码", "匹配车牌号码", "匹配车牌号码", "匹配车牌号码", "匹配车牌号码", "匹配车牌号码", "匹配车牌号码"];

var mainRelationShip = {
    人脸ID: "732"
};

function setDataPerson(json, n) {
    var i = 0;
    for (var p in json) {
        listdata.push({
            x: 50,
            y: 100,
            "name": p,
            "showName": json[p],
            "symbol": 'image://' + "/asset/get/s/data-1561621393298-zQTG-TuDS.png",
            "symbolSize": 70,
            "category": n,
            "draggable": "false",
            formatter: function(params) {
                return params.data.showName;
            },
            label: {
                position: 'bottom'
            }
        });
        i++;
    }
}

function setDataPhone(json, n) {
    var i = 0;
    for (var p in json) {
        listdata.push({
            x: i * 50,
            y: size + i * 10,
            "name": p,
            "showName": json[p],
            "symbol": 'image://' + "/asset/get/s/data-1561621386236-0IGCc48l6.png",
            "symbolSize": size,
            "category": n,
            "draggable": "false",
            formatter: function(params) {
                return params.data.showName;
            },
            label: {
                position: 'bottom'
            }
        });
        i++;
    }
}

function setDataCar(json, n) {
    var i = 0;
    for (var p in json) {
        listdata.push({
            x: i * 50,
            y: size + i * 10,
            "name": p,
            "showName": json[p],
            "symbol": 'image://' + "/asset/get/s/data-1561621379686-rZHoryrBV.png",
            "symbolSize": size,
            "category": n,
            "draggable": "false",
            formatter: function(params) {
                return params.data.showName;
            },
            label: {
                position: 'bottom'
            }
        });
        i++;
    }
}

function setLinkData(json, relarr, title) {
    if (relarr !== "") {
        var i = 0;
        for (var p in json) {
            links.push({
                "source": p,
                "target": title,
                "value": relarr[i],
                lineStyle: {
                    normal: {
                        // text: relarr[i],
                        color: 'source'
                    }
                }
            });
            i++;
        }
    } else {
        for (var p2 in json) {
            links.push({
                "source": p2,
                "target": title,
                "value": "",
                lineStyle: {
                    normal: {
                        color: 'source'
                    }
                }
            });
        }
    }
}

for (var i = 0; i < legendes.length; i++) {
    texts.push({
        "name": legendes[i]
    });
}

setDataPhone(phoneNum, 0);
setDataCar(carNum, 2);
setDataPerson(mainRelationShip, 3);

setLinkData(phoneNum, phoneIMSI, legendes[3]);
setLinkData(carNum, relationShipCar, legendes[3]);

option = {
    title: {
        text: "关系图绑定点击事件",
        top: "top",
        left: "left",
        textStyle: {
            color: '#000000'
        }
    },
    tooltip: {
        formatter: '{b}'
    },

    backgroundColor: '#f7f7f7',
    legend: {
        data: legendes,
        textStyle: {
            color: '#000000'
        },
        icon: 'circle',
        type: 'scroll',
        orient: 'vertical',
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10
    },
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 80,
            gravity: 0,
            edgeLength: 150,
            layoutAnimation: true,
        },
        data: listdata,
        links: links,
        categories: texts,
        roam: false,
        nodeScaleRatio: 0,
        focusNodeAdjacency: false,
        lineStyle: {
            normal: {
                opacity: 0.5,
                width: 1.5,
                curveness: 0
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    color: '#000000',
                    fontWeight: 'normal',
                    fontSize: "12" //字体大小
                },
                formatter: function(params) {
                    return params.data.showName
                },
                fontSize: 18,
                fontStyle: '600',
            }
        },
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            }
        }
    }],
    color: ['#e8b842', '#41b1ef', '#667aed', '#347fbb', '#772cdc',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
    ]
};

const clickFun = param => {
    console.log(param.name)
}

myChart.on("click", clickFun);