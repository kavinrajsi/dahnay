/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "20.219.8.121",
      },
      {
        protocol: 'http',
        hostname: 'studio.dahnay.com',
        pathname: '/content/images/**',
      },
    ],
  },

  async redirects() {
    return [
      // ─── Top-level legacy pages ────────────────────────────────────────────
      { source: "/contacts", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/advantage", destination: "/about", permanent: true },
      { source: "/eco-system", destination: "/about", permanent: true },
      { source: "/schedule-call", destination: "/contact", permanent: true },
      { source: "/our-learning", destination: "/newsroom", permanent: true },

      // ─── Content sections ──────────────────────────────────────────────────
      { source: "/news", destination: "/newsroom/news", permanent: true },
      { source: "/blog", destination: "/newsroom/blog", permanent: true },
      { source: "/case-study", destination: "/newsroom/case-study", permanent: true },
      { source: "/case-study-2", destination: "/newsroom/case-study", permanent: true },

      // ─── Services (old /services/ → new /service/) ─────────────────────────
      { source: "/services", destination: "/service", permanent: true },
      { source: "/services/air-freight", destination: "/service/air-freight", permanent: true },
      { source: "/services/sea-freight", destination: "/service/sea-freight", permanent: true },
      { source: "/services/custom-brokerage", destination: "/service/customs-clearance", permanent: true },
      { source: "/services/project-cargo", destination: "/service/project-logistics", permanent: true },
      { source: "/services/last-mile-connectivity", destination: "/service/last-mile-delivery", permanent: true },
      { source: "/services/omni-channel", destination: "/service/ecommerce-fulfilment", permanent: true },
      { source: "/services/consolidation", destination: "/service", permanent: true },
      { source: "/services/customer-service", destination: "/contact", permanent: true },
      { source: "/services/warehouse", destination: "/solutions/ports-infra", permanent: true },

      // ─── Industries (old /industry/ → new /industries/) ────────────────────
      { source: "/industry", destination: "/industries", permanent: true },
      { source: "/industry-landing-page", destination: "/industries", permanent: true },
      { source: "/industry/automotive", destination: "/industries/automotive", permanent: true },
      { source: "/industry/oil-gas", destination: "/industries/energy-oil-gas", permanent: true },
      { source: "/industry/food-agro", destination: "/industries/food-agro", permanent: true },
      { source: "/industry/retail", destination: "/industries/retail-apparel", permanent: true },
      { source: "/industry/garments", destination: "/industries/retail-apparel", permanent: true },
      { source: "/industry/engineering", destination: "/industries/machinery", permanent: true },
      { source: "/industry/electricals-electronics", destination: "/industries/white-goods", permanent: true },
      { source: "/industry/minerals", destination: "/industries", permanent: true },
      { source: "/industry/pharma", destination: "/industries", permanent: true },
      { source: "/white-goods", destination: "/industries/white-goods", permanent: true },

      // ─── Landing / template / deprecated pages ─────────────────────────────
      { source: "/ecommerce-landing-page", destination: "/service/ecommerce-fulfilment", permanent: true },
      { source: "/single-service", destination: "/service", permanent: true },
      { source: "/elements", destination: "/", permanent: true },
      { source: "/coming-soon", destination: "/", permanent: true },
      { source: "/load-calculator", destination: "/", permanent: true },
      { source: "/dlpl", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
