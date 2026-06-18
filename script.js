const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const printButton = document.querySelector('[data-print]');
const expandSamplesButton = document.querySelector('[data-expand-samples]');
const sampleModules = Array.from(document.querySelectorAll('.sample-module'));

if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

if (expandSamplesButton && sampleModules.length) {
  const updateExpandLabel = () => {
    const allOpen = sampleModules.every((module) => module.open);
    expandSamplesButton.textContent = allOpen ? 'Collapse all' : 'Expand all';
  };

  expandSamplesButton.addEventListener('click', () => {
    const shouldOpen = !sampleModules.every((module) => module.open);
    sampleModules.forEach((module) => { module.open = shouldOpen; });
    updateExpandLabel();
  });

  sampleModules.forEach((module) => module.addEventListener('toggle', updateExpandLabel));
  updateExpandLabel();
}

document.querySelectorAll('.sample-jump a').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target?.matches('details')) target.open = true;
  });
});

let printModuleState = [];
window.addEventListener('beforeprint', () => {
  printModuleState = sampleModules.map((module) => module.open);
  sampleModules.forEach((module) => { module.open = true; });
});
window.addEventListener('afterprint', () => {
  sampleModules.forEach((module, index) => { module.open = printModuleState[index] ?? module.open; });
});

if (printButton) printButton.addEventListener('click', () => window.print());

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});
