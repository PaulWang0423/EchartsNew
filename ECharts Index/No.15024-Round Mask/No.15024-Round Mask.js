
var data = [[10, 'ctrl'], [52, 'alt'], [200, 'esc'], [334, 'cmd'], [390, 'option'], [330, 'delete'], [220, 'shift']].map(function (entry, index) { 
    entry.unshift(index);
    return entry;
});


echarts.graphic.Mask = echarts.graphic.extendShape({

    type: 'mask',

    shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },

    buildPath: function (ctx, shape) {
        var height = shape.height;
        var width = shape.width;
        var x = shape.x;
        var y = shape.y;
        var cx = x + width / 2;
        var cy = y + height / 2;
        
        ctx.arc(cx, cy, width / 2, 0, Math.PI * 2, true);
        ctx.rect(x - 1, y - 1, width + 2, height + 2);
        ctx.closePath();
    }
});

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: 150,
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                aliganWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data: data
        },
        {
            type: 'custom',
            renderItem: function (params, api) {
                var xValue = api.value(0);
                var bandWidth = api.size([1, 0])[0] * 0.5;
                var x = api.coord([xValue, 0])[0] - bandWidth / 2;
                var y = params.coordSys.y + params.coordSys.height + 30;
                
                return {
                    type: 'group',
                    children: [{
                        type: 'mask',
                        shape: {
                            x: x,
                            y: y,
                            width: bandWidth,
                            height: bandWidth
                        },
                        style: {
                            fill: '#eee',
                            stroke: null
                        },
                        styleEmphasis: {
                            fill: '#eee',
                            text: api.value(2),
                            textPosition: 'bottom',
                            textFill: '#333'
                        },
                        z2: 10
                    }, {
                        type: 'image',
                        style: {
                            x: x,
                            y: y,
                            width: bandWidth,
                            height: bandWidth,
                            image: 'data:image/jpeg;base64,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'
                        }
                    }]
                }
            },
            encode: {
                tooltip: [2]
            },
            data: data
        }
    ]
};
