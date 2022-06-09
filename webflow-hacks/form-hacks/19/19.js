'use strict';
/*
!!!!!!IMPORTANT!!!!!!!
Please make sure that your email input field inside Designer
has the ID and Name of EMAIL. The EMAIL tag is required by
Mailchimp to send the form! You will get an error message
if you don't have it entered correctly
*/
// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // declare constants
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const CHECKBOX_SELECTOR = '[fs-hacks-element="hack19-checkbox"]';
  const HIDDEN_INTEREST_SELECTOR = 'input[name="INTEREST"]';
  const HIDDEN_EXPERIENCE_SELECTOR = 'input[name="EXP"]';
  const HIDDEN_DESIGNER_SELECTOR = 'input[name="CHECKDES"]';
  const HIDDEN_DEVELOPER_SELECTOR = 'input[name="CHECKDEv"]';
  const HIDDEN_PM_SELECTOR = 'input[name="CHECKPM"]';
  // get the checkbox fields
  const formCheckboxes = document.querySelectorAll(CHECKBOX_SELECTOR);
  // create variables for our hidden text fields that will be submitted
  // get the interest hidden input field
  const interestInp = document.querySelector(HIDDEN_INTEREST_SELECTOR);
  // get the experience hidden input field
  const expInp = document.querySelector(HIDDEN_EXPERIENCE_SELECTOR);
  // get the designer hidden input field
  const checkdesInp = document.querySelector(HIDDEN_DESIGNER_SELECTOR);
  // get the developer hidden input field
  const checkdevInp = document.querySelector(HIDDEN_DEVELOPER_SELECTOR);
  // get the PM hidden input field
  const checkpmInp = document.querySelector(HIDDEN_PM_SELECTOR);
  // form element
  const form = document.querySelector(FORM_SELECTOR);
  // early return
  if (!form || !checkpmInp || !checkdesInp || !checkdevInp || !interestInp || !expInp || !formCheckboxes) return;
  // on submit form
  form.addEventListener('submit', function () {
    // for each checkbox
    formCheckboxes.forEach(function (checkbox) {
      // check if it's checked (true) or not (false)
      const status = checkbox.checked;
      const checkBoxName = checkbox.getAttribute('name');
      switch (checkBoxName) {
        case 'designer':
          checkdesInp.checked = status;
        case 'developer':
          checkdevInp.checked = status;
        case 'pm':
          checkpmInp.checked = status;
      }
    });
  });
});
