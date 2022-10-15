option = {
    geo3D: {
        map: 'world',
        lambertMaterial: {
            detailTexture: '/asset/get/s/data-1491896059428-B1QbPbq6e.jpg',
            textureTiling: 10
        },

        postEffect: {
            enable: true,
            SSAO: {
                enable: true,
                radius: 1
            }
        },
        groundPlane: {
            show: true
        },
        light: {
            main: {
                intensity: 1,
                shadow: true
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
            }
        },
        viewControl: {
            distance: 50
        },

        itemStyle: {
            borderColor: '#000',
            borderWidth: 0.5
        },
        

        regionHeight: 1.0
    }
}