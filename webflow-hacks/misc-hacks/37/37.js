'use strict';
// when DOM ready
document.addEventListener('DOMContentLoaded', function () {
  const TAB_BUTTON_SELECTOR = '.tab-button';
  const tabButtons = document.querySelectorAll(TAB_BUTTON_SELECTOR);
  // early return if no tab buttons found
  if (tabButtons.length === 0) return;
  if (localStorage.getItem('tab')) {
    const currentIndex = Number(localStorage.getItem('tab'));
    // select the current tab
    const targetNode = tabButtons[currentIndex];
    console.log(targetNode);
    triggerMouseEvent(targetNode, 'mouseup');
    triggerMouseEvent(targetNode, 'click');
    targetNode.focus();
  }
  tabButtons.forEach(function (tabButton, index) {
    tabButton.addEventListener('click', function () {
      // set the 'tab' item in localStorage to the index of the tab button
      localStorage.setItem('tab', String(index));
    });
  });
});
function triggerMouseEvent(node, eventType) {
  const clickEvent = new Event(eventType, { bubbles: true });
  node.dispatchEvent(clickEvent);
}
