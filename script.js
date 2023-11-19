window.addEventListener("scroll", function () {
  var header = document.querySelector("header"); // Используйте querySelector для получения элемента
  if (window.scrollY > 50) {
    // Измените это значение, чтобы задать порог прокрутки
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// JS swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


// Burger menu

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

