const swiper = new Swiper('.firstSwiper', {
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





swiper1.on('transitionStart', function(e) {
    if (this.realIndex == 1) {
        document.querySelector("body").style.background = '#F4F1C1';
    }
    if (this.realIndex == 2) {
        document.querySelector("body").style.background = '#DCDDDE';
    }
    if (this.realIndex == 3) {
        document.querySelector("body").style.background = '#ECEBDF';
    }
    if (this.realIndex == 4) {
        document.querySelector("body").style.background = '#F2E3E3';
    }
    if (this.realIndex == 5) {
        document.querySelector("body").style.background = '#D0EFF0';
    }
    });



swiper1.on('transitionStart', function(e) {
    if (this.realIndex == 1) {
        document.querySelector(".swiper-slide").style.setProperty('background-color', '#F4F1C1', 'important');
    }
    if (this.realIndex == 2) {
        document.querySelector(".swiper-slide").style.setProperty('background-color', '#DCDDDE', 'important');
    }
    if (this.realIndex == 3) {
        document.querySelector(".swiper-slide").style.setProperty('background-color', '#ECEBDF', 'important');
    }
    if (this.realIndex == 4) {
        document.querySelector(".swiper-slide").style.setProperty('background-color', '#F2E3E3', 'important');
    }
    if (this.realIndex == 5) {
        document.querySelector(".swiper-slide").style.setProperty('background-color', '#D0EFF0', 'important');
    }
    });
