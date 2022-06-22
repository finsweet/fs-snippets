'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const CHECKBOX_DIV_SELECTOR = '[fs-hacks-element="checkboxdiv"]';
  const CHECKBOX_LABEL_SELECTOR = '.w-form-label';
  const checkBoxDivs = document.querySelectorAll(CHECKBOX_DIV_SELECTOR);
  for (const checkBoxDiv of checkBoxDivs) {
    const checkBoxLabel = checkBoxDiv.querySelector(CHECKBOX_LABEL_SELECTOR);
    const checkBox = checkBoxDiv.querySelector('input[type="checkbox"]');
    if (!checkBoxLabel || !checkBox) continue;
    // use label string as attributes for checkbox
    const name = checkBoxLabel.innerText;
    const id = name.replace(/\W+/g, '-').toLowerCase();
    checkBox.setAttribute('name', name);
    checkBox.setAttribute('id', id);
    checkBoxLabel.setAttribute('data-name', id);
  }
});
