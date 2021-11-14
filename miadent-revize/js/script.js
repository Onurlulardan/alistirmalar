// First Slider
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});
// third swiper
var swiper = new Swiper(".myThirdSwiper", {
  slidesPerView: 1,
  loop: true,
  cssMode: true,
  clickable: true,
  pagination: {
    el: ".third-Slider-peg",
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
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
  slidesPerView: 1,
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
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});
var swiper = new Swiper(".last-swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  cssMode: true,
  clickable: true,
  loop: true,
  fadeEffect: { 
    crossFade: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  }
});
// modal randevu menu
const modalrandevuac = document.getElementById("randevubtn-mobil");
const modalrandevu = document.querySelector(".modal-menu-randevu-con");
const modalrandevukapat = document.getElementById("form-modal-closebtn");


modalrandevuac.addEventListener("click", ()=>{
    modalrandevu.style.display = "flex";
});

modalrandevukapat.addEventListener("click", ()=>{
    modalrandevu.style.display = "none";
});
// modal randevu menu end
// modal menu 
const modalinfoac = document.getElementById("modalmenu-mob");
const modalinfo = document.querySelector(".modal-menu-randevu-cons");
const modalinfokapat = document.getElementById("closebtn");


modalinfoac.addEventListener("click", ()=>{
    modalinfo.style.display = "flex";
});

modalinfokapat.addEventListener("click", ()=>{
    modalinfo.style.display = "none";
});
// modal menu end
// Modal Video
  new ModalVideo('.modalVid');