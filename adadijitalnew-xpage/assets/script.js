const swiper = new Swiper('.firstSwiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    mousewheel: {
        invert: true,
    },
    pagination: {
        el: '.first-peg',
        clickable:true,
    },
    breakpoints: {
        450: {
            direction: 'vertical',
        },
     },
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






