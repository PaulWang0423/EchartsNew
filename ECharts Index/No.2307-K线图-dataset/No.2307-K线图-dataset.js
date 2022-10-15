// 4.9.0版本，最新版有错误

var dataset = {
    dimensions:  ["日期", "MA5", "MA10", "MA20", "MA30"],
	source: [
	    ["2013/1/24",2291.26, 2320.26, 2287.3, 2362.94],
	    ["2013/1/25",2300, 2291.3, 2288.26, 2308.38],
        ["2013/1/28",2295.35, 2346.5, 2295.35, 2346.92],
        ["2013/1/29",2347.22, 2358.98, 2337.35, 2363.8],
        ["2013/1/30",2360.75, 2382.48, 2347.89, 2383.76],
        ["2013/2/04",2383.43, 2385.42, 2371.23, 2391.82],
        ["2013/2/08",2377.41, 2419.02, 2369.57, 2421.15],
	 
	]
}

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  legend: {
    // data: ["日K", "MA5", "MA10", "MA20", "MA30"]
  },
  grid: {
    left: "10%",
    right: "10%",
    bottom: "15%"
  },
  dataset: dataset,
  xAxis: {
    type: "category",
    // data: ["2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30", "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", "2013/6/6", "2013/6/7", "2013/6/13"],
    scale: true,
    boundaryGap: false,
    axisLine: {
      onZero: false
    },
    splitLine: {
      show: false
    },
    splitNumber: 20,
    min: "dataMin",
    max: "dataMax",
    
  },
  yAxis: {
    scale: true,
    splitArea: {
      show: true
    }
  },
  dataZoom: [{
    type: "inside",
    start: 0,
    end: 100
  }, {
    show: true,
    type: "slider",
    top: "90%",
    start: 0,
    end: 100
  }],
  series: [{
    name: "日K",
    type: "candlestick",
    encode: {
        // x: '日期',
        // y: ["MA5", "MA10", "MA20", "MA30"],
        tooltip: [1,2,3,4],
        // legend: ["日K","MA5", "MA10", "MA20", "MA30"]
    }
    // data: [
    //   [2320.26, 2320.26, 2287.3, 2362.94],
    //   [2300, 2291.3, 2288.26, 2308.38],
    //   [2295.35, 2346.5, 2295.35, 2346.92],
    //   [2347.22, 2358.98, 2337.35, 2363.8],
    //   [2360.75, 2382.48, 2347.89, 2383.76],
    // ]
  }]
}