document.addEventListener('DOMContentLoaded', function () {
  //assign data attributes to constants
  var FORM_BUTTON_UP_SELECTOR = '[fs-hacks-element="hack17-counter-button-up"]';
  var FORM_BUTTON_DOWN_SELECTOR = '[fs-hacks-element="hack17-counter-button-down"]';
  var COUNTER_INPUT_SELECTOR = '[fs-hacks-element="hack17-counter-input"]';
  /*
  In the video, the classes are referencing "Hack 16"
  This Hack launched as "Hack 17"
  Please note the change of classes from 16 to 17
  */
  // select elements with their respective data attributes
  var counterInputs = document.querySelectorAll(COUNTER_INPUT_SELECTOR);
  if (!counterInputs) return;
  var incrementButtons = document.querySelectorAll(FORM_BUTTON_UP_SELECTOR);
  if (!incrementButtons) return;
  var decrementButtons = document.querySelectorAll(FORM_BUTTON_DOWN_SELECTOR);
  if (!decrementButtons) return;
  // loop through each counter input
  counterInputs.forEach(function (counterInput, index) {
    // declare individual increment and decrement buttons
    var incrementButton = incrementButtons[index];
    var decrementButton = decrementButtons[index];
    // declare & initialize x at 0
    var x = 0;
    // function assigning the counter value
    var setValue = function (num) {
      var stringValue = num.toString();
      counterInput.value = stringValue;
    };
    // increase counter input value upon clicking on button up
    incrementButton.addEventListener('click', function () {
      setValue(++x);
    });
    // decrease counter input value upon clicking on button down
    decrementButton.addEventListener('click', function () {
      if (x <= 0) return;
      setValue(--x);
    });
  });
});
