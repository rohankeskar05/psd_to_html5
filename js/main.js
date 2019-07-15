$(document).ready(function() {

    'use strict';

    var typed = $(".typed");

    $(function() {
        typed.typed({
            strings: ["Rohan Keskar.", "Designer.", "Developer.", "Trekker.", "Photographer"],
            typeSpeed: 100,
            loop: true,
        });
    });
});