'use strict';
document.addEventListener('DOMContentLoaded', () => {
  //assign data attributes to constants
  const FORM_BUTTON_UP_SELECTOR = '[fs-hacks-element="hack17-counter-button-up"]';
  const FORM_BUTTON_DOWN_SELECTOR = '[fs-hacks-element="hack17-counter-button-down"]';
  const COUNTER_INPUT_SELECTOR = '[fs-hacks-element="hack17-counter-input"]';
  const COUNTER_DIV_SELECTOR = '[fs-hacks-element="hack17-counter-div"]';
  // select elements with their respective data attributes
  const counterDivs = document.querySelectorAll(COUNTER_DIV_SELECTOR);
  if (!counterDivs) return;
  // loop through each counter input
  counterDivs.forEach((counterDiv) => {
    // declare individual increment and decrement buttons
    const incrementButton = counterDiv.querySelector(FORM_BUTTON_UP_SELECTOR);
    const decrementButton = counterDiv.querySelector(FORM_BUTTON_DOWN_SELECTOR);
    const counterInput = counterDiv.querySelector(COUNTER_INPUT_SELECTOR);
    if (!incrementButton || !decrementButton || !counterInput) return;
    // declare & initialize x at 0
    let x = 0;
    // function assigning the counter value
    const setValue = (num) => {
      const stringValue = num.toString();
      counterInput.value = stringValue;
    };
    // increase counter input value upon clicking on button up
    incrementButton.addEventListener('click', () => {
      setValue((x += 1));
    });
    // decrease counter input value upon clicking on button down
    decrementButton.addEventListener('click', () => {
      if (x <= 0) return;
      setValue((x -= 1));
    });
  });
});
