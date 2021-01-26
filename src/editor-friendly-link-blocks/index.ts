const editorFriendlyLinkBlocks = (selectors: string) => {
  function handleButtonLink(e: MouseEvent | KeyboardEvent) {
    if (
      !(e.target instanceof HTMLElement) ||
      e.target instanceof HTMLAnchorElement ||
      (e instanceof KeyboardEvent && !(e.key === 'Enter'))
    )
      return;
    const target = e.target.closest(selectors);
    if (!target) return;

    e.preventDefault();
    const anchorElement = target.querySelector<HTMLAnchorElement>('a');
    if (anchorElement) anchorElement.click();
    return false;
  }

  (function handleAccessibility() {
    const buttons = document.querySelectorAll<HTMLElement>(selectors);
    buttons.forEach((button) => {
      const anchorElement = button.querySelector<HTMLAnchorElement>('a');
      if (anchorElement && anchorElement.href) {
        button.setAttribute('role', 'link');
        button.setAttribute('tabindex', '0');
        anchorElement.setAttribute('tabindex', '-1');
        if (anchorElement.textContent) button.setAttribute('aria-label', anchorElement.textContent);
      }
    });
  })();

  window.addEventListener('click', handleButtonLink);
  window.addEventListener('keydown', handleButtonLink);
};

export default editorFriendlyLinkBlocks;
