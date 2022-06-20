'use strict';
// when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const SELECT_SELECTOR = '[fs-hacks-element="select"]';
  const TOTAL_SELECTOR = '[fs-hacks-element="total"]';
  const HIDDEN_TOTAL_SELECTOR = '[fs-hacks-element="hidden-total"]';
  const form = document.querySelector(FORM_SELECTOR);
  const totalDiv = document.querySelector(TOTAL_SELECTOR);
  const hiddenInput = document.querySelector(HIDDEN_TOTAL_SELECTOR);
  if (!form || !totalDiv || !hiddenInput) return;
  // get all selects
  const selects = form.querySelectorAll(SELECT_SELECTOR);
  // listener for form
  form.addEventListener('input', function (event) {
    const target = event.target;
    // if target has attribute fs-hacks-element
    if (target.hasAttribute('fs-hacks-element')) {
      // loop through all selects
      let total = 0;
      selects.forEach((select) => {
        // get selected option
        const selectedOption = select.options[select.selectedIndex];
        // add option value to total
        total += Number(selectedOption.getAttribute('value'));
      });
      // update totals div and hidden input
      updateTotals(total, totalDiv, hiddenInput);
    }
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
