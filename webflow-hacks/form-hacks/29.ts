document.querySelector<HTMLFormElement>('.hack29-email-form')?.addEventListener('submit', function() {
  // get reference to name field
  const name = document.querySelector('#hack29-name-input') as HTMLInputElement;
  // if the name field has a value
  if(name.value.trim()){
    // find .hack28-custom-message and add this text 
    (document.querySelector('.hack29-custom-message') as HTMLElement).textContent = 'Thank you ' + name.value +'!';
  } else { // else if no value
    // enter default success message
    (document.querySelector('.hack29-custom-message') as HTMLElement).textContent = 'Thank you! Your submission has been received!';
  }
});