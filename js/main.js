$(document).ready(function () {
  var tasteSwiper = new Swiper(".tasteSwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: false, // 슬라이드 반복 여부
    // loopAdditionalSlides: 0, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    // slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    // navigation
    navigation: {
      nextEl: ".taste .next",
      prevEl: ".taste .prev",
    },
  });
});
