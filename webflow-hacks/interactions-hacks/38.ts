document.addEventListener('DOMContentLoaded', () => {
    const form: HTMLElement = document.getElementsByClassName('hack38-form')[0] as HTMLElement;
    const successTrigger: HTMLElement =document.getElementsByClassName('hack38-form-success-trigger')[0] as HTMLElement;;
    

    // listen for form submit event 
    const submitEvent = () => {
        form.onsubmit = triggerSuccessTrigger
    }
      // click our div trigger to run our Webflow Interaction
      const triggerSuccessTrigger = () => {
        successTrigger.click()
    
    }
    
    window.onload = submitEvent;
    
  });
