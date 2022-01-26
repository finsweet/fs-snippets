// when the DOM is ready
document.addEventListener("DOMContentLoaded", function() { 
  // get & store the page url in a variable
  const url = location.href;	
  // set the page url as the hidden input's value
  (document.querySelector('#insertpageurl') as HTMLInputElement).value = url;
  
  
  // show the page url as text on the page
  // this last line is only used as a visual for our Hack!
  (document.querySelector('.show-page-url') as HTMLDivElement).textContent = url;
});

//FROM HACK 39 - REMOVE QUERY STRINGS FOR CLEAN URL

// remove query string after a set timeout
setTimeout(()=>{
  // uses HTML5 history API to manipulate the location bar
  history.replaceState('', document.title, window.location.origin + window.location.pathname);
}, 5); // 5 millisecond timeout in this case
