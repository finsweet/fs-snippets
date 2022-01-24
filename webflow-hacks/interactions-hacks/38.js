'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('hack38-form');
  const successTrigger = document.querySelector('hack38-form-success-trigger');
  if (!form || !successTrigger) return;
  const submitEvent = () => {
    form.onsubmit = triggerSuccess;
  };
  const triggerSuccess = () => {
    successTrigger.click();
  };
  window.onload = submitEvent;
});
