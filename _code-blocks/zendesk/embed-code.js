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
document.addEventListener('DOMContentLoaded', () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const preElements = document.querySelectorAll('pre');
    for (const preElement of preElements) {
      const src = preElement.textContent;
      if (!src || !src.startsWith('http')) continue;
      preElement.innerHTML = '';
      try {
        const response = yield fetch(src);
        const code = yield response.text();
        const escapedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt');
        preElement.innerHTML = `<code>${escapedCode}</code>`;
        window.hljs.highlightBlock(preElement);
      } catch (error) {
        console.log(error);
      }
    }
  })
);
