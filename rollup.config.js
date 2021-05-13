import styles from 'rollup-plugin-styles';
import babel from '@rollup/plugin-babel';

const autoprefixer = require('autoprefixer');

// the entry point for the library
const input = 'src/index.js';

//
const MODE = [
  {
    fomart: 'cjs',
  },
  {
    fomart: 'esm',
  },
  {
    fomart: 'umd',
  },
];

const config = [];

MODE.forEach((m) => {
  const conf = {
    input,
    output: {
      name: 'simple-react-multiselect',
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: 'auto',
    },
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime',
      }),
      // sourcemaps(),
      styles({
        postcss: {
          plugins: [
            autoprefixer(),
          ],
        },
      }),
    ],
  };
  config.push(conf);
});

export default [
  ...config,
];
