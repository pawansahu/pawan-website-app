// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon
    const icon = mobileMenuToggle.querySelector('i');
    if (icon) {
      if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.className = 'fas fa-bars';
      }
    }
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.className = 'fas fa-bars';
      }
    });
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Calculate offset for fixed navbar
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 60;
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Skill Progress Animation
const observeSkills = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.skill-progress');
      progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
          bar.style.width = progress + '%';
        }, 200);
      });
      observeSkills.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
  observeSkills.observe(skillsSection);
}

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        formMessage.textContent = result.message;
        formMessage.className = 'form-message success';
        contactForm.reset();
      } else {
        formMessage.textContent = 'Something went wrong. Please try again.';
        formMessage.className = 'form-message error';
      }

      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    } catch (error) {
      formMessage.textContent = 'Error sending message. Please try again.';
      formMessage.className = 'form-message error';
    }
  });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate elements on scroll
const observeElements = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply animation to sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
  observeElements.observe(section);
});

// Typing Effect for Hero Title
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  setTimeout(typeWriter, 500);
}

// Add animation class to elements
document.addEventListener('DOMContentLoaded', () => {
  const animateOnScroll = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'var(--card-bg)';
    navbar.style.boxShadow = 'var(--shadow)';
  } else {
    navbar.style.background = 'var(--card-bg)';
  }
});

// Protect profile image from download/drag
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
  // Prevent right-click context menu
  profileImage.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent drag
  profileImage.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent selection
  profileImage.addEventListener('mousedown', (e) => {
    e.preventDefault();
  });

  // Additional protection for touch devices
  profileImage.addEventListener('touchstart', (e) => {
    e.preventDefault();
  }, { passive: false });
}

// Disable right-click on all images (optional - uncomment if needed)
// document.addEventListener('contextmenu', (e) => {
//   if (e.target.tagName === 'IMG') {
//     e.preventDefault();
//     return false;
//   }
// });

// ============================================
// DEVELOPER TOOLS & SOURCE CODE PROTECTION
// ============================================

// Disable right-click globally
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

// Disable keyboard shortcuts for DevTools and View Source
document.addEventListener('keydown', (e) => {
  // F12 - Developer Tools
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
    return false;
  }

  // Ctrl+Shift+I - Developer Tools
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
    e.preventDefault();
    return false;
  }

  // Ctrl+Shift+J - Console
  if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
    e.preventDefault();
    return false;
  }

  // Ctrl+Shift+C - Inspect Element
  if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
    e.preventDefault();
    return false;
  }

  // Ctrl+U - View Source
  if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
    e.preventDefault();
    return false;
  }

  // Ctrl+S - Save Page
  if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
    e.preventDefault();
    return false;
  }

  // Ctrl+P - Print (can be used to save)
  if (e.ctrlKey && (e.key === 'P' || e.keyCode === 80)) {
    e.preventDefault();
    return false;
  }

  // Ctrl+Shift+K - Firefox Console
  if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.keyCode === 75)) {
    e.preventDefault();
    return false;
  }

  // Cmd+Option+I (Mac) - Developer Tools
  if (e.metaKey && e.altKey && (e.key === 'I' || e.keyCode === 73)) {
    e.preventDefault();
    return false;
  }

  // Cmd+Option+J (Mac) - Console
  if (e.metaKey && e.altKey && (e.key === 'J' || e.keyCode === 74)) {
    e.preventDefault();
    return false;
  }

  // Cmd+Option+C (Mac) - Inspect Element
  if (e.metaKey && e.altKey && (e.key === 'C' || e.keyCode === 67)) {
    e.preventDefault();
    return false;
  }

  // Cmd+U (Mac) - View Source
  if (e.metaKey && (e.key === 'U' || e.keyCode === 85)) {
    e.preventDefault();
    return false;
  }
});

// Detect if DevTools is open
let devtoolsOpen = false;
const threshold = 160;

// Check window size changes (DevTools opening)
const detectDevTools = () => {
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;

  if (widthThreshold || heightThreshold) {
    if (!devtoolsOpen) {
      devtoolsOpen = true;
      // Redirect or show warning
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial;font-size:24px;color:#1e3c72;">⚠️ Developer tools are not allowed</div>';
    }
  } else {
    devtoolsOpen = false;
  }
};

// Check periodically
setInterval(detectDevTools, 1000);

// Detect debugger
setInterval(() => {
  const before = new Date();
  debugger;
  const after = new Date();
  if (after - before > 100) {
    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial;font-size:24px;color:#1e3c72;">⚠️ Debugging is not allowed</div>';
  }
}, 1000);

// Disable text selection on sensitive elements
document.addEventListener('selectstart', (e) => {
  // Allow selection in form inputs
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return true;
  }
  e.preventDefault();
  return false;
});

// Disable copy
document.addEventListener('copy', (e) => {
  // Allow copy in form inputs
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    return true;
  }
  e.preventDefault();
  return false;
});

// Disable cut
document.addEventListener('cut', (e) => {
  e.preventDefault();
  return false;
});

// Clear console periodically
setInterval(() => {
  console.clear();
}, 2000);

// Override console methods
(function () {
  const noop = function () { };
  const methods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace', 'dir', 'group', 'groupCollapsed', 'groupEnd', 'clear'];

  methods.forEach(method => {
    console[method] = noop;
  });
})();

console.log('Portfolio loaded successfully! 🚀');
