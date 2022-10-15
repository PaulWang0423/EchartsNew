option = {
    backgroundColor: '#051b4a',
    // geo3D: { map: 'china' },
    geo: {
        show: true,
        map: 'china',
        label: {
			show: true,
			color: 'white',         // 地图上标签的颜色
			fontWeight: 'bold',    //  字体粗细
			fontSize:14,           // 字体大小
			emphasis: {
				color: '#ff0',     // 鼠标选中后的颜色
				show: false
			}
		},
        roam: true,
        zoom: 1,
        center: [106, 34],
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
        series:         //柱状图
        {    
            type: "bar",
            coordinateSystem: 'geo',
            data: [],
        }
    }
}
myChart.setOption(option);
    
