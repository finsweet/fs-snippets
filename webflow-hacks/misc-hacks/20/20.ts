document.addEventListener('DOMContentLoaded', function () {
  const UL_SELECTOR = '[fs-hacks-element="unordered-list"]';
  const originalList = document.querySelector(UL_SELECTOR);
  const unorderedList = document.createElement('ul');
  if (!originalList) return;

  const listItems = originalList.querySelectorAll('li');

  for (const item of listItems) {
    const tildeCount = (item.innerText.match(/~/g) || []).length;
    const cleanedList = cleanListItem(item);
    const wrappedList = wrapList(cleanedList, tildeCount);
    unorderedList.appendChild(wrappedList);
  }

  originalList.replaceChildren(...unorderedList.childNodes);
});

/**
 * Remove the tilde from the list item
 * @param {HTMLElement} li item
 **/
function cleanListItem(li: HTMLLIElement) {
  li.innerText = li.innerText.replace(/~+/g, '');
  return li;
}

/**
 * Wrap the list item in a <ul> tag, given the number of tildes
 * @param {HTMLElement} li item
 * @param {number} tildeCount number of tildes
 **/
function wrapList(li: HTMLElement, tildeCount: number): HTMLElement {
  if (tildeCount === 0) return li;

  const uList = document.createElement('ul');
  uList.appendChild(li);
  return wrapList(uList, tildeCount - 1);
}
