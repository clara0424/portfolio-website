(function () {
  'use strict';

  // Selectors — Updated to match the new IDs in index.html
  const sectionCarousel = document.getElementById('section-carousel');
  const sectionProjects = document.getElementById('projects'); 
  const sectionAbout = document.getElementById('about');
  
  const navButtons = document.querySelectorAll('.nav-btn');
  const nameClara = document.getElementById('name-clara');
  const nameJuong = document.getElementById('name-juong');
  const headerName = document.getElementById('name-clara-juong-header');

  /**
   * Main Navigation Logic
   * Manages class toggling and header name visibility
   */
  function showSection(targetSection) {
    const allSections = [sectionCarousel, sectionProjects, sectionAbout];
    
    allSections.forEach(section => {
      if (!section) return;
      
      if (section === targetSection) {
        section.classList.add('visible');
        // Reset scroll position to top when entering a new section
        section.scrollTop = 0; 
      } else {
        section.classList.remove('visible');
      }
    });

    // Handle Large Center Names (Home only)
    if (targetSection === sectionCarousel) {
      nameClara?.classList.remove('hidden');
      nameJuong?.classList.remove('hidden');
      headerName?.classList.add('hidden'); // Hide small header name on home
    } else {
      nameClara?.classList.add('hidden');
      nameJuong?.classList.add('hidden');
      headerName?.classList.remove('hidden'); // Show small header name on other pages
    }
  }

  /**
   * 🚨 NEW: HASH NAVIGATION HANDLER
   * Checks the URL hash (e.g., #projects) to trigger the correct view on load
   */
  function handleUrlHash() {
    const hash = window.location.hash;
    if (hash === '#projects') {
      showSection(sectionProjects);
    } else if (hash === '#about') {
      showSection(sectionAbout);
    } else if (hash === '#home' || hash === '') {
      showSection(sectionCarousel);
    }
  }

  // Handle Nav Button Clicks
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetKey = btn.getAttribute('data-target');
      
      // If we are on index.html, we switch sections immediately
      if (targetKey === 'home') showSection(sectionCarousel);
      if (targetKey === 'projects') showSection(sectionProjects);
      if (targetKey === 'about') showSection(sectionAbout);
    });
  });

  // Listen for the page loading and for hash changes in the URL
  window.addEventListener('load', handleUrlHash);
  window.addEventListener('hashchange', handleUrlHash);

  // Make big names clickable to return home
  [nameClara, nameJuong].forEach(el => {
    el?.addEventListener('click', () => showSection(sectionCarousel));
  });

  /**
   * Image Carousel Logic
   */
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  function nextSlide() {
    // Only animate if the carousel is actually visible
    if (!sectionCarousel?.classList.contains('visible')) return;

    carouselSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    carouselSlides[currentSlide].classList.add('active');
  }

  if (carouselSlides.length > 0) {
    setInterval(nextSlide, 3000);
  }

  /**
   * Project Card Navigation
   */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      window.location.href = `project.html?id=${projectId}`;
    });
  });

  /**
   * Header Hover Effects
   */
  const siteHeader = document.querySelector('.site-header');
  const headerItems = document.querySelectorAll('.nav-btn, .icon-btn');

  headerItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      siteHeader.classList.add('fade-others');
      item.classList.add('hovered');
    });
    item.addEventListener('mouseleave', () => {
      siteHeader.classList.remove('fade-others');
      item.classList.remove('hovered');
    });
  });

})();