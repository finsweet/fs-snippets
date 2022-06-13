// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // get the li items
  const listItems = document.querySelectorAll('li');
  listItems.forEach(function (item) {
    // check for '~' character
    // it's recommended to start with the deepest level of sub bullet
    // to ensure only the relevant classes are applied

    // if the li item text starts with '~~'
    if (item.innerText.startsWith('~~')) {
      // run indentText() function
      indentText(item, 'hack20-sub-bullet-2');
    } // else if the li item starts with '~'
    else if (item.innerText.startsWith('~')) {
      // run indentText() function
      indentText(item, 'hack20-sub-bullet');
    }
  });
});

/**
 * This function will indent the text of the li
 * item by adding classes and reformatting item text.
 * @param {HTMLElement} li item
 * @param {string} className
 **/
function indentText(li: HTMLLIElement, className: string): void {
  li.classList.add(className);
  // remove the '~' from the li items
  // the regex /~+/g matches any one or more ~ characters
  const reformatedText = li.innerHTML.replace(/~+/g, '');
  // replace the li item's html text that has ~ tags
  // with the new text that removed the ~ character(s)
  li.innerHTML = reformatedText;
}
