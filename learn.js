const navTogglerElements = document.querySelectorAll("[data-navbar-toggler]");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

function handleToggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}
navTogglerElements.forEach( (btn) => {
  btn.addEventListener('click', handleToggleNavbar);
});
