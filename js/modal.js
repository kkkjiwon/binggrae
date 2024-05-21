window.onload = function () {
  // 모달창 ==============================
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  
  // 모달을 닫고 페이드 아웃 효과를 적용하는 함수
  function closeModal() {
      modal.style.display = "none";
      fadeout(modal);
      // 모달이 닫힐 때는 스크롤을 다시 활성화
      controlScroll(false);
  }
  
  // 모달 클릭 이벤트 리스너
  modal.addEventListener("click", closeModal);
  
  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
      if (isOpen) {
          body.style.overflow = "hidden";
      } else {
          body.style.overflow = "auto";
      }
  }
  
  // 초기 모달 상태 설정
  const isOpen = true;
  controlScroll(isOpen);
  
  // 페이드 아웃 함수 정의
  function fadeout(element) {
      let opacity = 1;
      const interval = setInterval(() => {
          if (opacity <= 0.1) {
              clearInterval(interval);
              element.style.display = "none";
          }
          element.style.opacity = opacity;
          opacity -= opacity * 0.1;
      }, 50);
  }
};