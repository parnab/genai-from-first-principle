import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const root = path.resolve(process.env.PAGES_OUTPUT_DIR ?? "pages-dist");
const port = Number(process.env.PORT ?? 8080);
const types = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".png": "image/png", ".svg": "image/svg+xml" };

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? "/", `http://${request.headers.host}`).pathname);
    let file = path.resolve(root, `.${pathname}`);
    if (!file.startsWith(root)) throw new Error("Invalid path");
    const details = await stat(file);
    if (details.isDirectory()) file = path.join(file, "index.html");
    response.setHeader("Content-Type", types[path.extname(file)] ?? "application/octet-stream");
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(`Pages preview: http://127.0.0.1:${port}`));
