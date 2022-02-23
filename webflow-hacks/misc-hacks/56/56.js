'use strict';
// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // assign data attribute to constant
  const POPUP_SELECTOR = '[fs-hacks-element="hack56-ie-popup"]';
  // if browser is IE10 or IE11
  if (/Trident\/|MSIE/.test(window.navigator.userAgent)) {
    // show "IE not supported" popup
    const POPUP = document.querySelector(POPUP_SELECTOR);
    if (!POPUP) return;
    POPUP.style.display = 'flex';
  }
});
