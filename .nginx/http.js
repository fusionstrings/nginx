var __html = `<!DOCTYPE html>
<body>
  <h1>Hello World</h1>
  <p>This markup was generated by a Nginx.</p>
  <script type="module" src="/js/main.js"></script>
</body>`

/**
 * @param {NginxHTTPRequest} request
 */
function handleRequest(request) {
  request.headersOut["content-type"] = "text/html";
  request.return(200, __html);
}

export default { handleRequest };
