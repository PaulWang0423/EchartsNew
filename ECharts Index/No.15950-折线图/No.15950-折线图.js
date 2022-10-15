var female = '生理女生';
var male = '生理男生'

option = {
    title: {
        text: '在泰国生活必须知道的18种性别'
    },
    tooltip: {},
    legend: {
        data: [female, male]
    },
    series : [
        {
            type: 'graph',
            layout: 'circular',
            // layout: 'force',
            symbolSize: 30,
            roam: true,
            draggable: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            focusNodeAdjacency: true,
            force: {
                initLayout: 'circular',
                gravity: .05,
                repulsion: 100,
                edgeLength: [30, 400]
            },
            categories: [{
                name: female
            }, { 
                name: male
            }],
            lineStyle: {
                normal: {
                    // color: 'source',
                    curveness: 0.3
                }
            },            
            data: [
                {name: '男生', category: male}, // 0
                {name: '女生', category: female}, // 1
                {name: 'Tom', category: female}, // 2
                {name: 'Dee', category: female}, // 3
                {name: 'Tom Gay', category: female}, // 4
                {name: 'Tom Gay King', category: female}, // 5
                {name: 'Tom Gay Queen', category: female}, // 6
                {name: 'Tom Gay Two-Way', category: female}, // 7
                {name: 'Gay King', category: male}, // 8
                {name: 'Gay Queen', category: male}, // 9
                {name: 'Boat', category: male}, // 10
                {name: 'Bite', category: female}, // 11
                {name: 'Lesbian', category: female}, // 12
                {name: 'Kathoey', category: male}, // 13
                {name: 'Adam', category: male}, // 14
                {name: 'Angie', category: male}, // 15
                {name: 'Cherry', category: female}, // 16
                {name: '三样', category: female} // 17
            ],
            links: [
                {source: 0, target: 1}, 
                {source: 1, target: 0}, 
                {source: 2, target: 1},
                {source: 2, target: 3},
                {source: 3, target: 1}, 
                {source: 3, target: 2}, 
                {source: 4, target: 1}, 
                {source: 4, target: 2}, 
                {source: 4, target: 3}, 
                {source: 5, target: 2},
                {source: 5, target: 4},
                {source: 5, target: 6},
                {source: 6, target: 2},
                {source: 6, target: 4},
                {source: 6, target: 5}, 
                {source: 7, target: 2}, 
                {source: 7, target: 4}, 
                {source: 7, target: 5}, 
                {source: 7, target: 6}, 
                // {source: 7, target: 7}, 
                {source: 8, target: 0}, 
                {source: 9, target: 0}, 
                {source: 10, target: 1}, 
                {source: 10, target: 8}, 
                {source: 10, target: 9}, 
                {source: 11, target: 0}, 
                {source: 11, target: 2}, 
                {source: 12, target: 1}, 
                {source: 14, target: 2}, 
                {source: 15, target: 2}, 
                {source: 16, target: 8}, 
                {source: 16, target: 9}, 
                {source: 16, target: 13}, 
                {source: 17, target: 0},
                {source: 17, target: 1},
                {source: 17, target: 13}
            ]
        }
    ]
};