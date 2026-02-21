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
  document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-item");

    if (!filterBtns.length || !products.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        // active state on buttons
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter; // 'all', 'solar', 'led', 'agriculture'

        products.forEach(p => {
          const category = p.dataset.category;

          if (filter === "all" || category === filter) {
            // use default Bootstrap display
            p.style.display = "";
          } else {
            p.style.display = "none";
          }
        });
      });
    });
  });

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

document.addEventListener("DOMContentLoaded", () => {
  const usecaseLinks = document.querySelectorAll('a[href^="#usecase-"]');
  const usecaseCards = document.querySelectorAll('.usecase-card');

  // Show first card by default (optional)
  if (usecaseCards.length) {
    usecaseCards[0].classList.add('active');
  }

  usecaseLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      // Hide all cards
      usecaseCards.forEach(card => card.classList.remove('active'));

      // Show the selected card
      targetEl.classList.add('active');

      // Smooth scroll to the card
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const interactiveCards = document.querySelectorAll(".ai-interactive-card");
  const detailTitle = document.getElementById("ai-detail-title");
  const detailText = document.getElementById("ai-detail-text");

  if (!interactiveCards.length || !detailTitle || !detailText) return;

  interactiveCards.forEach(card => {
    card.addEventListener("click", () => {
      interactiveCards.forEach(item => item.classList.remove("active"));
      card.classList.add("active");
      detailTitle.textContent = card.dataset.aiTitle || "";
      detailText.textContent = card.dataset.aiDetail || "";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const infoCards = document.querySelectorAll(".ai-info-card");
  const detailTitle = document.getElementById("ai-gallery-detail-title");
  const detailFrame = document.getElementById("ai-gallery-detail-frame");

  if (!infoCards.length || !detailTitle || !detailFrame) return;

  infoCards.forEach(card => {
    card.addEventListener("click", () => {
      infoCards.forEach(item => item.classList.remove("active"));
      card.classList.add("active");
      detailTitle.textContent = card.dataset.infoTitle || "";
      if (card.dataset.infoPage) {
        detailFrame.src = card.dataset.infoPage;
      }
    });
  });
});
