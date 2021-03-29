import initCopyClipboard from '@finsweet/webflow-addons/copy-clipboard';
import { createCopyButton, createTitleElement, populateCodeElement } from '../helpers';
import highlightJS from '../hljs';

document.addEventListener('DOMContentLoaded', async () => {
  // Get all the embed elements
  const embedElements = document.querySelectorAll<HTMLDivElement>('.w-embed');

  for (const [index, embedElement] of embedElements.entries()) {
    // Get the script source and the title if exists
    let src = embedElement.textContent;
    const titleRegex = /^\[(.*?)\]/g; // TODO REVISAR

    if (!src || (!src.startsWith('http') && !titleRegex.test(src))) continue; // TODO REVISAR  && !titleRegex.test(src)

    // Clear element's content
    embedElement.innerHTML = '';

    // Create inner elements
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    const codeElementId = `hljs-code-${index}`;
    codeElement.id = codeElementId;
    preElement.appendChild(codeElement);

    // Get the title
    const titleMatch = titleRegex.exec(src); // TODO REVISAR

    console.log({ src, titleMatch }); // TODO REVISAR
    // TODO REVISAR
    if (titleMatch) {
      const [brackedTitle, title] = titleMatch; // TODO REVISAR
      src = src.replace(brackedTitle, ''); // TODO REVISAR

      const titleElement = createTitleElement(title); // TODO REVISAR
      preElement.appendChild(titleElement); // TODO REVISAR
    } // TODO REVISAR

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
