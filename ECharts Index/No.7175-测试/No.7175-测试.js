/**
 * 存储阶段进度时间段的对象
 */
var stageProgress = {
// 			// 方案 实际时间段
// 			fangAnTimeBucket: ['2017-01-01', '2017-03-01'],
// 			// 纲要 实际时间段
// 			gangYaoTimeBucket: ['2017-02-26', '2017-08-29'],
// 			// 成果 实际时间段
// 			chengGuoTimeBucket: ['2017-08-29', '2017-12-06'],
// 			// 计划开始时间
// 			scheduledStartTime: '2016-12-22',
// 			// 有效截止日期
// 			validTime: '2017-05-10'
 
	// 		// 方案 实际时间段
	// 		fangAnTimeBucket: ['2017-01-01', '2017-01-20'],
	// 		// 纲要 实际时间段
	// 		gangYaoTimeBucket: ['2017-02-07', '2017-02-28'],
	// 		// 成果 实际时间段
	// 		chengGuoTimeBucket: ['2017-02-15', '2017-03-20'],
	// 		// 计划开始时间
	// 		scheduledStartTime: '2017-01-01',
	// 		// 有效截止日期
	// 		validTime: '2017-02-20'
 
	// 方案 实际时间段
	fangAnTimeBucket: ['2017-11-23', '2017-11-28'],
	// 纲要 实际时间段
	gangYaoTimeBucket: ['2017-11-25', '2017-11-30'],
	// 成果 实际时间段
	chengGuoTimeBucket: ['2017-12-06', '2017-12-12'],
	// 计划开始时间
	scheduledStartTime: '2017-11-23',
	// 有效截止日期
	validTime: '2017-12-02'
};
 
/**
 * 横坐标轴时间刻度可选值
 * 这里 month和year 没有考虑平闰年之分
 */
var timeInterval = {
	day: 3600 * 1000 * 24,
	month: 3600 * 1000 * 24 * 31,
	year: 3600 * 1000 * 24 * 31 * 12,
};
 
/**
 * 时间坐标轴标签单位应该精确到哪一位
 */
var xAxisLabelUnit = {
	year: false,
	month: false,
	day: false
}
 
/**
 * 获取合适的横坐标时间刻度间隔
 */
function getProperTimeAxisInterval() {
	xAxisLabelUnit.year = false;
	xAxisLabelUnit.month = false;
	xAxisLabelUnit.day = false;
 
	var timeDataArray = getXAxisData();
	var begin = getTimeMilliseconds(timeDataArray[timeDataArray.length - 1]);
	console.log("begin " + begin);
	var periodMillis = getTimeMilliseconds(timeDataArray[timeDataArray.length - 1]) - getTimeMilliseconds(timeDataArray[0]);
	console.log("periodMillis " + periodMillis);
	var years = periodMillis / timeInterval.year;
	console.log("years " + years);
	var months = periodMillis / timeInterval.month;
	console.log("months " + months);
	var days = periodMillis / timeInterval.day;
	console.log("days " + days);
 
	if (months <= 1) {
		xAxisLabelUnit.day = true;
		return timeInterval.day * 2;
	} else if (months <= 16) {
		xAxisLabelUnit.month = true;
		return timeInterval.month;
	} else if (months <= 24) {
		xAxisLabelUnit.month = true;
		return timeInterval.month * 2;
	} else if (years <= 16) {
		xAxisLabelUnit.year = true;
		return timeInterval.year;
	}
}
 
/**
 * 获取横轴坐标数据源，这里横坐标只显示年月
 * 最小值取传入数据最小的时间再减小一个月
 * 最大值取传入数据最小的时间再增加一个月
 */
function getXAxisData() {
	var arr = new Array();
	arr = arr.concat(stageProgress.scheduledStartTime)
		.concat(stageProgress.fangAnTimeBucket)
		.concat(stageProgress.gangYaoTimeBucket)
		.concat(stageProgress.chengGuoTimeBucket)
		.concat(stageProgress.validTime).filter(function(item) {
			return item != "-";
		}).sort();
	console.log(arr);
	return arr;
}
 
/**
 * 更改日期字符串为相应月份的第一天
 * @param {Object} dateStr 日期字符串
 */
function changeDateToMonthFirstDay(dateStr) {
	var inputDate = new Date(dateStr);
	inputDate.setDate(1);
	var result = inputDate.getFullYear() + "-" +
		(inputDate.getMonth() >= 9 ? inputDate.getMonth() + 1 : "0" +
			(inputDate.getMonth() + 1)) + "-" + ("0" + 1);
	return result;
}
 
/**
 * 获取格式化的日期 YYYY-MM-dd
 */
function formatDateToStr(date) {
	var inputMonth = date.getMonth();
	var inputDate = date.getDate();
	var result = date.getFullYear() +
		"-" + (inputMonth >= 9 ? inputMonth + 1 : "0" + (inputMonth + 1)) +
		"-" + (inputDate >= 9 ? inputDate : "0" + (inputDate));
	return result;
}
 
var faOnTimeCompletionTime = getOnTimeCompletionTime('方案', stageProgress.fangAnTimeBucket[0], stageProgress.fangAnTimeBucket[
	1]);
var gyOnTimeCompletionTime = getOnTimeCompletionTime('纲要', stageProgress.gangYaoTimeBucket[0], stageProgress.gangYaoTimeBucket[
	1]);
var cgOnTimeCompletionTime = getOnTimeCompletionTime('成果', stageProgress.chengGuoTimeBucket[0], stageProgress.chengGuoTimeBucket[
	1]);
 
var faOverTimeCompletionTime = getOverTimeCompletionTime('方案', stageProgress.fangAnTimeBucket[0], stageProgress.fangAnTimeBucket[
	1]);
var gyOverTimeCompletionTime = getOverTimeCompletionTime('纲要', stageProgress.gangYaoTimeBucket[0], stageProgress.gangYaoTimeBucket[
	1]);
var cgOverTimeCompletionTime = getOverTimeCompletionTime('成果', stageProgress.chengGuoTimeBucket[0], stageProgress.chengGuoTimeBucket[
	1]);
 
/**
 * 时间数组
 */
var timeArray = {
	// 开始时间
	beginTimeArr: [
		getTimeMilliseconds(stageProgress.fangAnTimeBucket[0]),
		getTimeMilliseconds(stageProgress.gangYaoTimeBucket[0]),
		getTimeMilliseconds(stageProgress.chengGuoTimeBucket[0]),
	],
	// 按时完成时间
	onTimeCompletionTimeArr: [
		getTimeMilliseconds(faOnTimeCompletionTime),
		getTimeMilliseconds(gyOnTimeCompletionTime),
		getTimeMilliseconds(cgOnTimeCompletionTime),
	],
	// 超时完成时间
	overTimeCompletionTimeArr: [
		getTimeMilliseconds(faOverTimeCompletionTime),
		getTimeMilliseconds(gyOverTimeCompletionTime),
		getTimeMilliseconds(cgOverTimeCompletionTime),
	],
};

// 构建图表配置项
option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
		},
 
		/**
		 * 也可以使用 formatter: '{b0}:<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}',
		 * 但是这样当鼠标指向纵坐标的三个阶段中的某一个时，即使该阶段 没有按时完成，或者 没有超时，
		 * 也会显示 按时 或 超时 的 tooltip
		 */
		formatter: function(params) {
// 			console.log("params[0]" + JSON.stringify(params[0]));
// 			console.log("params[1]" + JSON.stringify(params[1]));
			console.log("params[2]" + JSON.stringify(params[2]));
			var info = params[0].axisValue + ":<br />";
			info += params[0].seriesName + "：" + getSeriesDateStr(params[0].data) + "<br />";
			info += "结束时间：" + (params[2].data != "-" && params[2].data != undefined && params[2].data != null&&!isNaN(params[2].data) ?
				getSeriesDateStr(params[2].data) :
				(!isNaN(params[1].data)&&params[1].data != undefined && params[1].data != null ? getSeriesDateStr(params[1].data) : "-"));
			return info;
		},
	},
 
	/**
	 * 右上角工具栏
	 */
	toolbox: {
		right: '3%',
		show: false,
		feature: {
			/**
			 * 数据视图
			 */
			// 			dataView:{
			// 				show:true,
			// 			},
			saveAsImage: {
				show: true
			}
		}
	},
 
	/**
	 * 图例
	 */
	legend: {
		data: ['按时完成', '超时完成'],
		tooltip: {
			show: true,
		},
		itemWidth: 15,
		itemHeight: 15,
		textStyle: {
			fontSize: 16,
			fontFamily: 'Microsoft YaHei',
		},
		itemGap: 120,
		padding: 10,
	},
 
	/**
	 * 直角坐标系内绘图网格
	 */
	grid: {
		left: '3%',
		right: '3%',
		bottom: '2%',
		/**
		 * grid 区域是否包含坐标轴的刻度标签。
		 */
		containLabel: true,
	},
 
	/**
	 * 横坐标
	 */
	xAxis: {
		// 		/**
		// 		 * 坐标轴指示器
		// 		 */
		// 		axisPointer: {
		// 			show: true,
		// 		},
 
		/**
		 * 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，
		 * 在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
		 */
		type: 'time',
 
		/**
		 * value 是一个包含 min 和 max 的对象，分别表示数据的最大最小值，这个函数应该返回坐标轴的最大值。
		 *
		 * 坐标轴刻度最小值。
		 */
		min: function(value) {
			return value.min + (getTimeMilliseconds(getProperTimeAxisBeginAndEndTime()[0]) - value.min);
		},
 
		/**
		 * value 是一个包含 min 和 max 的对象，分别表示数据的最大最小值，这个函数应该返回坐标轴的最大值。
		 *
		 * 坐标轴刻度最大值。
		 */
		max: function(value) {
			return value.max + (getTimeMilliseconds(getProperTimeAxisBeginAndEndTime()[1]) - value.max);
		},
		// 
		/**
		 * 设置坐标轴分割间隔
		 */
		interval: getProperTimeAxisInterval(),
		axisLine: {
			lineStyle: {
				color: '#BDC8CD',
				width: 1,
			},
		},
 
		/**
		 * 坐标轴刻度标签的相关设置。
		 */
		axisLabel: {
			showMinLabel: false,
			showMaxLabel: false,
			rotate: 35,
			margin: 12,
			fontSize: 16,
			color: '#1c2431',
			formatter: function(value, index) {
				var date = new Date(value);
				// var time = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
				var time = date.getFullYear();
				if (xAxisLabelUnit.month) {
					time += "." + (date.getMonth() + 1);
				}
				if (xAxisLabelUnit.day) {
					time += "." + (date.getMonth() + 1) + '.' + date.getDate();
				}
				return time;
			},
		},
 
		/**
		 * 坐标轴刻度分割线
		 */
		splitLine: {
			show: false,
		},
	},
 
	/**
	 * 纵坐标
	 */
	yAxis: {
		type: 'category',
		data: ['方\n案', '纲\n要', '成\n果'],
		axisTick: {
			show: false,
		},
		axisLine: {
			lineStyle: {
				color: '#e9e9ea',
				width: 1,
			},
		},
		axisLabel: {
			fontWeight: 'bold',
			fontSize: 16,
			color: '#1c2431',
			fontFamily: 'Microsoft YaHei',
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: '#eaeae9',
				width: 1,
			},
		},
	},
 
	/**
	 * 系列
	 */
	series: [{
		name: '开始时间',
		type: 'bar',
		stack: '时间',
		itemStyle: {
			normal: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			},
			emphasis: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			}
		},
		label: {
			normal: {
				formatter: function(params) {
					return getSeriesDateStr(params.value);
				},
				show: true,
				position: 'insideRight',
				fontSize: 16,
				color: '#1c2431',
				fontFamily: 'Microsoft YaHei',
				offset: [40, -20],
			}
		},
		data: timeArray.beginTimeArr,
 
		/**
		 * 标注线
		 */
		markLine: {
			lineStyle: {
				normal: {
					color: '#0f77e9',
				},
			},
			label: {
				normal: {
					fontWeight: 'bold',
					padding: 2,
					fontSize: 14,
					fontFamily: 'Microsoft YaHei',
					formatter: function(params) {
						return '计划开始时间 ' + getSeriesDateStr(params.value);
					},
				},
			},
			data: [{
				name: '计划开始时间',
				xAxis: getTimeMilliseconds(stageProgress.scheduledStartTime),
			}, ]
		},
	}, {
		name: '按时完成',
		type: 'bar',
		stack: '时间',
		itemStyle: {
			normal: {
				color: '#0f77e9'
			}
		},
		label: {
			normal: {
				formatter: function(params) {
					return getSeriesDateStr(params.value);
				},
				show: true,
				fontSize: 16,
				color: '#1c2431',
				position: 'right',
				fontFamily: 'Microsoft YaHei',
				offset: [-45, -20],
			}
		},
		data: timeArray.onTimeCompletionTimeArr,
		markLine: {
			lineStyle: {
				normal: {
					color: '#ff4747',
				},
 
			},
			label: {
				normal: {
					fontWeight: 'bold',
					padding: 2,
					fontSize: 14,
					fontFamily: 'Microsoft YaHei',
					formatter: function(params) {
						return '计划完成时间 ' + getSeriesDateStr(params.value);
					},
				},
			},
			data: [{
				name: '有效期',
				xAxis: getTimeMilliseconds(stageProgress.validTime),
			}, ]
		},
	}, {
		name: '超时完成',
		type: 'bar',
		stack: '时间',
		itemStyle: {
			normal: {
				color: '#ff4747'
			}
		},
		label: {
			normal: {
				formatter: function(params) {
					return getSeriesDateStr(params.value);
				},
				show: true,
				fontSize: 16,
				color: '#1c2431',
				offset: [-45, -20],
				position: 'right',
				fontFamily: 'Microsoft YaHei',
			}
		},
		data: timeArray.overTimeCompletionTimeArr,
		/**
		 * 柱状图宽度
		 */
		barWidth: 20,
	}, ]
};
 
/**
 * 时间对象转日期字符串 yyyy.MM.dd
 * @param {Object} timeObject 毫秒值或时间字符串
 */
function getSeriesDateStr(timeObject) {
	if (timeObject == "-") {
		return timeObject;
	}
	var date = new Date(timeObject);
	var dateStr = '';
	dateStr += date.getFullYear() + '.';
	dateStr += date.getMonth() + 1 + '.';
	dateStr += date.getDate();
	return dateStr;
};
 
/**
 * 获取阶段的计划内完成时间（蓝色柱状图值）
 * @param {Object} stage 阶段
 * @param {Object} stateBeginTime
 * @param {Object} stateCompletionTime
 */
function getOnTimeCompletionTime(stage, stageBeginTimeStr, stageCompletionTimeStr) {
	var validTimeMillis = getTimeMilliseconds(stageProgress.validTime);
	var stageBeginTimeMillis = getTimeMilliseconds(stageBeginTimeStr);
	var stageCompletionTimeMillis = getTimeMilliseconds(stageCompletionTimeStr);
	if (validTimeMillis <= stageBeginTimeMillis) {
		// 若阶段开始时间大于等于有效期，则项目超时完成，有效时间为'-'
		return '-';
	}
	if (validTimeMillis > stageBeginTimeMillis && validTimeMillis < stageCompletionTimeMillis) {
		// 若有效期介于阶段完成时间和阶段开始时间之间，则该阶段按时完后时间(实际该阶段是超时完成的)即蓝色柱状图的终值为有效期
		return stageProgress.validTime;
	}
	if (validTimeMillis >= stageCompletionTimeMillis) {
		// 若有效期大于等于阶段完成时间，则阶段按时完成
		return stageCompletionTimeStr;
	}
}
 
/**
 * 获取阶段内的超时完成时间（红色色柱状图值）
 * @param {Object} stage 阶段
 * @param {Object} stateBeginTime
 * @param {Object} stateCompletionTime
 */
function getOverTimeCompletionTime(stage, stageBeginTimeStr, stageCompletionTimeStr) {
	var validTimeMillis = getTimeMilliseconds(stageProgress.validTime);
	var stageBeginTimeMillis = getTimeMilliseconds(stageBeginTimeStr);
	var stageCompletionTimeMillis = getTimeMilliseconds(stageCompletionTimeStr);
 
	if (validTimeMillis < stageCompletionTimeMillis) {
		// 阶段完成时间大于有效期，则将阶段完成时间作为超时时间返回
		return stageCompletionTimeStr;
	}
 
	if (validTimeMillis >= stageCompletionTimeMillis) {
		// 阶段完成时间小于等于有效期，则阶段按时完成，超时时间应为'-'
		return '-';
	}
}
 
/**
 * 根据时间字符串获取对应的毫秒值
 * @param {Object} timeStr 时间字符串
 */
function getTimeMilliseconds(timeStr) {
	return (new Date(timeStr)).getTime();
}
 
/**
 *获取时间坐标轴的起始和结束值
 */
function getProperTimeAxisBeginAndEndTime() {
	var xAxis = getXAxisData();
	var begin = xAxis[0];
	var end = xAxis[xAxis.length - 1];
	var beginDate = new Date(begin);
	var endDate = new Date(end);
 
	if (xAxisLabelUnit.month) {
		beginDate.setDate(1);
		endDate.setMonth(endDate.getMonth() + 1);
		endDate.setDate(1);
	} else {
		var daysCount = getProperTimeAxisInterval() / timeInterval.day;
		console.log("daysCount " + daysCount);
		beginDate.setDate(beginDate.getDate() - daysCount);
		endDate.setDate(endDate.getDate() + daysCount);
	}
	var beArr = [formatDateToStr(beginDate), formatDateToStr(endDate)];
	console.log("beArr " + beArr);
	return beArr;
}