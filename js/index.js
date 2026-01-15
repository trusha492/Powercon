document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     STICKY NAVBAR
  =============================== */
  const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

  /* ===============================
     ANIMATED COUNTERS
  =============================== */
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let current = 0;
    const increment = target / 120;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });

  /* ===============================
     PRODUCT FILTER
  =============================== */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-item");

  if (filterBtns.length && products.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        products.forEach(product => {
          const category = product.dataset.category;
          product.style.display =
            filter === "all" || category === filter ? "block" : "none";
        });
      });
    });
  }

  /* ===============================
     SCROLL REVEAL ANIMATION
  =============================== */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerPoint) {
        el.classList.add("active");
      }
    });
  };

  if (reveals.length) {
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }

});
