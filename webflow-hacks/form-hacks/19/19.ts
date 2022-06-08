/*
!!!!!!IMPORTANT!!!!!!!
Please make sure that your email input field inside Designer
has the ID and Name of EMAIL. The EMAIL tag is required by 
Mailchimp to send the form! You will get an error message
if you don't have it entered correctly
*/

// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // create variables for our form elements in designer

  // get the select field
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const SELECT_INPUT_SELECTOR = '[fs-hacks-element="hack-form-select"]';
  const RADIO_SELECTOR = '[fs-hacks-element="hack19-radio"]';
  const CHECKBOX_SELECTOR = '[fs-hacks-element="hack19-checkbox"]';
  const HIDDEN_INTEREST_SELECTOR = 'input[name="INTEREST"]';
  const HIDDEN_EXPERIENCE_SELECTOR = 'input[name="EXP"]';
  const HIDDEN_DESIGNER_SELECTOR = 'input[name="CHECKDES"]';
  const HIDDEN_DEVELOPER_SELECTOR = 'input[name="CHECKDEv"]';
  const HIDDEN_PM_SELECTOR = 'input[name="CHECKPM"]';
  const formSelect = document.querySelector<HTMLSelectElement>(SELECT_INPUT_SELECTOR);
  // get the radio button fields
  const formRadios = document.querySelectorAll<HTMLInputElement>(RADIO_SELECTOR);
  // get the checkbox fields
  const formCheckboxes = document.querySelectorAll<HTMLInputElement>(CHECKBOX_SELECTOR);
  // create variables for our hidden text fields that will be submitted
  // get the interest hidden input field
  const interestInp = document.querySelector<HTMLInputElement>(HIDDEN_INTEREST_SELECTOR);
  // get the experience hidden input field
  const expInp = document.querySelector<HTMLInputElement>(HIDDEN_EXPERIENCE_SELECTOR);
  // get the designer hidden input field
  const checkdesInp = document.querySelector<HTMLInputElement>(HIDDEN_DESIGNER_SELECTOR);
  // get the developer hidden input field
  const checkdevInp = document.querySelector<HTMLInputElement>(HIDDEN_DEVELOPER_SELECTOR);
  // get the PM hidden input field
  const checkpmInp = document.querySelector<HTMLInputElement>(HIDDEN_PM_SELECTOR);
  // form element
  const form = document.querySelector<HTMLFormElement>(FORM_SELECTOR);
  // early return
  if (
    !form ||
    !checkpmInp ||
    !checkdesInp ||
    !checkdevInp ||
    !interestInp ||
    !expInp ||
    !formCheckboxes ||
    !formSelect ||
    !formRadios
  )
    return;

  // on submit form
  form.addEventListener('submit', function (e) {
    // prevent default behavior
    e.preventDefault();
    // get the form-select's selected value
    const selectVal = formSelect.value;
    // get the checked radio button's value
    const radioArray = Array.from(formRadios);
    const checkedRadio = radioArray.find((radio) => radio.checked);
    if (!checkedRadio) return;
    const radioVal = checkedRadio.value;
    // SELECT FIELD
    // set the interest hidden input field's value to selectVal
    interestInp.value = selectVal;
    // RADIO
    // set the experience hidden input field's value to radioVal
    expInp.value = radioVal;
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
