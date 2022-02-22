//main slider
var swiper = new Swiper(".myfirstswiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    navigation: {
        prevEl: '.first-navprev',
        nextEl: '.first-navnext',
    },
    pagination: {
      el: ".swiper-first-peg",
      clickable: true,
  },
  });
  // Second slider
var swiper = new Swiper(".mysecondswiper", {
    slidesPerView: 1.1,
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
        slidesPerView: 1.1,
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
      1440: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });
  //third slider
  var swiper = new Swiper(".mythirdslider", {
    slidesPerView: 1.1,
    clickable: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".thirdswiper-pagination",
      clickable: true,
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
    slidesPerView: 1.1,
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
    slidesPerView: 1.6,
    clickable: true,
    loop: true,
    autoplay: {
      delay: 3000,
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
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }
  });
  // modal menu
  const hmbgr = document.getElementById("hamburger");
  const modal = document.querySelector(".modal-menu");
  const closebtn = document.getElementById("modal-kapat");
  const section = document.getElementById("section-cover");


  hmbgr.addEventListener("click", ()=> {
    modal.style.display = "flex";
    section.style.display = "none";
  });

  closebtn.addEventListener("click", ()=> {
    modal.style.display = "none";
    section.style.display = "block";
  });

  // randevu modal
  const randevualbtn = document.getElementById("rndv-btn");
  const randevu = document.querySelector(".randevu-modal");
  const randevukapat = document.getElementById("randevu-kapat");

  randevualbtn.addEventListener("click", ()=>{
    randevu.style.display= "flex";
    section.style.display = "none";
  });

  randevukapat.addEventListener("click", ()=>{
    randevu.style.display= "none";
    section.style.display = "block";
  });