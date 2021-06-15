import {
  listenAndServe,
  ServerRequest,
} from "https://deno.land/std@0.77.0/http/server.ts";

async function serveRequest(
  request: ServerRequest,
) {
  const { url } = request;
  request.respond({ body: `${url}` });
}

type IRequestHandler = (req: ServerRequest) => void;

async function main(requestHandler: IRequestHandler) {
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
