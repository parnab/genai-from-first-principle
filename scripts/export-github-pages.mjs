import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = process.env.STATIC_EXPORT_ORIGIN ?? "http://127.0.0.1:8787";
const outputDir = path.resolve(process.env.PAGES_OUTPUT_DIR ?? "pages-dist");
const repository = process.env.GITHUB_REPOSITORY?.split("/").at(-1) ?? "";
const inferredBase = repository && !repository.endsWith(".github.io") ? `/${repository}` : "";
const basePath = (process.env.PAGES_BASE_PATH ?? inferredBase).replace(/\/$/, "");

function makeStatic(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/\sdata-rsc-[\w-]+=["'][^"']*["']/gi, "")
    .replace(/(href|src)=(['"])\/(?!\/)/g, `$1=$2${basePath}/`);
}

async function snapshot(route, destination) {
  const response = await fetch(`${origin}${route}`);
  if (!response.ok) throw new Error(`Could not export ${route}: ${response.status}`);
  const html = makeStatic(await response.text());
  const target = path.join(outputDir, destination);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
}

await rm(outputDir, { recursive: true, force: true });
await cp(path.resolve("dist/client"), outputDir, { recursive: true });
await snapshot("/", "index.html");
await snapshot("/milestone-1", "milestone-1/index.html");
await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages artifact created at ${outputDir}${basePath ? ` for ${basePath}` : ""}.`);
