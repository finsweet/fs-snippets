'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const helpers_1 = require('../helpers');
const copy_clipboard_1 = __importDefault(require('@finsweet/webflow-addons/copy-clipboard'));
const hljs_1 = __importDefault(require('../hljs'));
document.addEventListener('DOMContentLoaded', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const preElements = document.querySelectorAll('pre');
    for (const [index, preElement] of preElements.entries()) {
      let src = preElement.textContent;
      const titleRegex = /\[(.*)\]/;
      if (!src || (!src.startsWith('http') && !titleRegex.test(src))) continue;
      preElement.innerHTML = '';
      const codeElement = document.createElement('code');
      const codeElementId = `hljs-code-${index}`;
      codeElement.id = codeElementId;
      const snippetHeader = (0, helpers_1.createDivElement)('snippetHeader');
      preElement.appendChild(snippetHeader);
      preElement.appendChild(codeElement);
      const titleMatch = titleRegex.exec(src);
      if (titleMatch) {
        const [brackedTitle, title] = titleMatch;
        src = src.replace(brackedTitle, '');
        const titleElement = (0, helpers_1.createDivElement)(title);
        snippetHeader.appendChild(titleElement);
      }
      yield (0, helpers_1.populateCodeElement)(src, codeElement);
      const copyButton = (0, helpers_1.createCopyButton)(codeElementId);
      snippetHeader.appendChild(copyButton);
      hljs_1.default.highlightBlock(codeElement);
    }
    (0, copy_clipboard_1.default)();
  })
);
