/* RK Events - Main JavaScript */

// ====== Loading Screen ======
window.addEventListener('DOMContentLoaded', () => {
  const loading = document.getElementById('loading-screen');
  if (!loading) return;
  // Generate particles
  const particlesEl = loading.querySelector('.loading-particles');
  if (particlesEl) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 3 + 's';
      p.style.animationDuration = (3 + Math.random() * 2) + 's';
      particlesEl.appendChild(p);
    }
  }
  setTimeout(() => {
    loading.classList.add('fade-out');
    setTimeout(() => { loading.style.display = 'none'; }, 600);
  }, 4500);
});

// ====== Navbar Scroll ======
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ====== Mobile Menu ======
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = hamburger.querySelector('svg');
    if (mobileMenu.classList.contains('open')) {
      icon.innerHTML = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>';
    } else {
      icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
    }
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

// ====== Active Nav Link ======
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'index.html' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ====== Scroll Reveal ======
const srObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      srObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.sr, .sr-left, .sr-right, .sr-scale').forEach(el => srObserver.observe(el));

// ====== Stats Counter ======
function animateCounter(el, target, duration = 2000) {
  const start = Date.now();
  const update = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(ease * target);
    el.textContent = target >= 1000 ? current.toLocaleString() + '+' : current + '+';
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target >= 1000 ? target.toLocaleString() + '+' : target + '+';
  };
  requestAnimationFrame(update);
}

const statsSection = document.getElementById('stats-section');
if (statsSection) {
  let started = false;
  const statsObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      document.querySelectorAll('[data-counter]').forEach((el, i) => {
        setTimeout(() => animateCounter(el, parseInt(el.dataset.counter)), i * 100);
      });
    }
  }, { threshold: 0.3 });
  statsObs.observe(statsSection);
}

// ====== Reviews Carousel ======
const reviews = [
  { name: 'Priya Sharma', event: 'Wedding Reception', rating: 5, time: '2 weeks ago', text: 'RK Events made our wedding reception absolutely magical! Every detail was perfect, from the decorations to the coordination. They exceeded our expectations in every way.' },
  { name: 'Rajesh Kumar', event: 'Corporate Annual Meet', rating: 5, time: '1 month ago', text: 'Outstanding service for our corporate annual meet! Professional, punctual, and perfectly organized. Highly recommended for corporate events.' },
  { name: 'Lakshmi Venkat', event: 'Golden Anniversary', rating: 5, time: '3 weeks ago', text: 'They turned our simple anniversary celebration into a grand affair! The attention to detail and personal care made it truly memorable for our entire family.' },
  { name: 'Arjun Reddy', event: 'Birthday Party', rating: 5, time: '1 week ago', text: 'Excellent event management for our daughter\'s birthday party! The team was creative, professional, and made sure every guest had a wonderful time.' },
  { name: 'Meera Krishnan', event: 'School Annual Day', rating: 5, time: '2 months ago', text: 'RK Events handled our school annual day function beautifully. They managed everything from stage setup to sound systems perfectly.' },
  { name: 'Suresh Babu', event: 'Family Gathering', rating: 5, time: '3 months ago', text: 'Amazing catering and decoration services! The food quality was exceptional and the presentation was elegant. They made our family gathering very special.' }
];

let currentReview = 0;
const reviewCard = document.getElementById('review-card');

function renderReview(idx) {
  if (!reviewCard) return;
  const r = reviews[idx];
  const stars = '★'.repeat(r.rating);
  reviewCard.innerHTML = `
    <div class="live-badge"><span class="live-dot"></span>Live Review</div>
    <div style="position:absolute;top:1.5rem;right:1.5rem;color:var(--gold-200);font-size:3rem;line-height:1">"</div>
    <div style="text-align:center;margin:1.5rem 0 1.5rem">
      <div style="display:flex;align-items:center;justify-content:center;gap:.75rem;margin-bottom:.5rem">
        <h4 style="font-weight:700;font-size:1.5rem;color:var(--maroon-900)">${r.name}</h4>
        <span style="background:#dbeafe;color:#1e40af;padding:.25rem .75rem;border-radius:9999px;font-size:.75rem;font-weight:500">✓ Google Verified</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:center;gap:1rem">
        <span style="color:var(--gold-500);font-size:1.25rem">${stars}</span>
        <span style="color:var(--gray-500)">${r.time}</span>
      </div>
    </div>
    <p style="text-align:center;font-style:italic;font-size:1.125rem;color:var(--gray-700);line-height:1.625;margin-bottom:1.5rem">"${r.text}"</p>
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="display:flex;align-items:center;gap:.5rem;color:var(--gray-500);font-size:.875rem">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0z"/></svg>
        Posted on Google
      </div>
      <div style="font-size:.75rem;color:var(--gray-400)">Review #${idx+1} of ${reviews.length}</div>
    </div>
  `;
  document.querySelectorAll('.review-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

if (reviewCard) {
  renderReview(0);
  setInterval(() => { currentReview = (currentReview + 1) % reviews.length; renderReview(currentReview); }, 5000);
  document.getElementById('review-prev')?.addEventListener('click', () => { currentReview = (currentReview - 1 + reviews.length) % reviews.length; renderReview(currentReview); });
  document.getElementById('review-next')?.addEventListener('click', () => { currentReview = (currentReview + 1) % reviews.length; renderReview(currentReview); });
  document.querySelectorAll('.review-dot').forEach((d, i) => {
    d.addEventListener('click', () => { currentReview = i; renderReview(i); });
  });
}

// ====== Gallery Filter & Lightbox ======
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
if (lightbox && lightboxImg) {
  let lightboxImages = [];
  let lightboxIndex = 0;
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      lightboxImages = Array.from(document.querySelectorAll('.gallery-item:not([style*="none"]) img')).map(img => img.src);
      const imgSrc = item.querySelector('img').src;
      lightboxIndex = lightboxImages.indexOf(imgSrc);
      if (lightboxIndex < 0) lightboxIndex = 0;
      lightboxImg.src = lightboxImages[lightboxIndex];
      lightbox.classList.add('open');
    });
  });
  document.getElementById('lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('open'));
  document.getElementById('lightbox-prev')?.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    lightboxImg.src = lightboxImages[lightboxIndex];
  });
  document.getElementById('lightbox-next')?.addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    lightboxImg.src = lightboxImages[lightboxIndex];
  });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
}

// ====== Tab System (Services Page) ======
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(c => {
      c.style.display = c.dataset.tab === tab ? '' : 'none';
    });
  });
});

// ====== Contact Form ======
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value;
    const phone = contactForm.querySelector('#phone').value;
    const eventType = contactForm.querySelector('#event-type').value;
    const message = contactForm.querySelector('#message').value;
    const text = `Hi! I'm ${name}. I'm interested in ${eventType || 'event planning'}. Phone: ${phone}. Message: ${message}`;
    window.open(`https://wa.me/919710916687?text=${encodeURIComponent(text)}`, '_blank');
  });
}

// ====== Scroll to top ======
document.getElementById('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ====== Add delay to sr elements ======
document.querySelectorAll('.sr, .sr-left, .sr-right, .sr-scale').forEach((el, i) => {
  const delay = el.dataset.delay || 0;
  el.style.transitionDelay = delay + 'ms';
});
