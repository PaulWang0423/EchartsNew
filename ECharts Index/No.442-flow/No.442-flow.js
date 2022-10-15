option = {
    tooltip: {},
    xAxis: { show: false, type: 'value' },
    yAxis: { show: false, type: 'value' },
    series: [
        {
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            roam: true,
            label: { show: true, position: 'bottom', color: '#000' },
            symbol:
                'image://data:image/png;base64,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',
            symbolSize: [50, 35],
            tooltip: { trigger: 'item', padding: 0, backgroundColor: 'rgba(179, 254, 254, 0.7)', borderWidth: 0 },
            data: [
                {
                    name: 'XXXX集团',
                    xgName: 'B1公司',
                    xgCount: '2',
                    nsrmc: 'XXXXXXXXXXXXXXXX',
                    tyshxydm: 'XXXXXXXXXXXXXXXXXXXXX',
                    ssdq: 'XXXXXXXXXXXXXX',
                    zgswjg: 'XXXXXXXXXXXXXXXXXXXX',
                    fddbr: 'XXX',
                    nsrzt: 'XXXXXXXXXXX',
                    value: [150, 66],
                },
                {
                    name: 'B1公司',
                    xgName: 'XXXX集团',
                    nsrmc: 'XXXXXXXXXXXXXXXX',
                    tyshxydm: 'XXXXXXXXXXXXXXXXXXXXX',
                    ssdq: 'XXXXXXXXXXXXXX',
                    zgswjg: 'XXXXXXXXXXXXXXXXXXXX',
                    fddbr: 'XXX',
                    nsrzt: 'XXXXXXXXXXX',
                    value: [90, 66],
                },
                {
                    name: 'B2公司',
                    xgName: 'XXXX集团',
                    xgCount: '1',
                    nsrmc: 'XXXXXXXXXXXXXXXX',
                    tyshxydm: 'XXXXXXXXXXXXXXXXXXXXX',
                    ssdq: 'XXXXXXXXXXXXXX',
                    zgswjg: 'XXXXXXXXXXXXXXXXXXXX',
                    fddbr: 'XXX',
                    nsrzt: 'XXXXXXXXXXX',
                    value: [210, 66],
                },
                {
                    name: 'B21公司',
                    xgName: 'B2公司',
                    nsrmc: 'XXXXXXXXXXXXXXXX',
                    tyshxydm: 'XXXXXXXXXXXXXXXXXXXXX',
                    ssdq: 'XXXXXXXXXXXXXX',
                    zgswjg: 'XXXXXXXXXXXXXXXXXXXX',
                    fddbr: 'XXX',
                    nsrzt: 'XXXXXXXXXXX',
                    value: [270, 66],
                },
            ],
        },
        {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            effect: { show: true, trailLength: 0, symbol: 'arrow', color: 'blue', symbolSize: 8 },
            lineStyle: { curveness: 0.2, color: '#aeaeae' },
            label: { show: false },
            data: [
                {
                    coords: [
                        [90, 66],
                        [150, 66],
                    ],
                },
                {
                    coords: [
                        [210, 66],
                        [150, 66],
                    ],
                },
                {
                    coords: [
                        [270, 66],
                        [210, 66],
                    ],
                },
            ],
        },
    ],
};
