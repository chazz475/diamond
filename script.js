const translations = {
  en: {
    welcome: "Welcome to our website!",
    description: "We are glad to have you here. Explore our services.",
  },
  id: {
    welcome: "Selamat datang di situs web kami!",
    description: "Kami senang Anda di sini. Jelajahi layanan kami.",
  },
};

// Fungsi untuk mengganti bahasa
function setLanguage(lang) {
  document.getElementById("content").innerHTML = `
        <p>${translations[lang].welcome}</p>
        <p>${translations[lang].description}</p>
    `;
}

// SEARCH ENGINE DON'T WORK--------------------------------------------------------------------------------------------------
function myFunction() {
  alert("I am an alert box!");
}

// MENU ICON HAMBURGER--------------------------------------------------------------------------------------------------
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// SLIDER IMAGE--------------------------------------------------------------------------------------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slide index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
