$(document).ready(function() {

    new WOW().init();

    var typed = $(".typed");

    $(function() {
        typed.typed({
            strings: ["Rohan Keskar.", "Designer.", "Developer.", "Trekker.", "Photographer"],
            typeSpeed: 100,
            loop: true,
        });
    });


    $('.bur-nav').on("click", function() {
        $(".container nav ul").toggleClass("open");
    });

    $('.js-wp-2').waypoint(function(direction) {

        $('.js-wp-2').addClass('animated slideInUp');

    }, {
        offset: '70%'
    });

    $('.js-wp-3').waypoint(function(direction) {

        $('.js-wp-3').addClass('animated fadeIn');

    }, {
        offset: '70%'
    });


    $(".iphone-btn").delay(1500).animate({ bottom: "+=-3" }, 200);
    $(".iphone-btn").delay(300).animate({ top: "+=-3" }, 100);

});