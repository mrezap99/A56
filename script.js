const menuIcon = document.querySelector(".menu-toggle input");
const headerRight = document.querySelector(".header-right");

menuIcon.addEventListener("click", function () {
  headerRight.classList.toggle("slide");
});
