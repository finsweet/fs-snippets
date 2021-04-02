import { createCopyButton, createTitleElement, populateCodeElement } from '../helpers';
import initCopyClipboard from '@finsweet/webflow-addons/copy-clipboard';
import highlightJS from '../hljs';

document.addEventListener('DOMContentLoaded', async () => {
  // Get all the embed elements
  const embedElements = document.querySelectorAll<HTMLDivElement>('.w-embed');

  for (const [index, embedElement] of embedElements.entries()) {
    // Get the script source and the title if exist
    let src = embedElement.textContent;

    const titleRegex = /\[(.*)\]/;

    if (!src || (!src.startsWith('http') && !titleRegex.test(src))) continue;

    // Clear element's content
    embedElement.innerHTML = '';

    // Create inner elements
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    const codeElementId = `hljs-code-${index}`;
    codeElement.id = codeElementId;
    preElement.appendChild(codeElement);

    // Get the title
    const titleMatch = titleRegex.exec(src);

    if (titleMatch) {
      // Retrieve the title and sanitize the source URL
      const [brackedTitle, title] = titleMatch;
      src = src.replace(brackedTitle, '');

      const titleElement = createTitleElement(title);
      preElement.appendChild(titleElement);
    }

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
