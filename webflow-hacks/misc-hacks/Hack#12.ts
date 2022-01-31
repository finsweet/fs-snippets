// JS
const BUTTON_JS_SELECTOR = '[fs-hacks-element="hack-button.hack12-js"]';
const BUTTON_JQUERY_SELECTOR = '[fs-hacks-element="hack-button.hack12-jquery"]';
const TEXT_JS_SELECTOR = '[fs-hacks-element="hack12-text.hack12-js"]';
const TEXT_JQUERY_SELECTOR = '[fs-hacks-element="hack12-text.hack12-jqery"]';

// on button click
 const hackButtonJs: HTMLElement = document.querySelector(BUTTON_JS_SELECTOR) as HTMLElement;
 hackButtonJs.addEventListener('click', ()=>{	
  // paste your function - start
  const hackTextJs: HTMLElement = document.querySelector(TEXT_JS_SELECTOR) as HTMLElement;
  hackTextJs.innerHTML = 'This is me on Webflow.';
  // paste your function - end
});

// jQuery
// on button click
const hackButtonJquery: HTMLElement = document.querySelector(BUTTON_JQUERY_SELECTOR) as HTMLElement;
hackButtonJquery.addEventListener('click', ()=>{	
  // paste your function - start
  const hackTextJquery: HTMLElement = document.querySelector(TEXT_JQUERY_SELECTOR) as HTMLElement;
  hackTextJquery.innerHTML = 'This is me on Webflow.';
  // paste your function - end
});