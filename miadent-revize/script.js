var swiper = new Swiper(".mySwiper", {
    loop: true,
    cssMode: true,
    clickable: true,
    navigation: {
      nextEl: ".swiper-ileri",
      prevEl: ".swiper-geri",
    },
    pagination: {
      el: ".swiper-first-peg",
    },
    mousewheel: true,
    keyboard: true,
  });
 // second swiper
 var swiper = new Swiper(".mySecondSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  cssMode: true,
  clickable: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-second-next',
    prevEl: '.swiper-second-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});
// third swiper
var swiper = new Swiper(".myThirdSwiper", {
  slidesPerView: 2,
  loop: true,
  cssMode: true,
  clickable: true,
  pagination: {
    el: ".third-Slider-peg",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  mousewheel: true,
  keyboard: true,
});
// Four Swiper 
var swiper = new Swiper(".myFourSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  cssMode: true,
  clickable: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-four-next',
    prevEl: '.swiper-four-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});
var swiper = new Swiper(".last-swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  cssMode: true,
  clickable: true,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  }
});