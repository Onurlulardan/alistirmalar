var swiper = new Swiper(".mySwiper", {
    loop: true,
    cssMode: true,
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
