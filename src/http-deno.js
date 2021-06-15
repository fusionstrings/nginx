import markup from './markup.js';

function handleRequest(request) {
  request.headersOut["content-type"] = "text/html";
  //let requestHeaders = JSON.stringify([...request.headersIn])
  request.return(200, markup);
}

export default { handleRequest };
//export default __html;