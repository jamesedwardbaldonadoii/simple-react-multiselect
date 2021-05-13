import styles from 'rollup-plugin-styles';
const autoprefixer = require('autoprefixer');
import babel from '@rollup/plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';

// the entry point for the library
const input = 'src/index.js';

// 
var MODE = [
  { fomart: 'cjs' },
  { fomart: 'esm' },
  { fomart: 'umd' }
];

var config = []

MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      name: 'simple-react-multiselect',
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: 'auto',
    },
    external: ['react', /@babel\/runtime/],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime'
      }),
      sourcemaps(),
      styles({
        postcss: {
          plugins: [
            autoprefixer()
          ]
        }
      })
    ]
  }
  config.push(conf)
});

export default [
  ...config,
];