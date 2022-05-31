'use strict';
// when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const BUTTON_JS_SELECTOR = '[fs-hacks-element="hack13-back-1"]';
  const BUTTON_JQUERY_SELECTOR = '[fs-hacks-element="hack13-back-2"]';
  // on click
  const backOne = document.querySelector(BUTTON_JS_SELECTOR);
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
  const backTwo = document.querySelector(BUTTON_JQUERY_SELECTOR);
  backTwo === null || backTwo === void 0
    ? void 0
    : backTwo.addEventListener('click', function (e) {
        // prevent default behavior
        e.preventDefault();
        // Go back 2 pages
        window.history.go(-2);
      });
});
