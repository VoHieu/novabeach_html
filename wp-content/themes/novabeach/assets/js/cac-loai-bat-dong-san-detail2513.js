(function () {
    $(document).ready(function () {
        slickFloatOther();
        var zoom_map = $('#zoom-map-detail');
        var zoom = zoom_map.find('.panzoom-detail').panzoom({
            $zoomIn: zoom_map.find(".zoomIn-detail"),
            $zoomOut: zoom_map.find(".zoomOut-detail"),
            startTransform: "scale(1)",
            increment: 0.1,
            minScale: 1,
            maxScale: 4,
            contain: 'invert',
        }).panzoom('zoom');
        zoom.panzoom("setMatrix", [1, 0, 0, 1, 0.164063, 5.82813]);
    });


        function slickFloatOther() {
            if ($('#mod-cac-loai-bat-dong-san-detail').length) {
                $('#mod-cac-loai-bat-dong-san-detail .float-other .row').slick({
                    slidesToShow: 6,
                    autoplaySpeed: 2000,
                    cssEase: 'ease-out',
                    dots: true,
                    infinite: false,
                    speed: 300,
                    autoplay: true,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 541,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 415,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }

                    ]
                });
            }

        }

})();