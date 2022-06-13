// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // selector constants
  const SHOW_PAGE_URL_SELECTOR = '[fs-hacks-element="show-page-url"]';
  const PAGE_URL_INPUT_SELECTOR = '[fs-hacks-element="page-url-input"]';
  // get elements
  const pageUrl = document.querySelector<HTMLDivElement>(SHOW_PAGE_URL_SELECTOR);
  const pageUrlInput = document.querySelector<HTMLInputElement>(PAGE_URL_INPUT_SELECTOR);
  // early return if the element is not found
  if (!pageUrl || !pageUrlInput) return;
  // get & store the page url in a variable
  const url = location.href;
  // set the page url as the hidden input's value
  pageUrlInput.value = url;
  // show the page url as text on the page
  // this last line is only used as a visual for our Hack!
  pageUrl.innerText = url;
});
