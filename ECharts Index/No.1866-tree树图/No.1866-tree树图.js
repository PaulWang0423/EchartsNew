var treeData = [
        {
            ID: 0,
            NAME: '根节点',
            children: [
                {
                    ID: 1,
                    NAME: '子节点1',
                    children: [
                        {
                            ID: 11,
                            NAME: '子节点1-1',
                        },
                        {
                            ID: 12,
                            NAME: '子节点1-2',
                        },
                        {
                            ID: 13,
                            NAME: '子节点1-3',
                        },
                    ],
                },
                {
                    ID: 5972,
                    NAME: '社会治理检察建议采纳数',
                },
                {
                    ID: 3,
                    NAME: '子节点3',
                    children: [
                        {
                            ID: 31,
                            NAME: '子节点3-1',
                        },
                        {
                            ID: 32,
                            NAME: '子节点3-2',
                            children: [
                                {
                                    ID: 321,
                                    NAME: '测试测试测试test测试test测试TEST测试',
                                },
                                {
                                    ID: 236.522,
                                    NAME: '子节点3-2-2',
                                },
                                {
                                    ID: 323,
                                    NAME: '子节点3-2-3',
                                },
                                {
                                    ID: 324,
                                    NAME: '子节点3-2-4',
                                },
                            ],
                        },
                        {
                            ID: 33,
                            NAME: '子节点3-3',
                        },
                    ],
                },
                {
                    ID: 4,
                    NAME: '子节点4',
                },
            ],
        },
    ],
    option = {
        backgroundColor: 'rgba(7, 29, 29, 1)',
        series: [
            {
                type: 'tree',
                edgeShape: 'polyline', // 链接线是折现还是曲线
                orient: 'TB',
                roam: true,
                data: treeData,
                width: '85%',
                height: '75%',
                left: '5%',
                right: '5%',
                top: '12%',
                bottom: '1%',
                symbolSize: 2,
                initialTreeDepth: 10,
                label: {
                    normal: {
                        position: 0,
                        align: 'center',
                        padding: [10, 20],
                        fontWeight: 'bold',
                        formatter: function (param) {
                            let NAME =
                                param.data.NAME.substring(0, 8) +
                                '\n' +
                                param.data.NAME.substring(8, 16) +
                                '\n' +
                                param.data.NAME.substring(16);
                            return [`{img|}`, `{VALUE|${param.data.ID}}`, `{NAME|${NAME}}`].join('\n');
                        },
                        rich: {
                            img: {
                                backgroundColor: {
                                    image:'data:image/png;base64,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'
                                },
                                width: 93,
                                height: 78,
                            },
                            VALUE: {
                                color: '#4cE4E6',
                                fontSize: 18,
                                fontFamily: 'DIN',
                                verticalAlign: 'top',
                                position: 'top',
                                backgroundColor: '#071D1D',
                                width: 93,
                                padding: [5, 0],
                            },
                            NAME: {
                                color: '#fff',
                                fontSize: 14,
                                verticalAlign: 'top',
                                backgroundColor: '#071D1D',
                                width: 93,
                                padding: [5, 0],
                            },
                        },
                    },
                },
                lineStyle: {
                    color: '#158387',
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
            },
        ],
    };
