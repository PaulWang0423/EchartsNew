option = {
    color: ['#ff0000', '#00cc66', '#1495eb'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['今日', '昨日']
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        min: 1530288000000,
        max: 1530288000000+24*3600*1000-15*60*1000,
        dateTimeLabelFormats:{
            day: '00:00',
            hour: '%H:00',
        },
        interval:1000*60*60*2,
        labels: {
            rotation: 0,
            step: 2
          }
    },
    yAxis: {
        type: 'value',
        name: '单位（KW）'
    },
    series: [{
            name: '今日',
            type: 'line',
            data: [1024799.3504,1032161.1393,1029349.2916,1028131.5969,1029013.64,1032259.4754,1033383.9009,1036510.9889,1037835.9735,1023443.354,1027563.8956,1032462.3099,1040666.9306,1044000.0854,1047658.6823,1050192.6707,1065327.222,1073442.1285,1070967.5011,1056862.7121,1062045.954,1061333.4512,1065718.9149,1072797.301,1070107.0054,1070632.1225,1064579.4278,1059315.0641,1060320.159,1062716.6849,1062517.7748,1063278.486,1065768.2577,1042748.3918,1047501.9748,1044960.3757,1050517.933,1043320.646,1041406.2019,1041355.1075,1042618.2953,1055113.3577,1054946.066,1054781.6278,1059107.1775,1057050.5749,1061864.9501,1062706.7206,1044813.511,1041013.4138,1036002.405,1032757.3466,1024106.04,994599.8229,1002525.9969,1004081.4551,1007552.3453,1011312.8359,1018202.083,1021108.407,1020172.1477,1014005.631,1020927.7002,1019050.0539,1019127.9956,1017187.5283,1022041.657,1025409.8391,1024615.7917,1023757.0238,1033802.9608,1031424.0309,1044101.3813,1040590.3351,1034316.3629,1046045.0764,1044857.6076,1040468.8835,1041614.9836,1036844.6037,1034479.5139,1027758.1707,1029549.7169,1031579.7153,1043193.4697,1048091.3359,1056164.1167,1050965.4298,1055597.5701,1045982.4193,1037649.1931,1044697.2404,1044368.4139,1046683.3728,1051771.7976,1046578.633,1040968.7004,1042043.1067,1049160.2915,1054183.5635,1050772.7515,1051693.4007,1050252.8235,1047082.9571,1047299.1968,1040757.5701,1045794.934,1050032.5889,1059243.52,1059748.1977,1060610.1471,1062236.9335,1062238.1466,1069064.1425,1072067.5848,1070269.6667,"-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"]
        },
        {
            name: '昨日',
            type: 'line',
            data: [1036073.1436,1062975.6884,1061914.4608,1063761.62,1064885.5324,1059362.8425,1065761.4606,1074431.8591,1061300.9497,1068892.3669,1078687.9781,1084941.8294,1090904.1839,1088520.0282,1085430.6307,1093189.415,1100543.7707,1094593.5687,1082967.8805,1080549.6092,1076409.2928,1088472.4165,1092917.2828,1093250.7909,1091572.6051,1080996.8852,1071280.0653,1085838.0759,1091582.8383,1096979.4057,1103644.3496,1094587.4824,1090468.393,1096580.5983,1093593.28,1076363.8005,1072031.7659,1067756.358,1081605.5876,1076255.5025,1073703.4456,1081872.873,1067908.8313,1075955.3735,1083568.1574,1084789.5349,1072176.5927,1071454.2569,1069052.0544,1063867.2063,1074610.3793,1069605.6534,1062205.7604,1059013.0024,1059039.2453,1064549.3185,1070150.3017,1066922.8455,1077557.445,1080434.4146,1084087.5055,1078104.0493,1074035.5266,1080182.0691,1069504.0942,1074621.1481,1069943.1529,1069051.4314,1069600.9373,1056983.4793,1042057.7242,1046582.0175,1049460.8076,1045148.2868,1047924.1543,1034875.1508,1031004.8679,1029653.5632,1021375.9297,1025993.7725,1018827.5131,1016645.7158,1025004.2871,1029714.7977,1042295.0721,1042155.8421,1030014.4613,1028937.0488,1032983.2465,1037220.1721,1032595.5412,1043752.8435,1047626.3156,1041944.4418,1048343.8731,1043798.0043,1047989.2573,1049432.3285,1054902.6499,1060188.9748,1067812.1392,1073672.6959,1079256.7117,1081803.6873,1083104.264,1096196.5707,1097395.6035,1088306.3589,1097888.3014,1098610.2945,1084664.7799,1086612.0318,1082675.4561,1083188.935,1086944.2132,1091658.3713,1090274.9906,1097795.9962,1103375.1967,1099585.1284,1107297.2392,1102899.3413,1106049.7708,1111432.2061,1108454.1516,1113280.4095,1116919.5017,1117443.2226,1119225.3428,1113226.7596,1117374.8574,1104953.2012,1097766.3069,1091396.1653,1088997.2373,1093428.5983,1086986.5662,1089345.7286,1081904.1626,1078266.13,1072910.3671,1071083.603,1073111.6109,1071880.5743,1080491.1342,1080253.3285,1087668.8525,1105451.6671,1099259.6299,1111410.5032,1109170.5134,1117719.928,1124175.7164,1128224.9194,1120433.3911,1120225.4433,1120968.4993,1121884.4269,1133806.1442,1143805.2626,1140395.9774,1146944.3923,1142131.1342,1145541.8406,1145567.9106,1141429.9421,1143021.8314,1135570.2359,1145818.6459,1143631.6884,1135763.7835,1135409.7933,1135610.7918,1143193.0537,1143422.0217,1145594.8675,1145197.3143,1137470.7649,1146782.4137,1147523.0375,1149865.5622,1147182.5113,1138865.603,1145953.9774,1139742.3907,1124208.9157,1123141.3801,1127701.1615,1130482.7443,1114687.0473,1120147.9399,1128068.3279,1115126.865,1108215.1057,1082608.4293,1081001.365,1078215.3929,1076143.1696,1081232.6031,1090454.4037,1083922.6021,1102471.6229,1100634.9836,1086355.5022,1069478.8713,1059613.6468,1051651.6418,1028314.0487,1029497.7618,1035459.3335,1030167.5026,1024051.1365,1018442.9274,1021779.0449,1022370.3006,1029824.2573,1033023.3194,1041213.3389,1043247.842,1043517.78,1052230.1139,1060412.2875,1057925.8114,1065781.5917,1065527.1339,1066982.1641,1058871.6702,1059341.2977,1063305.8473,1065794.603,1062598.6713,1068314.2932,1071026.9953,1068871.1656,1064402.2213,1076010.4229,1076619.6273,1078748.0434,1074330.3785,1075572.7078,1063098.4726,1063940.2824,1065958.4171,1067864.1553,1061369.7394,1062622.3958,1064343.0728,1063271.1879,1066464.3086,1066116.4256,1071631.2543,1074187.4134,1079410.3058,1093718.3126,1098081.7264,1080708.8967,1082345.1234,1081898.9568,1085644.2874,1077855.9501,1073059.0291,1079074.1059,1080423.4991,1073773.2024,1080275.0377,1073448.2365,1063214.6794,1068699.0748,1060837.7551,1071698.7866,1072113.7942,1072144.8023,1076363.245,1073002.6292,1082681.3872,1090300.9838,1088620.5616,1089390.7171,1091133.1397,1094287.0536,1095492.2435,1089343.0677,1086005.9749,1083165.7945,1068036.7995,1067807.8475,1071175.7918,1066601.4763,1060152.5443]
        }
    ]
};