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

mobileMenuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  if (navLinks.style.display === 'flex') {
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'var(--card-bg)';
    navLinks.style.flexDirection = 'column';
    navLinks.style.padding = '20px';
    navLinks.style.boxShadow = 'var(--shadow)';
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
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

console.log('Portfolio loaded successfully! 🚀');
