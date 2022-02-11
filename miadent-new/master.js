//main slider
var swiper = new Swiper(".myfirstswiper", {
    slidesPerView: 1,
    navigation: {
        prevEl: '.first-navprev',
        nextEl: '.first-navnext',
    },
    pagination: {
      el: ".swiper-first-peg",
  },
  });
  // Second slider
var swiper = new Swiper(".mysecondswiper", {
    slidesPerView: 1,
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
  //third slider
  var swiper = new Swiper(".mythirdslider", {
    slidesPerView: 2,
    clickable: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".thirdswiper-pagination",
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
  });
  //four swiper
  var swiper = new Swiper(".myfourswiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    cssMode: true,
    clickable: true,
    loop: true,
    navigation: {
      nextEl: '.four-next',
      prevEl: '.four-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
  //last slider
  var swiper = new Swiper(".mylastslider", {
    slidesPerView: 1,
    clickable: true,
    loop: true,
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
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }
  });