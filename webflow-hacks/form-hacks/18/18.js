'use strict';
// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const invalidDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'competitor.com'];
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const EMAIL_SELECTOR = '[fs-hacks-element="email"]';
  const formElement = document.querySelector(FORM_SELECTOR);
  const emailInput = document.querySelector(EMAIL_SELECTOR);
  if (!formElement || !emailInput) return;
  formElement.addEventListener('submit', function (e) {
    if (!validateEmail(emailInput.value)) {
      emailInput.value = '';
      emailInput.setAttribute('placeholder', 'Please enter a valid email address');
      e.stopPropagation();
      return false;
    }
    const domainPart = emailInput.value.split('@')[1];
    if (invalidDomains.includes(domainPart)) {
      emailInput.value = '';
      emailInput.setAttribute('placeholder', 'Please enter a business email');
      e.stopPropagation();
      return false;
    }
  });
});
/**
 * Validates an email address
 * @param email email address to validate
 * @returns boolean true if valid, false if not
 */
const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};
