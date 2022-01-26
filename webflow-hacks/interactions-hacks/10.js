'use strict';
document.addEventListener('DOMContentLoaded', function (event) {
  const pageWrapper = document.querySelector('.page-wrapper');
  pageWrapper.style.display = 'none';
  const loadingWrapper = document.querySelector('.hack10-loading-wrapper');
  const seenAnimation = Cookies.get('seenAnimation');
  if (!seenAnimation) {
    loadingWrapper.style.display = 'flex';
    setTimeout(() => {
      pageWrapper.style.display = 'block';
    }, 3000);
    Cookies.set('seenAnimation', '1', { expires: 1 });
  } else {
    loadingWrapper.style.visibility = 'hidden';
    pageWrapper.style.display = 'block';
  }
  const clearCookiesButton = document.querySelector('.clear-cookie');
  clearCookiesButton.onclick = () => {
    Cookies.remove('seenAnimation');
  };
});
