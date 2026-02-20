document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     Mobile Menu Toggle
  =============================== */
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* ===============================
     Sliding Text Animation
  =============================== */
  const texts = [
    "Welcome to my portfolio",
    "I'm a Full Stack Web Developer"
  ];

  const animatedText = document.getElementById("animated-text");
  let textIndex = 0;

  function changeText() {
    if (!animatedText) return;

    animatedText.classList.remove("slide-in");

    setTimeout(() => {
      animatedText.textContent = texts[textIndex];
      animatedText.classList.add("slide-in");
      textIndex = (textIndex + 1) % texts.length;
    }, 300);
  }

  if (animatedText) {
    changeText();
    setInterval(changeText, 3000);
  }

  /* ===============================
     Typing Effect
  =============================== */
  const typingText = "I'm Divyasree";
  const typingElement = document.getElementById("typing-text");
  let charIndex = 0;

  function typeEffect() {
    if (!typingElement) return;

    if (charIndex < typingText.length) {
      typingElement.textContent += typingText.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    }
  }

  if (typingElement) {
    typeEffect();
  }

  /* ===============================
     Scroll Reveal (Desktop)
  =============================== */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 120;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ===============================
     Mobile Only Reveal
  =============================== */
  if (window.innerWidth <= 768) {

    const cards = document.querySelectorAll(".reveal-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach((card) => {
      observer.observe(card);
    });
  }

});