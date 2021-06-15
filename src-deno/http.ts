// @deno-types="./types/njs/ngx_http_js_module.d.ts"

import markup from './markup.jsx';

function handleRequest(request: NginxHTTPRequest) {
  request.headersOut["content-type"] = "text/html";
  //let requestHeaders = JSON.stringify([...request.headersIn])
  request.return(200, markup);
}

export default { handleRequest };
