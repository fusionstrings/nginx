/// <reference path="./types/njs/ngx_http_js_module.d.ts" />

function handleRequest(request: NginxHTTPRequest) {
  request.headersOut["content-type"] = "text/html";
  //let requestHeaders = JSON.stringify([...request.headersIn])
  request.return(200, "JSON.stringify(request)");
}

export default { handleRequest };