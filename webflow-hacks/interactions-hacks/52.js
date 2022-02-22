'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const PAGE_WRAPPER_SELECTOR = '[fs-hacks-element="page-wrapper"]';
  const LOADING_WRAPPER_SELECTOR = '[fs-hacks-element="hack52-loading-wrapper"]';
  // get a reference to the page wrapper
  const pageWrapper = document.querySelector(PAGE_WRAPPER_SELECTOR);
  if (!pageWrapper) return;
  // get a reference to the loading wrapper
  const loadingWrapper = document.querySelector(LOADING_WRAPPER_SELECTOR);
  if (!loadingWrapper) return;
  // get the 'seenAnimation' item from session storage and store in a seenAnimation variable
  const seenAnimation = sessionStorage.getItem('seenAnimation');
  // if the 'seenAnimation' item is undefined
  if (!seenAnimation) {
    // display the loading-wrapper
    loadingWrapper.style.display = 'flex';
    // show the page-wrapper
    // after a set duration of 3000 milliseconds
    // (the time it takes to show the loading-wrapper in this case)
    setTimeout(() => {
      loadingWrapper.style.visibility = 'hidden';
      pageWrapper.style.display = 'block';
    }, 3000);
    // set the 'seenAnimation' item to the session storage
    sessionStorage.setItem('seenAnimation', '1');
  } else {
    // else if the 'seenAnimation' item exists
    // the user has already seen the animation
    // and so
    // hide the loading-wrapper
    loadingWrapper.style.visibility = 'hidden';
    // show the page-wrapper
    pageWrapper.style.display = 'block';
  }
});
