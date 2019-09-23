/**
 * Plugin Tabs 
 * Require jQuery
 */
(function($) {
    $.fn.tabs_new = function() {
        var wrap = $(this);
        var head = wrap.find('[data-head]');
        var content = wrap.find('[data-content]');

        this.reset = (function() {
            head.not(head.first()).removeClass('is-active');
            content.not(content.first()).hide();
        }).call(this);

        this.headClick = head.click(function(event) {
            event.preventDefault();

            if ($(this).hasClass('is-active')) {
                return false;
            }

            var content_target = $(this).attr('href');

            head.removeClass('is-active');
            content.hide();

            $(this).addClass('is-active');
            $(content_target).fadeIn();
        });

        return this;
    };
})(jQuery);
$(document).ready(function() {
    $('#form-contact-page').submit(function(event) {
        event.preventDefault();
        var t = $(this);
        var data = t.serialize();
        // $('#mod-soon .btn-submit img').show();
        $.ajax({
            url: wp_vars["ajaxurl"],
            type: 'POST',
            dataType: 'json',
            cache: false,
            data: data
        }).done(function(response) {
            // $('#mod-soon .btn-submit img').hide();

            if (!response.success) {
                //Error
                message = (typeof response.data.message != 'undefined') ? response.data.message : '';
                alert(message);
            } else {
                //Done
                t.find('input[type="text"]').val("");
                message = (typeof response.data.message != 'undefined') ? response.data.message : '';
                /*$("#msg-subscribe span").html(message);
                $("#msg-subscribe").addClass("success");*/
                window.location.href = "http://novabeachcamranh.com.vn/thanks/"
            }
        });
    });
    $('#mod-cac-loai-bat-dong-san-detail').tabs_new();

    
});