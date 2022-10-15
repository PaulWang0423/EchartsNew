var uploadedDataURL = "data:image/png;base64,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";
let data = [{
    name: '教育经费总额',
    value: '1856万元',
}, {
    name: '图书馆藏书',
    value: '785万册',
}, {
    name: '固定资产总值',
    value: '2501.25万元',
}, {
    name: '占地面积',
    value: '1298.25㎡',
}, {
    name: '开设课程门数',
    value: '3598门',
}]

let children = [{
    type: 'image',
    style: {
        width: 360,
        height: 344,
        image: uploadedDataURL,
        fill: 'red'
    }
}]

let position = [{
    x: 30,
    y: 0,
}, {
    x: 420,
    y: 60,
}, {
    x: 400,
    y: 230
}, {
    x: 0,
    y: 280
}, {
    x: -100,
    y: 130
}]
data.map((item, index) => {
    children = [...children, {
        type: 'text',
        cursor: 'normal',
        style: {
            fill: 'rgba(0, 186, 255, 1)',
            text: `${item.value}\n\n`,
            textAlign: 'center',
            fontSize: 20,
            x: position[index].x,
            y: position[index].y
        }
    }, {
        type: 'text',
        cursor: 'normal',
        style: {
            fill: 'rgba(195, 240, 255, 1)',
            text: `${item.name}`,
            textAlign: 'center',
            fontSize: 20,
            x: position[index].x,
            y: position[index].y + 40
        }
    }]
})
console.log(children)
option = {
    backgroundColor: '#051523',
    xAxis: {
        show: false,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        show: false
    },
    graphic: {
        elements: [{
            type: 'group',
            left: '10%',
            top: '20%',
            children: children
        }]
    },
    series: []
};