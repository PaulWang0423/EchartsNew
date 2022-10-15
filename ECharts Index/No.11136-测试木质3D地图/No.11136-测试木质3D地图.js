mapboxgl.accessToken = mapboxglToken;

$.getJSON('/asset/get/s/data-1491899618649-rysySf5ae.json', function (data) {
    var regionData = data.map(function (item) {
        return {
            name: item[0],
            height: item[1] + 1
        }
    })
    option = {
        mapbox: {
            zoom: 2,
            center: [0, 0],
            style: 'mapbox://styles/mapbox/light-v9',
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 5,
                    intensity: 1.5,
                    quality: 'high'
                }
            },
            altitudeScale: 1e5,
            light: {
                main: {
                    intensity: 2,
                    shadow: true,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    diffuseIntensity: 1,
                    specularIntensity: 1,
                    exposure: 2,
                    texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
                }
            }
        },
        series: [{
            type: 'map3D',
            map: 'china',
            coordinateSystem: 'mapbox',
            shading: 'realistic',
            silent: true,
            itemStyle: {
                areaColor: '#fff'  
            },
            realisticMaterial: {
                roughness: "/asset/get/s/data-1497191796671-B16_H05G-.png",
                normalTexture: "/asset/get/s/data-1497191771850-rJ4DrAqf-.jpg",
                detailTexture: "/asset/get/s/data-1497191756633-SJr8HRqzW.jpg",
                textureTiling: [4, 4]
            },
            data: regionData
        },{
            type: 'map3D',
            map: 'world',
            coordinateSystem: 'mapbox',
            shading: 'realistic',
            silent: true,
            itemStyle: {
                areaColor: '#fff'  
            },
            realisticMaterial: {
                roughness: "/asset/get/s/data-1497191796671-B16_H05G-.png",
                normalTexture: "/asset/get/s/data-1497191771850-rJ4DrAqf-.jpg",
                detailTexture: "/asset/get/s/data-1497191756633-SJr8HRqzW.jpg",
                textureTiling: [4, 4]
            },
            data: regionData
        }]
    };
    
    myChart.setOption(option);
});