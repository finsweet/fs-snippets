/*
!!!!!!IMPORTANT!!!!!!!
Please make sure that your email input field inside Designer
has the ID and Name of EMAIL. The EMAIL tag is required by 
Mailchimp to send the form! You will get an error message
if you don't have it entered correctly
*/

document.addEventListener('DOMContentLoaded', function () {
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const CHECKBOX_SELECTOR = '[fs-hacks-element="hack19-checkbox"]';
  const HIDDEN_INTEREST_SELECTOR = 'input[name="INTEREST"]';
  const HIDDEN_EXPERIENCE_SELECTOR = 'input[name="EXP"]';
  const HIDDEN_DESIGNER_SELECTOR = 'input[name="CHECKDES"]';
  const HIDDEN_DEVELOPER_SELECTOR = 'input[name="CHECKDEv"]';
  const HIDDEN_PM_SELECTOR = 'input[name="CHECKPM"]';
  const formCheckboxes = document.querySelectorAll<HTMLInputElement>(CHECKBOX_SELECTOR);
  const interestInp = document.querySelector<HTMLInputElement>(HIDDEN_INTEREST_SELECTOR);
  const expInp = document.querySelector<HTMLInputElement>(HIDDEN_EXPERIENCE_SELECTOR);
  const checkdesInp = document.querySelector<HTMLInputElement>(HIDDEN_DESIGNER_SELECTOR);
  const checkdevInp = document.querySelector<HTMLInputElement>(HIDDEN_DEVELOPER_SELECTOR);
  const checkpmInp = document.querySelector<HTMLInputElement>(HIDDEN_PM_SELECTOR);
  const form = document.querySelector<HTMLFormElement>(FORM_SELECTOR);
  if (!form || !checkpmInp || !checkdesInp || !checkdevInp || !interestInp || !expInp || !formCheckboxes) return;

  form.addEventListener('submit', function () {
    formCheckboxes.forEach(function ({ name, checked }) {
      switch (name) {
        case 'designer':
          checkdesInp.checked = checked;
        case 'developer':
          checkdevInp.checked = checked;
        case 'pm':
          checkpmInp.checked = checked;
      }
    });
  });
});
