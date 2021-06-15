import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import Document from "../components/document.js";

/**
 * @param {{Component: any, props?: import('react').ReactPropTypes}} param
 * @returns {string}
 */
function Render({ Component, props }) {
	// preserve data-reactroot
	const __html = ReactDOMServer.renderToString(
		<main id="__root"><Component {...props} /></main>,
	);

	const document = ReactDOMServer.renderToStaticMarkup(
		<Document style={`/css/style.css`}>
			__html
    </Document>,
	);

	const [header, footer] = document.split("__html");

	return `<!DOCTYPE html>${header}${__html}${footer}`;
}

export default Render;
