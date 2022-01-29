// when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  /* get a reference to the link element
  with a rel attribute of icon and store it in the variable link or 
  if the link does not exist, create a link element
  and store it in the variable link*/
  // add selector constant
  const LINK_SELECTOR = "[fs-hacks-element='link-icon']";
  const link = document.querySelector<HTMLAnchorElement>(LINK_SELECTOR) || document.createElement('link');
  // set the link type attribute
  link.type = 'image/x-icon';
  // set the link rel attribute
  link.rel = 'shortcut icon';
  // set the link href attribute
  link.href = 'https://assets.website-files.com/5b8f3bd5334d376d704155c1/5c3610ef8b9a3107c28c79ae_hack7-custom-fav.png';
  // append the link to the head element
  document.head.appendChild(link);
});
