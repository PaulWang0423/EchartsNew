$.getJSON("https://api.douban.com/v2/movie/top250?count=100&callback=?", {}, function(json) {
    var xx = [];
    var yy = ['1990~94', '1995~99', '2000~04', '2005~09', '2010~14', '2014~19'];
    var data = generateData(json.subjects);

    function generateData(value) {
        var arr = [];
        $.each(value, function(x, y) {
            var n = '';
            if (1990 <= parseInt(y.year) && parseInt(y.year) <= 1994) {
                n = '1990~94'
            } else if (1995 <= parseInt(y.year) && parseInt(y.year) <= 1999) {
                n = '1995~99'
            } else if (2000 <= parseInt(y.year) && parseInt(y.year) <= 2004) {
                n = '2000~04'
            } else if (2005 <= parseInt(y.year) && parseInt(y.year) <= 2009) {
                n = '2005~09'
            } else if (2010 <= parseInt(y.year) && parseInt(y.year) <= 2014) {
                n = '2010~14'
            } else if (2015 <= parseInt(y.year) && parseInt(y.year) <= 2019) {
                n = '2014~19'
            }


            $.each(y.genres, function(i, lx) {
                if (lx != '剧情') {
                    if (xx.indexOf(lx) < 0) {
                        xx.push(lx)
                    }
                    arr.push([lx, n, y.collect_count, y.rating.average, parseInt(Math.random() * 8 + 2), y.year, y.title, lx]);
                }

            })


        })
        return arr;
    }

    function lab(val) {
        var num = 0;
        $.each(data, function(i, item) {
            if (item.indexOf(val) > -1) {
                num++
            }
        })
        return val + num;
    }
    option = {
        backgroundColor: '#333',
        tooltip: {
            formatter: function(obj) {
                var value = obj.value;
                return '片名' + '：' + value[6] + '<br>' + '类别' + '：' + value[0] + '<br>';
            }
        },
        visualMap: [
            // {
            //     dimension: 3,
            //     show: false,
            //     min: 2,
            //     max: 10,
            //     bottom: 0,
            //     inRange: {
            //         symbolSize: [10, 30]
            //     }
            // }, 
            {
                dimension: 4,
                show: false,
                min: 2,
                max: 10,
                top: 0,
                inRange: {
                    symbolSize: [10, 40]
                }
            }, {
                dimension: 7,
                categories: xx,
                textStyle: {
                    color: '#fff'
                },
                formatter: function(value) {
                    return lab(value);
                },
                inRange: {
                    color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#87d465', '#4b949d', '#744b9d', '#9d4b5e', '#9a9d4b', '#8d4b9d', '#a0b84b', '#eac892', '#92eadf', '#abea92', '#ea92a5', '#abc7f1', '#dfea92']
                }
            }
        ],
        xAxis3D: {
            type: 'category',
            name: '类别',
            data: xx
        },
        yAxis3D: {
            type: 'category',
            name: '年代',
            data: yy
        },
        zAxis3D: {
            type: 'value',
            name: '评论人数',
        },
        grid3D: {
            boxWidth: 220,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisPointer: {
                show: false
            },
            viewControl: {
                alpha: 10,
                beta: 20,
                distance: 200
            },
        },
        series: [{
            type: 'scatter3D',
            name: '喜欢影片',
            symbolSize: 20,
            data: data,
            label: {
                show: true,
                formatter: function(params) {
                    return params.data[6]
                }
            }
        }]
    }
    myChart.setOption(option)
});