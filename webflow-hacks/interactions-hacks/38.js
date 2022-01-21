"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementsByClassName('hack38-form')[0];
    const successTrigger = document.getElementsByClassName('hack38-form-success-trigger')[0];
    ;
    const submitEvent = () => {
        form.onsubmit = triggerSuccessTrigger;
    };
    const triggerSuccessTrigger = () => {
        successTrigger.click();
    };
    window.onload = submitEvent;
});
