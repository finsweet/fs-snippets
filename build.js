const esbuild = require('esbuild');

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'es6',
});
