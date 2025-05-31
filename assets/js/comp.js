document.addEventListener("DOMContentLoaded", function () {
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the header:", error));
});

// nav section
document.addEventListener("DOMContentLoaded", function () {
  // Load navbar component dynamically
  fetch("components/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav").innerHTML = data;
      inithammenu();
    });
});

function inithammenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const html = document.documentElement;
  let scrollPosition = 0;

  menuBtn.addEventListener("click", function () {
    const isOpening = !navLinks.classList.contains("active");

    // Store scroll position before opening menu
    if (isOpening) {
      scrollPosition = window.pageYOffset;
    }

    navLinks.classList.toggle("active");

    // Change icon
    const icon = this.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      // Disable scroll
      html.style.overflow = "hidden";
      html.style.position = "fixed";
      html.style.width = "100%";
      html.style.top = `-${scrollPosition}px`;
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      // Enable scroll
      html.style.overflow = "";
      html.style.position = "";
      html.style.width = "";
      html.style.top = "";
      window.scrollTo(0, scrollPosition);
    }
  });

  // Close menu when clicking on a link (except dropdown toggles)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      if (!this.closest("details")) {
        navLinks.classList.remove("active");
        menuBtn.querySelector("i").classList.remove("fa-times");
        menuBtn.querySelector("i").classList.add("fa-bars");
        // Enable scroll when menu closes
        html.style.overflow = "";
        html.style.position = "";
        html.style.width = "";
        html.style.top = "";
        window.scrollTo(0, scrollPosition);
      }
    });
  });

  // Highlight current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (currentPage === linkPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Close dropdowns when clicking outside on mobile
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      const isDropdown = e.target.closest("details");
      const allDetails = document.querySelectorAll("details");

      allDetails.forEach((detail) => {
        if (detail !== isDropdown) {
          detail.removeAttribute("open");
        }
      });
    }
  });

  // Fix for when window is resized
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuBtn.querySelector("i").classList.remove("fa-times");
      menuBtn.querySelector("i").classList.add("fa-bars");
      html.style.overflow = "";
      html.style.position = "";
      html.style.width = "";
      html.style.top = "";
      window.scrollTo(0, scrollPosition);
    }
  });
}

// hero
document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/hero.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("hero").innerHTML = data;
      initheroc(); // Initialize carousel after loading hero section
    });
});

function initheroc() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".nav-dot");
  const prevArrow = document.querySelector(".arrow-left");
  const nextArrow = document.querySelector(".arrow-right");
  let currentIndex = 0;
  let autoSlideInterval;

  // Function to show slide
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  // Next slide function
  function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  // Previous slide function
  function prevSlide() {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  // Auto slide every 5 seconds
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  // Event listeners
  nextArrow.addEventListener("click", nextSlide);
  prevArrow.addEventListener("click", prevSlide);

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      clearInterval(autoSlideInterval);
      showSlide(parseInt(this.getAttribute("data-slide")));
      startAutoSlide();
    });
  });

  // Pause auto slide on hover
  document
    .querySelector(".hero-carousel")
    .addEventListener("mouseenter", function () {
      clearInterval(autoSlideInterval);
    });

  // Resume auto slide when mouse leaves
  document
    .querySelector(".hero-carousel")
    .addEventListener("mouseleave", startAutoSlide);

  // Start auto slide
  startAutoSlide();
}

// Slider
document.addEventListener("DOMContentLoaded", function () {
  fetch("components/slider.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("slider").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the slider:", error));
});

// clients section
// document.addEventListener("DOMContentLoaded", function () {
//   // Load clients section dynamically
//   fetch("components/clients.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("clients").innerHTML = data;
//     })
//     .catch((error) => console.error("Error loading the clients:", error));
// });


// military program section
document.addEventListener("DOMContentLoaded", function () {
  // Load clients section dynamically
  fetch("components/military-program.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("militaryProgram").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the military pragram section:", error));
});

// memberships section
document.addEventListener("DOMContentLoaded", function () {
  // Load clients section dynamically
  fetch("components/memberships.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("memberships").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the memberships section:", error));
});

// achivements section
document.addEventListener("DOMContentLoaded", function () {
  // Load clients section dynamically
  fetch("components/achivements.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("achivements").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the achivements section:", error));
});

// testimonial section
document.addEventListener("DOMContentLoaded", function () {
  // Load clients section dynamically
  fetch("components/testimonial.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("testimonial").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the testimonial:", error));
});

// testimonial new section
document.addEventListener("DOMContentLoaded", function () {
  // Load clients section dynamically
  fetch("components/testimonial-new.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("testimonialNew").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the testimonial:", error));
});

// footer section
document.addEventListener("DOMContentLoaded", function () {
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the footer:", error));
});

// infodr
document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/infodr.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("info").innerHTML = data;
      // Initialize carousel after loading hero section
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/service.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("service").innerHTML = data;
      // Initialize carousel after loading hero section
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load blog section dynamically
  fetch("components/blog.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("blog").innerHTML = data;
      initblog(); // Initialize carousel after loading hero section
    });
});

function initblog() {
  const slider = document.querySelector(".hs-slider-container");
  const prevBtn = document.querySelector(".hs-prev-btn");
  const nextBtn = document.querySelector(".hs-next-btn");
  const blogCards = document.querySelectorAll(".hs-blog-card");

  let currentIndex = 0;
  let cardsToShow = 1;
  let interval;

  function updateCardsToShow() {
    if (window.innerWidth >= 992) {
      cardsToShow = 3;
    } else if (window.innerWidth >= 768) {
      cardsToShow = 2;
    } else {
      cardsToShow = 1;
    }

    currentIndex = 0;
    updateSlider();
  }

  function updateSlider() {
    const cardWidth = blogCards[0].offsetWidth + 20;
    const translateX = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;

    // Optional: hide buttons instead of disabling
    prevBtn.disabled = blogCards.length <= cardsToShow;
    nextBtn.disabled = blogCards.length <= cardsToShow;
  }

  function goToNext() {
    currentIndex++;
    if (currentIndex > blogCards.length - cardsToShow) {
      currentIndex = 0; // Loop back to start
    }
    updateSlider();
  }

  function goToPrev() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = blogCards.length - cardsToShow; // Go to end
    }
    updateSlider();
  }

  nextBtn.addEventListener("click", function () {
    clearInterval(interval);
    goToNext();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", function () {
    clearInterval(interval);
    goToPrev();
    startAutoSlide();
  });

  function startAutoSlide() {
    interval = setInterval(goToNext, 4000); // Change every 4 seconds
  }

  updateCardsToShow();
  window.addEventListener("resize", updateCardsToShow);
  startAutoSlide(); // Begin auto sliding on load
}

document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/video.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("video").innerHTML = data;
      initvideo(); // Initialize carousel after loading hero section
    });
});

// video Slider functionality
function initvideo() {
  const vidTrack = document.getElementById("vidSliderTrack");
  const vidSlides = document.querySelectorAll(".vid-slide");
  const vidPrevBtn = document.getElementById("vidSliderPrev");
  const vidNextBtn = document.getElementById("vidSliderNext");
  const vidDots = document.querySelectorAll(".vid-slider-dot");

  let vidCurrentIndex = 0;
  let vidInterval;
  const vidSlideCount = vidSlides.length;

  // Initialize slider
  function vidInitSlider() {
    vidUpdateSlider();
    vidStartAutoPlay();
  }

  // Update slider position
  function vidUpdateSlider() {
    vidTrack.style.transform = `translateX(-${vidCurrentIndex * 100}%)`;

    // Update dots
    vidDots.forEach((dot, index) => {
      dot.classList.toggle("vid-slider-dot-active", index === vidCurrentIndex);
    });
  }

  // Go to specific slide
  function vidGoToSlide(index) {
    vidCurrentIndex = index;
    vidUpdateSlider();
    vidResetAutoPlay();
  }

  // Next slide
  function vidNextSlide() {
    vidCurrentIndex = (vidCurrentIndex + 1) % vidSlideCount;
    vidUpdateSlider();
    vidResetAutoPlay();
  }

  // Previous slide
  function vidPrevSlide() {
    vidCurrentIndex = (vidCurrentIndex - 1 + vidSlideCount) % vidSlideCount;
    vidUpdateSlider();
    vidResetAutoPlay();
  }

  // Auto-play functionality
  function vidStartAutoPlay() {
    vidInterval = setInterval(vidNextSlide, 5000);
  }

  function vidResetAutoPlay() {
    clearInterval(vidInterval);
    vidStartAutoPlay();
  }

  // Event listeners
  vidNextBtn.addEventListener("click", vidNextSlide);
  vidPrevBtn.addEventListener("click", vidPrevSlide);

  vidDots.forEach((dot, index) => {
    dot.addEventListener("click", () => vidGoToSlide(index));
  });

  // Pause on hover
  vidTrack.addEventListener("mouseenter", () => clearInterval(vidInterval));
  vidTrack.addEventListener("mouseleave", vidStartAutoPlay);

  // Initialize the slider
  vidInitSlider();

  // Responsive adjustments
  function vidHandleResize() {
    // Add any responsive adjustments here if needed
  }

  window.addEventListener("resize", vidHandleResize);
}

document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/testimonial.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("test").innerHTML = data;
      // Initialize carousel after loading hero section
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/aboutdr.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("aboutdr").innerHTML = data;
      initaboutdr(); // Initialize carousel after loading hero section
    });
});

function initaboutdr() {
  const aboutContainer = document.getElementById("aboutContainer");

  // Trigger animation when element comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(aboutContainer);

  // Add hover effect to qualifications
  const qualItems = document.querySelectorAll(".qualification-item");
  qualItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-5px)";
      item.style.boxShadow = "0 10px 20px rgba(37, 99, 235, 0.3)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "";
      item.style.boxShadow = "0 4px 6px rgba(37, 99, 235, 0.2)";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/whatsapp.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("whatsapp").innerHTML = data;
      initwhatsapp(); // Initialize carousel after loading hero section
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/contactbox.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contactbox").innerHTML = data;
      initcontactbox(); // Initialize carousel after loading hero section
    });
});

// Enhanced animations with staggered delays
function initcontactbox() {
  const cards = document.querySelectorAll(".info-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }, index * 150);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Add hover effect to highlight text
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach((highlight) => {
    highlight.addEventListener("mouseenter", () => {
      highlight.style.background =
        "linear-gradient(120deg, rgba(79, 70, 229, 0.2), rgba(245, 158, 11, 0.2))";
    });
    highlight.addEventListener("mouseleave", () => {
      highlight.style.background =
        "linear-gradient(120deg, rgba(79, 70, 229, 0.1), rgba(245, 158, 11, 0.1))";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Load hero section dynamically
  fetch("components/members.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("members").innerHTML = data; // Initialize carousel after loading hero section
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("components/stats.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("stats").innerHTML = data;

      // Counter logic after stats.html is loaded
      let hasAnimated = false;

      function animateCounters() {
        const counters = document.querySelectorAll(".counter");
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target.toLocaleString(); // Add comma formatting
            }
          };
          updateCount();
        });
      }

      function handleScroll() {
        const statsSection = document.getElementById("stats");
        const sectionTop = statsSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (!hasAnimated && sectionTop < triggerPoint) {
          animateCounters();
          hasAnimated = true;
        }
      }

      window.addEventListener("scroll", handleScroll);
    });
});
