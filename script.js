//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburer menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan van
const hamburer = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburer.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
