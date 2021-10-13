const nextIcon = '<img src="img/right.svg">';
const prevIcon = '<img src="img/left.svg">';



$('.owlfirst .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


const owlSeconNextIcon = '<i class="fas fa-arrow-right"></i>';
const owlSecondPrevIcon = '<i class="fas fa-arrow-left"></i>';


$('.owl-carousel').owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    items: 1,
    navText: [
        owlSecondPrevIcon,
        owlSeconNextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// modal menu 
const modalinfoac = document.getElementById("hamburgerbtn");
const modalinfo = document.querySelector(".modal-menu");

const modalinfokapat = document.getElementById("closebtn");


modalinfoac.addEventListener("click", ()=>{
    modalinfo.style.display = "flex";
});

modalinfokapat.addEventListener("click", ()=>{
    modalinfo.style.display = "none";

});

// modal menu end
// modal randevu menu
const modalrandevuac = document.getElementById("randevubtn");
const modalrandevu = document.querySelector(".modal-menu-randevu");
const modalrandevukapat = document.getElementById("form-modal-closebtn");


modalrandevuac.addEventListener("click", ()=>{
    modalrandevu.style.display = "flex";
});

modalrandevukapat.addEventListener("click", ()=>{
    modalrandevu.style.display = "none";
});
// modal randevu menu end
