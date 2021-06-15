import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Root from './components/root.js';

const __html = ReactDOMServer.renderToString(<Root />);
const __html = '__html'
export default __html;