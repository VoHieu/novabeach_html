(function () {
    $(document).ready(function () {
        if ($('#mymap')) {
            zoomSmooth();
        }
    });

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
            options.height = '400px';
        }

        $('#mymap').smoothZoom(options);

    }

  

})();