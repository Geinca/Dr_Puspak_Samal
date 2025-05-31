document.addEventListener("DOMContentLoaded", function () {

  // header
  document.addEventListener("DOMContentLoaded", function () {
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
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
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

    // Ensure only one dropdown is open at a time
    document.querySelectorAll(".nav-links details").forEach((dropdown) => {
      dropdown.addEventListener("toggle", function () {
        if (this.open) {
          document
            .querySelectorAll(".nav-links details")
            .forEach((otherDropdown) => {
              if (otherDropdown !== this && otherDropdown.open) {
                otherDropdown.removeAttribute("open");
              }
            });
        }
      });
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
  });

function initwhatsapp(){
    const widget = document.getElementById('socialWidget');
    const toggle = document.getElementById('socialWidgetToggle');
    const icons = document.getElementById('socialWidgetIcons');
    
    // Toggle social icons on click
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        widget.classList.toggle('social-widget-active');
    });
    
    // Close when clicking outside
    document.addEventListener('click', function() {
        widget.classList.remove('social-widget-active');
    });
    
    // Prevent closing when clicking inside the widget
    icons.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Add slight delay to animation for each icon
    const socialButtons = document.querySelectorAll('.social-widget-btn');
    socialButtons.forEach((btn, index) => {
        btn.style.transitionDelay = `${index * 0.05}s`;
    });
}

});
