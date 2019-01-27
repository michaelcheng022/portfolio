$(document).ready(function(){
    $(this).scrollTop(0);
});

$(window).scroll(function() {
    var distanceFromTop = $(window).scrollTop();
    if(distanceFromTop > $('#home').outerHeight() + $('#mainNavbar').outerHeight()) {
        $('#mainNavbar').addClass('fixed-top');
    }
    else {
        $('#mainNavbar').removeClass('fixed-top');
    }
});

function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

$(window).on("scroll resize", function(){
    console.log( inViewport($('#home')) ); // n px in viewport
});

$(window).scroll(function() {
    if(inViewport($('#about'))> 125) {
        $('#about-title, #about-bar').addClass('slideInRight');
    }
    if(inViewport($('#about'))> 350) {
        $('#profile-pic').addClass('slideUp');
    }
    if(inViewport($('#project')) > 200) {
        $('#project-title, #project-bar').addClass('slideInLeft');
    }
    if(inViewport($('#contact')) > 50) {
        $('#contact-title, #contact-bar').addClass('slideInRight');
    }
})
$(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.section-block').each(function() {
        var target = $(this).offset().top - 44;
        var id = $(this).attr('id');

        if (position >= target) {
            $('.navbar-nav > li > a').removeClass('highlight');
            $('.navbar-nav > li > a[href=\\#' + id + ']').addClass('highlight');
        }
        else if((inViewport($('#home')) > 5)) {
            $('.navbar-nav > li > a').removeClass('highlight');
            $('.navbar-nav > li > a[href=\\#home]').addClass('highlight');
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