       var option = {
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['东四','天坛','官园','万寿西宫','奥体中心','农展馆','万柳','北部新区','植物园','丰台花园','云岗','古城','房山','大兴','亦庄','通州','顺义','昌平','门头沟','平谷','怀柔','密云','延庆','定陵','八达岭','东高村','琉璃河','前门','永定门内','西直门北','南三环','东四环']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
    {name: '东四', type: 'line', stack: '总量', data: [153, 153, 155, 160, 167, 173, 174, 177, 179, 182, 186, 189, 193, 201, 208, 216, 224, 233, 242, 251, 259, 267, 275, 287]},
    {name: '天坛', type: 'line', stack: '总量', data: [156, 161, 162, 162, 163, 168, 173, 176, 179, 181, 184, 186, 190, 196, 202, 209, 217, 225, 234, 242, 250, 257, 265, 275]},
    {name: '官园', type: 'line', stack: '总量', data: [142, 143, 144, 146, 151, 156, 159, 161, 166, 170, 172, 175, 178, 183, 188, 195, 201, 208, 215, 222, 229, 236, 240, 243]},
    {name: '万寿西宫', type: 'line', stack: '总量', data: [180, 184, 183, 183, 184, 188, 192, 194, 198, 201, 202, 204, 207, 210, 214, 218, 225, 232, 240, 249, 258, 267, 276, 287]},
    {name: '奥体中心', type: 'line', stack: '总量', data: [116, 117, 121, 126, 128, 131, 134, 139, 142, 143, 146, 148, 152, 159, 167, 177, 188, 199, 208, 216, 224, 233, 243, 257]},
    {name: '农展馆', type: 'line', stack: '总量', data: [160, 165, 172, 179, 186, 189, 189, 190, 193, 196, 200, 203, 208, 216, 220, 224, 229, 240, 249, 259, 270, 282, 294, 307]},
    {name: '万柳', type: 'line', stack: '总量', data: [132, 133, 134, 136, 138, 140, 142, 145, 147, 149, 150, 152, 154, 157, 161, 164, 168, 167, 171, 176, 182, 187, 190, 200]},
    {name: '北部新区', type: 'line', stack: '总量', data: [134, 135, 137, 140, 143, 146, 148, 151, 153, 155, 158, 159, 159, 161, 164, 169, 173, 176, 180, 184, 188, 191, 195, 198]},
    {name: '植物园', type: 'line', stack: '总量', data: [98, 99, 100, 101, 103, 105, 107, 110, 113, 117, 120, 122, 123, 125, 127, 128, 130, 131, 132, 135, 140, 143, 148, 155]},
    {name: '丰台花园', type: 'line', stack: '总量', data: [188, 190, 190, 190, 190, 192, 196, 199, 202, 203, 205, 207, 209, 212, 214, 214, 216, 222, 229, 236, 242, 249, 256, 262]},
    {name: '云岗', type: 'line', stack: '总量', data: [154, 156, 157, 157, 159, 161, 163, 165, 167, 169, 171, 174, 177, 180, 183, 187, 192, 198, 204, 211, 218, 225, 232, 241]},
    {name: '古城', type: 'line', stack: '总量', data: [126, 128, 129, 129, 130, 132, 134, 134, 135, 137, 140, 143, 146, 148, 150, 152, 153, 156, 165, 175, 187, 201, 209, 216]},
    {name: '房山', type: 'line', stack: '总量', data: [185, 186, 187, 187, 187, 187, 187, 188, 189, 191, 193, 195, 198, 201, 202, 205, 210, 216, 222, 229, 234, 240, 250, 261]},
    {name: '大兴', type: 'line', stack: '总量', data: [256, 261, 269, 275, 278, 281, 287, 293, 298, 299, 301, 301, 302, 305, 309, 314, 321, 328, 339, 349, 359, 370, 380, 391]},
    {name: '亦庄', type: 'line', stack: '总量', data: [197, 202, 206, 210, 214, 218, 219, 220, 221, 222, 224, 228, 233, 240, 247, 254, 261, 269, 278, 288, 297, 308, 318, 326]},
    {name: '通州', type: 'line', stack: '总量', data: [191, 200, 207, 213, 215, 218, 219, 222, 225, 228, 231, 235, 241, 252, 264, 276, 290, 301, 312, 325, 337, 350, 360, 368]},
    {name: '顺义', type: 'line', stack: '总量', data: [96, 99, 101, 103, 105, 107, 109, 110, 111, 113, 113, 115, 117, 123, 131, 141, 152, 167, 185, 204, 218, 234, 249, 264]},
    {name: '昌平', type: 'line', stack: '总量', data: [106, 109, 110, 113, 113, 113, 116, 114, 115, 119, 125, 127, 128, 130, 133, 137, 142, 148, 155, 161, 166, 173, 184, 193]},
    {name: '门头沟', type: 'line', stack: '总量', data: [97, 99, 99, 101, 102, 104, 105, 106, 107, 109, 108, 109, 110, 113, 116, 118, 119, 121, 123, 125, 127, 128, 130, 134]},
    {name: '平谷', type: 'line', stack: '总量', data: [114, 117, 120, 122, 125, 128, 130, 132, 135, 137, 139, 142, 146, 152, 162, 173, 185, 200, 213, 227, 238, 250, 260, 271]},
    {name: '怀柔', type: 'line', stack: '总量', data: [65, 67, 69, 71, 73, 76, 78, 80, 83, 85, 87, 89, 92, 95, 100, 107, 115, 122, 132, 149, 167, 182, 195, 205]},
    {name: '密云', type: 'line', stack: '总量', data: [70, 72, 73, 75, 77, 79, 81, 83, 85, 86, 88, 90, 91, 94, 99, 107, 115, 124, 136, 152, 168, 183, 195, 207]},
    {name: '延庆', type: 'line', stack: '总量', data: [114, 115, 118, 120, 121, 124, 125, 127, 129, 130, 132, 135, 137, 139, 142, 145, 148, 152, 154, 158, 160, 164, 167, 176]},
    {name: '定陵', type: 'line', stack: '总量', data: [92, 95, 96, 99, 102, 105, 108, 110, 110, 111, 114, 113, 113, 116, 117, 119, 123, 128, 134, 139, 143, 147, 153, 158]},
    {name: '八达岭', type: 'line', stack: '总量', data: [67, 68, 68, 69, 69, 71, 73, 76, 78, 80, 82, 85, 88, 91, 95, 99, 102, 104, 106, 109, 113, 117, 121, 126]},
    {name: '东高村', type: 'line', stack: '总量', data: [174, 179, 184, 189, 194, 199, 202, 206, 210, 214, 218, 223, 228, 237, 247, 256, 265, 278, 293, 307, 318, 327, 335, 342]},
    {name: '琉璃河', type: 'line', stack: '总量', data: [273, 270, 269, 268, 267, 265, 263, 261, 260, 258, 256, 257, 258, 261, 264, 270, 277, 281, 285, 291, 297, 300, 302, 305]},
    {name: '前门', type: 'line', stack: '总量', data: [166, 168, 167, 167, 173, 179, 182, 185, 187, 189, 192, 195, 199, 203, 208, 215, 223, 231, 240, 249, 259, 267, 277, 290]},
    {name: '永定门内', type: 'line', stack: '总量', data: [180, 183, 183, 183, 187, 194, 198, 200, 202, 204, 205, 207, 211, 215, 219, 227, 234, 242, 250, 260, 270, 278, 288, 300]},
    {name: '西直门北', type: 'line', stack: '总量', data: [133, 134, 137, 142, 147, 150, 153, 157, 162, 165, 168, 171, 175, 181, 188, 196, 203, 205, 208, 217, 227, 234, 239, 246]},
    {name: '南三环', type: 'line', stack: '总量', data: [199, 202, 202, 201, 201, 204, 208, 209, 211, 213, 214, 216, 219, 222, 226, 233, 240, 246, 255, 266, 276, 286, 297, 308]},
    {name: '东四环', type: 'line', stack: '总量', data: [158, 164, 171, 179, 185, 189, 189, 190, 193, 196, 199, 203, 209, 217, 225, 235, 244, 256, 266, 278, 291, 305, 318, 332]}
]
            };