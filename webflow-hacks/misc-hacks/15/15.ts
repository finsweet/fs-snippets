// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const MENU_BUTTON_SELECTOR = '[fs-hacks-element="menu-button"]';
  // get the anchor link buttons
  const menuBtns = document.querySelectorAll(MENU_BUTTON_SELECTOR);
  if (!menuBtns) return;
  // for each menu button
  menuBtns.forEach(function (menuBtn) {
    // when each button is clicked
    menuBtn.addEventListener('click', function () {
      // set a short timeout before taking action
      // so as to allow hash to be set
      setTimeout(() => {
        // call removeHash function after set timeout
        removeHash();
      }, 5); // 5 millisecond timeout in this case
    });
  });
});

/**
 * This function uses HTML5 history API to manipulate the location bar
 * to remove the hash from the URL.
 * @returns void
 */

function removeHash() {
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}
