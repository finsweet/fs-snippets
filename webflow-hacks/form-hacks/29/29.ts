// when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // declare constant selectors
  const FORM_SELECTOR = '[fs-hacks-element="hack29-form"]';
  const NAME_INPUT_SELECTOR = '[fs-hacks-element="hack29-name-input"]';
  const MESSAGE_SELECTOR = '.w-form-done';
  const messageDiv = document.querySelector<HTMLDivElement>(MESSAGE_SELECTOR);
  const form = document.querySelector<HTMLFormElement>(FORM_SELECTOR);
  // early return
  if (!form || !messageDiv) return;
  // when form is submitted
  form.addEventListener('submit', function () {
    const nameInput = this.querySelector<HTMLInputElement>(NAME_INPUT_SELECTOR);
    if (!nameInput) return;
    const nameValue = nameInput.value;
    if (nameValue && nameValue !== '') {
      messageDiv.innerText = `Thank you, ${nameValue}!`;
    } else {
      messageDiv.innerText = 'Thank you! Your submission has been received!';
    }
  });
});
