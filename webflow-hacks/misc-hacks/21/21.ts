/* put all of this code in <head> of Site Settings if you want to
gate every page on your site until the age gate is filled out! */

// if no validAge storahe *AND* you are not on the Age Gate page (update post video-record)
// this *AND* is needed if you add this redirect code to site settings. Without the AND you will be caught in an infinite redirect loop!
const AGE_GATE_URL = 'https://finsweethacks.com/success/21-age-gate';
if (!localStorage.getItem('validAge') && window.location.href !== AGE_GATE_URL) {
  // redirect to /age-gate page
  window.location.replace(AGE_GATE_URL);
}
