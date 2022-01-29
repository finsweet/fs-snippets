'use strict';
// when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // declare constants for selectors
  const INTEREST_FIELD_SELECTOR = '[fs-hacks-element="interest-select-field"]';
  const EMAIL_FORM_SELECTOR = '[fs-hacks-element="email-form"]';
  // store a reference to the select field in the interestSelectField variable
  const interestSelectField = document.querySelector(INTEREST_FIELD_SELECTOR);
  // store a reference to the email form in the emailForm variable
  const emailForm = document.querySelector(EMAIL_FORM_SELECTOR);
  // if the declared elements do not exist, quit
  if (!interestSelectField || !emailForm) {
    return;
  }
  // declare & initialize the customSuccessMessage variable
  // with the value of the option selected
  // on the interest select field
  let customSuccessMessage = interestSelectField.value;
  // every time the option on the select field changes
  interestSelectField.addEventListener('change', function () {
    // assign the new selected option's value to the customSuccessMessage variable
    customSuccessMessage = this.value;
  });
  // when the form's submit button is clicked
  emailForm.addEventListener('submit', function (e) {
    // if the user selected an option on the select field
    if (customSuccessMessage.trim() !== '') {
      // save the customSuccessMessage's value in a cookie
      Cookies.set('successTextCookie', customSuccessMessage);
      // then we submit the form
      return true;
    }
    // otherwise, prevent propagation of the event
    e.stopPropagation();
    // else if no option was selected
    // focus on the select field
    interestSelectField.focus();
    // prevent form submission
    return false;
  });
});
