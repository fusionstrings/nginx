import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Root from './components/root.jsx';

const __html = ReactDOMServer.renderToString(<Root />);
export default __html;