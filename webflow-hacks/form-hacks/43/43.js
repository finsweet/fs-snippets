'use strict';
// when dom is ready
document.addEventListener('DOMContentLoaded', function () {
  const BRANDING_DIV_SELECTOR = '[fs-hacks-element="branding"]';
  const DEVELOPMENT_DIV_SELECTOR = '[fs-hacks-element="development"]';
  const TOTAL_SELECTOR = '[fs-hacks-element="total-value"]';
  const HIDDEN_INPUT_SELECTOR = '[fs-hacks-element="hidden-total"]';
  const ADD_VALUE_ATTRIBUTE = 'add-value';
  // get all elements
  const totalValueDiv = document.querySelector(TOTAL_SELECTOR);
  const hiddenTotalInput = document.querySelector(HIDDEN_INPUT_SELECTOR);
  const brandingDiv = document.querySelector(BRANDING_DIV_SELECTOR);
  const developmentDiv = document.querySelector(DEVELOPMENT_DIV_SELECTOR);
  const radios = document.querySelectorAll(`[${ADD_VALUE_ATTRIBUTE}]`);
  if (!totalValueDiv || !hiddenTotalInput || !brandingDiv || !developmentDiv) return;
  let brandingTotal = 0;
  let developmentTotal = 0;
  radios.forEach((radio) => {
    // listen to the radio.
    radio.addEventListener('input', function () {
      if (!radio.checked) return;
      // find if element is in the branding or development div
      if (brandingDiv.contains(radio)) {
        // get the value of the radio
        brandingTotal = Number(radio.getAttribute(ADD_VALUE_ATTRIBUTE));
      }
      if (developmentDiv.contains(radio)) {
        developmentTotal = Number(radio.getAttribute(ADD_VALUE_ATTRIBUTE));
      }
      const total = brandingTotal + developmentTotal;
      updateTotals(total, totalValueDiv, hiddenTotalInput);
    });
  });
});
/***
 * This function updates the totals div and the hidden input
 * @param total
 * @param totalValueDiv
 * @param hiddenTotalInput
 */
const updateTotals = (total, totalValueDiv, hiddenTotalInput) => {
  // format sum e.g. 3500 to 3,500
  const formattedSum = new Intl.NumberFormat().format(total);
  totalValueDiv.innerText = formattedSum;
  // add the sum value to the hidden input
  hiddenTotalInput.value = formattedSum;
};
