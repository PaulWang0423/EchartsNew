var scaleData = [{        'name': '这个图真难',        'value': 4000,        'value1': 421200,        'part': 6, // 定死圆环的宽度, 否则数据出现两极化    },    {        'name': '难死了, 我不会用圆点来渐变',        'value': 100,         'value1': 10210,         'part': 5,    },    {        'name': '我是排好序的数据',        'value': 90,        'value1': 200,        'part': 4,            },    {        'name': '我是模块固定死的',        'value': 60,        'value1': 100,        'part': 3,    },    {        'name': '只展示前5个 其他的都用其他',        'value': 10,        'value1': 12,        'part': 2,    },    {        'name': '其他',        'value': 1,        'value1': 8,        'part': 1,    },  ];var rich = {    circle: {        color: '#333',        fontSize: 5,        fontFamily: 'Arial',        borderWidth: 3,        backgroundColor: '#984455',        padding: [1, 1, 1, 1],        width: 0,        height: 0,        lineHeight: 20,        borderColor: 'red',        borderWidth: 20,        position: ['10', '20'],        borderRadius: '50%',    },};var placeHolderStyle = {    normal: {        label: {            show: false        },        labelLine: {            show: false        },        color: 'rgba(0, 0, 0, 0)',        // borderColor: 'rgba(0, 0, 0, 0)',        borderWidth: 0    }};var data = [];var data1 = [];var data2 = [];var color=['red','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']var color1=['red','red','red','#ffe000','#ffa800','#ff5b00','#ff3000']for (var i = 0; i < scaleData.length; i++) {    data.push({        value: scaleData[i].part,        total: scaleData[i].value,        valueCopy: scaleData[i].value1,        name: scaleData[i].name,        itemStyle: {            normal: {                borderWidth: 8,                // borderColor:color[i],                color: color[i],            }        }    }, {        value: 0.5,        name: '',        tooltip: {        show: false,    },        itemStyle: placeHolderStyle    });    data1.push({        value: scaleData[i].part,        total: scaleData[i].value,        valueCopy: scaleData[i].value1,        name: scaleData[i].name,        itemStyle: {            normal: {                borderWidth: 8,                // borderColor:color1[i],                // color: '#ccc',            }        }    }, {        value: 0.5,        name: '',        tooltip: {        show: false,    },        itemStyle: placeHolderStyle,    });    data2.push({        value: scaleData[i].part,        total: scaleData[i].value,        valueCopy: scaleData[i].value1,        name: scaleData[i].name,        itemStyle: {            normal: {                borderWidth: 8,                // borderColor:color1[i],                // color: '#ccc',            }        }    }, {        value: 2,        name: '',        tooltip: {        show: false,    },        itemStyle: placeHolderStyle    });}var seriesObj = [{ // 最外圈    name: '',     tooltip: {        show: false,    },    type: 'pie',    zlevel: '-2',    radius: ['82%', '82.5%'],    clockWise: false,    hoverAnimation: false,    itemStyle: {        normal: {            color: '#D9D9D9',            label: {                show: true,                position: 'outside',                color: '#666',                formatter: function(params) {                    var percent = 0;                    var total = 0;                    for (var i = 0; i < scaleData.length; i++) {                        total += scaleData[i].value;                    }                    percent = ((params.value / total) * 100).toFixed(0);                    if(params.name !== '' && params.name.length > 5) {                        return params.name.substring(0, 5) + '...';                    } else if (params.name !== '' && params.name.length <= 5) {                        return params.name;                    } else {                        return '';                    }                },                rich: rich            },            labelLine: {                length:3,                length2:0,                show: true,                color:'#00ffff'            }        }    },    data: data1}, {    name: '',    type: 'pie',    radius: ['75%', '80%'],    clockWise: false,    hoverAnimation: false,    // zlevel: '',    itemStyle: {        normal: {            label: {                show: false,                position: 'inside',                color: '#ddd',                // formatter: function(params) {                //     if(params.name !== '') {                //         return params.name;                //     }else {                //         return '';                //     }                // },                // rich: rich            },            labelLine: {                length:30,                length2:100,                show: true,            }        }    },    data: data},// { // 最大方块//     name: '',//     type: 'pie',//     tooltip: {//         show: false,//     },//     zlevel: '-2',//     radius: ['65%', '65%'],//     clockWise: false,//     hoverAnimation: false,//     // backgroundColor: 'transparent',//     itemStyle: {//         normal: {//             label: {//                 show: true,//                 position: 'outside',//                 color: 'transparent',//                 formatter: function(params) {//                     if(params.name !== '') {//                         return '';//                     }else {//                         return '';//                     }//                 },//                 // rich: rich//             },//             labelLine: {//                 length:20,//                 length2:0,//                 show: true,//                 smooth: true,//                 color:'#00ffff',//                 lineStyle: {//                     width: 20,//                     type: 'dotted',//                     opacity: '1'//                 }//             }//         }//     },    //     data: data// },// { // 第二方块//     name: '',//     type: 'pie',//     tooltip: {//         show: false,//     },//     zlevel: '-4',//     radius: ['55%', '55%'],//     clockWise: false,//     hoverAnimation: false,//     itemStyle: {//         normal: {//             label: {//                 show: true,//                 position: 'outside',//                 color: 'transparent',//                 formatter: function(params) {//                     if(params.name !== '') {//                         return '';//                     }else {//                         return '';//                     }//                 },//                 // rich: rich//             },//             labelLine: {//                 length:10,//                 length2:0,//                 color:'#00ffff',//                 lineStyle: {//                     width: 10,//                     type: 'dotted',//                     opacity: '0.8'//                 }//             }//         }//     },    //     data: data// },// { // 第二方块//     name: '',//     type: 'pie',//     zlevel: '-5',//     tooltip: {//         show: false,//     },//     radius: ['45%', '45%'],//     clockWise: false,//     hoverAnimation: false,//     itemStyle: {//         normal: {//             label: {//                 show: true,//                 position: 'outside',//                 color: 'transparent',//                 formatter: function(params) {//                     if(params.name !== '') {//                         return '';//                     }else {//                         return '';//                     }//                 },//                 rich: rich//             },//             labelLine: {//                 length:10,//                 length2:0,//                 show: true,//                 // smooth: true,//                 // color:'#00ffff',//                 lineStyle: {//                     width: 10,//                     type: 'dotted',//                     opacity: '0.5'//                 }//             }//         }//     },    //     data: data// },{ // 第三个    name: '',    type: 'pie',    tooltip: {        show: false,    },    zlevel: '-6',    radius: ['41%', '42%'],    clockWise: false,    hoverAnimation: false,    itemStyle: {        normal: {            color: '#00AEE5',            label: {                show: false,            },                    }    },    data: [0]},{ // 第四个    name: '',    type: 'pie',    tooltip: {        show: false,    },    zlevel: '-3',    radius: ['35%', '40%'],    clockWise: false,    hoverAnimation: false,    itemStyle: {        normal: {            color: '#F5FCFE',            label: {                show: false,            },                    }    },    data: [0]}, { // 第五个    name: '',    type: 'pie',    tooltip: {        show: false,    },    zlevel: '-3',    radius: ['34.5%', '35%'],    clockWise: false,    hoverAnimation: false,    itemStyle: {        normal: {            color: '#00AEE5',            label: {                show: false,            },                    }    },    data: [0]}];option = {    //  tooltip: {    //     show: true,    //     trigger: 'item',    //     formatter: "{b0} : {c0} ({c1})"    //     formatter: function(params) {    //         return                 //     }    // },    tooltip: {            trigger: 'item',            formatter: function(params) {                var res = params.name+'<br/>';                var myseries = option.series;                for (var i = 0; i < 1; i++) {                    for(var j=0;j<myseries[i].data.length;j++){                        if(myseries[i].data[j].name==params.name){                            res+='总条数: '+ myseries[i].data[j].value  + '</br>' + '总次数: ' +myseries[i].data[j].valueCopy+'</br>';                        }                    }                }                //  res+=params.name +' : '+params.value1+'</br>';                return res;            }        },     backgroundColor: '#fff',    // tooltip: {    //     show: false    // },    legend: {        show: false    },    toolbox: {        show: false    },    title: {        text: '1890',        left: '50%',        textAlign: 'center',        top: '45%',        textStyle:{            fontSize:60,            color: '#00b4ed',                    },        color: '#00b4ed',    },    series: seriesObj}