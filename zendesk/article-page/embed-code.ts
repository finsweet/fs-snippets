interface Window {
  hljs: any;
}

document.addEventListener('DOMContentLoaded', async () => {
  // Get all the <pre> elements
  const preElements = document.querySelectorAll('pre');

  for (const preElement of preElements) {
    // Get the script source
    const src = preElement.textContent;
    if (!src) continue;

    // Clear element's content
    preElement.innerHTML = '';

    try {
      // Get the script as plain text
      const response = await fetch(src);
      const code = await response.text();

      // Insert it in the element
      preElement.innerHTML = `<code>${code}</code>`;

      // Highlight the element
      window.hljs.highlightBlock(preElement);
    } catch (error) {
      console.log(error);
    }
  }
});
