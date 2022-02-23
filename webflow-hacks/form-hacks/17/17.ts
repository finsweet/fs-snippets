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

  // declare & initialize x at 0
  let x = 0;

  // select elements with their respective data attributes
  const counterInput = document.querySelector<HTMLSelectElement>(COUNTER_INPUT_SELECTOR);
  if (!counterInput) return;

  const formButtonUp = document.querySelector<HTMLSelectElement>(FORM_BUTTON_UP_SELECTOR);
  if (!formButtonUp) return;

  const formButtonDown = document.querySelector<HTMLSelectElement>(FORM_BUTTON_DOWN_SELECTOR);
  if (!formButtonDown) return;

  // increase counter input value upon clicking on up button
  formButtonUp.addEventListener('click', () => {
    // convert input value from a number to a string and assign it to constant stringValue
    const stringValue = (++x).toString();
    // assign that string value to the counter input value
    counterInput.value = stringValue;
  });
  // increase counter input value upon clicking on up button

  formButtonDown.addEventListener('click', () => {
    // only allow decrement if the input value is greater than 0
    if (x > 0) {
      //convert input value from a number to a string and assign it to constant stringValue
      const stringValue = (--x).toString();
      // assign that string value to the counter input value
      counterInput.value = stringValue;
    }
  });

  /* This next part was added post-video recording 
  to make sure the plus and minus work with a manual entry of
  a number in the text input. If you type 5 into the input manually,
  and then press (+), it will count to 6 instead of starting to
  count at 1. Nice!!
  */

  // on input value change
  counterInput.addEventListener('change', () => {
    // convert input value from a string to a number and assign it to constant num
    const num = Number(counterInput.value);
    // if num exists
    if (num) {
      // assign its value to x
      x = num;
    }
  });
});
