import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    // Swiper options here
    slidesPerView: 3.5,
    spaceBetween: 30,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
     },
});



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

