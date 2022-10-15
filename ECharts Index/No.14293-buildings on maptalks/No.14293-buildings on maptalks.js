myChart.showLoading();
$.getJSON('/asset/get/s/data-1502362944712-r1FBphYv-.json', function(buildingsGeoJSON) {
    echarts.registerMap('buildings', buildingsGeoJSON);
    myChart.hideLoading();
    var regionsData = buildingsGeoJSON.features.map(function(feature) {
        return {
            name: feature.properties.name,
            value: feature.properties.height,
            height: +feature.properties.height * 10 + 0.1
        };
    });
    myChart.setOption({
        visualMap: {
            show: false,
            min: 0.4,
            max: 10,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        maptalks3D: {
            center: [108.95346, 34.24],
            zoom: 14,
            pitch: 50,
            bearing: -10,
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    intensity: 1.3,
                    radius: 5,
                    quality: 'low'
                },
                depthOfField: {
                    enable: true,
                    blurRadius: 4,
                    focalDistance: 90,
                    quality: 'low'
                }
            },
            light: {
                main: {
                    intensity: 3,
                    alpha: -40,
                    shadow: true,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0.
                },
                ambientCubemap: {
                    texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 1
                }
            }
        },
        series: [{
            type: 'map3D',
            coordinateSystem: 'maptalks3D',
            map: 'buildings',
            data: regionsData,
            shading: 'lambert',
            instancing: true,
            silent: true,
            itemStyle: {
                areaColor: '#fff'
            },
            realisticMaterial: {
                metalness: 0,
                roughness: 0.0
            }
        }]
    });


});


window.addEventListener('resize', function() {
    myChart.resize();
});