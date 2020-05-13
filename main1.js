// invoke the carousel
$('#myCarousel').carousel({
    interval: 3000
});

$('#myCarousel').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
        $(this).carousel('next');
    }
    else {
        $(this).carousel('prev');
    }
});


/* SLIDE ON CLICK */

$('.carousel-linked-nav > li > a').click(function () {

    // grab href, remove pound sign, convert to number
    var item = Number($(this).attr('href').substring(1));

    // slide to number -1 (account for zero indexing)
    $('#myCarousel').carousel(item - 1);

    // remove current active class
    $('.carousel-linked-nav .active').removeClass('active');

    // add active class to just clicked on item
    $(this).parent().addClass('active');

    // don't follow the link
    return false;
});

/* AUTOPLAY NAV HIGHLIGHT */

// bind 'slid' function
$('#myCarousel').bind('slid', function () {

    // remove active class
    $('.carousel-linked-nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel .item.active').index();

    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

});

let whiteLogo = './img/logo-glyph-white-585e89bacf.svg';
let blackLogo = './img/logo-glyph-black-eb012a8d0d.svg';

$(document).ready(function () {
    let scrollPosition = 0;
    let navbarHeight = $(".navbar").height();
    $(document).on('scroll', function () {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition < navbarHeight) {
            $('.navbar').css({ backgroundColor: 'transparent' });
            $('.black').css({ color: "white" })
            $('.logoBlack').attr('src', whiteLogo);
        } else {
            $('.navbar').css({ backgroundColor: "white" });
            $('.black').css({ color: "black" });
            $('.logoBlack').attr('src', blackLogo);

        }

    })

})