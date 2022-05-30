'use strict';
// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // selector constants
  const SHOW_PAGE_URL_SELECTOR = '[fs-hacks-element="show-page-url"]';
  const PAGE_URL_INPUT_SELECTOR = '[fs-hacks-element="page-url-input"]';
  // get elements
  const page_url = document.querySelector(SHOW_PAGE_URL_SELECTOR);
  const page_url_input = document.querySelector(PAGE_URL_INPUT_SELECTOR);
  // early return if the element is not found
  if (!page_url || !page_url_input) return;
  // get & store the page url in a variable
  const url = location.href;
  // set the page url as the hidden input's value
  page_url_input.value = url;
  // show the page url as text on the page
  // this last line is only used as a visual for our Hack!
  page_url.innerText = url;
});
