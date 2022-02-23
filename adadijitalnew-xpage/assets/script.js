const swiper = new Swiper('.firstSwiper', {
    direction: 'vertical',
    loop: true,
    mousewheel: {
        invert: true,
    },
    pagination: {
        el: '.first-peg',
    },
});

const swiper1 = new Swiper('.secondSwiper', {
    direction: 'vertical',
    loop: true,
    mousewheel: {
        invert: true,
    },
    pagination: {
        el: '.first-peg',
    },
});
const swiper2 = new Swiper('.thirdswiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    slidesOffsetBefore: 200,
    direction: 'horizontal',
    pagination: {
        el: '.first-peg',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
});


  $(".hamburger").on( "click", function() {
    $(".modal-menu").css("display", "flex");
  });
 
$(".mdl-close").on("click", function(){
    $(".modal-menu").css("display", "none");
});





swiper1.on('transitionEnd', function(e) {
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



swiper1.on('transitionEnd', function(e) {
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
