document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll<HTMLAnchorElement>('.w-tab-link');
  if (tabButtons.length === 0) return;

  // add listeners and reset attributes
  tabButtons.forEach(function (tabButton, index) {
    tabButton.setAttribute('aria-selected', `false`);
    tabButton.classList.remove('w--current');
    tabButton.addEventListener('click', function () {
      localStorage.setItem('tab', String(index));
    });
  });

  // restore previously selected tab
  const selectedTabIndex = Number(localStorage.getItem('tab')) || 0;
  const selectedTabButton = tabButtons[selectedTabIndex];
  selectedTabButton.classList.add('w--current');
  selectedTabButton.setAttribute('aria-selected', 'true');
});
