// Olayiwola Kola-Seriki Author Platform JS

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' || false;
      mobileToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // Excerpt Modal Handlers
  const modalTriggers = document.querySelectorAll('[data-open-excerpt]');
  const excerptModal = document.getElementById('excerptModal');
  const modalClose = document.getElementById('modalClose');

  function openModal() {
    if (excerptModal) {
      excerptModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (excerptModal) {
      excerptModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (excerptModal) {
    excerptModal.addEventListener('click', (e) => {
      if (e.target === excerptModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && excerptModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // Newsletter Form Handler
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button[type="submit"]');
      const feedback = form.parentElement.querySelector('.newsletter-feedback');
      
      if (!input || !input.value.trim()) return;

      const email = input.value.trim();
      const originalBtnText = btn.textContent;
      btn.textContent = 'Joining...';
      btn.disabled = true;

      // Simulate submission (ready to plug in ConvertKit/Kit, Substack, MailerLite, or Formspree)
      setTimeout(() => {
        btn.textContent = 'Subscribed!';
        btn.style.backgroundColor = 'var(--accent-forest)';
        input.value = '';
        input.disabled = true;

        if (feedback) {
          feedback.textContent = `Welcome to the Reader's Circle. We'll send early dispatches and first access to The Borrowed Map to ${email}.`;
          feedback.style.display = 'block';
        }
      }, 700);
    });
  });
});
