const toggleButton = document.querySelector(".toggle");
const navbarLinks = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navlink");
const formSubmit = document.querySelector(".form__submit");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});
