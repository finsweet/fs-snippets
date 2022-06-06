// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // make an array of invalid domains
  const invalidDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'competitor.com'];
  // set the fs-hacks selector
  const SUBMIT_BUTTON_SELECTOR = '[fs-hacks-element="submit"]';
  const EMAIL_SELECTOR = '[fs-hacks-element="email"]';
  // get the dom elements
  const submitBtn = document.querySelector<HTMLButtonElement>(SUBMIT_BUTTON_SELECTOR);
  const emailInput = document.querySelector<HTMLInputElement>(EMAIL_SELECTOR);
  // check if the elements exists
  if (!submitBtn || !emailInput) return;
  // on submit button click
  submitBtn.addEventListener('click', function () {
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
