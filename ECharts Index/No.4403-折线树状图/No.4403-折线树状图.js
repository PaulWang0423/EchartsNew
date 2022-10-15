let data = {
        'name': 'flare',
        'id': 0,
        'children': [
          {
            // 'id': 1,
            // // 'symbol': 'image://data:image/png;base64,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',
            // 'name': 'analytics',
            // 'children': [
            // {
            'name': 'cluster',
            'children': [
              {'name': 'AgglomerativeCluster', 'value': 3938},
              {'name': 'CommunityStructure', 'value': 3812},
              {'name': 'HierarchicalCluster', 'value': 6714},
              {'name': 'MergeEdge', 'value': 8525}
            ]
          },
          {
            'name': 'graph',
            'children': [
              {'name': 'BetweennessCentrality', 'value': 3534},
              {'name': 'LinkDistance', 'value': 5731},
              {'name': 'MaxFlowMinCut', 'value': 7840},
              {'name': 'ShortestPaths', 'value': 5914},
              {'name': 'SpanningTree', 'value': 3416}
            ]
          },
          {
            'name': 'optimization',
            'children': [
              {'name': 'AspectRatioBanker', 'value': 7074}
              // ]
              // }
            ]
          },
          {
            'name': 'animate',
            // 'symbol': 'image://data:image/png;base64,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',
            'children': [
              {'name': 'Easing', 'value': 17010},
              {'name': 'FunctionSequence', 'value': 5842},
              {
                'name': 'interpolate',
                'children': [
                  {'name': 'ArrayInterpolator', 'value': 1983},
                  {'name': 'ColorInterpolator', 'value': 2047},
                  {'name': 'DateInterpolator', 'value': 1375},
                  {'name': 'Interpolator', 'value': 8746},
                  {'name': 'MatrixInterpolator', 'value': 2202},
                  {'name': 'NumberInterpolator', 'value': 1382},
                  {'name': 'ObjectInterpolator', 'value': 1629},
                  {'name': 'PointInterpolator', 'value': 1675},
                  {'name': 'RectangleInterpolator', 'value': 2042}
                ]
              },
              {'name': 'ISchedulable', 'value': 1041},
              {'name': 'Parallel', 'value': 5176},
              {'name': 'Pause', 'value': 449},
              {'name': 'Scheduler', 'value': 5593},
              {'name': 'Sequence', 'value': 5534},
              {'name': 'Transition', 'value': 9201},
              {'name': 'Transitioner', 'value': 19975},
              {'name': 'TransitionEvent', 'value': 1116},
              {'name': 'Tween', 'value': 6006}
            ]
          },
          {
            'name': 'data',
            'children': [
              {
                'name': 'converters',
                'children': [
                  {'name': 'Converters', 'value': 721},
                  {'name': 'DelimitedTextConverter', 'value': 4294},
                  {'name': 'GraphMLConverter', 'value': 9800},
                  {'name': 'IDataConverter', 'value': 1314},
                  {'name': 'JSONConverter', 'value': 2220}
                ]
              },
              {'name': 'DataField', 'value': 1759},
              {'name': 'DataSchema', 'value': 2165},
              {'name': 'DataSet', 'value': 586},
              {'name': 'DataSource', 'value': 3331},
              {'name': 'DataTable', 'value': 772},
              {'name': 'DataUtil', 'value': 3322}
            ]
          }
        ]
      }
option = {
    ttooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',

            data: [data],

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',
            // lineStyle: { color: '#000',
            //   width: 1,
            //   curveness: 1,
            //   type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
            // },
            initialTreeDepth: undefined,
            lineStyle: {
              width: 2
            },

            edgeShape: 'polyline',
            edgeForkPosition: '63%',
            // initialTreeDepth: 3,

            symbolSize: 10,
            // symbolOffset: [0, '50%'],
            // symbolRotate: 50,
            // roam: true,
            roam: 'move',
            // symbol: function (value, params) {
            //   console.log('symbol callback:', value, params)
            //   if (value === 17010) {
            //     return 'image://data:image/png;base64,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'
            //   }
            // },
            // symbol: require('@/assets/image/voltmeter.png'),
            // symbol: `image://${this.NormalVoltmeter}`,
            label: {
              normal: {
                // position: 'left',
                position: 'bottom',
                verticalAlign: 'middle',
                // align: 'right',
                fontSize: 10
              }
            },

            leaves: {
              label: {
                normal: {
                  // position: 'right',
                  position: 'bottom',
                  verticalAlign: 'middle'
                  // align: 'left'
                }
              }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
};