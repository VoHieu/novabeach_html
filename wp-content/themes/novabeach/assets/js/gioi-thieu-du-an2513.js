(function() {
    $(document).ready(function() {
        scrollContent();
        unitExcutive();

        if ($('#mymap')) {
            zoomSmooth();
        }
        if ($(window).width() <= 991) {
            scrolldestroySclick();
            slickDistance();
        }else {
            unslickDis();
            scrollSclick();
        }
        window.addEventListener('resize', bzDebounce(function () {
            if($(window).width() <= 991) {
                scrolldestroySclick();
                slickDistance();
            }else {
                unslickDis();
                scrollSclick();
            }
        }, 250));
    });

    function bzDebounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };


    function scrollSclick() {
        $(".col-md-parents").mCustomScrollbar({
            axis: "y" // vertical and horizontal scrollbar
        });
    }

    function scrolldestroySclick() {
        $(".col-md-parents").mCustomScrollbar("destroy");
    }


    ("destroy");
    function zoomSmooth() {
        var options = ({
            width: '100%',
            height: '100%',
            max_WIDTH: 1920,
            responsive: true,
            ratio: 0.1,
            zoom_MIN: 0,
            zoom_MAX: 400,
            speed: 1,
            initial_ZOOM: 0,
            pan_LIMIT_BOUNDARY: "YES",
            animation_SMOOTHNESS: 1,
            animation_SPEED_ZOOM: 1,
            animation_SPEED_PAN: 1,
            button_SIZE: 22,
            button_ALIGN: "bottom center",
            button_AUTO_HIDE: false,
            button_AUTO_HIDE_DELAY: 2.5,
        });

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            options.height = '280px';
        }

        $('#mymap').smoothZoom(options);

    }

  
    function scrollContent() {
        $("#mod-gioi-thieu-du-an .development-unit .content").mCustomScrollbar({
            axis:"y" // horizontal scrollbar
        });
    }

    function slickDistance() {
        $('#mod-gioi-thieu-du-an .map-project .gr-row-present .col-md-parents').slick({
            dots: true,
            infinite: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            autoplay: false,
            responsive: [{
                    breakpoint: 1281,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 541,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }

            ]

        });
    }


    function unslickDis() {

         if ($('#mod-gioi-thieu-du-an .map-project .gr-row-present .col-md-parents').hasClass('slick-initialized')) {
             $('#mod-gioi-thieu-du-an .map-project .gr-row-present .col-md-parents').unslick();
         }
    }

    function unitExcutive() {
        $('#mod-gioi-thieu-du-an .gr-unit').slick({
            dots: true,
            infinite: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            autoplay: false,
            responsive: [
                {
                    breakpoint: 541,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }

            ]

        });
    }

    function bzDebounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    window.addEventListener('resize', bzDebounce(function () {
    }, 250));


   

   
})();