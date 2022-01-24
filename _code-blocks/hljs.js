'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const core_1 = __importDefault(require('highlight.js/lib/core'));
const css_1 = __importDefault(require('highlight.js/lib/languages/css'));
const xml_1 = __importDefault(require('highlight.js/lib/languages/xml'));
const json_1 = __importDefault(require('highlight.js/lib/languages/json'));
const markdown_1 = __importDefault(require('highlight.js/lib/languages/markdown'));
const javascript_1 = __importDefault(require('highlight.js/lib/languages/javascript'));
const typescript_1 = __importDefault(require('highlight.js/lib/languages/typescript'));
core_1.default.registerLanguage('css', css_1.default);
core_1.default.registerLanguage('xml', xml_1.default);
core_1.default.registerLanguage('json', json_1.default);
core_1.default.registerLanguage('markdown', markdown_1.default);
core_1.default.registerLanguage('javascript', javascript_1.default);
core_1.default.registerLanguage('typescript', typescript_1.default);
exports.default = core_1.default;
