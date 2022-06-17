// when dom is ready
document.addEventListener('DOMContentLoaded', function () {
  const CHECKBOX_SELECTOR = '[fs-hacks-element="checkbox"]';
  const TOTAL_SELECTOR = '[fs-hacks-element="total-value"]';
  const HIDDEN_INPUT_SELECTOR = '[fs-hacks-element="hidden-total"]';
  const checkboxs = document.querySelectorAll<HTMLInputElement>(CHECKBOX_SELECTOR);
  const totalValueDiv = document.querySelector<HTMLDivElement>(TOTAL_SELECTOR);
  const hiddenTotalInput = document.querySelector<HTMLInputElement>(HIDDEN_INPUT_SELECTOR);
  if (checkboxs.length === 0 || !totalValueDiv || !hiddenTotalInput) return;
  let sum = 0;
  // on each checkbox input change
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('input', function () {
      const amountToBeAdded = Number(checkbox.getAttribute('add-value'));
      // check if amountToBeAdded is Nan
      if (isNaN(amountToBeAdded)) return;
      // add or subtract amountToBeAdded given the checkbox state
      if (!this.checked) {
        sum -= amountToBeAdded;
      } else {
        sum += amountToBeAdded;
      }
      // format sum e.g. 3500 to 3,500
      const formattedSum = new Intl.NumberFormat().format(sum);
      totalValueDiv.innerText = formattedSum;
      // add the sum value to the hidden input
      hiddenTotalInput.value = formattedSum;
    });
  });
});
