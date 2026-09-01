// Coffees & Barbers Co. — interactividad básica del landing

document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header con sombra al hacer scroll
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 12) header.style.boxShadow = '0 8px 24px rgba(0,0,0,.08)';
    else header.style.boxShadow = 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Animación de aparición al hacer scroll
  const revealTargets = document.querySelectorAll(
    '.service-row, .testimonial, .gallery-item, .about-copy, .about-visual, .location-grid > *, .booking-form'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));

  // Formulario de reserva (demo sin backend)
  const form = document.getElementById('bookingForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.hidden = false;
      note.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      form.reset();
    });
  }
});
