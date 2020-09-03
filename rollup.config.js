import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

import pkg from './package.json';

export default [
  // Browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'Contents',
      file: pkg.browser,
      format: 'umd',
      plugins: [babel({ babelHelpers: 'bundled' })] // https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
    },
    plugins: [
      resolve(), // so Rollup can find imported dependencies
      commonjs() // so Rollup can convert imported dependencies to an ES modules
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    external: ['sister', 'lodash'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
