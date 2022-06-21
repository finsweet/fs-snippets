'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const TABLE_SELECTOR = '[fs-hacks-element="table"]';
  const COLUMN_TYPE_SELECTOR = [
    '[fs-hacks-element="design-column"]',
    '[fs-hacks-element="development-column"]',
    '[fs-hacks-element="subscription-column"]',
  ];
  const COLUMN_TOTAL_SELECTOR = [
    '[fs-hacks-element="design-total-fee"]',
    '[fs-hacks-element="development-total-fee"]',
    '[fs-hacks-element="subscription-total-fee"]',
  ];
  // loop through all tables
  const tables = document.querySelectorAll(TABLE_SELECTOR);
  tables.forEach((table) => {
    updateSubTotals(table, COLUMN_TOTAL_SELECTOR, COLUMN_TYPE_SELECTOR);
  });
});
/**
 * This function is used to update the total fees for each column of the table.
 * @param table DOM element of the table
 * @param displayTotalSelector selectors Column that displays the total fee
 * @param columnValueSelectors Selectors for the inidividual fees by column
 */
function updateSubTotals(table, displayTotalSelector, columnValueSelectors) {
  // loop through all columns.
  for (const columnValueSelector of columnValueSelectors) {
    let totalFee = 0;
    const index = columnValueSelectors.indexOf(columnValueSelector);
    const columns = table.querySelectorAll(columnValueSelector);
    const totalDiv = table.querySelector(displayTotalSelector[index]);
    if (!totalDiv) continue;
    columns.forEach(({ innerText }) => {
      const toBeAdded = Number(innerText);
      if (!isNaN(toBeAdded)) totalFee += toBeAdded;
    });
    totalDiv.innerText = totalFee.toString();
  }
}
