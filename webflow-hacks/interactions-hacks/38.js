document.addEventListener('DOMContentLoaded', function () {
  var FORM_SELECTOR = '[fs-hacks-element="hack38-form"]';
  var SUCCESS_TRIGGER_SELECTOR = '[fs-hacks-element="hack38-form-success-trigger"]';
  // assign form HTML element to variable form
  var form = document.querySelector(FORM_SELECTOR);
  // assign success trigger HTML element to variable successTrigger
  var successTrigger = document.querySelector(SUCCESS_TRIGGER_SELECTOR);
  if (!form || !successTrigger) return;
  // when form is submitted, execute function triggering submission success
  var submitEvent = function () {
    form.onsubmit = triggerSuccess;
  };
  // click our invisible div to that triggers our Webflow Interaction
  var triggerSuccess = function () {
    successTrigger.click();
  };
  window.onload = submitEvent;
});
