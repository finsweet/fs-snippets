document.addEventListener('DOMContentLoaded', () => {
  // assign form HTML element to variable form
  const form = document.querySelector<HTMLElement>('hack38-form');

  // assign success trigger HTML element to variable successTrigger
  const successTrigger = document.querySelector<HTMLElement>('hack38-form-success-trigger');

  if (!form || !successTrigger) return;

  // when form is submitted, execute function triggering submission success
  const submitEvent = () => {
    form.onsubmit = triggerSuccess;
  };
  // click our invisible div to that triggers our Webflow Interaction
  const triggerSuccess = () => {
    successTrigger.click();
  };

  window.onload = submitEvent;
});
