'use strict';
window.Webflow || (window.Webflow = []);
window.Webflow.push(() => {
  const tabLinks = document.querySelectorAll('.w-tab-link');
  if (tabLinks.length === 0) return;
  // add listeners and click chosen tab
  const chosenTabId = localStorage.getItem('tab');
  tabLinks.forEach(function (tabLink) {
    const currentTabId = tabLink.id;
    if (chosenTabId === currentTabId) tabLink.click();
    tabLink.addEventListener('click', function () {
      localStorage.setItem('tab', `#${currentTabId}`);
    });
  });
});
