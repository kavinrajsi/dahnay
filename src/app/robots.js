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

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
