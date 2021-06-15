/// <reference path="./types/njs/ngx_http_js_module.d.ts" />

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import Root from './components/root.js';

const __html = ReactDOMServer.renderToString(
  <main id="__root"><Root /></main>,
);

/**
 * @param {NginxHTTPRequest} request
 */
function handleRequest(request) {
  request.headersOut["content-type"] = "text/html";
  //let requestHeaders = JSON.stringify([...request.headersIn])
  request.return(200, __html);
}

export default { handleRequest };
