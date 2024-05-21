$(document).ready(function () {
var brandSwiper = new Swiper(".brandSwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: false, // 슬라이드 반복 여부
    // navigation
    navigation: {
      nextEl: ".brandshop .next",
      prevEl: ".brandshop .prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
        grid: {
          rows: 3,
          fill: "row",
        },
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });
});