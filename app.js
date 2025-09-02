// Force scroll to top on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 20); // tiny delay to override browser behavior
});
