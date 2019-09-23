(function () {
    $(document).ready(function () {
        sclickPartner();
    });

function sclickPartner() {
    if ($('.wrap-slick-partner').length) {
        $('.wrap-slick-partner').slick({
            slidesToShow: 5,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            dots: true,
            infinite: false,
            speed: 300,
            autoplay: true,
            slidesToScroll: 1,
            responsive: [{
                        breakpoint: 1367,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    },
                {
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