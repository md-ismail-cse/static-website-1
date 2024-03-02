/*=============================================
                Preloader
===============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*=============================================
                Wow
===============================================*/
$(function () {
    new WOW().init();
});

/*=============================================
                Home
===============================================*/
$(function () {
    $('#slider-items').bsTouchSlider();
});

/*=============================================
                About
===============================================*/
$(function () {
    $("#about-parallax-slider").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // breakpoint from 480 up
            768: {
                items: 2
            }
        }
    });
});

/*====================================================
                        Project
====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*=============================================
                Portfolio
===============================================*/
$(window).on('load', function () {

    // Initialize Isotope
    $("#portfolio-items").isotope({});

    // filter items on button click
    $("#portfolio-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolios
        $("#portfolio-items").isotope({
            filter: filterValue
        });

        // active button
        $("#portfolio-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

// Image View
$(function () {
    $('#portfolio-items').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/*=============================================
                Navigation
===============================================*/
// Show / Hide navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("site-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("site-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});

// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});