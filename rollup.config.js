import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';

export default {
	input: 'lib/http.js',
	output: {
		file: 'dist/htttp.bundle.js',
		//format: 'es', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve({preferBuiltins: true}), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		builtins()
		// production && terser() // minify, but only in production
	]
  };