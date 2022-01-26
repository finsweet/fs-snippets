// not needed if using cdn
// import * as Cookies from 'js-cookie';

document.addEventListener('DOMContentLoaded', function (event) {
  // get a reference to the page wrapper
  const pageWrapper: HTMLElement = document.querySelector('.page-wrapper') as HTMLElement;
  /*The page-wrapper is initially hidden*/
  pageWrapper.style.display = 'none';

  // get a reference to the loading wrapper
  const loadingWrapper: HTMLElement = document.querySelector('.hack10-loading-wrapper') as HTMLElement;

  // get the 'seenAnimation' cookie and store in a seenAnimation variable
  const seenAnimation = Cookies.get('seenAnimation');
  // if the 'seenAnimation' cookie is undefined
  if (!seenAnimation) {
    // display the loading-wrapper
    loadingWrapper.style.display = 'flex';
    // show the page-wrapper
    // after a set duration of 3000 milliseconds
    // (the time it takes to show the loading-wrapper in this case)
    setTimeout(() => {
      pageWrapper.style.display = 'block';
    }, 3000);
    // set the 'seenAnimation' cookie
    Cookies.set('seenAnimation', '1', { expires: 1 });
  } else {
    // else if the 'seenAnimation' cookie exists
    // the user has already seen the animation
    // and so
    // hide the loading-wrapper
    loadingWrapper.style.visibility = 'hidden';
    // show the page-wrapper
    pageWrapper.style.display = 'block';
  }

  //This is for the "Clear my 24 hour cookie" button on this Hacks template
  // this is not needed on your live site
  const clearCookiesButton: HTMLElement = document.querySelector('.clear-cookie') as HTMLElement;

  // when  clearCookiesButton is clicked
  clearCookiesButton.onclick = () => {
    // remove the 'seenGif' cookie
    // the animation can now play again since
    //'seenAnimation' becomes undefined
    Cookies.remove('seenAnimation');
  };
});