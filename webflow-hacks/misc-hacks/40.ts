// on every name field key stroke
document.querySelector<HTMLInputElement>('#name-input')?.addEventListener('keyup', function(){
  // set the #name-text textContent as the #name-input field value
  (document.querySelector('#name-text') as HTMLElement).textContent = this.value;
});
  
// on every email field key stroke
document.querySelector<HTMLInputElement>('#name-input')?.addEventListener('keyup', function(){
  // set the #email-text textContent as the #email-input field value
  (document.querySelector('#name-text') as HTMLElement).textContent = this.value;
});

