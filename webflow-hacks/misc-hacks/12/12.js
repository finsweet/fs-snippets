'use strict';
// when DOM ready
document.addEventListener('DOMContentLoaded', function () {
  // selector constants
  const BUTTON_SELECTOR = '[fs-hacks-element="hack-button"]';
  const TEXT_SELECTOR = '[fs-hacks-element="hack-text"]';
  // get button and text elements
  const button = document.querySelector(BUTTON_SELECTOR);
  const text = document.querySelector(TEXT_SELECTOR);
  // early return if no button
  if (!button || !text) return;
  // on button click listener
  button.addEventListener('click', () => {
    // function - start
    text.innerHTML = 'This is me on Webflow.';
    // function - end
  });
});
