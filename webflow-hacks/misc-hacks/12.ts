// JS
// on button click
document.querySelector<HTMLElement>('.hack-button.hack12-js')?.addEventListener('click', ()=>{	
  // paste your function - start
  (document.querySelector('.hack12-text.hack12-js') as HTMLElement).innerHTML = 'This is me on Webflow.';
  // paste your function - end
});

// jQuery
// on button click
document.querySelector<HTMLElement>('.hack-button.hack12-jquery')?.addEventListener('click', ()=>{	
  // paste your function - start
  (document.querySelector('.hack12-text.hack12-jquery') as HTMLElement).innerHTML = 'This is me on Webflow.';
  // paste your function - end
});