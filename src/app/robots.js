const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Bytespider",
  "CCBot",
  "Amazonbot",
  "DuckAssistBot",
  "cohere-ai",
  "YouBot",
  "MistralAI-User",
];

const disallow = ["/api/", "/_next/", "/wp-admin/", "/wp-content/", "/wp-includes/"];

export function GET() {
  const disallowLines = disallow.map((p) => `Disallow: ${p}`).join("\n");

  const content = [
    `User-agent: *`,
    `Allow: /`,
    disallowLines,
    ``,
    aiCrawlers.map((ua) => `User-agent: ${ua}`).join("\n"),
    `Allow: /`,
    disallowLines,
    ``,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `Host: ${siteUrl}`,
    `LLMs: ${siteUrl}/llms.txt`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
