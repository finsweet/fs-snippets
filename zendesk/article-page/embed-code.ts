interface Window {
  hljs: any;
}

document.addEventListener('DOMContentLoaded', async () => {
  // Get all the <pre> elements
  const preElements = document.querySelectorAll('pre');

  for (const preElement of preElements) {
    // Get the script source
    const src = preElement.textContent;
    if (!src || !src.startsWith('http')) continue;

    // Clear element's content
    preElement.innerHTML = '';

    try {
      // Get the script as plain text
      const response = await fetch(src);
      const code = await response.text();

      // Escape HTML characters
      const escapedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt');

      // Insert it in the element
      preElement.innerHTML = `<code>${escapedCode}</code>`;

      // Highlight the element
      window.hljs.highlightBlock(preElement);
    } catch (error) {
      console.log(error);
    }
  }
});
