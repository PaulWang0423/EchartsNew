var canvas = document.createElement('canvas');
var mapChart = echarts.init(canvas, null, {
    width: 2048,
    height: 1024
});

mapChart.setOption({
    backgroundColor: '#fff',
    tooltip: {
        show: true
    },
    geo: {
        type: 'map',
        map: 'china',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [[-180, 90], [180, -90]],
        silent: true,
        roam: true,
        selectedMode: 'single',
        zoom: 1,
        itemStyle: {
            normal: {
                borderColor: 'cyan'
            }
        },
        label: {
            normal: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            }
        }
    }
});
option = {
    globe: {
        baseTexture: mapChart,
        heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',
    
        displacementScale: 0.1,
    
        shading: 'realistic',
        realisticMaterial: {
            roughness: 0.8,
            metalness: 0
        },
    
        postEffect: {
            enable: true
        },
        temporalSuperSampling: {
            enable: true
        },
        light: {
            ambient: {
                intensity: 0
            },
            main: {
                intensity: 2,
                shadow: true
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1491837984109-r1u7NmY6e.hdr',
                exposure: 1,
                diffuseIntensity: 0.2
            }
        },
        viewControl: {
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            targetCoord: [116.46, 39.92],
            autoRotate: false
        }
    },
    series: []
};

var regions = mapChart.getModel().getComponent('geo').coordinateSystem.regions;

setInterval(function () {
    var region = regions[Math.round(Math.random() * (regions.length - 1))];
    myChart.setOption({
        title: {
            left: 'center',
            top: 'center',
            text: region.name,
            textStyle: {
                fontSize: 10
            }
        },
        globe: {
            viewControl: {
                targetCoord: region.center
            }
        }
    });
    mapChart.setOption({
        geo: {
            regions: [{
                name: region.name,
                itemStyle: {
                    normal: {
                        areaColor: '#3ebcbc'
                    }
                }
            }]
        }
    })
}, 2000);