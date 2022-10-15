	var data = [
	    [0, 0, 8, '待提升', 2],
	    [0, 1, 9, '低价值', 2],
	    [1, 0, 7, '核心价值', 4],
	    [1, 1, 30, '低粘性', 6]
	];
	var textStyle = {
	    color: '#333',
	    fontStyle: 'normal',
	    fontWeight: 'normal',
	    fontFamily: 'sans-serif',
	    fontSize: 14,
	};
	option = {
	    title: {
	        text: '矩阵图'
	    },
	    backgroundColor: '#fff',
	    tooltip: {},
	    xAxis: {
	        type: 'category',
	        //	name: '客户贡献度',
	        data: ['低贡献度', '', '高贡献度'],
	        axisLine: {
	            show: true,
	            symbol: ['none', 'arrow'],
	            symbolSize: [10, 10],
	            symbolOffset: [0, 5]
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: true,
	            rotate: 0
	        },
	        splitLine: {
	            show: true,
	            interval: '4',
	            lineStyle: {
	                color: ['#333'],
	                width: 1,
	                type: 'solid'
	            }
	        },
	        splitArea: {
	            show: false
	        }
	    },
	    yAxis: {
	        type: 'category',
	        //  	name: '客户流失率',
	        data: ['低流失率', '', '高流失率'],
	        axisLine: {
	            show: true,
	            symbol: ['none', 'arrow'],
	            symbolSize: [10, 10],
	            symbolOffset: [0, 5]
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: true,
	            margin: 10,
	            rotate: -89.99,
	            verticalAlign: 'top'
	        },
	        splitLine: {
	            show: true,
	            interval: '4',
	            lineStyle: {
	                color: ['#333'],
	                width: 1,
	                type: 'solid'
	            }
	        },
	        splitArea: {
	            show: false
	        }
	    },
	    series: [{
	        type: 'heatmap',
	        data: data,
	        tooltip: {
	            formatter: function(o) {
	                console.log(o);
	                var arr = [
	                    o.value[3] + '<br/>',
	                    '未维护数量：' + o.value[4] + '<br/>',
	                    '数量：' + o.value[2]
	                ];
	                return arr.join('');
	            }
	        },
	        label: {
	            normal: {
	                show: true,
	                color: '#000',
	                formatter: function(o) {
	                    var arr = [
	                        '{name|' + o.value[3] + '}',
	                        '{hr|}',
	                        '{budget| ' + o.value[4] + '} {label|/' + o.value[2] + '}'
	                    ];
	                    return arr.join('\n');
	                },
	                rich: {
	                    budget: {
	                        fontSize: 22,
	                        lineHeight: 30,
	                        color: 'red',
	                        align: 'right'
	                    },
	                    label: {
	                        fontSize: 9,
	                        backgroundColor: 'rgba(0,0,0,0.3)',
	                        color: '#fff',
	                        borderRadius: 2,
	                        padding: [2, 4],
	                        lineHeight: 25,
	                        align: 'left'
	                    },
	                    name: {
	                        fontSize: 12,
	                        color: '#000'
	                    },
	                    hr: {
	                        width: '100%',
	                        borderColor: 'rgba(255,255,255,0.2)',
	                        borderWidth: 0.5,
	                        height: 0,
	                        lineHeight: 10
	                    }
	                }
	            }

	        },
	        itemStyle: {
	            color: '#fff',
	            borderColor: '#000',
	            borderWidth: 1,
	            emphasis: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(0, 0, 0, 0.5)'
	            }
	        }
	    }]
	};