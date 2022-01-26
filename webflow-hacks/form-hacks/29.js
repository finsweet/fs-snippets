// when the form's submit button is clicked 
$('.hack29-email-form').submit(function(){
  // get reference to name field
  const $name = $('#hack29-name-input');
  // if the name field has a value
  if($.trim($name.val())){
    // find .hack28-custom-message and add this text 
    $('.hack29-custom-message').text('Thank you ' + $name.val() +'!');
    // then submit the form
    return true;
  }
  else{	// else if no value
    // enter default success message
    $('.hack29-custom-message').text('Thank you! Your submission has been received!');
    // then submit the form
    return true;
  }
});  
