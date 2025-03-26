// Select DOM elements
document.addEventListener("DOMContentLoaded", function () {
  // Get all necessary DOM elements
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
