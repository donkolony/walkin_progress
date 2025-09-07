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

// Testimonials Section
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  loop: true,
  spaceBetween: 33, // gap between slides

  navigation: {
    nextEl: ".testimonials__button--next",
    prevEl: ".testimonials__button--prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 }, // mobile
    768: { slidesPerView: 2 }, // tablet
    1024: { slidesPerView: 3 }, // desktop
  },
});

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

// Disable Link Default (Temporary) - NO Function
const navLinks = document.querySelectorAll("a:link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scroll back to top
    // if (href === "#") {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // }

    // Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({
    //     behavior: "smooth",
    //   });
    // }

    // Close mobile navigation
  });
});

const footerBtn = document.querySelector(".footer__btn");
footerBtn.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();
});

// Disable Link Default (Temporary) - Function Method
// function disableLinks() {
//   const navLinks = document.querySelectorAll("a:link");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log("Link click prevented!");
//     });
//   });
// }

// function disableButton() {
//   const submitBtn = document.querySelector(".footer__btn");

//   if (submitBtn) {
//     submitBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log("Button click prevented!");
//     });
//   }
// }

// Need to pass the disable function as a callback function into the whole document
// document.addEventListener("DOMContentLoaded", () => {
//   disableLinks();
//   disableButton();
// });
