// set a short timeout before taking action
// so as to allow hash to be set
setTimeout(() => {
  // uses HTML5 history API to manipulate the location bar
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
});
