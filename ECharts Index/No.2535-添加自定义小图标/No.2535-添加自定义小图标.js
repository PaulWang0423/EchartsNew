            var datas = [{
                title: '蔬菜',
                id: 'itembody_ec_list_item1',
                color1: 'rgba(8, 209, 163, 1)',
                color2: '#12d7aa',
                color3: '#bcf2e8',
                value: 40,
                max: 100,
                bg: '#e5f8f7',
                img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTcyOEU5NzNFNUU1MTFFQkE0QzFBRDEyNzk2N0VFQjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTcyOEU5NzRFNUU1MTFFQkE0QzFBRDEyNzk2N0VFQjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzI4RTk3MUU1RTUxMUVCQTRDMUFEMTI3OTY3RUVCNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNzI4RTk3MkU1RTUxMUVCQTRDMUFEMTI3OTY3RUVCNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqVQlmAAAASVSURBVHjalFZbbBRlFD5z2dlbb3txV6ppA9tdtMQ2xEvrBUw0moamCDHGF30yqNBIaHwgyoMPaoi+iZXEBI3yQIjxQcUgJAZipEIoRm1LaZu2tGtLr7u0O9u9z4xnpudf/46s0UnO/tn//8/5zv38gvTVu1DhEyqs/GdUWDd8cgXhTKCIJNEq2oBMgTqRRqtA+8a/gTAAJtw8d9Aqc0AMoERUpJWBbbBKvgOARIIVkxo8tVWn2vd2xaoDXVWysk0WRJ9mGCm1lB8YVRPfdv18+sxKMZfBu3mkAgdWBhIoJnYAJ5LnaMvTzQciDx0bSKXv+2jyJlxKJGGpUICw0wk7An44sLkRWmuqhj4Zv9ZzZPDCMPJkCaxIQJbrJPGFp4DzuUIAVe9se/KBnlj76TeHh+/tHhqE66oKqlZCXxiQ0oswlE7BF/E/cU8PHdna2uEQxcs/LU2vcHEqJwMfTIlAPCGn13co1vbxwRuDdZ/OTIEuGrC7PoQ3DHCgnUE3/ogIJ+nQG5+EwyM3Qoeibcd8isuH/G6SI7EwiFwWyXTo/ezhrr2/qWrkxOwU7uogIH3zYBuca2uHsEcBv1MGQ0ZFkQw8652dgD/S6ejJR/Y8b3qBvMESpZwtLBYu05KWunBn7+w47uiW9qbG55ML8GwgBG9HYjCWT4GiCFDvcVoKCHh+Yu4mIN8uk5/kOEjuPywxNfAGFPfWS+oyCjcsIFPQy6P9cDY5DxGPF96PNkNyRyec3f7YuhIOA35MLQDyxUx+uyUyVxfMXS6XJFcvYqII8t81tWRkoWf6dxjd3gHP+ELW3uHpAcudZowX8Rz5askKha8rmasRVnxKViulQ06ler6URXYBBMOwbrxRH4Hzq/MwkU/DqeVp6FMTIKAVAh7jfUA+lQOQWFKJXI2Uq30mm4rv9AWt4AqyRrHRIay4YCC3At0z/dCXW0RRmhV4897O2iDEM6tTd5Ipcr2GkX5ubuJqdygKoqStZxECNLjd4JUleMnfCAfDeGY1mvXEMMH2h5rgh7nxq1yNlEnmyl+jllDA6v3l+j37O14PRTcdT45Zh3FDhc74hY1dz/KiDvv8Mdgium7tGrp4xdZaDOYuvtmZF3IZrai+eu37L98LtmReCzatJwBZZGlukriedfuCUTgabE2/0n/mZE4rpUx+DkhnbcXeda3gT67dLv6anJv5cPPjW/bUNXozRgmS2JYyQhHukp3wXE0DHA+3w25l0/KLl7/+HFvKCPIlkJJIaepjZg/TzQbJMstJOV6HFEAKm4RpGX7r/ice7bg70txU5Q/VOJzOtVKhMJG+vfTdrbHBD0b6rqAF83gXMwEWCMjsYWvULDUGIlCFujkgP4EF6H81KSKRv00BKglMcMQAcmSJQeGzQDTyJXMfkF/zZD6rZJF8nSdhKRK8SqBZklOeKbJtlBa5Icb+Z0kQq2QGUiBtTaAMt+b5oPOTkfUPzTbDi5wghWtDBpeNeS6jCvaBZR+/PBCrmyIxsllvn/HFCjPeqDTjeSD+FVKyvVb4F4n9tQL/5bXCXxJszPz7y/g/766/BBgA97P91onFco4AAAAASUVORK5CYII='
            }]
            let max = datas[0].max;
            let value = datas[0].value;
            let rate = Math.round((value * 100) / max);
            option = {
                title: [
                    {
                        text: '{b|' + rate + '%}\n{a|' + datas[0].title + '}',
                        show: true,
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            rich: {
                                b: {
                                    fontSize: 12,
                                    color: datas[0].color1,
                                    padding: [0, 0, 5, 0],
                                },
                                a: {
                                    fontSize: 10,
                                    color: 'rgba(51, 51, 51, 1)',
                                    fontFamily: 'PangMenZhengDao',
                                },

                            },
                        },
                    },
                ],
                polar: {
                    center: ['50%', '50%'],
                    radius: ['75%', '95%'],
                },
                angleAxis: {
                    max: max,
                    show: false,
                },
                radiusAxis: {
                    type: 'category',
                    show: true,
                    axisLabel: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [
                    {
                        name: '',
                        type: 'bar',
                        roundCap: true,
                        showBackground: true,
                        backgroundStyle: {
                            color: datas[0].bg,
                        },
                        data: [value],
                        coordinateSystem: 'polar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                    {
                                        offset: 0,
                                        color: datas[0].color2,
                                    },
                                    {
                                        offset: 1,
                                        color: datas[0].color3,
                                    },
                                ]),
                            },
                        },

                    },
                    {
                        //进度圆环
                        name: 'Line 1',
                        type: 'pie',
                        startAngle: 120,
                        clockWise: false,
                        radius: ['75%', '85%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                },
                                labelLine: {
                                    show: false
                                },
                            }
                        },
                        color: 'rgba(0,0,0,0)',
                        hoverAnimation: false,
                        data: [
                            {
                                name: "",
                                value: value,
                                color: 'rgba(0,0,0,0)',
                                label: {
                                    position: 'inside',
                                    backgroundColor: {
                                        image: datas[0].img
                                    },
                                    width: 50,
                                    height: 50,
                                    borderRadius: 10
                                }
                            }]
                    }
                ],
            };