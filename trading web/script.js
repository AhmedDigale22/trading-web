const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// const button = document.querySelector("button");
//
// button.addEventListener("click", () => {
// window.scrollTo({ top: 0, behavior: "smooth" });
// });

// *//////////////////////////////////////////////////*
// Get the toggle button and the menu
const toggleButton = document.querySelector(".toggle-menu-button");
const menu = document.querySelector("#menu");

// Add an event listener to the toggle button
toggleButton.addEventListener("click", () => {
  // Toggle the "show" class on the menu
  menu.classList.toggle("show");
});
// Get all links with a hash (#) in the href attribute
const links = document.querySelectorAll('a[href^="#"]');

// Add an event listener to each link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default link behavior
    // event.preventDefault();

    // Get the target element
    const target = document.querySelector(link.getAttribute("href"));

    // Scroll to the target element
    target.scrollIntoView({ behavior: "smooth" });

    // Toggle the menu (if it's open);
    menu.classList.remove("show");
  });
});
