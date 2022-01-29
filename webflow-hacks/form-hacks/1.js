// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Get the select field.
    var interestSelectField = document.querySelector('#interest-select-field');
    // get the email-Form element.
    var emailForm = document.querySelector('#email-form');
    // get the success-text element.
    var successText = document.querySelector('.insert-success-text');
    if (interestSelectField && emailForm && successText) {
        // declare & initialize the customSuccessMessage variable 
        // with the value of the option selected 
        // on the interest select field
        var customSuccessMessage_1 = interestSelectField.value;
        // every time the option on the select field changes
        interestSelectField.addEventListener('change', function () {
            // assign the new selected option's value to the customSuccessMessage variable
            customSuccessMessage_1 = interestSelectField.value;
        });
        // when the form's submit button is clicked 
        emailForm.addEventListener('submit', function (event) {
            // if the user selected an option on the select field
            if (customSuccessMessage_1) {
                // change text of the success-text field 
                successText.innerText = "Thank you! We'll focus on ".concat(customSuccessMessage_1, " for future F'in sweet Webflow Hacks!");
                // then submit the form
                return true;
            }
            else { // else if no option was selected
                // focus on the select field
                interestSelectField.focus();
                // stop form submission
                return false;
            }
        });
    } // end if statement
});