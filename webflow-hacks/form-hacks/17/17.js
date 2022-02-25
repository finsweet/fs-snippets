'use strict';
document.addEventListener('DOMContentLoaded', () => {
  //assign data attributes to constants
  const FORM_BUTTON_UP_SELECTOR = '[fs-hacks-element="hack17-counter-button-up"]';
  const FORM_BUTTON_DOWN_SELECTOR = '[fs-hacks-element="hack17-counter-button-down"]';
  const COUNTER_INPUT_SELECTOR = '[fs-hacks-element="hack17-counter-input"]';
  /*
  In the video, the classes are referencing "Hack 16"
  This Hack launched as "Hack 17"
  Please note the change of classes from 16 to 17
  */
  // select elements with their respective data attributes
  const counterInputAll = document.querySelectorAll(COUNTER_INPUT_SELECTOR);
  if (!counterInputAll) return;
  const formButtonUpAll = document.querySelectorAll(FORM_BUTTON_UP_SELECTOR);
  if (!formButtonUpAll) return;
  const formButtonDownAll = document.querySelectorAll(FORM_BUTTON_DOWN_SELECTOR);
  if (!formButtonDownAll) return;
  // loop through each counter input
  counterInputAll.forEach((item, index) => {
    // declare individual components
    const counterInput = counterInputAll[index];
    const formButtonUp = formButtonUpAll[index];
    const formButtonDown = formButtonDownAll[index];
    // declare & initialize x at 0
    let x = 0;
    // function assigning the counter value
    const setValue = (num) => {
      const stringValue = num.toString();
      counterInput.value = stringValue;
    };
    // increase counter input value upon clicking on button up
    formButtonUp.addEventListener('click', () => {
      setValue(++x);
    });
    // decrease counter input value upon clicking on button down
    formButtonDown.addEventListener('click', () => {
      if (x <= 0) return;
      setValue(--x);
    });
  });
});
