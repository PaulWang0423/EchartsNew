// 这里我选的图片是透明背景的，如果使用白色背景的图片就可以遮盖节点后的线条了
let plusImg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUwNzI5NDk0NjE4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgxMDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjk2IDQ4MEg1NDRWMzI4YzAtNC40LTMuNi04LTgtOGgtNDhjLTQuNCAwLTggMy42LTggOHYxNTJIMzI4Yy00LjQgMC04IDMuNi04IDh2NDhjMCA0LjQgMy42IDggOCA4aDE1MnYxNTJjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY1NDRoMTUyYzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04eiIgcC1pZD0iODEwNCI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHogbTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIgcC1pZD0iODEwNSI+PC9wYXRoPjwvc3ZnPg==";

let minusImg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUwNzI5NDc2MDg5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc5ODYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjk2IDQ4MEgzMjhjLTQuNCAwLTggMy42LTggOHY0OGMwIDQuNCAzLjYgOCA4IDhoMzY4YzQuNCAwIDgtMy42IDgtOHYtNDhjMC00LjQtMy42LTgtOC04eiIgcC1pZD0iNzk4NyI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHogbTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIgcC1pZD0iNzk4OCI+PC9wYXRoPjwvc3ZnPg==";

let emptyImg = 'data:image/png;base64,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'

// 获取节点显示的图片
const getSymbolImg = (item = {}) => {
    return `image://${item.children && item.children.length ? minusImg : item.children_bak && item.children_bak.length ? plusImg : emptyImg}`;
};

// 基础配置option
const commonOption = {
    tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        enterable: true,
        alwaysShowContent: false,
        hideDelay: 100,
        formatter: '{b}'
    },
    animation: false,
    series: [{
        type: "tree",
        symbolSize: 30,
        symbol: "emptyCircle",
        left: "2%",
        right: "2%",
        top: 60,
        bottom: 170,
        orient: "vertical",
        expandAndCollapse: true,
        initialTreeDepth: -1,
        label: {
            normal: {
                position: "top",
                verticalAlign: "bottom",
                align: "center",
                fontSize: 12,
                formatter: param => {
                    let name = param.data.name;
                    if (name.length >= 10) {
                        name = name.slice(0, 9) + "...";
                    }
                    name = name.split('').join("\n");
                    return name;
                }
            }
        },
        leaves: {
            label: {
                normal: {
                    position: "bottom",
                    verticalAlign: "top",
                    align: "center",
                    distance: 10
                }
            }
        }
    }]
};

// 原始数据
const originalData = {
    1: {
        name: '百度在线网络技术（北京）有限公司',
        id: 1,
        level: 0
    },
    2: {
        id: 2,
        name: '产品部',
        level: 1,
        parent_node_id: 1
    },
    3: {
        id: 3,
        name: '研发部',
        level: 1,
        parent_node_id: 1
    },
    4: {
        id: 4,
        name: '前端开发',
        level: 2,
        parent_node_id: 3
    },
    5: {
        id: 5,
        name: '后端开发',
        level: 2,
        parent_node_id: 3
    },
    6: {
        id: 6,
        name: '算法',
        level: 2,
        parent_node_id: 3
    },
    7: {
        id: 7,
        name: '测试部',
        level: 2,
        parent_node_id: 3
    },
    8: {
        id: 8,
        name: '运维',
        level: 2,
        parent_node_id: 3
    },
    9: {
        id: 9,
        name: '运营',
        level: 1,
        parent_node_id: 1
    },
    10: {
        id: 10,
        name: '运营-1部',
        level: 2,
        parent_node_id: 9
    },
    11: {
        id: 11,
        name: '运营-2部',
        level: 2,
        parent_node_id: 9
    },
    12: {
        id: 12,
        name: '产品-1部',
        level: 2,
        parent_node_id: 2
    },
    13: {
        id: 13,
        name: '产品-2部',
        level: 2,
        parent_node_id: 2
    },
}


// 数据处理
const innerData = [];
Object.values(originalData).forEach((item, index) => {
    if (innerData[item.level] && innerData[item.level].length) {
        innerData[item.level].push(item);
    } else {
        innerData[item.level] = [item];
    }
});

for (let i = innerData.length - 1; i >= 0; i--) {
    // 每个item和result中的每个对象是同一引用
    innerData[i].forEach((item, index, all) => {
        item.close = function(state) {
            if (this.children) {
                if (this.children_bak.length) {
                    if (state === true || this.children.length) {
                        this.children = [];
                        this.children_bak.forEach((child) => {
                            child.close(true)
                        })
                    } else {
                        this.children = this.children_bak
                    }
                    this.symbol = getSymbolImg(this)
                }
                
            }
        }
        if (i !== innerData.length - 1) {
            item.children = [];
            item.children_bak = [];
            item.add = function(it) {
                if (!!it) {
                    this.children.push(it);
                    this.children_bak.push(it);
                }

            }
            innerData[i + 1].forEach((child) => {
                if (+child.parent_node_id === +item.id) {
                    item.add(child)
                }
            })
        }
        if (i === 0) {
            item.label = {
                normal: {
                    rotate: 0,
                    align: "center",
                    formatter: "{b}"
                }
            };
        }
        item.symbol = getSymbolImg(item);
    });
}


// 单个节点的点击事件
const clickFun = param => {
    //因为保存了对象同一引用，所以可以使用originalData快速找到目标对象
    let aimObj = originalData[param.data.id];
    // 组合模式实现关闭开启
    aimObj.close()
    // 手动关闭tooltip不然会出现不可关闭的tooltip
    myChart.dispatchAction({
        type: "hideTip"
    });
    myChart.clear();
    commonOption.series[0].data = innerData[0]

    myChart.setOption(
        commonOption,
        true
    );
};

commonOption.series[0].data = innerData[0];
myChart.setOption(
    commonOption,
    true
)

myChart.on("click", clickFun);