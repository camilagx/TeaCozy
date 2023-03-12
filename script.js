const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('display');
});

mobileNav.addEventListener('click', () => {
  mobileNav.classList.toggle('display');
}); 