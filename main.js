import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
