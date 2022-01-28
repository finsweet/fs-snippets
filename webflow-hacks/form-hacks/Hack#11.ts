// when the DOM is ready
document.addEventListener("DOMContentLoaded", function() { 
  const INSERT_PAGE_SELECTOR = `[fs-hacks-element = 'insertpageurl']`;
  const SHOW_PAGE_SELECTOR = `[fs-hacks-element = 'show-page-url']`;

  // get & store the page url in a variable
  const url = location.href;	
  // set the page url as the hidden input's value
  const insertPageUrl: HTMLInputElement = document.querySelector(INSERT_PAGE_SELECTOR) as HTMLInputElement;
  insertPageUrl.value = url;
    
  // show the page url as text on the page
  const showPageUrl: HTMLDivElement = document.querySelector(SHOW_PAGE_SELECTOR) as HTMLDivElement;
  showPageUrl.textContent = url;
});
  
//FROM HACK 39 - REMOVE QUERY STRINGS FOR CLEAN URL
  
// remove query string after a set timeout
setTimeout(()=>{
  // uses HTML5 history API to manipulate the location bar
  history.replaceState('', document.title, window.location.origin + window.location.pathname);
}, 5); // 5 millisecond timeout in this case