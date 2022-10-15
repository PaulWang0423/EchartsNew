var imgurl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAADD0lEQVRYhe3YTYiVVRzH8c+9jTq+5IhaUFFhiZq5MDEiCUR3QRCJhVmSiwEXLozoRXclLVxoRrVIbJEmCEaiC0OlFxdFlG8UlO9iSZqK4zBOL06N4+J/LnN7fJ65d2ZKZzFfOHDPOfc5z+/5n3Oe/+85JcsPKeB+PIaZ6fcEjEcjRqENf+ECTuA4vsNX+LVo0J5oyNTvRDOew6RMXyfOJxHnU9tITMWDmf8ewCZsQEu9YkopMkPxOl7EcHTha+wST/sTzuBqwQPdnQQ9isfxUOq7jJVYk8asKWZUuums1LYDL+FovU+Uw0y8h0dSfSueRUdPF5WxukrI93iyn0JgH+bit1Sfh5drXVQW66PCaLE4/wvGiimv8Ew9YkZW1SfgG/EkQ/ooYjgWYy+aqtqbcv9dRQNKmbYH8Aku4os06GGcEruoA1cwTGzz28TWnyoW8Gz50S3XI6aIcXg6lRtCTbU3kkExRQyKKWJAielpa/eHn7EfJ/GLeC+d6a2YLpH6f8y0LxB5Zk/OGIvFC3GPyNI7k4hekxWzDUvxlHi7VujAn7iUM0YH1ovMTKSXBZiDGbgHt6e+LpzTHbnP8akwadeJuSTc3HyRYxowLbUdx605YrYkIbdghcjOLcKKvJuua003HCFy1BQ8nPrX4U28U7L8ULXpacMS4dT+SdFoxw/4GO/niDmH3/ERnsdavJqur8VQfIBFWJuNzGhsrqr/gYlJ3CupZHkCX2JhVVs2+RZR1u0el2Qjs0qEupp78S3eTv15NImpqHBaTN1eYdZbxY5qxBhMFtM0X/d6khXT6t8GugF3CG/TkrlhhWYRuby+XpGdpjGp5DE2lSwj+iuiwoB6Aw+KKWJQTBEDTsyxmy2iQll8mA8IysK/vCCl8ZtJZc1sFEcam9SXbf9XMYQ7W4S7sEw4trY6x+lUx/lLDa6UejhGIwzTxFTuE9/Vw0Q+ahfJcbv4Fv9QTHdfeauWIe/EkVRq0SxOuF6Tn1CLOIs3sK5WZPpCozhKm4Pp4oSiSXjjdmFtT+IgduMz/A3XALubrVb9+0HEAAAAAElFTkSuQmCC";

option = {
    tooltip: {
        show: false
    },
    animation: false,
    series: [{
        categories: [{
            name: '1',
            itemStyle: {
                normal: {
                    color: "#0078d7",
                }
            }
        }],
        type: 'graph',
        layout: 'force',
        symbol: "circle",
        symbolSize: 20,
        // roam: true, //禁止用鼠标滚轮缩小放大效果
        edgeSymbol: ['circle', 'none'],
        edgeSymbolSize: [0, 10],
        // 连接线上的文字
        focusNodeAdjacency: false, //划过只显示对应关系
        lineStyle: {
            normal: {
                opacity: 1,
                width: 1,
                // color:'#f4f4f4',
                curveness: 0
            }
        },
        // 圆圈内的文字
        label: {
            normal: {
                show: true,
                position:'bottom',
                textStyle: {
                    color: '#3e4956'
                }
            }
        },
        force: {
            repulsion: 5000
        },
        data: [{
            name: '数据库1',
            symbolSize: 50,
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAADD0lEQVRYhe3YTYiVVRzH8c+9jTq+5IhaUFFhiZq5MDEiCUR3QRCJhVmSiwEXLozoRXclLVxoRrVIbJEmCEaiC0OlFxdFlG8UlO9iSZqK4zBOL06N4+J/LnN7fJ65d2ZKZzFfOHDPOfc5z+/5n3Oe/+85JcsPKeB+PIaZ6fcEjEcjRqENf+ECTuA4vsNX+LVo0J5oyNTvRDOew6RMXyfOJxHnU9tITMWDmf8ewCZsQEu9YkopMkPxOl7EcHTha+wST/sTzuBqwQPdnQQ9isfxUOq7jJVYk8asKWZUuums1LYDL+FovU+Uw0y8h0dSfSueRUdPF5WxukrI93iyn0JgH+bit1Sfh5drXVQW66PCaLE4/wvGiimv8Ew9YkZW1SfgG/EkQ/ooYjgWYy+aqtqbcv9dRQNKmbYH8Aku4os06GGcEruoA1cwTGzz28TWnyoW8Gz50S3XI6aIcXg6lRtCTbU3kkExRQyKKWJAielpa/eHn7EfJ/GLeC+d6a2YLpH6f8y0LxB5Zk/OGIvFC3GPyNI7k4hekxWzDUvxlHi7VujAn7iUM0YH1ovMTKSXBZiDGbgHt6e+LpzTHbnP8akwadeJuSTc3HyRYxowLbUdx605YrYkIbdghcjOLcKKvJuua003HCFy1BQ8nPrX4U28U7L8ULXpacMS4dT+SdFoxw/4GO/niDmH3/ERnsdavJqur8VQfIBFWJuNzGhsrqr/gYlJ3CupZHkCX2JhVVs2+RZR1u0el2Qjs0qEupp78S3eTv15NImpqHBaTN1eYdZbxY5qxBhMFtM0X/d6khXT6t8GugF3CG/TkrlhhWYRuby+XpGdpjGp5DE2lSwj+iuiwoB6Aw+KKWJQTBEDTsyxmy2iQll8mA8IysK/vCCl8ZtJZc1sFEcam9SXbf9XMYQ7W4S7sEw4trY6x+lUx/lLDa6UejhGIwzTxFTuE9/Vw0Q+ahfJcbv4Fv9QTHdfeauWIe/EkVRq0SxOuF6Tn1CLOIs3sK5WZPpCozhKm4Pp4oSiSXjjdmFtT+IgduMz/A3XALubrVb9+0HEAAAAAElFTkSuQmCC',
        }, {
            name: '具体表单名称1',
            category: 0,
        },{
            name: '具体表单名称2',
            category: 0,
        }, {
            name: '具体表单名称3',
            category: 0,
        }, {
            name: '具体表单名称4',
            category: 0,
        }, {
            name: '具体表单名称5',
            category: 0,
        }, {
            name: '具体表单名称6',
            category: 0,
        },{
            name: '具体表单名称7',
            category: 0,
        },{
            name: '具体表单名称8',
            category: 0,
        },],
        links: [{
            source: '数据库1',
            target: '具体表单名称1',
            value: "1",
        },{
            source: '数据库1',
            target: '具体表单名称2',
            value: "1",
        }, {
            source: '数据库1',
            target: '具体表单名称3',
            value: "1"
        }, {
            source: '数据库1',
            target: '具体表单名称4',
            value: "1"
        }, {
            source: '数据库1',
            target: '具体表单名称5',
            value: "1"
        }, {
            source: '数据库1',
            target: '具体表单名称6',
            value: "1"
        }, {
            source: '数据库1',
            target: '具体表单名称7',
            value: "1",
        },{
            source: '数据库1',
            target: '具体表单名称8',
            value: "1",
        },]
    }]
};