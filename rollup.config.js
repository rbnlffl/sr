import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json';


export default [{
    input: pkg.index,
    output: {
        sourcemap: true,
        file: pkg.module,
        format: 'es'
    },
    plugins: [
        typescript(),
        babel()
    ]
}, {
    input: pkg.index,
    plugins: [
        eslint(),
        resolve(),
        commonjs(),
        typescript(),
        babel(),
        terser()
    ],
    output: {
        file: pkg.browser,
        format: 'umd',
        name: 'Sirou'
    }
}];
