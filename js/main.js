// Mobile menu toggle
(function() {
  var btn = document.getElementById('mobileMenuBtn');
  var links = document.getElementById('navLinks');

  if (btn && links) {
    btn.addEventListener('click', function() {
      btn.classList.toggle('active');
      links.classList.toggle('open');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        btn.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (links && links.classList.contains('open') && !links.contains(e.target) && !btn.contains(e.target)) {
      btn.classList.remove('active');
      links.classList.remove('open');
    }
  });
})();

// Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      var offset = 80; // nav height
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});

// Add subtle nav background change on scroll
(function() {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      nav.style.borderBottomColor = 'var(--border-light)';
    } else {
      nav.style.borderBottomColor = 'var(--border)';
    }
  });
})();
