// Import ESBuild
const { buildSync } = require('esbuild'); // eslint-disable-line

// Default Settings
const defaultSettings = {
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'es6',
};

// Files building
buildSync({
  ...defaultSettings,
  entryPoints: ['_code-blocks/zendesk/embed-code.ts'],
  outfile: '_code-blocks/zendesk/embed-code.js',
});

buildSync({
  ...defaultSettings,
  entryPoints: ['_code-blocks/webflow/embed-code.ts'],
  outfile: '_code-blocks/webflow/embed-code.js',
});
