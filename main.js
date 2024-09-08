const hamburger = document.querySelector(".navbar-hamburger");
const upperNavMenu = document.querySelector(".navbar-container");
const navMenu = document.querySelector(".navbar-links");
const linktreeMobile = document.querySelector(".navbar-linktree-container")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    upperNavMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    linktreeMobile.classList.toggle("active");
}