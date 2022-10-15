/*************************
pie3D 尝试

更新时间: 2020.10.8 17:12 v1.1
使用组件: grid3D、xAxis3D、yAxis3D、zAxis3D、surface
 EC 版本: 4.8.0
 GL 版本：0.4.3
根据用户ZhXand618的模板克隆
如果转载: 请注明出处

*************************
【 getParametricEquation 函数说明 】 :
*************************
    根据传入的
    startRatio（浮点数）: 当前扇形起始比例，取值区间 [0, endRatio)
    endRatio（浮点数）: 当前扇形结束比例，取值区间 (startRatio, 1]
    isSelected（布尔值）:是否选中，效果参照二维饼图选中效果（单选）
    isHovered（布尔值）: 是否放大，效果接近二维饼图高亮（放大）效果（未能实现阴影）
    k（0~1之间的浮点数）：用于参数方程的一个参数，取值 0~1 之间，通过「内径/外径」的值换算而来。
    
    生成 3D 扇形环曲面

*************************
【 getPie3D 函数说明 】 :
*************************
    根据传入的
    pieData（object）：饼图数据
    internalDiameterRatio（0~1之间的浮点数）：内径/外径的值（默认值 1/2），当该值等于 0 时，为普通饼图
    
    生成模拟 3D 饼图的配置项 option
    
    备注：饼图数据格式示意如下
    [{
        name: '数据1',
        value: 10
    }, {
        // 数据项名称
        name: '数据2',
        value : 56,
        itemStyle:{
            // 透明度
            opacity: 0.5,
            // 扇形颜色
            color: 'green'
        }
    }]
    
*************************
【 鼠标事件监听说明 】 :
*************************
    click： 实现饼图的选中效果（单选）
            大致思路是，通过监听点击事件，获取到被点击数据的系列序号 params.seriesIndex，
            然后将对应扇形向外/向内移动 10% 的距离。
            
    mouseover： 近似实现饼图的高亮（放大）效果
            大致思路是，在饼图外部套一层透明的圆环，然后监听 mouseover 事件，获取
            到对应数据的系列序号 params.seriesIndex 或系列名称 params.seriesName，
            如果鼠标移到了扇形上，则先取消高亮之前的扇形（如果有）,再高亮当前扇形；
            如果鼠标移到了透明圆环上，则只取消高亮之前的扇形（如果有），不做任何高亮。
            
    globalout： 当鼠标移动过快，直接划出图表区域时，有可能监听不到透明圆环的 mouseover，
            导致此前高亮没能取消，所以补充了对 globalout 的监听。

        
*************************/

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {

    // 计算
    let midRatio = (startRatio + endRatio) / 2;

    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;

    // 如果只有一个扇形，则不实现选中效果。
    if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
    }

    // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
    k = typeof k !== 'undefined' ? k : 1 / 3;

    // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
    let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
    let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

    // 计算高亮效果的放大比例（未高亮，则比例为 1）
    let hoverRate = isHovered ? 1.05 : 1;

    // 返回曲面参数方程
    return {

        u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32
        },

        v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
        },

        x: function(u, v) {
            if (u < startRadian) {
                return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },

        y: function(u, v) {
            if (u < startRadian) {
                return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },

        z: function(u, v) {
            if (u < -Math.PI * 0.5) {
                return Math.sin(u);
            }
            if (u > Math.PI * 2.5) {
                return Math.sin(u) * h * .1;
            }
            return Math.sin(v) > 0 ? 1 * h * .1 : -1;
        }
    };
}

// 生成模拟 3D 饼图的配置项
function getPie3D(pieData, internalDiameterRatio) {

    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let legendData = [];
    let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3;

    // 为每一个饼图数据，生成一个 series-surface 配置
    for (let i = 0; i < pieData.length; i++) {

        sumValue += pieData[i].value;

        let seriesItem = {
            name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
            type: 'surface',
            parametric: true,
            wireframe: {
                show: false
            },
            pieData: pieData[i],
            pieStatus: {
                selected: false,
                hovered: false,
                k: k
            }
        };

        if (typeof pieData[i].itemStyle != 'undefined') {

            let itemStyle = {};

            typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
            typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

            seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
    }

    // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
    // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
    for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;

        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k, series[i].pieData.value);

        startValue = endValue;

        legendData.push(series[i].name);
    }

    // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
    series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
            show: false
        },
        itemStyle: {
            opacity: 0
        },
        parametricEquation: {
            u: {
                min: 0,
                max: Math.PI * 2,
                step: Math.PI / 20
            },
            v: {
                min: 0,
                max: Math.PI,
                step: Math.PI / 20
            },
            x: function(u, v) {
                return Math.sin(v) * Math.sin(u) + Math.sin(u);
            },
            y: function(u, v) {
                return Math.sin(v) * Math.cos(u) + Math.cos(u);
            },
            z: function(u, v) {
                return Math.cos(v) > 0 ? 0.1 : -0.1;
            }
        }
    });

    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    let option = {
        //animation: false,
        legend: {
            data: legendData
        },
        tooltip: {
            formatter: params => {
                if (params.seriesName !== 'mouseoutSeries') {
                    return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}`;
                }
            }
        },
        xAxis3D: {
            min: -1,
            max: 1
        },
        yAxis3D: {
            min: -1,
            max: 1
        },
        zAxis3D: {
            min: -1,
            max: 1
        },
        grid3D: {
            show: false,
            boxHeight: 10,
            viewControl: {//3d效果可以放大、旋转等，请自己去查看官方配置
                alpha: 40,
                // beta: 40,
                rotateSensitivity: 0,
                zoomSensitivity: 0,
                panSensitivity: 0,
                autoRotate: false
            },
            //后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
            postEffect: {//配置这项会出现锯齿，请自己去查看官方配置有办法解决 
                enable: true,
                bloom: {
                    enable: true,
                    bloomIntensity: 0.1
                },
                SSAO: {
                    enable: true,
                    quality: 'medium',
                    radius: 2
                }
            }
        },
        series: series
    };
    return option;
}

// 传入数据生成 option
option = getPie3D([{
    name: 'cc',
    value: 37,
    itemStyle: {
        color: '#f77b66'
    }
}, {
    name: 'aa',
    value: 44,
    itemStyle: {
        color: '#3edce0',
    }
}, {
    name: 'bb',
    value: 32,
    itemStyle: {
        color: '#f94e76'
    }
}, {
    name: 'ee',
    value: 16,
    itemStyle: {
        color: '#018ef1'
    }
}, {
    name: 'dd',
    value: 23,
    itemStyle: {
        color: '#9e60f9'
    }
}], 0.59);


// 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
let selectedIndex = '';
let hoveredIndex = '';

// 监听点击事件，实现选中效果（单选）
myChart.on('click', function(params) {
    // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
    let isSelected = !option.series[params.seriesIndex].pieStatus.selected;
    let isHovered = option.series[params.seriesIndex].pieStatus.hovered;
    let k = option.series[params.seriesIndex].pieStatus.k;
    let startRatio = option.series[params.seriesIndex].pieData.startRatio;
    let endRatio = option.series[params.seriesIndex].pieData.endRatio;


    // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
    if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
        option.series[selectedIndex].parametricEquation = getParametricEquation(option.series[selectedIndex].pieData.startRatio, option.series[selectedIndex].pieData.endRatio, false, false, k, option.series[selectedIndex].pieData.value);
        option.series[selectedIndex].pieStatus.selected = false;
    }

    // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
    option.series[params.seriesIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[selectedIndex].pieData.value);
    option.series[params.seriesIndex].pieStatus.selected = isSelected;

    // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
    isSelected ? selectedIndex = params.seriesIndex : null;

    // 使用更新后的 option，渲染图表
    myChart.setOption(option);
});

// 监听 mouseover，近似实现高亮（放大）效果
myChart.on('mouseover', function(params) {

    // 准备重新渲染扇形所需的参数
    let isSelected;
    let isHovered;
    let startRatio;
    let endRatio;
    let k;

    // 如果触发 mouseover 的扇形当前已高亮，则不做操作
    if (hoveredIndex === params.seriesIndex) {
        return;

        // 否则进行高亮及必要的取消高亮操作
    } else {

        // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
        if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
            isSelected = option.series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            startRatio = option.series[hoveredIndex].pieData.startRatio;
            endRatio = option.series[hoveredIndex].pieData.endRatio;
            k = option.series[hoveredIndex].pieStatus.k;

            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            option.series[hoveredIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[hoveredIndex].pieData.value);
            option.series[hoveredIndex].pieStatus.hovered = isHovered;

            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = '';
        }

        // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
        if (params.seriesName !== 'mouseoutSeries') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected = option.series[params.seriesIndex].pieStatus.selected;
            isHovered = true;
            startRatio = option.series[params.seriesIndex].pieData.startRatio;
            endRatio = option.series[params.seriesIndex].pieData.endRatio;
            k = option.series[params.seriesIndex].pieStatus.k;

            // 对当前点击的扇形，执行高亮操作（对 option 更新）
            option.series[params.seriesIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[params.seriesIndex].pieData.value + 5);
            option.series[params.seriesIndex].pieStatus.hovered = isHovered;

            // 记录上次高亮的扇形对应的系列号 seriesIndex
            hoveredIndex = params.seriesIndex;
        }

        // 使用更新后的 option，渲染图表
        myChart.setOption(option);
    }
});

// 修正取消高亮失败的 bug
myChart.on('globalout', function() {


    if (hoveredIndex !== '') {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
        isSelected = option.series[hoveredIndex].pieStatus.selected;
        isHovered = false;
        k = option.series[hoveredIndex].pieStatus.k;
        startRatio = option.series[hoveredIndex].pieData.startRatio;
        endRatio = option.series[hoveredIndex].pieData.endRatio;

        // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
        option.series[hoveredIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[hoveredIndex].pieData.value);
        option.series[hoveredIndex].pieStatus.hovered = isHovered;

        // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
        hoveredIndex = '';
    }

    // 使用更新后的 option，渲染图表
    myChart.setOption(option);
});