const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  const mobileNav = document.querySelector('.mobile-nav');

  mobileNav.classList.toggle('display');
});

console.log('Hello');