(function () {
    $(document).ready(function () {
        changeTextSlick();
        triggerClickSection4();
        clickRestartSlick();
        optionsSlick();
    });


    function optionsSlick() {
        var options = ({
            dots: false,
            infinite: false,
            slidesPerRow: 3,
            rows: 2,
            arrows: true,
            responsive: [{
                    breakpoint: 668,
                    settings: {
                        slidesPerRow: 2,
                    }
                },
                {
                    breakpoint: 415,
                    settings: {
                        slidesPerRow: 1,
                        rows: 1,
                    }
                }
            ]
        });


       $('#mod-thu-vien .tab-content .row-image1').slick(options);
       $('#mod-thu-vien .tab-content .row-image2').slick(options);
       $('#mod-thu-vien .tab-content .row-image3').slick(options);

    }


    function clickRestartSlick() {
        $('#mod-thu-vien .nav-link').on('click', function() {
           $('#mod-thu-vien .tab-content .row').slick('unslick');
           
            $('#mod-thu-vien .btn-arrow svg:first-child').removeClass('active');
            $('#mod-thu-vien .btn-arrow svg:last-child').removeClass('active');

            setTimeout(function() {
                optionsSlick();
            }, 500);
        });
    }



    function changeTextSlick() {
        $('#mod-thu-vien .tab-content .row-image1').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            dataId = $(slick.$slides[currentSlide]);
            setTimeout(function () {
                // sectionForEach();

                if ($('#mod-thu-vien .row-image1 .slick-prev').hasClass('slick-disabled')) {
                    $('#mod-thu-vien .tab-pane:first-child  .btn-arrow svg:first-child').removeClass('active');
                } else {
                    $('#mod-thu-vien .tab-pane:first-child  .btn-arrow svg:first-child').addClass('active');
                }


                if ($('#mod-thu-vien .row-image1 .slick-next').hasClass('slick-disabled')) {
                    $('#mod-thu-vien .tab-pane:first-child  .btn-arrow svg:last-child').addClass('active');
                } else {
                    $('#mod-thu-vien .tab-pane:first-child  .btn-arrow svg:last-child').removeClass('active');
                }
            }, 500);

        });

        $('#mod-thu-vien .tab-content .row-image2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            dataId = $(slick.$slides[currentSlide]);
            setTimeout(function () {
                // sectionForEach();

                if ($('#mod-thu-vien .row-image2 .slick-prev').hasClass('slick-disabled')) {
                    $('#mod-thu-vien .tab-pane:nth-child(2)  .btn-arrow svg:first-child').removeClass('active');
                } else {
                    $('#mod-thu-vien .tab-pane:nth-child(2)  .btn-arrow svg:first-child').addClass('active');
                }


                if ($('#mod-thu-vien .row-image2 .slick-next').hasClass('slick-disabled')) {
                    $('#mod-thu-vien .tab-pane:nth-child(2)  .btn-arrow svg:last-child').addClass('active');
                } else {
                    $('#mod-thu-vien .tab-pane:nth-child(2)  .btn-arrow svg:last-child').removeClass('active');
                }
            }, 500);

        });


        $('#mod-thu-vien .tab-content .row-image3').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            dataId = $(slick.$slides[currentSlide]);
            setTimeout(function () {
                // sectionForEach();

                if ($('#mod-thu-vien .row-image3 .slick-prev').hasClass('slick-disabled')) {
                    $('#mod-thu-vien .tab-pane:last-child  .btn-arrow svg:first-child').removeClass('active');
                } else {
                    $('#mod-thu-vien .tab-pane:last-child  .btn-arrow svg:first-child').addClass('active');
                }


                if ($('#mod-thu-vien .row-image3 .slick-next').hasClass('slick-disabled')) {
                    $('#mod-thu-vien .tab-pane:last-child  .btn-arrow svg:last-child').addClass('active');
                } else {
                    $('#mod-thu-vien .tab-pane:last-child  .btn-arrow svg:last-child').removeClass('active');
                }
            }, 500);

        });
    }

    function triggerClickSection4() {
        $('#mod-thu-vien .tab-pane:first-child  .btn-arrow svg:first-child').on('click', function () {
            $('#mod-thu-vien .row-image1 .slick-prev').trigger('click');
        });
        $('#mod-thu-vien .tab-pane:first-child .btn-arrow svg:last-child').on('click', function () {
            $('#mod-thu-vien .row-image1 .slick-next').trigger('click');
        });

        $('#mod-thu-vien .tab-pane:nth-child(2)  .btn-arrow svg:first-child').on('click', function () {
            $('#mod-thu-vien .row-image2 .slick-prev').trigger('click');
        });
        $('#mod-thu-vien .tab-pane:nth-child(2) .btn-arrow svg:last-child').on('click', function () {
            $('#mod-thu-vien .row-image2 .slick-next').trigger('click');
        });

        $('#mod-thu-vien .tab-pane:last-child  .btn-arrow svg:first-child').on('click', function () {
            $('#mod-thu-vien .row-image3 .slick-prev').trigger('click');
        });
        $('#mod-thu-vien .tab-pane:last-child .btn-arrow svg:last-child').on('click', function () {
            $('#mod-thu-vien .row-image3 .slick-next').trigger('click');
        });
    }

})();