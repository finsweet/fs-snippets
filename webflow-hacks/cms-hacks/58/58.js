'use strict';
// inject the youtube api script
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
document.head.insertAdjacentElement('afterbegin', tag);
/**
 * default function called by the youtube api
 */
function onYouTubeIframeAPIReady() {
  const IFRAME_SELECTOR = '[fs-hacks-element="iframe"]';
  const iFrameContainer = document.querySelector(IFRAME_SELECTOR);
  if (!iFrameContainer) return;
  const iFrames = iFrameContainer.querySelectorAll('iframe');
  iFrames.forEach((iFrame, index) => {
    // set iframe properties
    const { src } = iFrame;
    if (!src) return;
    const newSrc = new URL(src);
    if (!newSrc.origin.includes('youtube')) return;
    newSrc.searchParams.append('enablejsapi', '1');
    iFrame.src = newSrc.toString();
    iFrame.id = 'dynamic' + index;
    createPlayer(iFrame);
  });
}
/**
 * Set up the player, add listeners, and play the video.
 * @param iframe The iframe
 */
function createPlayer(iframe) {
  // initialize YT.player with the specified iframe's id
  const player = new YT.Player(iframe, {
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
        if (isNaN(seconds)) return;
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
  const timeStampNumbers = timestamp.split(':').map((timeStampNumber) => Number(timeStampNumber));
  return timeStampNumbers.reduce((acc, time) => 60 * acc + +time);
};
