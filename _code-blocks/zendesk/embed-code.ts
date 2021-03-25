import highlightJS from '../hljs';
import { initCopyClipboard } from '@finsweet/webflow-addons';
import { createCopyButton, populateCodeElement } from '../helpers';

document.addEventListener('DOMContentLoaded', async () => {
  // Get all the <pre> elements
  const preElements = document.querySelectorAll('pre');

  for (const [index, preElement] of preElements.entries()) {
    // Get the script source
    const src = preElement.textContent;
    if (!src || !src.startsWith('http')) continue;

    // Clear element's content
    preElement.innerHTML = '';

    // Create inner elements
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
    highlightJS.highlightBlock(preElement);
  }

  initCopyClipboard();
});
