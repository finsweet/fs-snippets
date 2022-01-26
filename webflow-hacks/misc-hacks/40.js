// on every name field key stroke
$('#name-input').on('keyup', function(){
  // set the #name-text textContent as the #name-input field value
  $('#name-text').text($(this).val());
});

// on every email field key stroke
$('#email-input').on('keyup', function(){
  // set the #email-text textContent as the #email-input field value
  $('#email-text').text($(this).val());
});
