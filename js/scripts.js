jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // Apply form
    // --------------------------------------------------------------------
    (function () {
        $('#contact').addClass("js");

        $('#apply').on('click', function (e) {
            e.preventDefault();
            $('#contact').toggleClass("show");
        });

        $('#sendmail').on('click', function (e) {
            e.preventDefault();
            document.location.href = "mailto:interns@raadyx.com?Subject=Application&body=Name: " +
                $('#firstnameInput').val() + " " + $('#lastnameInput').val() + "%0D%0AEmail: " +
                $('#emailInput').val() + "%0D%0APhone: " +
                $('#phoneInput').val() + "%0D%0ASex: " +
                $('#sexInput').val() + "%0D%0ACountry: " +
                $('#countryInput').val() + "%0D%0AUniversity: " +
                $('#universityInput').val() + "%0D%0ADate of birth: " +
                $('#monthInput').val() + "/" + $('#dayInput').val() + "/" + $('#yearInput').val() + "%0D%0AIntroduce yourself: " +
                $('#otherText').val();
            $('#contact').addClass("sent");
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------
    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------
    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

}); // JQuery end