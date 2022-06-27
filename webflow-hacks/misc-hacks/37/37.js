'use strict';
window.Webflow || (window.Webflow = []);
window.Webflow.push(() => {
  const tabLinks = document.querySelectorAll('.w-tab-link');
  if (tabLinks.length === 0) return;
  // add listeners and reset attributes
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener('click', function () {
      localStorage.setItem('tab', `#${tabLink.id}`);
    });
  });
  // restore previously selected tab
  const chosenTabId = localStorage.getItem('tab');
  if (!chosenTabId) return;
  const chosenTab = document.querySelector(chosenTabId);
  if (!chosenTab) return;
  chosenTab.click();
});
