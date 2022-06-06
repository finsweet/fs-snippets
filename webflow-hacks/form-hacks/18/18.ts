// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // make an array of invalid domains
  const invalidDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'competitor.com'];
  // set the fs-hacks selector
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const EMAIL_SELECTOR = '[fs-hacks-element="email"]';
  // get the dom elements
  const formElement = document.querySelector<HTMLButtonElement>(FORM_SELECTOR);
  const emailInput = document.querySelector<HTMLInputElement>(EMAIL_SELECTOR);
  // check if the elements exists
  if (!formElement || !emailInput) return;
  // on submit button click
  formElement.addEventListener('submit', function () {
    // validate the email
    if (!validateEmail(emailInput.value)) {
      // clear the email input
      emailInput.value = '';
      // set the error message in placeholder
      emailInput.setAttribute('placeholder', 'Please enter a valid email address');
      // prevent the form from submitting
      return false;
    }
    // split email at '@' character to get domain
    const domainPart = emailInput.value.split('@')[1];
    // if the domain exists in the invalidDomains array
    if (invalidDomains.includes(domainPart)) {
      // clear email field
      emailInput.value = '';
      // add a 'use business mail' placeholder
      emailInput.setAttribute('placeholder', 'Please enter a business email');
      // prevent form submission
      return false;
    }
  });
});

const validateEmail = (email: string) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};
