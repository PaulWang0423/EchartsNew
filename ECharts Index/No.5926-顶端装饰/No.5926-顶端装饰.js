const datas = [95, 88, 80, 74, 58, 47, 40]
// 图片可直接在页面引入
const imgs1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAsCAYAAAA5KtvpAAAE2klEQVRoQ92ZXWwUVRTH//9ZVlNKTfqASIIJTUQfiCSIJj6AD9QXY4mo0OxsayI81FjL7vaFiPGjRmLVqO0sBC2Jklh3Z9OqQbT6YI0h1Be0viAmfiSKNvpAkQdaCNKdY3ZnWbpfs3d2ZzZp93Huveec35z/3HvPWaLBP4l1PQTLOpp1q2k9HE582cgQ2EhnGV8S0f8CZJ3tlzOMm7c3MobGA0dDv0Ow3ubFHzRSbcsbOKbrsCRpS5phDpvm8gaO6mMQ2W1nmOM0zM5lCyyx0C5YGC8ApNZJI1n4zMc30LBvWA7sWY35K2cBrC7iOY/mpo0cPHbeR8686cYBL5ZyMVkDpc1GnIsSDe+GWGOOGfRJ2iV8fp+LDlIu5vdF2iV8BQ+I32ikNnj5LYmTlBsgbYmGfoXgjvxFJ59yyq0Q/Adoz2PrzsPs7EzXC64k5RJob3ZtGRsLYOp4H2AdzJz4AP/NXmWv+5OYvh2WfJ17E9PQAj0c/vCHWqFdSNlzaUus+x5Y6aOAbMncZoHgesZH/7Qvd7mfjPQEcfbSLCC35B6lQR5Ca+sLHDgy5xbclZQ9krYM9K7CxYuvQGQfgEDO7CnGUw9cd1FwLElEHwdkV6F/ziDAPg4lP1WFrknKdUpb+sOPIC2HbxQmeYNPM556tzxwLPwkLOtYWTDyOG7W9vGNxIwTeB1Srknasr9rHa5ahyCyszQuXkNzcC0HP7hQHjiqr4HIP4ulXmRkrtqmVpeUXUi7aFNaVT5J+JxGasfisZKblkRDpyG4z1m+nAb4FOPJ6cXzPJGygrQlEt4CyEhuU6ocaplqrAyw/iJEXlb4Xgs2NVdSXtkMNDUDV+aBy/PVXOUvJBU2pfLryXkEV6zhm6MFDkqBs2/P+r5aFDfG7U0NlnTlyz6nxRs3A0/0AU0rgckTwGcK5TA5Do2JCptSBW9MMG52lwim+IGIEFH9bwC3qUMrzGxuAbZ3AO07MnWwvUAVWMF86RTtYcaTX1QFzkyQiP4eIHtr8lNuUXcvsPl+YEWwcNQvYHIWrXet5cDAgiJw6FEAn3gCrGnAUMI2NT8HnEgCeo+/GSaP0DCfKRd/2XpY9u9twdXLsxDcVDd0BvjgCHD6JPDNBLCwALxqd2l9k7QW2MrhxLfKwDlZfwXIg3UDZwxkpLxwzTaV+ZZ9BeY5GMk2kuIOOKbHYMmQJ8CLjfgPPMi4+VyluCu2eCQS3gBYvyw94ODdjI/+6BrYlnXoZwB3egrtZ4bJMzTMTU7xOjbxJBp+G2L1Lx1g7VkayddrB450tQPpySUCLAhqbXwrea524ExT4KdLFyDS4hm0X5Imp2iY26rFWbUvLVH9I4g8Xs2Q8rhfwEBBoV/TppU7j/cA8r4yULWJvgCXFvq1A1dvClRDLBz3A5icoGF2qARSVdLZLCs1BVTc+XTTcvG3qxpwJPQSgAFFJOdpXme4QqFfs6SzGe4P3Ys0vvME2GsjRJJGqkvVrFqG/WoKqEbpNE9DB4dTE6qmlIBzu7W3TQHVCB1vEZUL/boknQWOhR+DZX3sRZye2SDeoZHqdWNPPcNeNgXcROg4l9sYN6fcmFMGzh1PkxC0u3Hg31znQr9uSduy9qkpUMtbIV+jYR5wu9Rdhv1qCriNOjM/ENjEocQZt0v/B0T/OcMiy/hIAAAAAElFTkSuQmCC'
const imgs2 = 'data:image/png;base64,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'
const imgs3 = 'data:image/png;base64,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'

function renderItem(params, api) {
    const top = api.coord([api.value(0), api.value(1)]);
    const imgList = [imgs1, imgs2, imgs3];

    let groups = {
        type: 'image',
        style: {
            image: '',
            x: top[0] - 17,
            y: top[1] - 25,
            width: 35,
            height: 26
        }
    }
    groups.style.image = imgList[params.dataIndex];
    return groups;
}

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            data: datas,
            type: 'bar',
            barWidth: 30,
            z: 10,
            itemStyle: {
                color: function(params) {
                    let colorList = [
                        '#FF6E58',
                        '#FF943C',
                        '#FFC137',
                        '#11B05D',
                        '#11B05D',
                        '#11B05D',
                        '#11B05D',
                        '#11B05D',
                        '#11B05D',
                        '#11B05D'
                    ];
                    return colorList[params.dataIndex];
                }
            }
        },
        {
            data: [95, 88, 80],
            type: 'custom',
            renderItem: renderItem,
        }
    ]
};