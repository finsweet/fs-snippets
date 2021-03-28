import initCopyClipboard from '@finsweet/webflow-addons/copy-clipboard';
import { createCopyButton, populateCodeElement } from '../helpers';
import highlightJS from '../hljs';

document.addEventListener('DOMContentLoaded', async () => {
  // Get all the embed elements
  const embedElements = document.querySelectorAll<HTMLDivElement>('.w-embed');

  for (const [index, embedElement] of embedElements.entries()) {
    // Get the script source
    const src = embedElement.textContent;
    if (!src || !src.startsWith('http')) continue;

    // Clear element's content
    embedElement.innerHTML = '';

    // Create inner elements
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    const codeElementId = `hljs-code-${index}`;
    codeElement.id = codeElementId;
    preElement.appendChild(codeElement);

    // Populate the code element
    await populateCodeElement(src, codeElement);

    // Create the copy button
    const copyButton = createCopyButton(codeElementId);

    // Append the copy button
    preElement.appendChild(copyButton);

    // Highlight the element
    highlightJS.highlightBlock(codeElement);

    // Append it to the embed
    embedElement.appendChild(preElement);
  }

  initCopyClipboard();
});
