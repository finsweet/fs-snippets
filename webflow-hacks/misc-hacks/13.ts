// when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // on click
  document.querySelector<HTMLElement>('.hack13-back-1')?.addEventListener('click', function(e){
    // prevent default behavior
    e.preventDefault();
    // Go back 1 page 
    window.history.back();
    // can also use 
    // window.history.go(-1);
  });

  // on click
  document.querySelector<HTMLElement>('.hack13-back-2')?.addEventListener('click', function(e){
    // prevent default behavior
    e.preventDefault();
    // Go back 2 pages
    window.history.go(-2);
  });
});