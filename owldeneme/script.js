const nextIcon = '<img src="img/right.svg">';
const prevIcon = '<img src="img/left.svg">';



$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
