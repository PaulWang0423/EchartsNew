var uploadedDataURL = "/asset/get/s/data-1491362911797-SkuvE1zpe.json";
$.get(uploadedDataURL, function(chinaJson) {
		echarts.registerMap('guangzhou', chinaJson);
		
		var GZ_DATA_GEO_CoordMap = {
				'天河区': [113.368672,23.130389],
				'黄埔区': [113.466408,23.111777],
				'海珠区': [113.323254,23.089173],
				'越秀区': [113.272949,23.135441],
				'荔湾区': [113.250815,23.131453],
				'白云区': [113.278986,23.164151],
				'南沙区': [113.530511,22.808027],
				'花都区': [113.225806,23.412711],
				'增城区': [113.817106,23.267509],
				'从化区': [113.593464,23.555101],
				'番禺区': [113.391669,22.943615]
		}

		var ZCData = [
		              [{name:'增城区'}, {name:'番禺区',value:95}],
		              [{name:'增城区'}, {name:'从化区',value:90}],
		              [{name:'增城区'}, {name:'天河区',value:80}],
		              [{name:'增城区'}, {name:'花都区',value:70}],
		              [{name:'增城区'}, {name:'南沙区',value:60}],
		              [{name:'增城区'}, {name:'白云区',value:50}],
		              [{name:'增城区'}, {name:'荔湾区',value:40}],
		              [{name:'增城区'}, {name:'越秀区',value:30}],
		              [{name:'增城区'}, {name:'海珠区',value:20}],
		              [{name:'增城区'}, {name:'增城区',value:10}],
		              [{name:'增城区'}, {name:'黄埔区',value:10}]
		          ];

		var NSData = [
		              [{name:'南沙区'},{name:'黄埔区',value:95}],
		              [{name:'南沙区'},{name:'海珠区',value:90}],
		              [{name:'南沙区'},{name:'越秀区',value:80}],
		              [{name:'南沙区'},{name:'荔湾区',value:70}],
		              [{name:'南沙区'},{name:'天河区',value:60}],
		              [{name:'南沙区'},{name:'白云区',value:50}],
		              [{name:'南沙区'},{name:'花都区',value:40}],
		              [{name:'南沙区'},{name:'增城区',value:30}],
		              [{name:'南沙区'},{name:'从化区',value:20}],
		              [{name:'南沙区'},{name:'番禺区',value:10}]
		          ];
		          
		var HZData = [
		              [{name:'海珠区'},{name:'黄埔区',value:95}],
		              [{name:'海珠区'},{name:'白云区',value:90}],
		              [{name:'海珠区'},{name:'越秀区',value:80}],
		              [{name:'海珠区'},{name:'荔湾区',value:70}],
		              [{name:'海珠区'},{name:'天河区',value:60}],
		              [{name:'海珠区'},{name:'南沙区',value:50}],
		              [{name:'海珠区'},{name:'花都区',value:40}],
		              [{name:'海珠区'},{name:'增城区',value:30}],
		              [{name:'海珠区'},{name:'从化区',value:20}],
		              [{name:'海珠区'},{name:'番禺区',value:10}]
		              ];

		var CHData = [
		              [{name:'从化区'},{name:'黄埔区',value:95}],
		              [{name:'从化区'},{name:'白云区',value:90}],
		              [{name:'从化区'},{name:'越秀区',value:80}],
		              [{name:'从化区'},{name:'荔湾区',value:70}],
		              [{name:'从化区'},{name:'天河区',value:60}],
		              [{name:'从化区'},{name:'南沙区',value:50}],
		              [{name:'从化区'},{name:'花都区',value:40}],
		              [{name:'从化区'},{name:'增城区',value:30}],
		              [{name:'从化区'},{name:'海珠区',value:20}],
		              [{name:'从化区'},{name:'番禺区',value:10}]
		              ];

		var HDData = [
		              [{name:'花都区'},{name:'黄埔区',value:95}],
		              [{name:'花都区'},{name:'白云区',value:90}],
		              [{name:'花都区'},{name:'越秀区',value:80}],
		              [{name:'花都区'},{name:'荔湾区',value:70}],
		              [{name:'花都区'},{name:'天河区',value:60}],
		              [{name:'花都区'},{name:'南沙区',value:50}],
		              [{name:'花都区'},{name:'从化区',value:40}],
		              [{name:'花都区'},{name:'增城区',value:30}],
		              [{name:'花都区'},{name:'海珠区',value:20}],
		              [{name:'花都区'},{name:'番禺区',value:10}]
		              ];


		var planePath_gz = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

		var convertData_gz = function (data) {
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var dataItem = data[i];
		        var fromCoord = GZ_DATA_GEO_CoordMap[dataItem[0].name];
		        var toCoord = GZ_DATA_GEO_CoordMap[dataItem[1].name];
		        if (fromCoord && toCoord) {
		            res.push({
		                fromName: dataItem[0].name,
		                fromValue : dataItem[1].value,
		                toName: dataItem[1].name,
		                coords: [fromCoord, toCoord]
		            });
		        }
		    }
		    return res;
		};

		var color = ['#a6c84c', '#ffa022', '#46bee9','#ff3399','#D15FEE'];
		var series = [];
		[['增城区', ZCData], ['南沙区', NSData], ['海珠区', HZData],['从化区', CHData],['花都区', HDData]].forEach(function (item, i) {
		    series.push({
		        name: item[0],
		        type: 'lines',
		        zlevel: 1,
		        effect: {
		        	show : true,
					period : 6,
					trailLength : 0.7,
					color : '#fff',
					symbolSize : 3,
					shadowBlur : 4.4
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 0,
		                curveness: 0.2
		            }
		        },
		        data: convertData_gz(item[1])
		    },
		    {
		        name: item[0],
		        type: 'lines',
		        zlevel: 2,
		        symbol: ['none', 'arrow'],
		        symbolSize: 10,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0,
		            //symbol: planePath_gz,
		            symbolSize: 6
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 1,
		                opacity: 0.5,
		                curveness: 0.2
		            }
		        },
		        data: convertData_gz(item[1])
		    },
		    {
		        name: item[0],
		        type: 'effectScatter',
		        coordinateSystem: 'geo',
		        zlevel: 2,
		        rippleEffect: {
		            brushType: 'stroke'
		        },
		        label: {
		            normal: {
		                show: (i == 0 ? true : false),
		                position: 'right',
		                formatter: '{b}'
		            }
		        },
		        symbolSize: function (val) {
		            return val[2] / 10;
		        },
		        itemStyle: {
		            normal: {
		                color: color[i]
		            }
		        },
		        data: item[1].map(function (dataItem) {
		            return {
		                name: dataItem[1].name,
		                value: GZ_DATA_GEO_CoordMap[dataItem[1].name].concat([dataItem[1].value])
		            };
		        })
		    });
		});


		var GZ_DATA_TEST = {
				tooltip: {
			        trigger: 'item',
			        formatter: function (params) {
			        	if (params.data.fromName) {
			        		return params.data.fromName + " > " + params.data.toName + " <br/>流量数 : " + params.data.fromValue;
						}else{
							return params.name + "<br/>流向广州人数：" + params.value[2];
						}
			            
			        }
			    },
			    legend: {
			        orient: 'vertical',
			        top:'5%',
			        left: 'right',
			        data:['增城区', '南沙区', '海珠区','从化区','花都区'],
			        textStyle: {
			            color: '#fff'
			        },
			        selectedMode: 'mutipla',
			        bottom:'50%'
			    },
				visualMap: {
			        min: 0,
			        max: 100,
			        calculable: true,
			        inRange: {
			            color: ['#50a3ba', '#eac736', '#d94e5d']
			        },
			        textStyle: {
			            color: '#fff'
			        },
			        bottom:"10%"
			    },
			    geo : {
					map : 'guangzhou',
					label : {
						emphasis : {
							show : true,
							textStyle : {
								color : '#fff'
							}
						}
					},
					itemStyle : {
						normal : {
							areaColor : '#171717',
							borderColor : '#48669B'
						},
						emphasis : {
							areaColor : 'gray'
						}
					}
				},
				series : series
			};


		myChart.setOption(GZ_DATA_TEST);
	});
