// when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const FORM_SELECTOR = '[fs-hacks-element="form"]';
  const SELECT_SELECTOR = '[fs-hacks-element="select"]';
  const TOTAL_SELECTOR = '[fs-hacks-element="total"]';
  const HIDDEN_TOTAL_SELECTOR = '[fs-hacks-element="hidden-total"]';
  const form = document.querySelector(FORM_SELECTOR);
  const totalDiv = document.querySelector<HTMLDivElement>(TOTAL_SELECTOR);
  if (!form || !totalDiv) return;
  const hiddenInput = form.querySelector<HTMLInputElement>(HIDDEN_TOTAL_SELECTOR);
  if (!hiddenInput) return;
  // get all selects
  const selects = form.querySelectorAll<HTMLSelectElement>(SELECT_SELECTOR);
  // listener for form
  form.addEventListener('input', function (event) {
    const target = event.target as HTMLInputElement;
    // if target has attribute has the select selector
    if (!target.matches(SELECT_SELECTOR)) return;
    // loop through all selects
    let total = 0;
    selects.forEach(({ value }) => {
      const toBeAdded = Number(value);
      if (!isNaN(toBeAdded)) total += toBeAdded;
    });
    // update totals div and hidden input
    updateTotals(total, totalDiv, hiddenInput);
  });
});

/***
 * This function updates the totals div and the hidden input
 * @param total
 * @param totalValueDiv
 * @param hiddenTotalInput
 */
const updateTotals = (total: number, totalValueDiv: HTMLDivElement, hiddenTotalInput: HTMLInputElement) => {
  // format sum e.g. 3500 to 3,500
  const formattedSum = new Intl.NumberFormat().format(total);
  totalValueDiv.innerText = formattedSum;
  // add the sum value to the hidden input
  hiddenTotalInput.value = formattedSum;
};
