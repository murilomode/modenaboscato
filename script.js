const printButton = document.querySelector('[data-print]');
const expandSamplesButton = document.querySelector('[data-expand-samples]');
const sampleModules = Array.from(document.querySelectorAll('.sample-module'));

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
