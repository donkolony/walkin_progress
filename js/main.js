// SwiperJS Slider Script
// About Section
const aboutSwiper = new Swiper(".about-swiper", {
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".about-swiper .swiper-pagination ",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".about-swiper .swiper-button-next",
    prevEl: ".about-swiper .swiper-button-prev",
  },
});

console.log(aboutSwiper);

// Testimonials Section
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  loop: true,
  spaceBetween: 33, // gap between slides

  navigation: {
    nextEl: ".testimonials__button--next",
    prevEl: ".testimonials__button--prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    528: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

////////////////////////////////////////////////////////////////////////
// Sticky Navigation
const sectionHeroEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

////////////////////////////////////////////////////////////////////////
const btnNavEl = document.querySelector(".btn__mobile-nav");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelectorAll("a:link");

// Disable Link Default (Temporary) - NO Function
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to internal sections
    else if (href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    // External links (Paystack, socials, etc.)
    else {
      return;
    }

    // Close mobile navigation
    if (link.classList.contains("header__nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//  Toggle Navbar on Mobile
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
