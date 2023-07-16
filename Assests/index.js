function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }

  // Attach click event listeners to navbar links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default anchor click behavior
      const targetSection = event.target.getAttribute('href');
      scrollToSection(targetSection);
    });
  });
  