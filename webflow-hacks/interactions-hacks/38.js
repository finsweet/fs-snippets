document.addEventListener('DOMContentLoaded', function () {
  // assign form HTML element to variable form
  var form = document.querySelector('[fs-hacks-element="hack38-form"]');
  // assign success trigger HTML element to variable successTrigger
  var successTrigger = document.querySelector('[fs-hacks-element="hack38-form-success-trigger"]');
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
