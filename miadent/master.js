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

  var swiper = new Swiper('.tedaviSwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    cssMode: true,
    clickable: true,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  // // modal menu
  // const hmbgr = document.getElementById("hamburger");
  // const modal = document.querySelector(".modal-menu");
  // const closebtn = document.getElementById("modal-kapat");
  // const section = document.getElementById("section-cover");


  // hmbgr.addEventListener("click", ()=> {
  //   modal.style.display = "flex";
  //   section.style.display = "none";
  // });

  // closebtn.addEventListener("click", ()=> {
  //   modal.style.display = "none";
  //   section.style.display = "block";
  // });

  
  $("#hamburger").on( "click", function() {
    $(".modal-menu").css("display", "flex");
    $("#section-cover").css("display", "none");
  });
 
$("#modal-kapat").on("click", function(){
    $(".modal-menu").css("display", "none");
    $("#section-cover").css("display", "block");
});

  // randevu modal
  // const randevualbtn = document.getElementById("rndv-btn");
  // const randevu = document.querySelector(".randevu-modal");
  // const randevukapat = document.getElementById("randevu-kapat");

  // randevualbtn.addEventListener("click", ()=>{
  //   randevu.style.display= "flex";
  //   section.style.display = "none";
  // });

  // randevukapat.addEventListener("click", ()=>{
  //   randevu.style.display= "none";
  //   section.style.display = "block";
  // });

  $("#rndv-btn").on( "click", function() {
    $(".randevu-modal").css("display", "flex");
    $("#section-cover").css("display", "none");
  });
 
$("#randevu-kapat").on("click", function(){
    $(".randevu-modal").css("display", "none");
    $("#section-cover").css("display", "block");
});


  $(document).ready(function() {
    $(".acc-content > a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".acc-inner-content")
          .slideUp(200);
        $(".acc-content  > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
        $(".acc-content > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".acc-content  > a").removeClass("active");
        $(this).addClass("active");
        $(".acc-inner-content").slideUp(200);
        $(this)
          .siblings(".acc-inner-content")
          .slideDown(200);
      }
    });
  });
  