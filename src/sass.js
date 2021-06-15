import sass from 'sass';
import 'https://deno.land/std/node/global.ts';

window.location = new URL(import.meta.url);
sass.render({ data: 'body { color: red }' }, function (err, result) {
  console.log('error', err);
  console.log('result', result) 
});

// sass.render({ file: 'src/style.scss' }, function (err, result) { 
// 	console.log('error', err);
// 	console.log('result', result) 
// });
// const result = sass.renderSync({
// 	file: 'src/style.scss'
// });

// console.log('result', result)