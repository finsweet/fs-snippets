// not needed if using cdn
// import Cookies from 'js-cookie';

// when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // store a reference to the select field in the interestSelectField variable
  const interestSelectField = document.querySelector<HTMLSelectElement>('[fs-hacks-element="interest-select-field"]');
  // store a reference to the email form in the emailForm variable
  const emailForm = document.querySelector('[fs-hacks-element="email-form"]');

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
    } else {
      // otherwise, prevent propagation of the event
      e.stopPropagation();
      // else if no option was selected
      // focus on the select field
      interestSelectField.focus();
      // prevent form submission
      return false;
    }
  });
});
