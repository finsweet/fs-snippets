'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const TABLE_SELECTOR = '[fs-hacks-element="table"]';
  const COLUMN_SELECTORS = [
    {
      type: '[fs-hacks-element="design-column"]',
      total: '[fs-hacks-element="design-total-fee"]',
    },
    {
      type: '[fs-hacks-element="development-column"]',
      total: '[fs-hacks-element="development-total-fee"]',
    },
    {
      type: '[fs-hacks-element="subscription-column"]',
      total: '[fs-hacks-element="subscription-total-fee"]',
    },
  ];
  // loop through all tables
  const tables = document.querySelectorAll(TABLE_SELECTOR);
  tables.forEach((table) => {
    updateSubTotals(table, COLUMN_SELECTORS);
  });
});
/**
 * This function is used to update the total fees for each column of the table.
 * @param table DOM element of the table
 * @param columnSelectors array of objects with type and total selectors
 */
function updateSubTotals(table, columnSelectors) {
  // loop through all columns.
  columnSelectors.forEach(({ type, total }) => {
    let totalFee = 0;
    const columns = table.querySelectorAll(type);
    const totalDiv = table.querySelector(total);
    if (!totalDiv) return;
    columns.forEach(({ innerText }) => {
      const toBeAdded = Number(innerText);
      if (!isNaN(toBeAdded)) totalFee += toBeAdded;
    });
    totalDiv.innerText = totalFee.toString();
  });
}
