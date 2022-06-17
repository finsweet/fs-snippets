'use strict';
// when dom is ready
document.addEventListener('DOMContentLoaded', function () {
  const CHECKBOX_SELECTOR = '[finsweet-hacks-element="checkbox"]';
  const TOTAL_SELECTOR = '[finsweet-hacks-element="total-value"]';
  const HIDDEN_INPUT_SELECTOR = '[finsweet-hacks-element="hidden-total"]';
  const checkboxDivs = document.querySelectorAll(CHECKBOX_SELECTOR);
  const totalValueDiv = document.querySelector(TOTAL_SELECTOR);
  const hiddenTotalInput = document.querySelector(HIDDEN_INPUT_SELECTOR);
  if (checkboxDivs.length === 0 || !totalValueDiv || !hiddenTotalInput) return;
  let sum = 0;
  // on each checkbox click
  checkboxDivs.forEach((checkboxDiv) => {
    checkboxDiv.addEventListener('click', function () {
      // get the checkbox input field
      const checkbox = checkboxDiv.previousElementSibling;
      if (!checkbox) return;
      const amountToBeAdded = Number(checkbox.getAttribute('add-value'));
      // add or subtract amountToBeAdded given the checkbox state
      checkbox.checked ? (sum -= amountToBeAdded) : (sum += amountToBeAdded);
      // format sum e.g. 3500 to 3,500
      const formattedSum = new Intl.NumberFormat().format(sum);
      totalValueDiv.innerText = formattedSum;
      // add the sum value to the hidden input
      hiddenTotalInput.value = formattedSum;
    });
  });
});
