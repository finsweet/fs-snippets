'use strict';
// inject the youtube api script
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
if (firstScriptTag.parentNode) {
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
/**
 * default function called by the youtube api
 */
function onYouTubeIframeAPIReady() {
  const IFRAME_SELECTOR = '[fs-hacks-element="iframe"]';
  const iframeContainer = document.querySelector(IFRAME_SELECTOR);
  if (!iframeContainer) return;
  const iframes = iframeContainer.querySelectorAll('iframe');
  iframes.forEach((iframe, index) => {
    // set iframe properties
    let src = iframe.getAttribute('src');
    if (!src) return;
    if (!src.includes('youtube')) return;
    const enablejsapiString = src.includes('?') ? '&enablejsapi=1' : '?enablejsapi=1';
    src = `${src + enablejsapiString}`;
    iframe.setAttribute('src', src);
    iframe.setAttribute('id', 'dynamic' + index);
    createPlayer(iframe.id);
  });
}
/**
 * Set up the player, add listeners, and play the video.
 * @param id: id of the iframe
 */
function createPlayer(id) {
  // initialize YT.player with the specified iframe's id
  const player = new YT.Player(id, {
    events: {
      onReady: onPlayerReady,
    },
  });
  function onPlayerReady() {
    const timestampLinks = document.querySelectorAll('.hacks-rich-text a');
    timestampLinks.forEach((timestampLink) => {
      timestampLink.addEventListener('click', function (e) {
        e.preventDefault();
        const timestamp = timestampLink.innerText.trim();
        const seconds = convertTimestampToSeconds(timestamp);
        player.seekTo(seconds, true);
      });
    });
  }
}
/**
 * Convert timestamp to seconds
 * @param timestamp
 * @returns {number}
 */
const convertTimestampToSeconds = (timestamp) => {
  const timeStampArray = timestamp.split(':');
  let seconds = 0;
  timeStampArray.reverse();
  timeStampArray.forEach((timeStamp, index) => {
    const timeStampNumber = Number(timeStamp);
    // add seconds
    if (index === 0) {
      if (!isNaN(timeStampNumber)) seconds += timeStampNumber;
    }
    // add minutes
    if (index === 1) {
      if (!isNaN(timeStampNumber)) seconds += timeStampNumber * 60;
    }
    // add hours
    if (index === 2) {
      if (!isNaN(timeStampNumber)) seconds += timeStampNumber * 60 * 60;
    }
  });
  return seconds;
};
