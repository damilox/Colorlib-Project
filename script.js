window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let heroHeight = document.getElementById("header").clientHeight;
  let scrollY = window.scrollY;

  // Add class "scrolled" when passing halfway through hero section
  if (scrollY > heroHeight / 2) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const clones = track.innerHTML; // Duplicate images
  track.innerHTML += clones; // Append them again
});

// Select the menu button and nav menu
const menuToggle = document.getElementById("menu-toggle");
const navLink = document.getElementById("nav-link");

// Toggle menu visibility on button click
menuToggle.addEventListener("click", () => {
    navLenu.classList.toggle("active");
});

