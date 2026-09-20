/* =============================================
   MALANG TRAVELER — Main JavaScript
   ============================================= */

'use strict';

// =============================================
// NAVBAR: Shrink on Scroll
// =============================================
const navbar = document.getElementById('mainNavbar');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }

  // Back to Top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();

// =============================================
// BACK TO TOP
// =============================================
document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================================
// HERO: Ken Burns Effect
// =============================================
window.addEventListener('load', () => {
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    setTimeout(() => heroSection.classList.add('loaded'), 100);
  }
});

// =============================================
// SCROLL REVEAL ANIMATION
// =============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
  revealObserver.observe(el);
});

// =============================================
// COUNTER ANIMATION (Stats)
// =============================================
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 2000;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start).toLocaleString('id-ID') + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-counter]').forEach((el) => {
  counterObserver.observe(el);
});

// =============================================
// SEARCH TABS
// =============================================
document.querySelectorAll('.search-tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.search-tab-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// =============================================
// PACKAGE FILTER
// =============================================
const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
const filterItems = document.querySelectorAll('[data-category]');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    filterItems.forEach((item) => {
      const cat = item.dataset.category || '';
      if (filter === 'all' || cat.includes(filter)) {
        item.style.display = '';
        item.classList.remove('hidden');
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// =============================================
// TESTIMONIAL SLIDER (simple auto-cycle)
// =============================================
(function () {
  const slides = document.querySelectorAll('.testi-slide');
  const dots = document.querySelectorAll('.testi-dot');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');

  if (!slides.length) return;

  let current = 0;
  let autoTimer;

  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.style.display = i === idx ? '' : 'none';
      s.classList.toggle('active', i === idx);
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  function next() {
    showSlide((current + 1) % slides.length);
  }

  function prev() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); stopAuto(); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); stopAuto(); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { showSlide(i); stopAuto(); startAuto(); }));

  showSlide(0);
  startAuto();
})();

// =============================================
// NAVBAR DROPDOWN (mobile touch friendly)
// =============================================
document.querySelectorAll('.nav-item.dropdown').forEach((item) => {
  const toggle = item.querySelector('.dropdown-toggle');
  if (!toggle) return;

  // Desktop: hover open
  if (window.innerWidth > 991) {
    item.addEventListener('mouseenter', () => {
      const menu = item.querySelector('.dropdown-menu');
      if (menu) menu.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
    });
    item.addEventListener('mouseleave', () => {
      const menu = item.querySelector('.dropdown-menu');
      if (menu) menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }
});

// =============================================
// GALLERY FILTER
// =============================================
const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');

galleryFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    galleryFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-item-wrap').forEach((item) => {
      const cat = item.dataset.category || '';
      if (filter === 'all' || cat === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// =============================================
// NEWSLETTER FORM
// =============================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const email = input?.value?.trim();
    if (email) {
      const waMsg = encodeURIComponent(`Halo Malang Traveler, saya ingin berlangganan info & penawaran terbaru. Email saya: ${email}`);
      window.open(`https://wa.me/6288989643555?text=${waMsg}`, '_blank');
      input.value = '';
    }
  });
}

// =============================================
// CONTACT FORM -> WhatsApp
// =============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#contactName')?.value || '';
    const company = contactForm.querySelector('#contactCompany')?.value || '';
    const program = contactForm.querySelector('#contactProgram')?.value || '';
    const peserta = contactForm.querySelector('#contactPeserta')?.value || '';
    const tanggal = contactForm.querySelector('#contactTanggal')?.value || '';
    const msg = contactForm.querySelector('#contactMsg')?.value || '';

    const waText = `Halo Malang Traveler, saya ingin konsultasi:

📋 Nama: ${name}
🏢 Instansi: ${company}
🎯 Program: ${program}
👥 Jumlah Peserta: ${peserta}
📅 Tanggal Rencana: ${tanggal}
💬 Pesan: ${msg}

Mohon informasi lebih lanjut. Terima kasih!`;

    const waMsg = encodeURIComponent(waText);
    window.open(`https://wa.me/6288989643555?text=${waMsg}`, '_blank');
  });
}

// =============================================
// SMOOTH SCROLL for anchor links
// =============================================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// =============================================
// SET ACTIVE NAV LINK based on current page
// =============================================
(function () {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('#')[0].split('/').pop();
    if (
      linkFile &&
      (((currentFile === '' || currentFile === 'index.html') && linkFile === 'index.html') ||
        currentFile === linkFile)
    ) {
      link.classList.add('active');
    }
  });
})();

// =============================================
// LAZY LOAD IMAGES (fallback for older browsers)
// =============================================
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
} else {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imageObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach((img) => imageObserver.observe(img));
}

// =============================================
// FLOATING WA TOOLTIP CLICK
// =============================================
document.querySelectorAll('.floating-wa-tooltip').forEach((tooltip) => {
  tooltip.addEventListener('click', () => {
    const waLink = tooltip.parentElement?.querySelector('.floating-wa-btn');
    if (waLink && waLink.href) {
      window.open(waLink.href, '_blank', 'noopener,noreferrer');
    }
  });
});

console.log('%c🌿 Malang Traveler Web ID — Initialized', 'color:#0E8A7D;font-weight:bold;font-size:14px');
