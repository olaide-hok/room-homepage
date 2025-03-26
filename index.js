// Select DOM elements
document.addEventListener("DOMContentLoaded", function () {
  // Get all necessary DOM elements
  const openMobileMenu = document.getElementById("open-menu");
  const closeMobileMenu = document.getElementById("close-menu");
  const mobileNav = document.getElementById("mobile-nav");
  const overlay = document.getElementById("overlay");

  // Toggle mobile menu and overlay
  function toggleMenu() {
    const isMenuOpen = mobileNav.classList.contains("d-flex");

    if (isMenuOpen) {
      // Close the menu
      mobileNav.classList.remove("d-flex");
      mobileNav.classList.add("d-none");
      overlay.classList.remove("d-flex");
      overlay.classList.add("d-none");
    } else {
      // Open the menu
      mobileNav.classList.remove("d-none");
      mobileNav.classList.add("d-flex");
      overlay.classList.remove("d-none");
      overlay.classList.add("d-flex");
    }
  }

  // Add event listeners
  openMobileMenu.addEventListener("click", toggleMenu);
  closeMobileMenu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu); // Close menu when overlay is clicked

  //   Slider
  const slides = document.querySelectorAll(".slide");
  const leftBtn = document.getElementById("left-btn");
  const rightBtn = document.getElementById("right-btn");
  let currentSlide = 0;

  // Initialize the slider
  function initSlider() {
    // Show the first slide
    slides[currentSlide].classList.remove("d-none");
    slides[currentSlide].classList.add("active");
  }

  // Function to change slides
  function changeSlide(direction) {
    // Add d-none to current slide and remove active class
    slides[currentSlide].classList.add("d-none");
    slides[currentSlide].classList.remove(
      "active",
      "slide-in-left",
      "slide-in-right",
    );

    // Calculate new slide index
    if (direction === "next") {
      currentSlide = (currentSlide + 1) % slides.length;
    } else {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    // Prepare new slide with appropriate animation class
    const animationClass =
      direction === "next" ? "slide-in-right" : "slide-in-left";
    slides[currentSlide].classList.remove("d-none");
    slides[currentSlide].classList.add("active", animationClass);

    // Remove animation class after animation completes to reset for next time
    setTimeout(() => {
      slides[currentSlide].classList.remove("slide-in-left", "slide-in-right");
    }, 1000);
  }

  // Event listeners for buttons
  leftBtn.addEventListener("click", () => changeSlide("prev"));
  rightBtn.addEventListener("click", () => changeSlide("next"));

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      changeSlide("prev");
    } else if (e.key === "ArrowRight") {
      changeSlide("next");
    }
  });

  // Initialize the slider
  initSlider();
});
