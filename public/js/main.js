// Initialize all components when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();
    
    // Initialize forms
    initForms();
    
    // Initialize modals
    initModals();
});

// Handle smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle scroll events
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove header shadow based on scroll position
    if (scrollTop > 0) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Fade-in animation for How It Works section
(function() {
  var observer = null;
  function onIntersect(entries, obs) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }
  document.addEventListener('DOMContentLoaded', function() {
    var fadeEls = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window && fadeEls.length) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.2 });
      fadeEls.forEach(function(el) { observer.observe(el); });
    } else {
      // fallback: show all
      fadeEls.forEach(function(el) { el.classList.add('visible'); });
    }
  });
})();
