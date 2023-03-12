const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('display');
});

mobileNav.addEventListener('click', (e) => {
  const elementName = e.target.nodeName;

  if(elementName === 'A' || elementName === 'LI'){
    mobileNav.classList.toggle('display');
  }
}); 