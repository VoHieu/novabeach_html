(function () {
    $(document).ready(function () {
        if ($('#mod-single .slick-news').length) {
            slickRelateSingle();
            changeTextSlick();
            triggerClickSlickSingle();
        }
    });

    function slickRelateSingle() {
        $('#mod-single .slick-news').slick({
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            infinite: false,
            responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });
    }

    function changeTextSlick() {
        $('#mod-single .slick-news').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            dataId = $(slick.$slides[currentSlide]);
            setTimeout(function () {
                if ($('#mod-single .slick-prev').hasClass('slick-disabled')) {
                    $('#mod-single .btn-arrow svg:first-child').removeClass('active');
                } else {
                    $('#mod-single .btn-arrow svg:first-child').addClass('active');
                }


                if ($('#mod-single .slick-next').hasClass('slick-disabled')) {
                    $('#mod-single .btn-arrow svg:last-child').addClass('active');
                } else {
                    $('#mod-single .btn-arrow svg:last-child').removeClass('active');
                }
            }, 500);



        });
    }

    function triggerClickSlickSingle() {
        $('#mod-single .btn-arrow svg:first-child').on('click', function () {
            $('#mod-single .slick-prev').trigger('click');
        });
        $('#mod-single .btn-arrow svg:last-child').on('click', function () {
            $('#mod-single .slick-next').trigger('click');
        });
    }
})();