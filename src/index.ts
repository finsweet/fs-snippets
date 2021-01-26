import editorFriendlyLinkBlocks from './editor-friendly-link-blocks/index';

declare global {
  interface Window {
    WebflowHacks: { [key: string]: any };
  }
}

window.WebflowHacks = { editorFriendlyLinkBlocks };
