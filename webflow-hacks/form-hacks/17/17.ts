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
  const counterInputs = document.querySelectorAll<HTMLSelectElement>(COUNTER_INPUT_SELECTOR);
  if (!counterInputs) return;

  const incrementButtons = document.querySelectorAll<HTMLSelectElement>(FORM_BUTTON_UP_SELECTOR);
  if (!incrementButtons) return;

  const decrementButtons = document.querySelectorAll<HTMLSelectElement>(FORM_BUTTON_DOWN_SELECTOR);
  if (!decrementButtons) return;

  // loop through each counter input
  counterInputs.forEach((counterInput, index) => {
    // declare individual increment and decrement buttons
    const incrementButton = incrementButtons[index];
    const decrementButton = decrementButtons[index];

    // declare & initialize x at 0
    let x = 0;

    // function assigning the counter value
    const setValue = (num: number) => {
      const stringValue = num.toString();
      counterInput.value = stringValue;
    };

    // increase counter input value upon clicking on button up
    incrementButton.addEventListener('click', () => {
      setValue(++x);
    });

    // decrease counter input value upon clicking on button down
    decrementButton.addEventListener('click', () => {
      if (x <= 0) return;
      setValue(--x);
    });
  });
});
