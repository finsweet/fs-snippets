// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const invalidDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'competitor.com'];
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const EMAIL_SELECTOR = '[fs-hacks-element="email"]';
  const formElement = document.querySelector<HTMLFormElement>(FORM_SELECTOR);
  const emailInput = document.querySelector<HTMLInputElement>(EMAIL_SELECTOR);
  if (!formElement || !emailInput) return;

  formElement.addEventListener('submit', function (e) {
    if (!validateEmail(emailInput.value, invalidDomains)) {
      emailInput.value = '';
      emailInput.setAttribute('placeholder', 'Please enter a valid email address');
      e.stopPropagation();
      e.preventDefault();
    }
  });
});

/**
 * Validates an email address
 * @param email email address to validate
 * @param invalidDomains list of invalid domains
 * @returns boolean true if valid, false if not
 */
const validateEmail = (email: string, invalidDomains: string[]) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) {
    const domainPart = email.split('@');

    if (!domainPart) {
      return false;
    }

    if (invalidDomains.includes(domainPart[1])) {
      return false;
    }

    return true;
  }
  return false;
};
