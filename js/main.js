$(document).ready(function () {
  var tasteSwiper = new Swiper(".tasteSwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: false, // 슬라이드 반복 여부
    // loopAdditionalSlides: 0, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    // slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    // navigation
    navigation: {
      nextEl: ".taste .next",
      prevEl: ".taste .prev",
    },
    // breakpoints:{
    //   //320 이상일때
    //   320: {
    //     slidesPerView: 1,
    //   }
    //   //480 이상일때
    //   480: {
    //     slidesPerView: 2,
    //     spaceBetween: 5
    //   }
    //   //320 이상일때
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 10
    //   }

    //   1400:{
    //     slidesPerView: 5,
    //     spaceBetween: 10
    //   }
    // }
  });
});
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
  });
});
