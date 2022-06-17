'use strict';
// when DOM is ready, run the function
document.addEventListener('DOMContentLoaded', function () {
  // if the page url lacks a query string
  if (!window.location.search) return;
  // get all links with href attribute
  const allLinks = document.querySelectorAll('a[href]');
  allLinks.forEach((link) => {
    // get the link's href attribute value
    const hrefVal = link.getAttribute('href');
    if (!hrefVal || hrefVal.startsWith('#')) return;
    let href;
    // if the link's href attribute already has its own query string
    if (hrefVal.includes('?')) {
      // append the page url's query string
      href = hrefVal + '&' + window.location.search.split('?')[1];
    } else {
      href = hrefVal + window.location.search;
    }
    link.setAttribute('href', href);
  });
});
// uses HTML5 history API to manipulate the location bar
setTimeout(() => {
  history.replaceState('', document.title, window.location.origin + window.location.pathname);
});
