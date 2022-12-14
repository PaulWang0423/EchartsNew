 xData =  [
            0,
            0.031,
            0.06,
            0.091,
            0.123,
            0.152,
            0.184,
            0.217,
            0.25,
            0.283,
            0.316,
            0.348,
            0.381,
            0.412,
            0.44,
            0.467,
            0.492,
            0.517,
            0.543,
            0.565,
            0.581,
            0.601,
            0.618,
            0.633,
            0.647,
            0.66,
            0.671,
            0.68,
            0.689,
            0.698,
            0.705,
            0.71,
            0.715,
            0.72,
            0.723,
            0.727,
            0.729,
            0.732,
            0.735,
            0.737,
            0.739,
            0.741,
            0.743,
            0.745,
            0.746,
            0.747,
            0.747,
            0.748,
            0.748,
            0.749,
            0.749,
            0.75,
            0.75,
            0.751,
            0.751,
            0.751,
            0.751,
            0.752,
            0.753,
            0.753,
            0.754,
            0.754,
            0.754,
            0.755,
            0.756,
            0.756,
            0.757,
            0.757,
            0.758,
            0.758,
            0.759,
            0.759,
            0.759,
            0.76,
            0.761,
            0.761,
            0.762,
            0.762,
            0.762,
            0.763,
            0.763,
            0.764,
            0.764,
            0.764,
            0.764,
            0.765,
            0.766,
            0.766,
            0.766,
            0.767,
            0.768,
            0.768,
            0.769,
            0.769,
            0.77,
            0.77,
            0.771,
            0.772,
            0.772,
            0.772
          ]
yData = [
            1,
            1,
            1,
            0.999,
            0.998,
            0.998,
            0.998,
            0.998,
            0.998,
            0.998,
            0.998,
            0.998,
            0.998,
            0.998,
            0.998,
            0.997,
            0.997,
            0.997,
            0.997,
            0.996,
            0.994,
            0.992,
            0.991,
            0.989,
            0.985,
            0.982,
            0.977,
            0.972,
            0.965,
            0.959,
            0.951,
            0.942,
            0.931,
            0.92,
            0.908,
            0.895,
            0.882,
            0.869,
            0.855,
            0.84,
            0.824,
            0.81,
            0.797,
            0.783,
            0.772,
            0.753,
            0.737,
            0.72,
            0.704,
            0.689,
            0.673,
            0.66,
            0.646,
            0.632,
            0.619,
            0.608,
            0.597,
            0.586,
            0.575,
            0.564,
            0.555,
            0.545,
            0.536,
            0.528,
            0.52,
            0.511,
            0.503,
            0.496,
            0.488,
            0.48,
            0.474,
            0.467,
            0.459,
            0.454,
            0.448,
            0.442,
            0.436,
            0.43,
            0.425,
            0.419,
            0.414,
            0.409,
            0.404,
            0.399,
            0.394,
            0.389,
            0.384,
            0.38,
            0.376,
            0.371,
            0.367,
            0.364,
            0.36,
            0.357,
            0.353,
            0.349,
            0.345,
            0.341,
            0.338,
            0.335
          ]

option = {
     tooltip: {
        trigger: 'axis'
      },
    xAxis: 
    {
        name:'recall',
        type: 'value',
        // splitNumber: 20,
        min: 0,
        max: 1,
        interval:0.05,
        splitLine: {
          show: true,
          interval: 0
        },
        axisLabel: {
            rotate: 0,
            show: true,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
        },
        splitLine: {
          show: true,
          interval: 0
        },
        min: 0,
        max: 1,
        interval:0.05
    },
    dataset: {
        source: [
            xData,
            yData
        ],
    },
    series: [{
        seriesLayoutBy: 'row',
        smooth: true,
        type: 'line'
    }]
};
