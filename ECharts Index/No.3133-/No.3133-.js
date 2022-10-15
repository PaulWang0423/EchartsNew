
        let colors = '#00FFE4'; //两种状态的颜色
        let img =
            'data:image/png;base64,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';

        let graphics = []
        let width = 367;
        const date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        let time = date.getTime();
        for (let i = 0; i < 5; i++) {
            let obj = {
                type: 'image', // 图形元素类型
                id: 'logo' + i, // 更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。
                top: 10,
                bottom: 0, // 根据父元素进行定位   （0%）, 如果bottom的值是 0，也可以删除该bottom属性值。
                z: 0, // 层叠
                left: ((367/1920) * i*100)+'%', // 层叠
                bounding: 'all', // 决定此图形元素在定位时，对自身的包围盒计算方式
                
                style: {
                    image: img,
                    height: 108,
                    width: (367/1875)* document.body.scrollWidth,
                },
            }
            graphics.push(obj)
        }
        
        window.onresize = function () {
            graphics.forEach(e=>{
                console.log((367/1875)* document.body.scrollWidth)
                e.style.width = (367/1875)* document.body.scrollWidth
            })
        }

        var option = {
            xAxis: {
                show: false,
                type: 'time',
                min: new Date(time),
                max: new Date(time + 24 * 3600 * 5 * 1000),
            },
            yAxis: {
                show: false,
            },

            grid: {
                left: 0,
                right: 0,
                bottom: 52,
                top: 50,
                containLabel: false,
            },
            series: [
                {
                    type: 'custom',
                    renderItem(params, api) {
                        //开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
                        let categoryIndex = api.value(0); //这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
                        let start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
                        let end = api.coord([api.value(2), categoryIndex]);
                        let height = 50; //柱体宽度
                        return {
                            type: 'rect', // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                            shape: echarts.graphic.clipRectByRect(
                                {
                                    // 矩形的位置和大小。
                                    x: start[0],
                                    y: start[1] - height,
                                    width: end[0] - start[0],
                                    height: height,
                                },
                                {
                                    // 当前坐标系的包围盒。
                                    x: params.coordSys.x,
                                    y: params.coordSys.y,
                                    width: params.coordSys.width,
                                    height: params.coordSys.height,
                                }
                            ),
                            style: api.style(),
                        };
                    },
                    encode: {
                        x: [1, 2], // data 中『维度1』和『维度2』对应到 X 轴
                        y: 0, // data 中『维度0』对应到 Y 轴
                    },
                    data:
                        [
                        // 维度0 维度1 维度2
                        {
                            itemStyle: { normal: { color: colors } }, //条形颜色
                            value: [0, '2021/06/14 00:00', '2021/06/14 12:00'], //0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                        },
                        {
                            itemStyle: { normal: { color: colors } },
                            value: [0, '2021/06/16 00:00', '2021/06/17 12:00'],
                        },
                        {
                            itemStyle: { normal: { color: colors } },
                            value: [0, '2021/06/15 00:00', '2021/06/15 08:00'],
                        },
                    ],
                },
            ],
            graphic: graphics,
        }