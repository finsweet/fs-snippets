document.addEventListener('DOMContentLoaded', function () {
  const CHECKBOX_DIV_SELECTOR = '[fs-hacks-element="checkboxdiv"]';
  const CHECKBOX_LABEL_SELECTOR = '.w-form-label';
  const checkBoxDivs = document.querySelectorAll<HTMLDivElement>(CHECKBOX_DIV_SELECTOR);

  for (const checkBoxDiv of checkBoxDivs) {
    const checkBoxLabel = checkBoxDiv.querySelector<HTMLLabelElement>(CHECKBOX_LABEL_SELECTOR);
    const checkBox = checkBoxDiv.querySelector<HTMLInputElement>('input[type="checkbox"]');
    if (!checkBoxLabel || !checkBox) continue;

    // use label string as attributes for checkbox
    const name = checkBoxLabel.innerText;
    const id = name.replace(/\W+/g, '-').toLowerCase();
    checkBox.name = name;
    checkBox.id = id;
    checkBoxLabel.setAttribute('data-name', id);
  }
});
