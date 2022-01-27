document.addEventListener('DOMContentLoaded', function (event) {
  // get a reference to the page wrapper
  var pageWrapper = document.querySelector('[fs-hacks-element="page-wrapper"]');
  if (!pageWrapper) return;
  // get a reference to the loading wrapper
  var loadingWrapper = document.querySelector('[fs-hacks-element="hack52-loading-wrapper"]');
  if (!loadingWrapper) return;
  // get the 'seenAnimation' item from session storage and store in a seenAnimation variable
  var seenAnimation = sessionStorage.getItem('seenAnimation');
  // if the 'seenAnimation' item is undefined
  if (!seenAnimation) {
    // display the loading-wrapper
    loadingWrapper.style.display = 'flex';
    // show the page-wrapper
    // after a set duration of 3000 milliseconds
    // (the time it takes to show the loading-wrapper in this case)
    setTimeout(function () {
      loadingWrapper.style.visibility = 'hidden';
      pageWrapper.style.display = 'block';
    }, 3000);
    // set the 'seenAnimation' item to the session storage
    sessionStorage.setItem('seenAnimation', '1');
  } else {
    // else if the 'seenAnimation' item exists
    // the user has already seen the animation
    // and so
    // hide the loading-wrapper
    loadingWrapper.style.visibility = 'hidden';
    // show the page-wrapper
    pageWrapper.style.display = 'block';
  }
});
