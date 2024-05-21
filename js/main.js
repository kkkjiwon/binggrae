window.onload = function () {
  const toggleBtn = document.querySelector(".menu .open");
  const menu = document.querySelector(".menu-sub");
  // 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  const closeBtn = document.querySelector(".menu-sub .close");
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
};
