var uploadedDataURL = '/asset/get/s/data-1635844861308-bTLMGjpza.json';

$.get(uploadedDataURL, function (geoJson) {
    // console.log(geoJson)
    echarts.registerMap('GD', geoJson);
    let data = [
        ['105.165467', '29.585265', 1334],
        ['105.295467', '29.399265', 2314],
        ['105.195467', '29.585265', 4334],
        ['105.195467', '29.585265', 8334],
        ['105.245467', '29.585265', 2134],
        ['105.195467', '29.585265', 1334],
        ['105.199467', '29.395265', 2132],
        ['105.165467', '29.585265', 3456],
        ['104.965467', '29.685265', 6541],
        ['105.065467', '29.625265', 3345],
        ['105.065467', '29.645265', 2222],
        ['104.999967', '29.685965', 1234],
        ['105.099997', '29.585265', 1234],
    ];
    let areaData = [];
    data.map((item) => {
        // 扩大热力图效果
        areaData.push(...new Array(4).fill(item));
    });

    let mapMax = Math.max(...data.map((item) => item[2]));
    let mapMin = Math.min(...data.map((item) => item[2]));

    var domImg = document.createElement('img');
    domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px';
    domImg.src =
        'data:image/png;base64,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';

    var domImgHover = document.createElement('img');
    domImgHover.style.height = domImgHover.height = domImgHover.width = domImgHover.style.width = '8px';
    domImgHover.src =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII=';

    myChart.setOption(
        (option = {
            tooltip: {
                show: false,
                trigger: 'item',
                axisPointer: {
                    type: 'shadow',
                },
            },

            visualMap: {
                bottom: 20,

                z: 5,
                left: 10,
                show: false,
                color: ['#fa0023', '#84d100', '#90ff07', '#edcc00', '#004684'],
                min: mapMin,
                max: mapMax,
                calculable: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
            },

            grid: {
                height: '100%',
                width: '100%',
            },

            geo: [
                {
                    map: 'GD',
                    label: {
                        show: true,
                    },
                    top: 'center',
                    left: '100',
                    roam: true,
                    width: '90%',
                    height: '95%',
                    zoom: 0.9,
                    z: 1,
                    label: {
                        normal: {
                            show: true,
                            color: '#024b92',
                            fontSize: 22,
                        },
                        emphasis: {
                            color: '#fff',
                        },
                    },
                    itemStyle: {
                        normal: {
                            // areaColor: '#002c47',
                            areaColor: {
                                image: domImg,
                                repeat: 'repeat',
                            },
                            borderColor: '#eee',
                            borderWidth: 1,
                        },
                        emphasis: {
                            // 鼠标移入颜色
                            areaColor: {
                                image: domImgHover,
                                repeat: 'repeat',
                            },
                            borderWidth: 0,
                        },
                    },
                },
                {
                    map: 'GD',
                    roam: false, //是否允许缩放
                    zoom: 0.9,
                    left: '100',
                    top: '25',
                    width: '90%',
                    height: '95%',
                    itemStyle: {
                        areaColor: `transparent`,
                        borderColor: `#004094`,
                    },
                    z: 0,
                    silent: true,
                },
                {
                    map: 'GD',
                    roam: false, //是否允许缩放
                    zoom: 0.9,
                    left: '100',
                    top: '29',
                    width: '90%',
                    height: '95%',
                    itemStyle: {
                        areaColor: `transparent`,
                        borderColor: `#013164`,
                    },
                    z: 0,
                    silent: true,
                },
                {
                    map: 'GD',
                    roam: false, //是否允许缩放
                    zoom: 0.9,
                    left: '100',
                    top: '34',
                    width: '90%',
                    height: '95%',
                    itemStyle: {
                        areaColor: `transparent`,
                        borderColor: `#013164`,
                    },
                    z: 0,
                    silent: true,
                },
            ],

            series: [
                {
                    mapType: 'GD',
                    name: 'AQI',
                    type: 'heatmap',
                    coordinateSystem: 'geo',
                    data: areaData,
                },
                {
                    mapType: 'GD',
                    type: 'map',
                    roam: true,
                    width: '90%',
                    left: '100',
                    // top:'25',
                    height: '95%',
                    zoom: 0.9,
                    z: 0,
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {},
                    },
                    itemStyle: {
                        normal: {
                            shadowColor: '#0051d2',
                            shadowBlur: 30,
                            // borderColor: '#033567',
                            // borderWidth: 1,
                            // areaColor: 'transparent',
                        },
                    },
                },
            ],
        })
    );
});
