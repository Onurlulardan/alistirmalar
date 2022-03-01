// const swiper = new Swiper('.firstSwiper', {
//     slidesPerView: 1,
//     loop: true,
//     mousewheel: {
//         invert: true,
//     },
//     pagination: {
//         el: '.first-peg',
//         clickable:true,
//     },
//     breakpoints: {
//         450: {
//         },
//      },
// });
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

var swiperf = new Swiper('.firstSwiper', {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".albumSlide .swiper-pagination",
            clickable:"true"
    },
    navigation: {
        nextEl: ".albumSlide .swiper-button-next",
        prevEl: ".albumSlide .swiper-button-prev"
    },
    effect: "flipEffect",
    slidesOffsetBefore: 0,
    speed: 800,
    flipEffect: {
        rotate: 0,
        stretch: -10,
        depth: 100,
        modifier: 3,
        slideShadows: !1
    },
    spaceBetween: 20,
    autoplay: {
            delay: 4000,
            disableOnInteraction: !1
        },
    loop: true,
    mousewheel: {
        invert: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 1.8
        },
        570: {
            slidesPerView: 1.7
        },
        480: {
            slidesPerView: 1.5
        }
    }
});



const swiper1 = new Swiper('.secondSwiper', {
    direction: 'horizontal',
    loop: true,
    mousewheel: {
        invert: true,
    },
    pagination: {
        el: '.first-peg',
    },
    breakpoints: {
        450: {
            direction: 'vertical',
        },
     },
     
});
const swiper2 = new Swiper('.thirdswiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesOffsetBefore: 0,
    direction: 'horizontal',
    pagination: {
        el: '.first-peg',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      breakpoints: { 
        1024: {
            slidesPerView: 3,
            slidesOffsetBefore: 200,
        },
        1450: {
            slidesPerView: 6,
            slidesOffsetBefore: 200,
        },
      },
});


  $(".hamburger").on( "click", function() {
    $(".modal-menu").css("display", "flex");
    $(".main-cover").css("display", "none");
  });
 
$(".mdl-close").on("click", function(){
    $(".modal-menu").css("display", "none");
    $(".main-cover").css("display", "block");
});


//Çözümlerimiz 
$(document).ready(function () {
    $(".solition").css("background-color", "#F45458");
});

swiper1.on('transitionStart', function(e) {
    if (this.realIndex == 1) {
        document.querySelector(".solition").style.background = '#E63342';
    }
    if (this.realIndex == 2) {
        document.querySelector(".solition").style.background = '#477BFE';
    }
    if (this.realIndex == 3) {
        document.querySelector(".solition").style.background = '#2FC7F7';
    }
    if (this.realIndex == 4) {
        document.querySelector(".solition").style.background = '#477BFE';
    }
    });

    swiper1.on('transitionStart', function(e) {
        if (this.realIndex == 1) {
            document.querySelector(".swiper-slide").style.setProperty('background-color', '#E63342', 'important',);
        }
        if (this.realIndex == 2) {
            document.querySelector(".swiper-slide").style.setProperty('background-color', '#477BFE', 'important');
        }
        if (this.realIndex == 3) {
            document.querySelector(".swiper-slide").style.setProperty('background-color', '#2FC7F7', 'important');
        }
        if (this.realIndex == 4) {
            document.querySelector(".swiper-slide").style.setProperty('background-color', '#477BFE', 'important');
        }
        });


     



