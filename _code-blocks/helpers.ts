/**
 * Populate a code element with the external code
 * @param src
 * @param codeElement
 */
export const populateCodeElement = async (src: string, codeElement: HTMLElement) => {
  try {
    // Get the script as plain text
    const response = await fetch(src);
    const code = await response.text();

    // Insert escaped HTML characters to the code element
    codeElement.innerHTML = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt');
  } catch (error) {
    console.log(error);
  }
};

/**
 * Creates a copy button
 * @param id
 * @returns The new button element
 */
export const createCopyButton = (id: string) => {
  const copyButton = document.createElement('button');
  copyButton.classList.add('copyCodeBtn');
  copyButton.innerHTML =
    '<svg width="16px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 448 512" style="margin-right: 8px"><path fill="currentColor" d="M434 66l-52-52a48 48 0 00-33.9-14H176a48 48 0 00-48 48v48H48a48 48 0 00-48 48v320a48 48 0 0048 48h224a48 48 0 0048-48v-48h80a48 48 0 0048-48V99.9a48 48 0 00-14-34zm-82-33.5a15.9 15.9 0 017.4 4.2l52 51.9a15.9 15.9 0 014.1 7.4H352V32.5zM288 464a16 16 0 01-16 16H48a16 16 0 01-16-16V144a16 16 0 0116-16h80v240a48 48 0 0048 48h112v48zm128-96a16 16 0 01-16 16H176a16 16 0 01-16-16V48a16 16 0 0116-16h144v72a24 24 0 0024 24h72v240z"/></svg>copy code';
  copyButton.setAttribute('data-copy', `#${id}`);
  copyButton.setAttribute('data-copied', 'copied!');

  return copyButton;
};

/**
 *
 * @param title
 * @returns
 */
export const createTitleElement = (title: string): HTMLDivElement => {
  const titleElement = document.createElement('div');
  titleElement.classList.add('codeTitle');
  titleElement.textContent = title;
  return titleElement;
};
