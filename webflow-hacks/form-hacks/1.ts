// when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // declare selectors
  const SELECT_FIELD_SELECTOR = '[fs-hacks-element="interest-select-field"]';
  const EMAIL_SELECTOR = '[fs-hacks-element="email-form"]';
  const SUCCESS_TEXT_SELECTOR = '[fs-hacks-element="success-text"]';
  // Get the select field.
  const interestSelectField = document.querySelector<HTMLSelectElement>(SELECT_FIELD_SELECTOR);
  // get the email-Form element.
  const emailForm = document.querySelector<HTMLFormElement>(EMAIL_SELECTOR);
  // get the success-text element.
  const successText = document.querySelector<HTMLDivElement>(SUCCESS_TEXT_SELECTOR);

  if (!interestSelectField || !emailForm || !successText) {
    return;
  }
  // declare & initialize the customSuccessMessage variable
  // with the value of the option selected
  // on the interest select field
  let customSuccessMessage = interestSelectField.value;
  // every time the option on the select field changes
  interestSelectField.addEventListener('change', () => {
    // assign the new selected option's value to the customSuccessMessage variable
    customSuccessMessage = interestSelectField.value;
  });

  // when the form's submit button is clicked
  emailForm.addEventListener('submit', (event) => {
    // if the user selected an option on the select field
    if (customSuccessMessage) {
      // change text of the success-text field
      successText.innerText = `Thank you! We'll focus on ${customSuccessMessage} for future F'in sweet Webflow Hacks!`;
      // then submit the form
      return true;
    }
    event.stopPropagation();
    // prevent the form from submitting
    // focus on the select field
    interestSelectField.focus();
    // stop form submission
    return false;
  });
});
