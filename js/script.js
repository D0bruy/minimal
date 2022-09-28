//humburger

$('#humburger').click(function () {
    $('.menu').toggleClass('menu_open');
})


$('input:text').on('keydown input paste', function () {
    console.log($(this).val());
});

$('.accordion-header').on('click', function () {
    let activeHeader = $(this).hasClass('active') ? $(this) : $(this).parent().find('.accordion-header.active');
    if (!$(this).hasClass('active')) {
        activeHeader.next().slideUp(200).removeClass('active');
        activeHeader.removeClass('active');
        $(this).addClass('active').next().slideToggle(400).addClass('active');
    }
});
let sectionMore = $('#see-more'),
    topCoord = $(window).height() - sectionMore.outerHeight();
$(window).on('resize', function () {
    topCoord = $(window).height() - sectionMore.outerHeight();
    if (!sectionMore.hasClass('closed')) {
        sectionMore.css('top', topCoord);
    }
})
$('.close-green, #not-now').click(function () {
    let section = $(this).parents('section');
    let target = $('.close-green');
    if (section.hasClass('closed')) {
        section.animate({
            top: topCoord
        }, 400);
        target.html('&times;');
    } else {
        section.animate({
            top: '97vh'
        }, 400);
        target.html('&#9650;');
    }
    section.toggleClass('closed');
});

//slider

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 320;
    if (offset > 960) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 320;
    if (offset < 0) {
        offset = 960;
    }
    sliderLine.style.left = -offset + 'px';
});

//owl

$('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    // dots: true,
    //	autoplay: true,
    //  autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 3
        }
    }
});

//popup

$('#open-popup').magnificPopup({
    items: [
        {
            src: '/images/popup.jpg',
            title: 'The nature of the Earth'
        }
    ],
    gallery: {
        enabled: true
    },
    type: 'image' // this is a default type
});

