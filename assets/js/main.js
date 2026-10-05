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

  // Newsletter & ARC Form Handler (Formspree Integration)
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button[type="submit"]');
      const feedback = form.parentElement.querySelector('.newsletter-feedback');
      
      if (!input || !input.value.trim()) return;

      const email = input.value.trim();
      const originalBtnText = btn.textContent;
      btn.textContent = 'Joining...';
      btn.disabled = true;

      const endpoint = form.getAttribute('action') || 'https://formspree.io/f/xjygbjyv';
      const formData = new FormData(form);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          btn.textContent = 'Subscribed!';
          btn.style.backgroundColor = 'var(--accent-forest)';
          input.value = '';
          input.disabled = true;

          if (feedback) {
            feedback.textContent = `Welcome to the Reader's Circle. We'll send early dispatches and first access to The Borrowed Map to ${email}.`;
            feedback.style.display = 'block';
            feedback.style.color = 'var(--accent-forest)';
          }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        btn.textContent = originalBtnText;
        btn.disabled = false;
        if (feedback) {
          feedback.textContent = 'There was a connection issue. Please try again or email info@olayiwolakolaseriki.com directly.';
          feedback.style.display = 'block';
          feedback.style.color = 'var(--accent-terracotta)';
        }
      }
    });
  });

  // Contact Page Form Handler (Formspree Integration)
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!contactSubmitBtn) return;

      const originalBtnText = contactSubmitBtn.textContent;
      contactSubmitBtn.textContent = 'Sending Inquiry...';
      contactSubmitBtn.disabled = true;

      const endpoint = contactForm.getAttribute('action') || 'https://formspree.io/f/xjygbjyv';
      const formData = new FormData(contactForm);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          contactForm.reset();
          contactForm.style.display = 'none';
          if (contactSuccess) {
            contactSuccess.style.display = 'block';
          }
        } else {
          throw new Error('Submission error');
        }
      } catch (error) {
        contactSubmitBtn.textContent = originalBtnText;
        contactSubmitBtn.disabled = false;
        alert('There was a problem sending your inquiry. Please email info@olayiwolakolaseriki.com directly.');
      }
    });
  }

  // Advance Reader Copy (ARC) Form Handler
  const arcForm = document.getElementById('arcForm');
  const arcSuccess = document.getElementById('arcSuccess');
  const arcSubmitBtn = document.getElementById('arcSubmitBtn');

  if (arcForm) {
    arcForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!arcSubmitBtn) return;

      const originalBtnText = arcSubmitBtn.textContent;
      arcSubmitBtn.textContent = 'Submitting Request...';
      arcSubmitBtn.disabled = true;

      const endpoint = arcForm.getAttribute('action') || 'https://formspree.io/f/xjygbjyv';
      const formData = new FormData(arcForm);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          arcForm.reset();
          arcForm.style.display = 'none';
          if (arcSuccess) {
            arcSuccess.style.display = 'block';
          }
        } else {
          throw new Error('ARC submission error');
        }
      } catch (error) {
        arcSubmitBtn.textContent = originalBtnText;
        arcSubmitBtn.disabled = false;
        alert('There was a problem submitting your request. Please email info@olayiwolakolaseriki.com directly.');
      }
    });
  }
});
