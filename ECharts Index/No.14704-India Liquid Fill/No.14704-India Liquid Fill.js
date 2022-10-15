option = {
            backgroundColor: "#D2CCA1",

            series: [{
                waveAnimation: false,
                type: 'liquidFill',
                data: [1, 0.7, 0.4],
                radius: '100%',
                outline: {
                    show: false
                },
                toolbox: {
                    show: true,
                    itemSize: 50,
                    showTitle: false,
                    feature: {

                        saveAsImage: {
                            show: true,
                            title: 'Save',

                        }
                    }
                },
                color: ["#0000ff", "#ff8000", "#008000"],
                backgroundStyle: {
                    borderColor: '#50514F',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 50
                },
                shape: 'path:// m576.41 1100.4-17.38-25.229-14.016-41.487-10.091-17.94-5.6063-49.336-7.8489-19.622v8.9702l-12.895 12.334-22.425-20.743 17.94-1.1213-19.062-9.5308 2.8032-7.2882 21.865-2.8032-8.9701-24.668 5.0457-14.576h14.576l29.714-43.729 14.576-15.698 16.819 5.6063 7.2882 20.743 22.986 8.9701-11.773 11.213 30.274 19.622h12.334l21.304 8.9702 15.698 1.6819 19.622-4.4851 34.199-4.4851 21.304-10.091 6.7276 7.8489-17.38 13.455-5.0457 21.865-13.455 0.56064 1.6819 20.743-11.213-13.455-5.0457 4.4851-1.1213-12.334 7.2882-10.091-21.304-2.2425-4.4851-7.2883-12.334 0.56064-2.8032 12.334 8.9702 8.9702 0.56063 24.107-20.743 2.2426 2.2426 8.4095-25.789 20.743 0.56063 5.0457-40.366 26.35-1.6819 21.865 2.8032 7.8488-7.2882 7.2883 1.6819 12.334-3.9244 21.304-8.9701 12.334z',
                label: {
                    normal: {
                        position: ['40%', '45%'],
                        formatter: function () {
                            return 'India';
                        },
                        textStyle: {
                            fontSize: 50,
                            color: '#50514F'
                        }
                    }
                }
            }]

        };