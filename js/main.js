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
    breakpoints: {
      // 1: {
      //   slidesPerView: 2,
      //   spaceBetween: 5,
      // }
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
        // grid: {
        //     rows: 2,
        //     fill: "row",
        //   },
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
        // grid: {
        //     rows: 2,
        //     fill: "row",
        //   },
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
