import {
	listenAndServe
  } from "https://deno.land/std@0.77.0/http/server.ts";
  import {
	HttpRequest,
	HttpResponse,
	HttpHandler,
	HttpStatus,
	toDenoRequestListener,
	stringBody,
	res,
	send
  } from "https://raw.githubusercontent.com/fusionstrings/http4ts/v0.1.1/src/deno/mod.ts";
  //import type {HttpHandler} from 'https://raw.githubusercontent.com/fusionstrings/http4ts/v0.1.1/src/deno/mod.ts';
  
  async function serveRequest(
	request: HttpRequest,
  ): Promise<HttpResponse> {
	return send(new HttpRequest('htttps://www.google.com'))
  }
  

  async function main(requestHandler: HttpHandler) {
	// 1729
	const port = Number(Deno?.env?.get("PORT") || 1729);
	const address = { port };
  
	console.log(`Dev Server started at http://localhost:${port}`);
  
	listenAndServe(
	  address,
	  requestHandler,
	);
  }
  
  if (import.meta.main) {
	main(serveRequest);
  }
  