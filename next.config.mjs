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
      { source: "/contacts.html", destination: "/contact", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/dahnay-acquires-kailash-cfs", destination: "/solutions/ports-infra", permanent: true },
      { source: "/dahnay-acquires-kailash-cfs/", destination: "/solutions/ports-infra", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/advantage", destination: "/about", permanent: true },
      { source: "/advantage.html", destination: "/about", permanent: true },
      { source: "/eco-system", destination: "/about", permanent: true },
      { source: "/eco-system.html", destination: "/about", permanent: true },
      { source: "/schedule-call", destination: "/contact", permanent: true },
      { source: "/schedule-call.html", destination: "/contact", permanent: true },
      { source: "/our-learning", destination: "/newsroom", permanent: true },
      { source: "/our-learning.html", destination: "/newsroom", permanent: true },

      // ─── Content sections ──────────────────────────────────────────────────
      { source: "/news", destination: "/newsroom/news", permanent: true },
      { source: "/news.html", destination: "/newsroom/news", permanent: true },
      { source: "/blog", destination: "/newsroom/blog", permanent: true },
      { source: "/blog.html", destination: "/newsroom/blog", permanent: true },
      { source: "/case-study", destination: "/newsroom/case-study", permanent: true },
      { source: "/case-study.html", destination: "/newsroom/case-study", permanent: true },
      { source: "/case-study-2", destination: "/newsroom/case-study", permanent: true },
      { source: "/case-study-2.html", destination: "/newsroom/case-study", permanent: true },

      // ─── Services (old /services/ → new /service/) ─────────────────────────
      { source: "/services", destination: "/service", permanent: true },
      { source: "/services.html", destination: "/service", permanent: true },
      { source: "/services/air-freight", destination: "/service/air-freight", permanent: true },
      { source: "/services/air-freight.html", destination: "/service/air-freight", permanent: true },
      { source: "/services/sea-freight", destination: "/service/sea-freight", permanent: true },
      { source: "/services/sea-freight.html", destination: "/service/sea-freight", permanent: true },
      { source: "/services/custom-brokerage", destination: "/service/customs-clearance", permanent: true },
      { source: "/services/custom-brokerage.html", destination: "/service/customs-clearance", permanent: true },
      { source: "/services/project-cargo", destination: "/service/project-logistics", permanent: true },
      { source: "/services/project-cargo.html", destination: "/service/project-logistics", permanent: true },
      { source: "/services/last-mile-connectivity", destination: "/service/last-mile-delivery", permanent: true },
      { source: "/services/last-mile-connectivity.html", destination: "/service/last-mile-delivery", permanent: true },
      { source: "/services/omni-channel", destination: "/service/ecommerce-fulfilment", permanent: true },
      { source: "/services/omni-channel.html", destination: "/service/ecommerce-fulfilment", permanent: true },
      { source: "/services/consolidation", destination: "/service", permanent: true },
      { source: "/services/consolidation.html", destination: "/service", permanent: true },
      { source: "/services/customer-service", destination: "/contact", permanent: true },
      { source: "/services/customer-service.html", destination: "/contact", permanent: true },
      { source: "/services/warehouse", destination: "/solutions/ports-infra", permanent: true },
      { source: "/services/warehouse.html", destination: "/solutions/ports-infra", permanent: true },

      // ─── Industries (old /industry/ → new /industries/) ────────────────────
      { source: "/industry", destination: "/industries", permanent: true },
      { source: "/industry.html", destination: "/industries", permanent: true },
      { source: "/industry-landing-page", destination: "/industries", permanent: true },
      { source: "/industry-landing-page.html", destination: "/industries", permanent: true },
      { source: "/industry/automotive", destination: "/industries/automotive", permanent: true },
      { source: "/industry/automotive.html", destination: "/industries/automotive", permanent: true },
      { source: "/industry/oil-gas", destination: "/industries/energy-oil-gas", permanent: true },
      { source: "/industry/oil-gas.html", destination: "/industries/energy-oil-gas", permanent: true },
      { source: "/industry/food-agro", destination: "/industries/food-agro", permanent: true },
      { source: "/industry/food-agro.html", destination: "/industries/food-agro", permanent: true },
      { source: "/industry/retail", destination: "/industries/retail-apparel", permanent: true },
      { source: "/industry/retail.html", destination: "/industries/retail-apparel", permanent: true },
      { source: "/industry/garments", destination: "/industries/retail-apparel", permanent: true },
      { source: "/industry/garments.html", destination: "/industries/retail-apparel", permanent: true },
      { source: "/industry/engineering", destination: "/industries/machinery", permanent: true },
      { source: "/industry/engineering.html", destination: "/industries/machinery", permanent: true },
      { source: "/industry/electricals-electronics", destination: "/industries/white-goods", permanent: true },
      { source: "/industry/electricals-electronics.html", destination: "/industries/white-goods", permanent: true },
      { source: "/industry/minerals", destination: "/industries", permanent: true },
      { source: "/industry/minerals.html", destination: "/industries", permanent: true },
      { source: "/industry/pharma", destination: "/industries", permanent: true },
      { source: "/industry/pharma.html", destination: "/industries", permanent: true },
      { source: "/white-goods", destination: "/industries/white-goods", permanent: true },
      { source: "/white-goods.html", destination: "/industries/white-goods", permanent: true },

      // ─── Landing / template / deprecated pages ─────────────────────────────
      { source: "/ecommerce-landing-page", destination: "/service/ecommerce-fulfilment", permanent: true },
      { source: "/ecommerce-landing-page.html", destination: "/service/ecommerce-fulfilment", permanent: true },
      { source: "/single-service", destination: "/service", permanent: true },
      { source: "/single-service.html", destination: "/service", permanent: true },
      { source: "/elements", destination: "/", permanent: true },
      { source: "/elements.html", destination: "/", permanent: true },
      { source: "/coming-soon", destination: "/", permanent: true },
      { source: "/coming-soon.html", destination: "/", permanent: true },
      { source: "/load-calculator", destination: "/", permanent: true },
      { source: "/load-calculator.html", destination: "/", permanent: true },
      { source: "/dlpl", destination: "/", permanent: true },
      { source: "/dlpl.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
