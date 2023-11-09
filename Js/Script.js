function toggleItems() {
  const navyItems = document.querySelector('.navy-items');
  const icon = document.getElementById('icon');

  if (navyItems.classList.contains('hidden')) {
    navyItems.classList.remove('hidden');
    navyItems.classList.add('visible');
    icon.textContent = '➖';
    } else {
    navyItems.classList.remove('visible');
    navyItems.classList.add('hidden');
    icon.textContent = '➕';
  }
}

const leftSideElement = document.querySelector('.left-side-element');

window.addEventListener('scroll', () => {
    if (isElementInViewport(leftSideElement)) {
        leftSideElement.style.animationPlayState = 'running';
    } else {
        leftSideElement.style.animationPlayState = 'paused';
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
