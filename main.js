


$(window).scroll(function() {
    var distanceFromTop = $(window).scrollTop();
    if(distanceFromTop > $('.landing-block').outerHeight() + $('#mainNavbar').outerHeight()) {
        $('#mainNavbar').addClass('fixed-top');
    }
    else {
        $('#mainNavbar').removeClass('fixed-top');
    }
});

$(window).scroll(function() {
    var distanceFromTop = $(window).scrollTop();
    if(distanceFromTop > $('.landing-block').outerHeight() + $('#mainNavbar').outerHeight()) {
        $('#mainNavbar').addClass('fixed-top');
    }
    else {
        $('#mainNavbar').removeClass('fixed-top');
    }
});

$(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section-block').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
            $('.navbar-nav > li > a').removeClass('active');
            $('.navbar-nav > li > a[href=\\#' + id + ']').addClass('active');
        }
    })
});

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var position = $id.offset().top;

    // animated top scrolling
    $('body, html').animate( {
        scrollTop: position
    }, 340);
});