let searchBtn = document.querySelector('.header-search__btn-icon');
let btnSearchBlock = document.querySelector('.header-search__btn');

searchBtn.addEventListener('click', () => {
  btnSearchBlock.classList.toggle('active')
});

let hamburger = document.querySelector('.hamburger-menu');
let navCollapse = document.querySelector('.header-nav__collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
    },
    620: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    }
  }
});