/* ============================================
   KARAJO PORTFOLIO — JavaScript
   Clean, smooth interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Loading Screen ----
  const loadingBar = document.getElementById('loading-bar');
  const loadingScreen = document.getElementById('loading-screen');
  let progress = 0;

  const loadingInterval = setInterval(() => {
    progress += Math.random() * 30 + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadingInterval);
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
      }, 300);
    }
    loadingBar.style.width = progress + '%';
  }, 150);

  // ---- Navbar Scroll Effect ----
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    const scrollY = window.scrollY;

    // Navbar shadow
    navbar.classList.toggle('scrolled', scrollY > 20);

    // Back to top visibility
    backToTop.classList.toggle('visible', scrollY > 500);

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Back to top
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Mobile Nav Toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active');
    });
  });

  // ---- Intersection Observer: Fade In ----
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate stat counters
        const stats = entry.target.querySelectorAll('.stat-number[data-target]');
        stats.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          animateCounter(stat, target);
        });

        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    fadeObserver.observe(el);
  });

  // Observe stat items separately
  document.querySelectorAll('.stat-item').forEach(el => {
    fadeObserver.observe(el);
  });

  // ---- Counter Animation ----
  function animateCounter(element, target) {
    if (element.dataset.animated) return;
    element.dataset.animated = 'true';

    let current = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = '+' + Math.floor(current);
    }, stepTime);
  }

  // ---- Smooth Scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- Contact Form ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('.btn-submit');
      const originalHTML = btn.innerHTML;

      btn.innerHTML = '✓ Pesan Terkirim!';
      btn.style.background = '#16a34a';

      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ---- Skill dots animation on scroll ----
  const skillRows = document.querySelectorAll('.skill-row');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 80);
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillRows.forEach((row, i) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(20px)';
    row.style.transition = `all 0.5s ease ${i * 0.08}s`;
    skillObserver.observe(row);
  });

});
