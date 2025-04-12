const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

// Hamburger vs. křížek
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
    hamburgerIcon.classList.toggle("fa-bars");
    hamburgerIcon.classList.toggle("fa-xmark");
});

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".search-bar");

    searchIcon.addEventListener("click", function () {
        searchBar.classList.toggle("active"); // třída 'active'
    });
});