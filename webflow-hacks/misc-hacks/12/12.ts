// when DOM ready
document.addEventListener('DOMContentLoaded', function () {
  // selector constants
  const BUTTON_SELECTOR = '[fs-hacks-element="hack-button"]';
  const TEXT_SELECTOR = '[fs-hacks-element="hack-text"]';
  // get button and text elements
  const button = document.querySelector(BUTTON_SELECTOR);
  const textElement = document.querySelector(TEXT_SELECTOR);
  // early return if no button
  if (!button || !textElement) return;
  // on button click listener
  button.addEventListener('click', () => {
    textElement.innerHTML = 'This is me on Webflow.';
  });
});
