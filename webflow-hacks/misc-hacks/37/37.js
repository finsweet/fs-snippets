"use strict";
window.Webflow || (window.Webflow = []);
window.Webflow.push(() => {
    const tabButtons = document.querySelectorAll('.w-tab-link');
    if (tabButtons.length === 0)
        return;
    // add listeners and reset attributes
    tabButtons.forEach(function (tabButton, index) {
        tabButton.addEventListener('click', function () {
            localStorage.setItem('tab', String(index));
        });
    });
    // restore previously selected tab
    const selectedTabIndex = Number(localStorage.getItem('tab')) || 0;
    tabButtons[selectedTabIndex].click();
});
