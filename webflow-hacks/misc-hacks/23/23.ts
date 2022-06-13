// on DOM ready
document.addEventListener('DOMContentLoaded', function () {
  const TIME_VERSION_ONE_SELECTOR = '[fs-hacks-element="time-version1"]';
  const TIME_VERSION_TWO_SELECTOR = '[fs-hacks-element="time-version2"]';
  // get the heading element
  const timeVersionOne = document.querySelector<HTMLHeadingElement>(TIME_VERSION_ONE_SELECTOR);
  const timeVersionTwo = document.querySelector<HTMLHeadingElement>(TIME_VERSION_TWO_SELECTOR);
  if (!timeVersionOne || !timeVersionTwo) return;

  //set your formatting options
  //Version 1 output = "16:09:19"
  const timeVersion1Format: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  //Version 2 output = "4:09 PM"
  const timeVersion2Format: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  };

  // Update the text content of our text elements with the formatted time
  timeVersionOne.textContent = new Date().toLocaleTimeString('en-US', timeVersion1Format);
  timeVersionTwo.textContent = new Date().toLocaleTimeString('en-US', timeVersion2Format);
});
