document.addEventListener('DOMContentLoaded', () => {
  const FORM_BUTTON_UP_SELECTOR = '[fs-hacks-element="hack17-counter-button-up"]';
  const FORM_BUTTON_DOWN_SELECTOR = '[fs-hacks-element="hack17-counter-button-down"]';
  const COUNTER_INPUT_SELECTOR = '[fs-hacks-element="hack17-counter-input"]';

  let x = 0;
  const CounterInput = document.querySelector<HTMLSelectElement>(COUNTER_INPUT_SELECTOR);
  if (!CounterInput) return;
  const formButtonUp = document.querySelector<HTMLSelectElement>(FORM_BUTTON_UP_SELECTOR);
  if (!formButtonUp) return;
  const formButtonDown = document.querySelector<HTMLSelectElement>(FORM_BUTTON_DOWN_SELECTOR);
  if (!formButtonDown) return;
  formButtonUp.addEventListener('click', () => {
    const stringValue = JSON.stringify(++x);
    CounterInput.value = stringValue;
  });
  formButtonDown.addEventListener('click', () => {
    if (x > 0) {
      const stringValue = JSON.stringify(--x);
      CounterInput.value = stringValue;
    }
  });
});
