option = {        backgroundColor: '#1a4377',         tooltip: {},        animationDurationUpdate: 1500,        animationEasingUpdate: 'quinticInOut',        color:['#83e0ff','#45f5ce','#b158ff'],        series: [            {                type: 'graph',                layout: 'force',                force:{                    repulsion:1000,                    edgeLength:50                },                roam: true,                label: {                    normal: {                        show: true                    }                },                data: [                    {                        name: '校园大数据',                        symbolSize: 120,                        draggable: true,                        category: 0,                        itemStyle: {                            normal: {                                borderColor: '#04f2a7',                                borderWidth: 6,                                shadowBlur: 20,                                shadowColor: '#04f2a7',                                color: '#001c43',                            }                        }                    },                    {                        name: '舆情大数据',                        symbolSize: 100,                        itemStyle: {                            normal: {                                borderColor: '#04f2a7',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43',                            }                        },                        category: 1,                    },                    {                        name: '用户分析',                        symbolSize: 80,                        category: 1,                        itemStyle: {                            normal: {                                borderColor: '#04f2a7',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43',                            }                        },                    },                    {                        name: '话题分析',                        symbolSize: 80,                        category: 1,                        itemStyle: {                            normal: {                                borderColor: '#82dffe',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43',                            }                        },                    },                    {                        name: '评论分析',                        symbolSize: 80,                        category: 1,                        itemStyle: {                            normal: {                                borderColor: '#82dffe',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43',                            }                        },                    },                    {                        name: '图书馆分析',                        symbolSize:100,                        category: 2,                        itemStyle: {                            normal: {                                borderColor: '#82dffe',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43',                            }                        },                    },                    {                        name: '借阅分析',                        symbolSize:80,                        category: 2,                        itemStyle: {                            normal: {                                borderColor: '#b457ff',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#b457ff',                                color: '#001c43'                            }                        },                    },                    {                        name: '借阅排行',                        symbolSize:80,                        itemStyle: {                            normal: {                                borderColor: '#82dffe',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43'                            }                        },                        category: 2,                    },                    {                        name: '图书收录',                        symbolSize:80,                        itemStyle: {                            normal: {                                borderColor: '#82dffe',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43'                            }                        },                        category: 2,                    },                    {                        name: '图书分析',                        symbolSize:80,                        category: 2,                        itemStyle: {                            normal: {                                borderColor: '#82dffe',                                borderWidth: 4,                                shadowBlur: 10,                                shadowColor: '#04f2a7',                                color: '#001c43'                            }                        },                    }],                lineStyle: {                    normal: {                        opacity: 0.9,                        width: 5,                        curveness: 0                    }                },                categories:[                    {name: '0'},                    {name: '1'},                    {name: '2'}                ]            }        ]    }