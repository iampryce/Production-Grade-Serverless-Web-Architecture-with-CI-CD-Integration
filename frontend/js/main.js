/* ==========================================================
   TOBI PORTFOLIO — main.js
   
   Sections:
   1. Config
   2. Mobile Navigation
   3. Scroll Animations
   4. Contact Form
   5. Init
========================================================== */

/* ----------------------------------------------------------
   1. CONFIG
   ⚙️  Replace API_ENDPOINT with your AWS API Gateway URL
   Example: https://abc123.execute-api.us-east-1.amazonaws.com/prod/contact
---------------------------------------------------------- */
const CONFIG = {
  API_ENDPOINT: 'https://YOUR_API_GATEWAY_ID.execute-api.REGION.amazonaws.com/prod/contact',
};

/* ----------------------------------------------------------
   2. MOBILE NAVIGATION
---------------------------------------------------------- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close on link click
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });
}

/* ----------------------------------------------------------
   3. SCROLL ANIMATIONS
   Fades elements with .fade-up class into view
---------------------------------------------------------- */
function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-up');

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after animating to save memory
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ----------------------------------------------------------
   4. CONTACT FORM
   Sends form data as JSON to your API Gateway endpoint.
   Lambda receives it and sends you an SES email.
---------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const statusEl = document.getElementById('formStatus');

  if (!form) return;

  /* -- UI Helpers -- */

  function setStatus(type, message) {
    statusEl.textContent = message;
    statusEl.className = 'form-status ' + type;
  }

  function clearStatus() {
    statusEl.textContent = '';
    statusEl.className = 'form-status';
  }

  function setLoading(isLoading) {
    submitBtn.disabled = isLoading;

    if (isLoading) {
      submitBtn.innerHTML = `
        <svg
          width="16" height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          style="animation: spin 1s linear infinite"
        >
          <circle cx="12" cy="12" r="10" stroke-dasharray="31 31" stroke-dashoffset="0"/>
        </svg>
        Sending...
      `;
    } else {
      submitBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
        </svg>
        Send Message
      `;
    }
  }

  /* -- Form Validation -- */

  function validateForm(data) {
    if (!data.firstName.trim()) return 'Please enter your first name.';
    if (!data.lastName.trim()) return 'Please enter your last name.';
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return 'Please enter a valid email address.';
    }
    if (!data.message.trim() || data.message.trim().length < 10) {
      return 'Please enter a message (at least 10 characters).';
    }
    return null;
  }

  /* -- Submit Handler -- */

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearStatus();

    const payload = {
      firstName: form.firstName.value,
      lastName:  form.lastName.value,
      email:     form.email.value,
      subject:   form.subject.value || 'General Inquiry',
      message:   form.message.value,
    };

    // Client-side validation
    const validationError = validateForm(payload);
    if (validationError) {
      setStatus('error', '✗ ' + validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(CONFIG.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success', '✓ Message sent! I\'ll get back to you within 24 hours.');
        form.reset();
      } else {
        // Try to read error body from Lambda
        let errorMsg = 'Something went wrong. Please try emailing me directly.';
        try {
          const errorData = await response.json();
          if (errorData.message) errorMsg = errorData.message;
        } catch (_) {
          // ignore JSON parse error
        }
        setStatus('error', '✗ ' + errorMsg);
      }
    } catch (networkError) {
      console.error('Contact form network error:', networkError);
      setStatus('error', '✗ Network error. Please check your connection or email me directly.');
    } finally {
      setLoading(false);
    }
  });
}

/* ----------------------------------------------------------
   5. INIT — runs when DOM is ready
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollAnimations();
  initContactForm();
});
