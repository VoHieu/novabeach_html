(function() {
  $(document).ready(function() {
    if ($(window).width() <= 1023) {
      $('.snip-list li:nth-child(9) a').attr('target', '_blank');
      $('.snip-list li:nth-child(9) a').attr(
        'href',
        wp_vars['themeurl'] + '/assets/images/NovaBeach_CTBH_Final.pdf'
      );
    } else {
      setTimeout(function() {
        fancyboxMenu();
      }, 1000);
    }

    showMenuMobile();
    bzDebounce();

    if ($(window).width() <= 812) {
      scrollActive();
      windowScrollactiveMenu();
    } else {
      scrollActiveMenu();
      setTimeout(function() {
        detectMenu();
      }, 1000);
    }
    viewPdfMobile();
    if ($(window).width() <= 1023) {
      // closeMenuMobilewhenClick();
      // closeMenuMobilewhenClickClose();
    }
    clickShowPopupRegister();
    checkShowPopupRegister();

    /*ajax handle*/
    $('#form_submit_buy').submit(function(event) {
      event.preventDefault();
      var t = $(this);
      var data = t.serialize();
      // $('#mod-soon .btn-submit img').show();

      setTimeout(() => {
        $.ajax({
          url: 'https://novabeachcamranh.facemall.now.sh/register',
          type: 'POST',
          dataType: 'json',
          cache: false,
          data: data
        })
      }, 0)

      $.ajax({
        url: wp_vars['ajaxurl'],
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: data
      }).done(function(response) {
        // $('#mod-soon .btn-submit img').hide();
        if (!response.success) {
          //Error
          message =
            typeof response.data.message != 'undefined'
              ? response.data.message
              : '';
          alert(message);
        } else {
          //Done
          window.localStorage.setItem('REGISTERED', 'true');
          t.find('input[type="text"]').val('');
          $('#popup-nhan-thong-tin .wrap-popup .icon-close').trigger('click');
          message =
            typeof response.data.message != 'undefined'
              ? response.data.message
              : '';
          dataLayer.push({ event: 'gtm-dataLayer-dang-ky-thanh-cong' });
          /*$("#msg-subscribe span").html(message);
                    $("#msg-subscribe").addClass("success");*/
          window.location.href = 'http://novabeachcamranh.com.vn/thanks/';
        }
      });
    });

    if (window.location.href == 'http://novabeachcamranh.com.vn/thanks/') {
      $('#popup-nhan-thong-tin .wrap-popup .icon-close').trigger('click');
    } else {
    }
  });

  function fancyboxMenu() {
    $('.snip-list li:nth-child(9) a').attr('data-fancybox', '');
    $('.snip-list li:nth-child(9) a').attr('rel', 'fancybox-gellary');
    $('.snip-list li:nth-child(9) a').attr(
      'href',
      wp_vars['themeurl'] + '/assets/images/NovaBeach_CTBH_Final.pdf'
    );
  }

  function checkShowPopupRegister() {
    var isRegistered = window.localStorage.getItem('REGISTERED');
    if (!isRegistered) {
      setTimeout(function() {
        $('#popup-nhan-thong-tin').removeClass('active');
      }, 30 * 1000);
    }
  }

  function clickShowPopupRegister() {
    $('header .register').on('click', function() {
      $('#popup-nhan-thong-tin').removeClass('active');
      // $('html, body').css('overflow','hidden');
    });

    $('footer .btn-given-info a').on('click', function(event) {
      event.preventDefault();
      $('#popup-nhan-thong-tin').removeClass('active');
      // $('html, body').css('overflow','hidden');
    });
    $('#popup-nhan-thong-tin .icon-close').on('click', function() {
      $('#popup-nhan-thong-tin').addClass('active');
    });
  }

  function closeMenuMobilewhenClick() {
    $('.menu-primary a').on('click', function() {
      var data_href = $(this).attr('data-href');
      console.log('data_href', data_href);
      $('html, body').animate(
        {
          scrollTop: $(data_href).offset().top
        },
        1000
      );

      $('.menu-primary').removeClass('active');
      $('.menu--close4').removeClass('open');
      $('.menu--close4').removeClass('active');
    });
  }

  function closeMenuMobilewhenClickClose() {
    $('.menu-primary a').on('click', function() {
      // $('.menu-primary').removeClass('active');
      // $('.menu--close4').removeClass('open');
      // $('.menu--close4').removeClass('active');
    });
  }

  function viewPdfMobile() {
    var w = window.innerWidth;
    if (w < 768) {
      $('.uudai-banhang a').removeAttr('data-fancybox');
      $('.uudai-banhang a').attr('target', '_blank');
    } else {
      $('.uudai-banhang a').attr('data-fancybox', '');
    }
  }

  function bzDebounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  window.addEventListener(
    'resize',
    bzDebounce(function() {
      if ($(window).width() <= 812) {
        windowScrollactiveMenu();
      } else {
        scrollActiveMenu();
      }
    }, 250)
  );

  function windowScrollactiveMenu() {
    $(window).on('scroll', function() {
      scrollActive();
    });
  }

  function scrollActive() {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > 0) {
      $('header .logo').addClass('active');
      $('header').addClass('active');
    } else {
      $('header .logo').removeClass('active');
      $('header').removeClass('active');
    }
  }

  function showMenuMobile() {
    $('.menu--close4').on('click', function() {
      $(this).toggleClass('open');
      $(this).toggleClass('active');
      $('.menu-mobile').toggleClass('active');
      $('html, body').toggleClass('active');
    });
  }

  function scrollActiveMenu() {
    // $('header .logo').removeClass('active');
    // $('header').removeClass('active');
    $('html').bind('mousewheel DOMMouseScroll', function(e) {
      if ($('body').hasClass('fp-viewing-firstPage')) {
        $('header .logo').removeClass('active');
        $('header').removeClass('active');
        player.playVideo();
      } else {
        $('header .logo').addClass('active');
        $('header').addClass('active');
      }
    });
  }

  function detectMenu() {
    if ($('body').hasClass('fp-viewing-firstPage')) {
      $('header .logo').removeClass('active');
      $('header').removeClass('active');
    } else {
      $('header .logo').addClass('active');
      $('header').addClass('active');
    }
  }
})();
