// var uploadedDataURL = "/asset/get/s/data-1555323032699-byXK6EYDs.png";
// var uploadedDataURL = "/asset/get/s/data-1555323013467-soKfGBDiV.png";
//下面这几个值可以根据项目的实际情况来
var predictEVFVC = "0.0";
var predictFEV1 = "3.78";
var predictFEV1FVC = "80.37";
var predictFVC = "4.52";
var predictMEF25 = "2.27";
var predictMEF50 = "5.14";
var predictMEF75 = "8.04";
var predictMMEF7525 = "4.48";
var predictPEF = "9.32";

option = {
    legend: {
        show: true,
        orient: 'vertical',
        right: 20,
        top: 50,
        itemGap: 4,
        selected: true,
        data: [
            {
                name:'之前',
                icon:'line',
                //icon自定义为图片，因为icon提供的满足不了项目，也可以设置不同颜色
                icon:'image://asset/get/s/data-1555323032699-byXK6EYDs.png'
            },
            {
                name:'之后1',
                icon:'line',
                //icon自定义为图片，因为icon提供的满足不了项目，也可以设置不同颜色
                icon:'image://asset/get/s/data-1555323013467-soKfGBDiV.png'
            },
            {
                name:'之后2',
                icon:'line',
                //icon自定义为图片，因为icon提供的满足不了项目，也可以设置不同颜色
                icon:'image://asset/get/s/data-1555323013467-soKfGBDiV.png'
            }
        ]
    },
    xAxis: {
        min: '0',
        max: '8',
        splitNumber: 8,
        name: '容积(L)',
        position: 'bottom',
        nameGap: 5, //轴名字距离轴距离
        splitLine: {
            show: false,
        },
        axisLabel: {
            showMinLabel: false,
            showMaxLabel: false,
            //如果图表高度固定的话可以设置一个的固定值显示在零刻度线下面
            margin:'-150',
        },
        axisTick: {
            show: true,
            inside: true,
        },
        interval: 1,
        show: true,
    },
    grid: {
        right: '10%',
    },
    yAxis: {
        min: '15',
        max: '-9',
        axisLabel: {
            showMinLabel: false,
            showMaxLabel: false
        },
        splitNumber: 10,
        axisTick: {
            show: true,
            inside: true
        },
        name: '流速(L/S)',
        splitLine: {
            show: false
        },
        show: true,
    },
    series: predictFVC > 0 ? [
        {
            type: 'line',
            smooth: false,
            animation: false, //绘制线的动画
            symbol: 'none',
            data: [
                [0, predictPEF],
                [9, predictPEF]
            ],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#333333',
                        width: 1,
                        type: 'dotted'
                    }
                }
            },
            markPoint: {
                label: {
                    color: '#000',
                },
                itemStyle: {
                    color: 'transparent'
                },
                data: [{
                    xAxis: 8,
                    yAxis: predictPEF,
                    value: 'PEF',
                    symbolOffset: [-13, 35], //置单个点位置移动情况 向右，下
                }]
            }
        },
        {
            type: 'line',
            symbol: 'circle', //设定为实心点
            symbolSize: 4, //设定实心点的大小
            hoverAnimation: false,
            animation: false, //绘制线的动画
            color: '#333333', //设置点的颜色                  
            data: [
                [0, 0],
                [Number(predictFVC) / 4, predictMEF75],
                [Number(predictFVC) / 2, predictMEF50],
                [Number(predictFVC) / 4 * 3, predictMEF25],
                [Number(predictFVC), 0],
            ],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#333333', //设置线的颜色
                        width: 1,
                        type: 'dotted'
                    }
                }
            },
            markPoint: {
                label: {
                    color: '#000',
                    position: [20, 38], //设置全部点位置移动情况右，下
                    // 下面两个属性单独给点设置显示样式，formatter没法处理html标签字符串所以用的rich，这里整体用symbol+矢量图标也能达到这一效果
                    formatter:function(e){
                        if(e.data.value.indexOf('MEF')!=-1){
                            return '{gray|MEF}{green|'+e.data.value.split('MEF')[1] +'%}';
                        }else{
                            return e.data.value
                        }
                    },
                    rich: {
                        gray: {
                            color:'red',  
                            fontSize:'12'
                        },
                        green: {
                            color:'green',  
                            fontSize:'8',
                            padding:[-4, 0, 0, 3]
                        }
                    }
                    
                },
                itemStyle: {
                    color: 'transparent'
                },
                data: [{
                        xAxis: Number(predictFVC) / 4,
                        yAxis: predictMEF75,
                        value: 'MEF75',
                    },
                    {
                        xAxis: Number(predictFVC) / 2,
                        yAxis: predictMEF50,
                        value: 'MEF50',
                    },
                    {
                        xAxis: Number(predictFVC) / 4 * 3,
                        yAxis: predictMEF25,
                        value: 'MEF25',
                    },
                    {
                        xAxis: predictFVC,
                        yAxis: 0,
                        value: 'FVC',
                        symbolOffset: [0, -5], //置单个点位置移动情况 向右，下
                    },
                ]
            },
        },
        {
            name:'之前',
            type: 'line',
            smooth: true,
            symbol:'none',
            data:[[3.909,0.0],[3.905,-0.25],[3.896,-0.216],[3.889,-0.2],[3.88,-0.216],[3.872,-0.183],[3.87,-0.133],[3.87,0.0],[3.87,0.1],[3.87,0.083],[3.87,-0.05],[3.87,-0.066],[3.87,0.05],[3.87,-0.1],[3.87,-0.116],[3.87,-0.116],[3.87,0.0],[3.87,0.083],[3.87,0.083],[3.87,0.0],[3.87,0.05],[3.87,0.05],[3.87,0.05],[3.87,0.0],[3.87,0.05],[3.87,-0.05],[3.865,-0.283],[3.847,-0.616],[3.792,-1.283],[3.731,-1.683],[3.659,-1.9],[3.581,-2.033],[3.499,-2.05],[3.414,-2.166],[3.325,-2.3],[3.231,-2.366],[3.136,-2.4],[3.039,-2.433],[2.942,-2.416],[2.845,-2.433],[2.746,-2.483],[2.648,-2.433],[2.549,-2.466],[2.451,-2.4],[2.355,-2.5],[2.258,-2.416],[2.162,-2.383],[2.066,-2.383],[1.972,-2.35],[1.88,-2.333],[1.784,-2.416],[1.687,-2.416],[1.59,-2.433],[1.494,-2.4],[1.398,-2.416],[1.302,-2.366],[1.209,-2.333],[1.114,-2.383],[1.019,-2.4],[0.924,-2.383],[0.828,-2.366],[0.734,-2.283],[0.646,-2.183],[0.56,-2.1],[0.479,-1.966],[0.402,-1.816],[0.335,-1.566],[0.279,-1.25],[0.235,-1.0],[0.199,-0.8],[0.17,-0.733],[0.14,-0.75],[0.114,-0.483],[0.106,0.05],[0.106,0.0],[0.106,0.066],[0.108,0.15],[0.114,0.133],[0.113,-0.133],[0.11,-0.066],[0.11,0.083],[0.111,0.116],[0.117,0.166],[0.12,0.05],[0.12,0.0],[0.116,-0.15],[0.112,-0.083],[0.112,0.083],[0.112,0.066],[0.112,0.0],[0.112,-0.083],[0.109,-0.15],[0.101,-0.25],[0.091,-0.25],[0.085,-0.1],[0.085,-0.1],[0.078,-0.183],[0.077,-0.066],[0.077,-0.05],[0.075,-0.216],[0.06,-0.45],[0.039,-0.566],[0.019,-0.466],[0.003,-0.266],[0.004,0.116],[0.004,0.066],[0.005,0.066],[0.0,-0.116],[0.003,0.116],[0.003,0.0],[0.004,0.083],[0.004,-0.05],[0.006,0.116],[0.006,0.0],[0.009,0.116],[0.009,-0.066],[0.01,0.116],[0.015,0.116],[0.015,0.083],[0.015,0.0],[0.015,0.0],[0.015,0.0],[0.015,0.0],[0.015,0.0],[0.015,0.05],[0.015,0.05],[0.015,0.0],[0.015,0.0],[0.015,0.05],[0.015,0.05],[0.015,0.066],[0.015,0.083],[0.015,0.0],[0.015,-0.05],[0.015,-0.116],[0.009,-0.183],[0.01,0.3],[0.13,4.033],[0.372,7.466],[0.706,8.883],[1.067,9.0],[1.415,8.466],[1.745,8.033],[2.039,6.75],[2.272,5.35],[2.467,4.6],[2.635,3.95],[2.785,3.55],[2.917,3.15],[3.034,2.7],[3.136,2.433],[3.227,2.183],[3.308,1.883],[3.38,1.716],[3.445,1.566],[3.506,1.45],[3.562,1.35],[3.614,1.25],[3.661,1.116],[3.703,1.033],[3.743,0.95],[3.78,0.916],[3.815,0.833],[3.847,0.733],[3.873,0.6],[3.897,0.6],[3.92,0.566],[3.942,0.533],[3.962,0.466],[3.979,0.416],[3.995,0.4],[4.009,0.266],[4.015,0.066],[4.016,0.0],[4.018,0.083],[4.021,0.066],[4.02,-0.083],[4.015,-0.1],[4.014,0.05],[4.016,0.0],[4.017,0.05],[4.018,0.05],[4.02,0.05],[4.022,0.05],[4.023,0.0],[4.025,0.05]],//要渲染的坐标
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#333333',
                        width: 2,
                    }  
                }  
            },
            markPoint: {
                data: [
                    {
                        type: 'max', 
                        // name: '最大值',
                        valueIndex:1,//0代表y最大.1代表x最大
                        symbol:'triangle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                        symbolSize:[20,18],
                        itemStyle:{
                            color: 'rgba(0, 0, 0, 0.0)',
                            borderColor:'#000000',
                            borderWidth:'1',
                        },
                        label:{
                            show:false
                        }
                    }
                    
                ]
            }
        },
        {
            name:'之后1',
            type: 'line',
            smooth: true,
            symbol:'none',
            data:[[3.539,0.0],[3.536,-0.066],[3.536,0.0],[3.533,-0.116],[3.527,-0.133],[3.527,0.083],[3.53,0.066],[3.527,-0.15],[3.519,-0.25],[3.508,-0.266],[3.497,-0.25],[3.487,-0.266],[3.477,-0.266],[3.47,0.0],[3.47,-0.066],[3.47,0.1],[3.47,0.066],[3.47,-0.083],[3.47,-0.1],[3.47,0.0],[3.47,0.0],[3.47,-0.066],[3.47,-0.116],[3.463,-0.3],[3.447,-0.466],[3.425,-0.616],[3.391,-0.9],[3.347,-1.283],[3.285,-1.766],[3.203,-2.2],[3.109,-2.433],[3.011,-2.383],[2.915,-2.4],[2.819,-2.4],[2.723,-2.433],[2.624,-2.45],[2.527,-2.383],[2.428,-2.433],[2.331,-2.45],[2.233,-2.416],[2.136,-2.433],[2.037,-2.45],[1.94,-2.433],[1.843,-2.4],[1.747,-2.383],[1.65,-2.45],[1.552,-2.516],[1.453,-2.516],[1.355,-2.416],[1.259,-2.416],[1.162,-2.4],[1.067,-2.366],[0.976,-2.25],[0.884,-2.35],[0.789,-2.366],[0.695,-2.333],[0.603,-2.266],[0.515,-2.2],[0.43,-2.083],[0.348,-1.966],[0.274,-1.733],[0.209,-1.55],[0.151,-1.333],[0.105,-0.966],[0.074,-0.6],[0.057,-0.333],[0.048,-0.166],[0.041,-0.183],[0.033,-0.25],[0.02,-0.35],[0.009,-0.183],[0.008,-0.116],[0.001,-0.15],[0.0,0.05],[0.0,-0.083],[0.0,0.066],[0.0,0.066],[0.01,0.466],[0.098,2.983],[0.274,5.566],[0.539,7.166],[0.835,7.483],[1.138,7.633],[1.446,7.833],[1.757,7.616],[2.044,6.766],[2.275,5.183],[2.466,4.55],[2.643,4.266],[2.805,3.833],[2.95,3.45],[3.076,2.883],[3.183,2.516],[3.276,2.166],[3.355,1.85],[3.424,1.616],[3.485,1.433],[3.537,1.25],[3.585,1.15],[3.629,1.05],[3.67,1.016],[3.709,0.95],[3.747,0.9],[3.78,0.8],[3.811,0.75],[3.84,0.7],[3.867,0.633],[3.891,0.566],[3.911,0.466],[3.927,0.35],[3.94,0.3],[3.95,0.216],[3.959,0.266],[3.971,0.283],[3.982,0.3],[3.994,0.283],[4.005,0.233],[4.013,0.15],[4.018,0.15],[4.026,0.2],[4.033,0.166],[4.038,0.083],[4.042,0.116],[4.047,0.1],[4.048,0.0],[4.049,0.05],[4.05,0.0],[4.053,0.133],[4.059,0.15],[4.064,0.116],[4.068,0.066],[4.068,-0.05],[4.067,0.0],[4.067,0.0],[4.067,0.05],[4.069,0.0],[4.07,0.05],[4.071,0.0],[4.071,0.0],[4.071,0.0],[4.071,0.0],[4.071,0.0],[4.067,-0.25],[4.058,-0.216],[4.051,-0.2],[4.042,-0.216],[4.034,-0.183],[4.032,-0.133],[4.032,0.0],[4.032,0.1],[4.032,0.083],[4.032,-0.05],[4.032,-0.066],[4.032,0.05],[4.032,-0.1],[4.032,-0.116],[4.032,-0.116],[4.032,0.0],[4.032,0.083],[4.032,0.083],[4.032,0.0],[4.032,0.05],[4.032,0.05],[4.032,0.05],[4.032,0.0],[4.032,0.05],[4.032,-0.05],[4.027,-0.283],[4.009,-0.616],[3.954,-1.283],[3.893,-1.683],[3.821,-1.9],[3.743,-2.033],[3.661,-2.05],[3.576,-2.166],[3.487,-2.3],[3.393,-2.366],[3.298,-2.4],[3.201,-2.433],[3.104,-2.416],[3.007,-2.433],[2.908,-2.483],[2.81,-2.433],[2.711,-2.466],[2.613,-2.4],[2.517,-2.5],[2.42,-2.416],[2.324,-2.383],[2.228,-2.383],[2.134,-2.35],[2.042,-2.333],[1.946,-2.416],[1.849,-2.416],[1.752,-2.433],[1.656,-2.4],[1.56,-2.416],[1.464,-2.366],[1.371,-2.333],[1.276,-2.383],[1.181,-2.4],[1.086,-2.383],[0.99,-2.366],[0.896,-2.283],[0.808,-2.183],[0.722,-2.1],[0.641,-1.966],[0.564,-1.816],[0.497,-1.566],[0.441,-1.25],[0.397,-1.0],[0.361,-0.8],[0.332,-0.733],[0.302,-0.75],[0.276,0.0]],
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#333333',
                        width: 1,
                    }  
                }  
            },
            markPoint: {
                data: [
                    {
                        type: 'max',
                        name: '最小值',
                        valueIndex:1,//0代表y最大.1代表x最大
                        symbol:'circle',
                        symbolSize:[18,18],
                        itemStyle:{
                            color: 'rgba(0, 0, 0, 0.0)',
                            borderColor:'#333333',
                            borderWidth:'1',
                        },
                        label:{
                            show:false
                        }
                        // symbol:'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
                    }
                ]
            }
        },
        {
            name:'之后2',
            type: 'line',
            smooth: true,
            symbol:'none',
            data:[[2.631,-0.1],[2.625,-0.3],[2.606,-0.6],[2.563,-1.0],[2.516,-1.35],[2.449,-1.933],[2.358,-2.383],[2.251,-2.9],[2.127,-3.266],[1.99,-3.483],[1.851,-3.45],[1.713,-3.466],[1.574,-3.483],[1.436,-3.4],[1.302,-3.3],[1.172,-3.183],[1.048,-3.033],[0.932,-2.8],[0.825,-2.616],[0.724,-2.483],[0.627,-2.366],[0.529,-2.383],[0.437,-2.25],[0.35,-2.083],[0.269,-2.0],[0.192,-1.833],[0.125,-1.5],[0.073,-1.15],[0.035,-0.75],[0.016,-0.266],[0.013,-0.183],[0.003,-0.166],[0.003,0.083],[0.003,0.083],[0.003,-0.05],[0.0,-0.066],[0.006,0.216],[0.012,0.05],[0.013,0.116],[0.022,0.283],[0.033,0.283],[0.048,0.433],[0.076,0.466],[0.103,0.95],[0.162,2.083],[0.292,4.15],[0.491,5.466],[0.716,5.65],[0.936,5.316],[1.137,4.783],[1.317,4.283],[1.477,3.8],[1.622,3.466],[1.754,3.233],[1.878,2.966],[1.992,2.716],[2.094,2.416],[2.185,2.2],[2.269,2.0],[2.347,1.883],[2.421,1.816],[2.493,1.816],[2.563,1.666],[2.626,1.5],[2.682,1.35],[2.735,1.283],[2.786,1.266],[2.835,1.216],[2.883,1.166],[2.93,1.15],[2.975,1.1],[3.016,0.983],[3.054,0.933],[3.091,0.916],[3.125,0.783],[3.151,0.566],[3.171,0.45],[3.189,0.45],[3.206,0.45],[3.225,0.466],[3.243,0.45],[3.26,0.416],[3.277,0.416],[3.293,0.416],[3.309,0.416],[3.326,0.4],[3.342,0.383],[3.357,0.4],[3.373,0.383],[3.385,0.266],[3.394,0.183],[3.401,0.166],[3.408,0.2],[3.416,0.2],[3.423,0.133],[3.428,0.1],[3.431,0.083],[3.434,0.083],[3.438,0.083],[3.44,0.066],[3.443,0.066],[3.445,0.066],[3.448,0.066],[3.45,0.05],[3.453,0.066],[3.455,0.05],[3.457,0.066],[3.46,0.066],[3.462,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.05],[3.465,0.066],[3.465,0.083],[3.465,0.066],[3.465,0.066],[3.465,0.083],[3.465,0.083],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.05],[3.465,0.05],[3.465,0.066],[3.465,0.05],[3.465,0.05],[3.465,0.05],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.05],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.083],[3.465,0.083],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.083],[3.465,0.083],[3.465,0.066],[3.465,0.083],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.083],[3.465,0.066],[3.465,0.05],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.05],[3.465,0.05],[3.465,0.066],[3.465,0.066],[3.465,0.066],[3.465,0.05],[3.465,0.066],[3.465,0.05],[3.465,0.066],[3.465,0.05],[3.465,0.05],[3.465,0.05],[3.465,0.05],[3.465,-0.083],[3.455,-0.433],[3.396,-1.25],[3.331,-1.933],[3.24,-2.483],[3.122,-3.416],[2.967,-4.15],[2.791,-4.566],[2.601,-4.85],[2.406,-4.883],[2.21,-4.883],[2.019,-4.666],[1.835,-4.516],[1.66,-4.283],[1.494,-4.0],[1.339,-3.75],[1.197,-3.35],[1.071,-3.0],[0.961,-2.516],[0.872,-1.9],[0.812,0.0]],
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#333333',
                        width: 1,
                    }  
                }  
            },
            markPoint: {
                data: [
                    {
                        type: 'max',
                        name: '最小值',
                        valueIndex:1,//0代表y最大.1代表x最大
                        symbol:'circle',
                        symbolSize:[18,18],
                        itemStyle:{
                            color: 'rgba(0, 0, 0, 0.0)',
                            borderColor:'#333333',
                            borderWidth:'1',
                        },
                        label:{
                            show:false
                        }
                        // symbol:'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
                    }
                ]
            }
        }
    ] : []
};