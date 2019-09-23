(function () {
    $(document).ready(function () {
        slickRelate();
        triggerClickSlick();
    });

    function slickRelate() {
        $('#mod-tin-tuc .news-relate .gr-slick').slick({
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            infinite: true,
            responsive: [
                {
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

    function triggerClickSlick() {
        $('#mod-tin-tuc .gr-btn img:first-child').on('click', function () {
            $('#mod-tin-tuc .news-relate .slick-prev').trigger('click');
        });
        $('#mod-tin-tuc .gr-btn img:last-child').on('click', function () {
            $('#mod-tin-tuc .news-relate .slick-next').trigger('click');
        });
    }
})();