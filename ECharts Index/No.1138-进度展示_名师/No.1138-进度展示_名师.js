
		let angle = 0 //角度，用来做简单的动画效果的
		let num=60
		option = {
				tooltip: {
					formatter: '{a} <br/>{b} : {c}%'
				},
				// 标题
				title: [
					{
						text: num + '%',
						x: 'center',
						y: 'center',
						textStyle: {
							fontSize: '55',
							color: '#fff',
							fontFamily: 'Lato',
							foontWeight: '600'
						}
					}
				],

				series: [
					//内圆
					{
						type: 'pie',
						radius: '43%',
						center: ['50%', '50%'],
						animation: false,
						z: 3,
						itemStyle: {
							normal: {
								color: '#032336',
								label: {
									show: false
								},
								labelLine: {
									show: false
								},
								borderColor: '#3bcbf6',
								borderWidth: 3
							}
						},
						hoverAnimation: false,
						label: {
							show: false
						},
						tooltip: {
							show: false
						},
						data: [100]
					},
					//外圆
					{
						type: 'pie',
						radius: '80%',
						center: ['50%', '50%'],
						animation: false,
						z: 0,
						itemStyle: {
							normal: {
								color: '#001929',
								label: {
									show: false
								},
								labelLine: {
									show: false
								},
								borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: '#3bcbf6' // 0% 处的颜色
									},
									{
										offset: 0.5,
										color: '#3bcbf6' // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#001929' // 100% 处的颜色
									}
								]),
								borderWidth: 3
							}
						},
						hoverAnimation: false,
						label: {
							show: false
						},
						tooltip: {
							show: false
						},
						data: [100]
					},
					// 进度光环
					{
						name: '外部刻度',
						type: 'gauge',
						z: 2,
						center: ['50%', '50%'],
						radius: '60%',
						min: 0, //最小刻度
						max: 100, //最大刻度
						splitNumber: 10, //刻度数量
						startAngle: 225,
						endAngle: -45,
						animation: true,
						axisLine: {
							show: true,
							lineStyle: {
								width: 15,
								shadowColor: '#83f3f9',
								shadowBlur: 6,
								color: [[num/100, '#83f3f9']]
							}
						}, // 仪表盘轴线
						axisLabel: {
							show: false
						}, //刻度标签。
						axisTick: {
							show: false
						}, //刻度样式
						splitLine: {
							show: false
						}, //分隔线样式
						detail: {
							show: false
						}, //仪表盘详情，用于显示数据
						pointer: {
							show: false
						} //仪表盘指针。
					},
					// 进度光环背景
					{
						name: '外部刻度',
						type: 'gauge',
						z: 1,
						center: ['50%', '50%'],
						radius: '61%',
						min: 0, //最小刻度
						max: 100, //最大刻度
						splitNumber: 10, //刻度数量
						startAngle: 225,
						endAngle: -45,
						animation: true,
						axisLine: {
							show: true,
							lineStyle: {
								width: 25,
								shadowColor: '#386e73',
								shadowBlur: 10,
								color: [[1, '#032336']]
							}
						}, // 仪表盘轴线
						axisLabel: {
							show: false
						}, //刻度标签。
						axisTick: {
							show: false
						}, //刻度样式
						splitLine: {
							show: false
						}, //分隔线样式
						detail: {
							show: false
						}, //仪表盘详情，用于显示数据
						pointer: {
							show: false
						} //仪表盘指针。
					},
					// 转动效果
					{
						name: 'ring5',
						type: 'custom',
						coordinateSystem: 'none',
						renderItem: function(params, api) {
							return {
								type: 'arc',
								shape: {
									cx: api.getWidth() / 2,
									cy: api.getHeight() / 2,
									r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
									startAngle: ((0 + angle) * Math.PI) / 180,
									endAngle: ((90 + angle) * Math.PI) / 180
								},
								style: {
									stroke: '#0CD3DB',
									fill: 'transparent',
									lineWidth: 1.5
								},
								silent: true
							}
						},
						data: [0]
					},
					{
						name: 'ring5',
						type: 'custom',
						coordinateSystem: 'none',
						renderItem: function(params, api) {
							return {
								type: 'arc',
								shape: {
									cx: api.getWidth() / 2,
									cy: api.getHeight() / 2,
									r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
									startAngle: ((180 + angle) * Math.PI) / 180,
									endAngle: ((270 + angle) * Math.PI) / 180
								},
								style: {
									stroke: '#0CD3DB',
									fill: 'transparent',
									lineWidth: 1.5
								},
								silent: true
							}
						},
						data: [0]
					},
					{
						name: 'ring5',
						type: 'custom',
						coordinateSystem: 'none',
						renderItem: function(params, api) {
							return {
								type: 'arc',
								shape: {
									cx: api.getWidth() / 2,
									cy: api.getHeight() / 2,
									r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
									startAngle: ((270 + -angle) * Math.PI) / 180,
									endAngle: ((40 + -angle) * Math.PI) / 180
								},
								style: {
									stroke: '#0CD3DB',
									fill: 'transparent',
									lineWidth: 1.5
								},
								silent: true
							}
						},
						data: [0]
					},
					{
						name: 'ring5',
						type: 'custom',
						coordinateSystem: 'none',
						renderItem: function(params, api) {
							return {
								type: 'arc',
								shape: {
									cx: api.getWidth() / 2,
									cy: api.getHeight() / 2,
									r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
									startAngle: ((90 + -angle) * Math.PI) / 180,
									endAngle: ((220 + -angle) * Math.PI) / 180
								},
								style: {
									stroke: '#0CD3DB',
									fill: 'transparent',
									lineWidth: 1.5
								},
								silent: true
							}
						},
						data: [0]
					},
					{
						name: 'ring5',
						type: 'custom',
						coordinateSystem: 'none',
						renderItem: function(params, api) {
							let x0 = api.getWidth() / 2
							let y0 = api.getHeight() / 2
							let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
							let point = getCirlPoint(x0, y0, r, 90 + -angle)
							return {
								type: 'circle',
								shape: {
									cx: point.x,
									cy: point.y,
									r: 4
								},
								style: {
									stroke: '#0CD3DB', //粉
									fill: '#0CD3DB'
								},
								silent: true
							}
						},
						data: [0]
					},
					{
						name: 'ring5', //绿点
						type: 'custom',
						coordinateSystem: 'none',
						renderItem: function(params, api) {
							let x0 = api.getWidth() / 2
							let y0 = api.getHeight() / 2
							let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65
							let point = getCirlPoint(x0, y0, r, 270 + -angle)
							return {
								type: 'circle',
								shape: {
									cx: point.x,
									cy: point.y,
									r: 4
								},
								style: {
									stroke: '#0CD3DB', //绿
									fill: '#0CD3DB'
								},
								silent: true
							}
						},
						data: [0]
					}
				]
			}

			//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
			function getCirlPoint(x0, y0, r, angle) {
				let x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
				let y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
				return {
					x: x1,
					y: y1
				}
			}

			function draw() {
				angle = angle + 3
				myChart.setOption(option, true)
				//window.requestAnimationFrame(draw);
			}

			setInterval(function() {
				//用setInterval做动画感觉有问题
				draw()
			}, 100)

