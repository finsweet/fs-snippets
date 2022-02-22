'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const FORM_BUTTON_UP_SELECTOR = '[fs-hacks-element="hack17-counter-button-up"]';
  const FORM_BUTTON_DOWN_SELECTOR = '[fs-hacks-element="hack17-counter-button-down"]';
  const COUNTER_INPUT_SELECTOR = '[fs-hacks-element="hack17-counter-input"]';
  let x = 0;
  const CounterInput = document.querySelector(COUNTER_INPUT_SELECTOR);
  if (!CounterInput) return;
  const formButtonUp = document.querySelector(FORM_BUTTON_UP_SELECTOR);
  if (!formButtonUp) return;
  const formButtonDown = document.querySelector(FORM_BUTTON_DOWN_SELECTOR);
  if (!formButtonDown) return;
  formButtonUp.addEventListener('click', () => {
    const stringValue = JSON.stringify(++x);
    CounterInput.value = stringValue;
  });
  formButtonDown.addEventListener('click', () => {
    if (x > 0) {
      const stringValue = JSON.stringify(--x);
      CounterInput.value = stringValue;
    }
  });
});
// /*
// In the video, the classes are referencing "Hack 16"
// This Hack is launched as "Hack 17"
// Please note the change of classes from 16 to 17
// */
// // declare & initialize x at 0
// // let x = 0;
// // on button click
// $('.hack17-counter-button.hack17-up').on('click', () => {
//   // increment & set new value
//   $('.hack17-counter-input.w-input').val(++x);
// });
// $('.hack17-counter-button.hack17-down').on('click', () => {
//   // decrement & set new value
//   if (x > 0) {
//     $('.hack17-counter-input.w-input').val(--x);
//   }
// });
/* This next part was added post-video recording added
  to make sure the plus and minus work with a manual entry of
  a number in the text input. If you type 5 into the input manually,
  and then press (+), it will count to 6 instead of starting to
  count at 1. Nice!!
  */
// on input value change
// $('.hack17-counter-input.w-input').change(function () {
//   // convert input value to number
//   const num = Number($(this).val());
//   // if it's a number
//   if (num) {
//     // assign its value to x
//     x = num;
//   }
// });
