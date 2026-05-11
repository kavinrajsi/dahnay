import { promises as fs } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";

const TOOLS = {
  container: { title: "Container Specifications" },
  "load-calculator": { title: "Load Calculator" },
  "sea-rates": { title: "Sea Freight Rates" },
  seaport: { title: "Seaport Directory" },
  "unit-convertor": { title: "Unit Convertor" },
};

export function generateStaticParams() {
  return Object.keys(TOOLS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = TOOLS[slug];
  if (!tool) return {};
  return { title: tool.title };
}

async function readToolHtml(slug) {
  const filePath = path.join(process.cwd(), "src/app/tools", `${slug}.html`);
  return fs.readFile(filePath, "utf8");
}

function extractRenderableHtml(rawHtml) {
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let html = bodyMatch ? bodyMatch[1] : rawHtml;

  // Root layout owns the site chrome and GTM — strip legacy duplicates so we
  // don't render two headers/footers or fire GTM twice.
  html = html.replace(/<header\b[^>]*class="[^"]*\bsite-header\b[^"]*"[^>]*>[\s\S]*?<\/header>/gi, "");
  html = html.replace(/<footer\b[^>]*class="[^"]*\bsite-footer\b[^"]*"[^>]*>[\s\S]*?<\/footer>/gi, "");
  html = html.replace(/<script\b[^>]*>[\s\S]*?googletagmanager[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<noscript\b[^>]*>[\s\S]*?googletagmanager[\s\S]*?<\/noscript>/gi, "");

  return html;
}

export default async function ToolPage({ params }) {
  const { slug } = await params;
  if (!TOOLS[slug]) notFound();

  const rawHtml = await readToolHtml(slug);
  const html = extractRenderableHtml(rawHtml);

  return (
    <div
      className="page page--tool"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
