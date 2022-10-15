 
getBackgroundImage()

let angle = 0;//角度，用来做简单的动画效果的

option = {
    //backgroundColor: "transparent",
    title: {
        text: "你多久吃一次猪肉？",
        textStyle:{
            color:"white",
            fontSize:40
        },
        left:"center",
        top:480
        
    },
    legend: {
        type: "plain",
        orient: "vertical",
        right: 0,
        top: "10%",
        align: "auto",
        data: [{
            name: '涨价后没吃过',
            icon: "circle"
        }, {
            name: '天天吃',
            icon: "circle"
        }, {
            name: '三五天吃一次',
            icon: "circle"
        }, {
            name: '半个月吃一次',
            icon: "circle"
        }],
        textStyle: {
            color: "white",
            fontSize: 16,
            padding: [10, 1, 10, 0]
        },
        selectedMode:false
    },
    series: [{
            name: "ring4",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                        startAngle: (0+-angle) * Math.PI / 180,
                        endAngle: (90+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "rgb(255, 255, 255,0.2)",
                        fill: "transparent"
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                        startAngle: (180+-angle) * Math.PI / 180,
                        endAngle: (270+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "rgb(255, 255, 255,0.2)",
                        fill: "transparent"
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring4",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
                        r0: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.58
                    },
                    style: {
                        stroke: "transparent",
                        fill: new echarts.graphic.LinearGradient(0, 0.58, 0, 0.8, [{
                                // 0% 处的颜色   
                                offset: 0,
                                color: 'rgb(255, 255, 255,0.1)'
                            },
                            {
                                // 100% 处的颜色
                                offset: 1,
                                color: 'transparent'
                            }
                        ]),
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                        startAngle: (0+angle) * Math.PI / 180,
                        endAngle: (90+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#086d9f",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                        startAngle: (180+angle) * Math.PI / 180,
                        endAngle: (270+angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#086d9f",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (270+-angle) * Math.PI / 180,
                        endAngle: (40+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#883d20",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                        startAngle: (90+-angle) * Math.PI / 180,
                        endAngle: (220+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#883d20",
                        fill: "transparent",
                        lineWidth: 1.5
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (90+-angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4
                    },
                    style: {
                        stroke: "#883d20",
                        fill: "#883d20"
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                let point = getCirlPoint(x0, y0, r, (270+-angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 4
                    },
                    style: {
                        stroke: "#883d20",
                        fill: "#883d20"
                    },
                    silent: true
                };
            },
            data: [0]
        }, {
            name: '吃猪肉频率',
            type: 'pie',
            radius: ['58%', '45%'],
            avoidLabelOverlap: false,
            color: ["#0066ff", "#ff9c00", "#00fcff", "#00bc73", "#f33887", "#5e66ff", "#f0d700"],
            label: {
                show: false
            },
            data: [{
                    value: 34.98,
                    name: '涨价后没吃过'
                },
                {
                    value: 26.48,
                    name: '天天吃'
                },
                {
                    value: 22.17,
                    name: '三五天吃一次'
                },
                {
                    value: 16.37,
                    name: '半个月吃一次'
                }
            ],
            silent: true
        },
        {
            name: "ring1",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.37
                    },
                    style: {
                        stroke: "rgba(255,255,255,0.4)",
                        fill: "transparent"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['36%', '32%'],
            avoidLabelOverlap: false,
            color: ["#0066ff", "#ff9c00", "#00fcff", "#00bc73", "#f33887", "#5e66ff", "#f0d700"],
            label: {
                show: false
            },
            data: [{
                    value: 34.98,
                    name: '涨价后没吃过',
                    
                },
                {
                    value: 26.48,
                    name: '天天吃',
                    
                },
                {
                    value: 22.17,
                    name: '三五天吃一次',
                    
                },
                {
                    value: 16.37,
                    name: '半个月吃一次',
                   
                }
            ],
            silent: true
        },
        {
            name: "ring2",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.30
                    },
                    style: {
                        stroke: "#0885b5",
                        fill: "transparent",
                        lineWidth: 2,
                        lineDash: [15, 10]
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring3",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.28
                    },
                    style: {
                        stroke: "rgba(16, 81, 167,.5)",
                        fill: "transparent"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        {
            name: "ring4",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'ring',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.2
                    },
                    style: {
                        stroke: "#873c20",
                        fill: "transparent",
                        //shadowColor:"#ddd",
                        //shadowOffsetX:0,
                        //shadowBlur:4
                    },
                    silent: true
                };
            },
            data: [0]
        }
    ]
};

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
        x: x1,
        y: y1
    }
}


//设置背景图片
function getBackgroundImage() {
    let panel = document.getElementById("chart-panel")
    let bgImgSrc = "http://mmbiz.qpic.cn/mmbiz_jpg/Dok7nZmAqMZE7UEFnJWTPnViaZfKicib7oTvHO0D7s1lc6GUazVjKLN7icfoX7qWZy4Nqo26iblnDSV5KhV9Nc1MianA/0?wx_fmt=jpeg";
    panel.style.backgroundImage = "url(" + bgImgSrc + ")";
    panel.style.backgroundSize = "cover";
}

//随机数生成
function random(m, n) {
    return Math.floor(Math.random() * (m - n) + n);
}


function draw(){
    angle = angle+3
    myChart.setOption(option, true)
   //window.requestAnimationFrame(draw);
}
//draw()

setInterval(function() {
    //用setInterval做动画感觉有问题
    draw()
}, 100);
