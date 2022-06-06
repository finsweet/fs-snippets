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
    // split email at '@' character to get domain
    const domainPart = emailInput.value.split('@')[1];
    // if the domain exists in the invalidDomains array
    if (invalidDomains.indexOf(domainPart) !== -1) {
      // clear email field
      emailInput.value = '';
      // add a 'use business mail' placeholder
      emailInput.setAttribute('placeholder', 'Please enter a business email');
      // prevent form submission
      return false;
    }
  });
});
