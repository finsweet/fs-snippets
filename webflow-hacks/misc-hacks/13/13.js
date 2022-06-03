'use strict';
// when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const BACK_ONE_SELECTOR = '[fs-hacks-element="hack13-back-1"]';
  const BACK_TWO_SELECTOR = '[fs-hacks-element="hack13-back-2"]';
  // on click
  const backOne = document.querySelector(BACK_ONE_SELECTOR);
  backOne === null || backOne === void 0
    ? void 0
    : backOne.addEventListener('click', function (e) {
        // prevent default behavior
        e.preventDefault();
        // Go back 1 page
        window.history.back();
        // can also use
        // window.history.go(-1);
      });
  // on click
  const backTwo = document.querySelector(BACK_TWO_SELECTOR);
  backTwo === null || backTwo === void 0
    ? void 0
    : backTwo.addEventListener('click', function (e) {
        // prevent default behavior
        e.preventDefault();
        // Go back 2 pages
        window.history.go(-2);
      });
});
