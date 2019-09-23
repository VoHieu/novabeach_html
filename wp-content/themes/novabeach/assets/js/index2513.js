(function () {
    $(document).ready(function () {
        // scrollToMenuMobile();
        fullPage();
        setTimeout(function() {
            var zoom_map = $('#zoom-map');
            var zoom = zoom_map.find('.panzoom').panzoom({
                $zoomIn: zoom_map.find(".zoomIn"),
                $zoomOut: zoom_map.find(".zoomOut"),
                startTransform: "scale(1)",
                increment: 0.1,
                minScale: 1,
                maxScale: 4,
                contain: 'invert',
            }).panzoom('zoom');
            zoom.panzoom("setMatrix", [1, 0, 0, 1, 0.164063, 5.82813]);
        }, 500);
        fancyboxSalespolicy();
        triggerClickSectionslickSection4_4();
        triggerClickSectionslickSection4_4_4();
        scrollContentSection4_4();
        slickSection4_4_4();
        slickSectionTwoThree();
        slickSection4_4();
        triggerClickSectionTwoThree();
        slickItemChildIn();
        slickItemParent();
        slickWrapItem4();
        fancybox();
        triggerClickSection4();
        animationPage();
        // scrollToRegister();
        if ($(window).width() <= 1199) {
            sclickPartner();
        } else {}
        window.addEventListener('resize', bzDebounce(function () {
            if ($(window).width() <= 1199) {
                sclickPartner();
            } else {}
        }, 250));
        // setTimeout(function() {
        //     sectionForEach();
        // }, 500);
        changeTextSlick();

        // countdownTimer();

    });

    function fancyboxSalespolicy() {
        $(".js-show-sales-policy a").attr("data-fancybox", "");
        $(".js-show-sales-policy a").attr("rel", "fancybox-gellary")
        $(".js-show-sales-policy a").attr("href", wp_vars["themeurl"] + "/assets/images/NovaBeach_CTBH_Final.pdf")
    }

    

    function slickSectionTwoThree() {
        $('#mod-index #section2 .gr-slick').slick({
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'ease-out',
            infinite: true,
            autoplay: false,
        });
    }

    function scrollContentSection4_4() {
        $('#mod-index #section4-4 .text').mCustomScrollbar({
            axis: "y" 
        });
    }

    function slickSection4_4() {
        $('#mod-index #section4-4 .gr-slick-4-4').slick({
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'ease-out',
            infinite: true,
            autoplay: false,
        });
    }

    function slickSection4_4_4() {
        $('#mod-index #section4-4-4 .gr-slick-4-4').slick({
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'ease-out',
            infinite: true,
            autoplay: false,
        });
    }

    function triggerClickSectionslickSection4_4_4() {
        $('#mod-index #section4-4-4 .gr-arrow img:first-child').on('click', function () {
            $('#mod-index #section4-4-4 .gr-slick-4-4 .slick-prev').trigger('click');
        });
        $('#mod-index #section4-4-4 .gr-arrow img:last-child').on('click', function () {
            $('#mod-index #section4-4-4 .gr-slick-4-4 .slick-next').trigger('click');
        });
    }

    function triggerClickSectionslickSection4_4() {
        $('#mod-index #section4-4 .gr-arrow img:first-child').on('click', function () {
            $('#mod-index #section4-4 .gr-slick-4-4 .slick-prev').trigger('click');
        });
        $('#mod-index #section4-4 .gr-arrow img:last-child').on('click', function () {
            $('#mod-index #section4-4 .gr-slick-4-4 .slick-next').trigger('click');
        });
    }
    function triggerClickSectionTwoThree() {
        $('#mod-index #section2 .gr-arrow img:first-child').on('click', function () {
            $('#mod-index #section2 .gr-slick .slick-prev').trigger('click');
        });
        $('#mod-index #section2 .gr-arrow img:last-child').on('click', function () {
            $('#mod-index #section2 .gr-slick .slick-next').trigger('click');
        });
    }
    function scrollToMenuMobile() {
        $('.menu-primary a').on('click', function(event) {
            event.preventDefault();
            var data_href = $(this).attr('data-href');
            $('html, body').animate({
              scrollTop: $(data_href).offset().top
            }, 1000)
        });
    }


    function countdownTimer() {
        // Set the date we're counting down to
        var countDownDate = new Date("Mar 16, 2019").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get todays date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            document.getElementById("input-day").innerHTML = days;
            document.getElementById("input-hour").innerHTML = hours;
            document.getElementById("input-minute").innerHTML = minutes;
            
            // If the count down is over, write some text 
            // if (distance < 0) {
            //     clearInterval(x);
            //         document.getElementById("demo").innerHTML = "EXPIRED";
            // }
        }, 1000);
    }



    function slickPartnerDestroy() {
        $('.wrap-slick-partner').slick('unslick');
    }

    function changeTextSlick() {
        $('.slick-section4').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            dataId = $(slick.$slides[currentSlide]);
            setTimeout(function() {
                // sectionForEach();

                if($('.slick-section4 .slick-prev').hasClass('slick-disabled') ){
                        $('#section4 .btn-arrow svg:first-child').removeClass('active'); 
                }else {
                    $('#section4 .btn-arrow svg:first-child').addClass('active'); 
                }


                if($('.slick-section4 .slick-next').hasClass('slick-disabled') ){
                    $('#section4 .btn-arrow svg:last-child').addClass('active'); 
                }else {
                    $('#section4 .btn-arrow svg:last-child').removeClass('active'); 
                }
            }, 500);

            
           
        });
    }
    

    function sectionForEach() {
        var i = 0;
        var y = 0;
        $("#section4 .slick-slide").each(function (entry) {
            if($(this).hasClass('slick-active')) {
                 $(this).find('.overload').addClass('hidden');
                 i = entry;
                 if($(window).width() > 835) {
                    y= i + 1;
                 }
            }else {
                $(this).find('.overload').removeClass('hidden');
            }
            if($(window).width() > 835) {
                $('#section4 .slick-slide:eq('+ y +')').find('.overload').addClass('hidden');
            }
            

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


    function fancybox() {
        $('[data-fancybox="gallery"]').fancybox({
            animationEffect: "zoom",
            helpers: {
                media: {}
            }
        });
    }

    function scrollToRegister() {
        $('header .register').on('click', function (event) {
            event.preventDefault();
            window.location.href = "http://novabeachcamranh.com.vn/#lastPage"
        });
        // $('.uudai-banhang').trigger('click');
    }


    function fullPage() {
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage', '9thpage', 'lastPage'],
            verticalCentered: true,
            menu: '#menu-sidebar',
            normalScrollElements: '.scrollable-element',
            parallax: true,
            parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },
            scrollingSpeed: 1000,

        });
        if ($(window).width() < 813) {
            $.fn.fullpage.destroy('all');
        }
    }


    function slickItemChildIn() {
        $('.wrap-slick-section3 .slick-item').slick({
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            fade: true,
            infinite: true,
            prevArrow: '<button type="button" class="blank-icon prev button-slide slick-arrow" style=""><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="blank-icon next button-slide slick-arrow" style=""><i class="fa fa-chevron-right"></i></button>',
            customPaging: function (slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<a>0' + (i + 1) + '</a>';
            },
            responsive: [
                //   {
                //     breakpoint: 1024,
                //     settings: {
                //       slidesToShow: 3,
                //       slidesToScroll: 3,
                //       infinite: true,
                //       dots: true
                //     }
                //   }

            ]
        });
    }


    function triggerClickSection4() {
        $('#section4 .btn-arrow svg:first-child').on('click', function () {
            $('#section4 .slick-prev').trigger('click');
        });
        $('#section4 .btn-arrow svg:last-child').on('click', function () {
            $('#section4 .slick-next').trigger('click');
        });
    }

    function sclickPartner() {
        if ($('.wrap-slick-partner').length) {
            $('.wrap-slick-partner').slick({
                slidesToShow: 4,
                autoplaySpeed: 2000,
                cssEase: 'ease-out',
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
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

    function slickItemParent() {
        $('.wrap-slick-section3').slick({
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            infinite: true,
            centerMode: true,
            autoplay: true,

            responsive: [{
                    breakpoint: 668,
                    settings: {
                        variableWidth: true,
                        centerMode: false,
                    }
                }

            ]
        });
    }

    function slickWrapItem4() {
        $('.slick-section4').slick({
            dots: false,
            infinite: false,
            arrows: true,
            slidesToShow: 3,
             slidesToScroll: 1,
            autoplaySpeed: 2000,
            cssEase: 'ease-out',
            autoplay: false,
            responsive: [
                {
                    breakpoint: 769,
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


    function animationPage() {
        var controller = new ScrollMagic.Controller();
        var tlm1 = new TimelineMax();

        tlm1.from("header .menu-primary", .8, {
            alpha: 0,
            y: "-=100",
            ease: Power0.easeNone,
        }, "-=.4");
        tlm1.from("#section1", .8, {
            alpha: 0,
        }, "-=.2");

        tlm1.staggerFrom(".social-line li", .8, {
            alpha: 0,
            y: "+=50"
        }, 0.2, "-=.2");

        tlm1.from("#section1 img", .8, {
            alpha: 0,
            x: "+=200",
            // ease: Back.easeOut.config(1.7),
            ease: Power0.easeNone,
        }, "-=1");


        var tlm2 = new TimelineMax();

        tlm2.from("#section2", .8, {
            alpha: 0,
        }, "-=.2");
        // tlm2.from("#section2 .img-bg-qs", .8, {
        //     alpha: 0,
        //     x: "+=200",
        //     ease: Power0.easeNone,
        // }, "-=.2");

        // tlm2.from("#phonering-alo-phoneIcon", .8, {
        //     alpha: 0,
        //     scale: 10,
        //     ease: Back.easeOut.config(1.7)
        // }, "-=.2");
        tlm2.from(".content-section2", 1.5, {
            alpha: 0,
            y: "+=100",
            ease: Power2.easeOut,
        }, "-=.2");

        var tlm3 = new TimelineMax();
        tlm3.from("#section3 .col-md-9", 1.5, {
            alpha: 0,
            x: "-=100",
            ease: Power2.easeOut,
        }, "-=.2");
        tlm3.from("#section3 .title", 1.5, {
            alpha: 0,
            y: "-=100",
            ease: Power2.easeOut,
        }, "-=1.2");
        tlm3.staggerFrom("#section3 ul li", 1.5, {
            alpha: 0,
            x: "+=50",
            ease: Power2.easeOut,
        }, 0.2, "-=1");
        tlm3.from("#section3 .btn-viewmore", 1.5, {
            alpha: 0,
            y: "+=100",
            ease: Power2.easeOut,
        }, "-=1.2");

        var tlm4_5 = new TimelineMax();
        tlm4_5.from("#section4-5 .title", 1.5, {
            alpha: 0,
            y: "-=200",
            ease: Power2.easeOut,
        }, "-=.2");
        tlm4_5.from("#section4-5 .title-of-slick", 1.5, {
            alpha: 0,
            y: "+=50",
            ease: Power2.easeOut,
        }, "-=1");
        
        tlm4_5.staggerFrom("#section4-5 .wrap-slick-partner a", 1.5, {
            alpha: 0,
            y: "+=100",
            ease: Power2.easeOut,
        }, 0.2, "-=1");
        tlm4_5.staggerFrom("#section4-5 .wrap-item-logo a", 1.5, {
            alpha: 0,
            y: "+=100",
            ease: Power2.easeOut,
        }, 0.2, "-=1.9");
        
        tlm4_5.from("#section4-5 .line-food", 1.5, {
            alpha: 0,
            width: "0",
            ease: Power2.easeOut,
        }, "-=1.4");

        var tlm4_6 = new TimelineMax();
        tlm4_6.from("#section4-6 .col-md-7", 1.5, {
            alpha: 0,
            scale: " .5",
            ease: Power2.easeOut,
        }, "-=.2");

        tlm4_6.from("#section4-6 .title", 1.5, {
            alpha: 0,
            y: "-=100",
            ease: Power2.easeOut,
        }, "-=1");

        tlm4_6.staggerFrom("#section4-6 .gr-form-ss8", 1.5, {
            alpha: 0,
            x: "+=100",
            ease: Power2.easeOut,
        }, 0.2, "-=1.4");

        tlm4_6.from("#section4-6 .form-submit", 1.5, {
            alpha: 0,
            y: "+=100",
            ease: Power2.easeOut,
        }, "-=1");

        var tlm4 = new TimelineMax();
        tlm4.from("#section4 .title", 1.5, {
            alpha: 0,
            y: "-=100",
            ease: Power2.easeOut,
        }, "-=.2");
        tlm4.staggerFrom("#section4 .item", 1.5, {
            alpha: 0,
            x: "+=300",
            ease: Power2.easeOut,
        }, 0.2, "-=1");
        tlm4.from("#section4 .btn-arrow", 1.5, {
            alpha: 0,
            y: "+=50",
            ease: Power2.easeOut,
        }, "-=1");


        var tlm4_4 = new TimelineMax();
        tlm4_4.from("#section4-4 .title", 1.5, {
            alpha: 0,
            y: "-=100",
            ease: Power2.easeOut,
        }, "-=.2");
        tlm4_4.staggerFrom("#section4-4 .item", 1.5, {
            alpha: 0,
            y: "+=200",
            ease: Power2.easeOut,
        }, 0.2, "-=1");
        tlm4_4.from("#section4-4 .btn-viewmore", 1.5, {
            alpha: 0,
            y: "+=50",
            ease: Power2.easeOut,
        }, "-=1");
        

        var tlm5 = new TimelineMax();
        tlm5.from("#section5 .title", 1.5, {
            alpha: 0,
            y: "-=200",
            ease: Power2.easeOut,
        }, "-=.2");
        tlm5.staggerFrom("#section5 .gallery .item", 1.5, {
            alpha: 0,
            y: "+=300",
            ease: Power2.easeOut,
        }, 0.2, "-=1");

        var tlm6 = new TimelineMax();
        tlm6.from("#section6 .title", 1.5, {
            alpha: 0,
            y: "-=200",
            ease: Power2.easeOut,
        }, "-=.2");


        tlm6.staggerFrom("#section6 .col-left .item", 1.5, {
            alpha: 0,
            y: "+=200",
            ease: Power2.easeOut,
        }, 0.2, "-=1");

        
        tlm6.from("#section6 .col-right", 1.5, {
            alpha: 0,
            x: "+=200",
            ease: Power2.easeOut,
        }, "-=1.5");


        var tlm7 = new TimelineMax();
        tlm7.from("#section7 .col-right", 1.5, {
            alpha: 0,
            x: "+=200",
            ease: Power2.easeOut,
        }, "-=1.5");

        tlm7.from("#section7 .ria-line img:first-child", 1.5, {
            alpha: 0,
            x: "-=200",
            ease: Power2.easeOut,
        }, "-=1.5");

        tlm7.from("#section7 .ria-line img:nth-child(2)", 1.5, {
            alpha: 0,
            y: "+=200",
            ease: Power2.easeOut,
        }, "-=1.5");

        tlm7.from("#section7 .ria-line img:last-child", 1.5, {
            alpha: 0,
            x: "+=200",
            ease: Power2.easeOut,
        }, "-=1.5");
        tlm7.from("#section7 .form-contact", 1.5, {
            alpha: 0,
            scale: .5,
            ease: Power2.easeOut,
        }, "-=1.5");



        // tlm6.staggerFrom("#section5 .gallery .item", 1.5, {
        //     alpha: 0,
        //     y: "+=300",
        //     ease: Power2.easeOut,
        // }, 0.2, "-=1");


        new ScrollMagic.Scene({
                triggerElement: "#section1",
                offset: -300,
                reverse: true
            })
            .setTween(tlm1)
            .addTo(controller);

        new ScrollMagic.Scene({
                triggerElement: "#section2",
                offset: -300,
                reverse: true
            })
            .setTween(tlm2)
            .addTo(controller);

        new ScrollMagic.Scene({
                triggerElement: "#section3",
                offset: -300,
                reverse: true
            })
            .setTween(tlm3)
            .addTo(controller);

        new ScrollMagic.Scene({
                triggerElement: "#section4-5",
                offset: -300,
                reverse: true
            })
            .setTween(tlm4_5)
            .addTo(controller);


        new ScrollMagic.Scene({
                triggerElement: "#section4-6",
                offset: -300,
                reverse: true
            })
            .setTween(tlm4_6)
            .addTo(controller);


        new ScrollMagic.Scene({
                triggerElement: "#section4",
                offset: -300,
                reverse: true
            })
            .setTween(tlm4)
            .addTo(controller);
        
        new ScrollMagic.Scene({
            triggerElement: "#section4-4",
            offset: -300,
            reverse: true
        })
        .setTween(tlm4_4)
        .addTo(controller);

        new ScrollMagic.Scene({
                triggerElement: "#section5",
                offset: -300,
                reverse: true
            })
            .setTween(tlm5)
            .addTo(controller);

        new ScrollMagic.Scene({
                triggerElement: "#section6",
                offset: -300,
                reverse: true
            })
            .setTween(tlm6)
            .addTo(controller);

        new ScrollMagic.Scene({
                triggerElement: "#section7",
                offset: -300,
                reverse: true
            })
            .setTween(tlm7)
            .addTo(controller);
    }

})();