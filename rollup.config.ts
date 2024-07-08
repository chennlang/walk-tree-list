import typescript from "@rollup/plugin-typescript";
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import cleaner from 'rollup-plugin-cleaner'

export default {
  input: "index.ts",
  output: [
    {
        file: 'dist/index.es.js',
        format: 'esm',
    },
    {
        file: 'dist/index.cjs.js',
        format: 'cjs',
    },
  ],
  external: [/node_modules/],
  plugins: [
    cleaner({
      targets: ['./dist/']
    }),
    typescript({tsconfig: "tsconfig.json"}),
    babel({
      include: 'index.ts',
      exclude: 'node_modules/**'
    }),
    terser(),
  ],
};
