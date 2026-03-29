"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const solutionsMegaMenu = [
  {
    title: "DahNAY Logistics",
    href: "/solutions/logistics",
    items: [
      { label: "Air Freight", href: "/service/air-freight" },
      { label: "Sea Freight", href: "/service/sea-freight" },
      { label: "Road Transportation", href: "/service/road-transportation" },
      { label: "Time Critical Delivery", href: "/service/time-critical-delivery" },
      { label: "Project Logistics", href: "/service/project-logistics" },
      { label: "Reverse Logistics", href: "/service/reverse-logistics" },
      { label: "Customs Clearance", href: "/service/customs-clearance" },
      { label: "Domestic Trucking", href: "/service/domestic-trucking" },
      { label: "Last Mile Delivery", href: "/service/last-mile-delivery" },
      { label: "E-commerce Fulfilment Support", href: "/service/ecommerce-fulfilment" },
      { label: "Green Logistics", href: "/solutions/logistics" },
    ],
  },
  {
    title: "DahNAY Lines",
    href: "/solutions/lines",
    items: [
      { label: "Dry Cargo", href: "/solutions/lines#dry-cargo" },
      { label: "Refrigerated Cargo", href: "/solutions/lines#refrigerated-cargo" },
      { label: "Specialised Cargo", href: "/solutions/lines#specialised-cargo" },
    ],
  },
  {
    title: "DahNAY Ports & Infra",
    href: "/solutions/ports-infra",
    items: [
      { label: "Warehousing", href: "/solutions/ports-infra#warehousing" },
      { label: "Free Trade Warehousing Zone (FTWZ)", href: "/solutions/ports-infra#ftwz" },
      { label: "Container Freight Stations (CFS)", href: "/solutions/ports-infra#cfs" },
    ],
  },
];

const industriesDropdown = [
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Renewables", href: "/industries/renewables" },
  { label: "Machinery", href: "/industries/machinery" },
  { label: "Retail & Apparel", href: "/industries/retail-apparel" },
  { label: "Natural Rubber", href: "/industries/natural-rubber" },
  { label: "White Goods", href: "/industries/white-goods" },
  { label: "Energy, Oil & Gas", href: "/industries/energy-oil-gas" },
  { label: "Construction Materials", href: "/industries/construction-materials" },
  { label: "FMCG", href: "/industries/fmcg" },
  { label: "Paper & Pulp", href: "/industries/paper-pulp" },
];

const newsroomDropdown = [
  { label: "News", href: "/newsroom" },
  { label: "Blog", href: "/newsroom" },
  { label: "Case Studies", href: "/newsroom" },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);
  const closeAll = () => { setActiveDropdown(null); setMobileMenuOpen(false); };

  const renderDropdown = (id, items) => {
    const hasActive = items.some((item) => pathname === item.href);
    return (
      <div
        className="header__nav-item"
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
      >
        <button className={`header__nav-link${hasActive ? " header__nav-link--active" : ""}`}>
          {id.charAt(0).toUpperCase() + id.slice(1)}
          <svg className="header__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {activeDropdown === id && (
          <div className="header__dropdown">
            {items.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={`header__dropdown-link${pathname === item.href ? " header__dropdown-link--active" : ""}`}
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderMegaMenu = (id, label, columns) => {
    const hasActive = columns.some(
      (col) => pathname === col.href || col.items.some((item) => pathname === item.href)
    );
    return (
      <div
        className="header__nav-item"
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
      >
        <button className={`header__nav-link${hasActive ? " header__nav-link--active" : ""}`}>
          {label}
          <svg className="header__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {activeDropdown === id && (
          <div className="header__mega-menu">
            <div className="container header__mega-menu-inner">
              {columns.map((col) => (
                <div key={col.title} className="header__mega-col">
                  <Link href={col.href} className="header__mega-title" onClick={closeAll}>{col.title}</Link>
                  <div className="header__mega-links">
                    {col.items.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        className={`header__mega-link${pathname === item.href ? " header__mega-link--active" : ""}`}
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link href="/" className="header__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="143" height="42" fill="none" viewBox="0 0 143 42">
            <path fill="#EE402F" d="M39.789 9.68c-.99 0-3.229.015-3.229.015s.027 1.84-.002 3.423c1.406 10.638-2.645 17.17-10.49 20.727-10.083 4.582-20.473-.309-24.168-8.368a1.467 1.467 0 0 0-.228-.432.958.958 0 0 0-.704-.313A.968.968 0 0 0 0 25.7c0 .157.04.3.107.435 6.965 18.315 24.818 16.8 32.784 11.253 7.813-5.438 12.834-16.804 6.898-27.709ZM13.213 2.693c.025 0 .052-.006.078-.01a.831.831 0 0 1 .108-.022c2.647-.546 4.999-.54 6.47-.278 5.277.93 8.313 2.323 12.415 6.319.004.008 3.282 0 3.282 0v-2.09C32.649 3.213 26.694-.001 20.708 0c-2.59 0-5.09.367-7.648 1.385a.842.842 0 0 0-.175.069.665.665 0 0 0 .328 1.239Z" />
            <path fill="#EE402F" d="M9.78 26.586c.03.01.067.015.1.015.015 0 .027-.004.043-.006 12.157.574 20.76-5.98 25.644-11.335V9.693s-1.188-.014-2.315-.014c-3.506 3.201-12.473 6.758-20.732 5.904a.607.607 0 0 0-.107-.009l-.008.002a.476.476 0 0 0-.472.45c-.43 1.727-1.88 7.54-2.485 9.894a.506.506 0 0 0-.041.156c0 .015-.005.031-.005.041 0 .233.162.427.377.469Z" />
            <path fill="#686C78" d="M139.148 27.08c-1.641 0-2.977-1.32-2.977-2.94 0-1.622 1.336-2.94 2.977-2.94 1.642 0 2.978 1.318 2.978 2.94 0 1.62-1.336 2.94-2.978 2.94Zm0-5.6c-1.486 0-2.697 1.194-2.697 2.66 0 1.465 1.21 2.658 2.697 2.658s2.697-1.193 2.697-2.658c0-1.466-1.21-2.66-2.697-2.66Z" />
            <path fill="#686C78" d="M137.931 22.514h1.254c.165 0 .321.016.468.048.149.032.278.086.39.161a.803.803 0 0 1 .265.303c.066.128.098.285.098.476 0 .23-.059.424-.178.585a.805.805 0 0 1-.522.306l.824 1.372h-.855l-.678-1.299h-.352v1.3h-.714v-3.252Zm.713 1.346h.421c.065 0 .132-.003.204-.007a.622.622 0 0 0 .194-.042.343.343 0 0 0 .144-.108.323.323 0 0 0 .058-.206.339.339 0 0 0-.051-.198.331.331 0 0 0-.128-.112.578.578 0 0 0-.178-.053 1.467 1.467 0 0 0-.197-.014h-.466v.74h-.001ZM50.169 9.68h5.572c1.35 0 2.631.151 3.845.454 1.215.302 2.274.792 3.18 1.469.904.677 1.623 1.556 2.155 2.64.531 1.082.797 2.397.797 3.941 0 1.37-.258 2.576-.774 3.62a7.783 7.783 0 0 1-2.083 2.627 9.196 9.196 0 0 1-3.025 1.612c-1.142.366-2.341.55-3.596.55h-6.072V9.679h.001Zm3.715 13.473h1.929c.857 0 1.654-.087 2.393-.263.738-.175 1.377-.466 1.917-.872a4.18 4.18 0 0 0 1.274-1.601c.31-.66.464-1.47.464-2.425 0-.828-.155-1.548-.464-2.162a4.32 4.32 0 0 0-1.25-1.516 5.476 5.476 0 0 0-1.846-.896 8.162 8.162 0 0 0-2.226-.299h-2.19v10.034h-.001Zm21.168 1.982h-.047a3.364 3.364 0 0 1-1.584 1.338 5.426 5.426 0 0 1-2.083.406c-.54 0-1.06-.075-1.56-.226-.5-.151-.94-.378-1.321-.681a3.281 3.281 0 0 1-.905-1.123c-.222-.446-.333-.964-.333-1.553 0-.67.122-1.234.369-1.697a3.287 3.287 0 0 1 1-.146c.42-.303.9-.538 1.44-.705.54-.167 1.1-.29 1.68-.37.578-.08 1.158-.128 1.737-.143.58-.016 1.116-.024 1.608-.024 0-.637-.226-1.143-.679-1.517-.452-.374-.988-.561-1.607-.561a3.49 3.49 0 0 0-1.607.37 4.397 4.397 0 0 0-1.298 1.015l-1.905-1.959a6.557 6.557 0 0 1 2.334-1.398 8.327 8.327 0 0 1 2.762-.465c1.048 0 1.909.131 2.584.394s1.215.65 1.619 1.159c.404.51.686 1.135.845 1.875.159.741.239 1.597.239 2.568v5.9h-3.286v-1.457h-.002Zm-.881-3.63c-.27 0-.607.011-1.012.035a5.094 5.094 0 0 0-1.166.203 2.6 2.6 0 0 0-.952.501c-.263.223-.393.534-.393.932 0 .43.182.75.547.956.365.207.746.31 1.143.31.348 0 .686-.047 1.012-.142.325-.096.615-.231.87-.406a1.97 1.97 0 0 0 .606-.669c.15-.27.226-.59.226-.956v-.764h-.881ZM84.148 9.68v6.88h.048c.08-.223.215-.446.405-.669.19-.223.42-.422.69-.597.27-.175.588-.318.953-.43a4.059 4.059 0 0 1 1.19-.167c.905 0 1.636.14 2.191.418a3.17 3.17 0 0 1 1.298 1.158c.31.494.52 1.076.631 1.744.11.67.166 1.394.166 2.175v6.402h-3.57V20.91c0-.334-.012-.681-.036-1.039a3.285 3.285 0 0 0-.214-.991 1.707 1.707 0 0 0-.549-.741c-.246-.191-.599-.287-1.06-.287-.46 0-.833.084-1.119.251-.286.168-.504.39-.654.67a2.74 2.74 0 0 0-.298.943 8.16 8.16 0 0 0-.072 1.099v5.78h-3.572V9.68h3.573Zm10.549 1.505h4.6l6.529 10.707h.043V11.185h3.384v15.408h-4.425l-6.703-10.968h-.043v10.968h-3.385V11.185Zm22.734 0h2.798l6.682 15.408h-3.818l-1.324-3.265h-5.966l-1.28 3.265h-3.731l6.639-15.408Zm1.301 4.483-1.865 4.788h3.753l-1.888-4.788Zm11.888 4.352-5.77-8.835h4.209l3.253 5.767 3.449-5.767h4.013l-5.769 8.835v6.573h-3.385V20.02Z" />
            <path fill="#EE402F" d="M57.42 40.444c-.47.263-.965.456-1.486.58a6.803 6.803 0 0 1-1.578.186c-.64 0-1.225-.105-1.757-.313a3.966 3.966 0 0 1-2.29-2.245 4.608 4.608 0 0 1-.324-1.758c0-.649.114-1.239.341-1.768.228-.53.541-.982.943-1.358a4.34 4.34 0 0 1 1.4-.876 4.68 4.68 0 0 1 1.722-.313c.54 0 1.058.081 1.555.244.497.162.942.44 1.336.834l-.73.766a2.78 2.78 0 0 0-1.011-.696 3.195 3.195 0 0 0-1.22-.243c-.47 0-.906.085-1.307.255-.4.17-.75.405-1.046.707a3.196 3.196 0 0 0-.694 1.08 3.684 3.684 0 0 0-.248 1.368c0 .488.082.94.248 1.358.166.417.397.78.694 1.084a3.12 3.12 0 0 0 1.07.714c.416.17.874.254 1.376.254.33 0 .678-.04 1.04-.122.362-.08.694-.198.995-.353v-2.517h-1.885v-.905h2.856v4.037Zm1.874-3.584c0-.248-.008-.48-.023-.697a8.12 8.12 0 0 1-.023-.591h.855c0 .147.004.294.012.44.007.147.01.297.01.453h.024c.062-.131.148-.26.26-.383.112-.124.245-.234.4-.33a2.143 2.143 0 0 1 1.33-.308.79.79 0 0 1 .184.046l-.057.916a1.683 1.683 0 0 0-.485-.07c-.555 0-.958.18-1.21.54-.25.359-.375.852-.375 1.478v2.645h-.902v-4.14Zm3.549 1.426c0-.424.074-.812.22-1.16a2.74 2.74 0 0 1 .601-.898c.255-.252.56-.447.914-.586.354-.14.74-.209 1.156-.209.417 0 .802.07 1.157.21.354.139.659.334.913.584.254.252.455.552.6.9.148.347.22.734.22 1.16 0 .425-.072.812-.22 1.16a2.745 2.745 0 0 1-.6.898c-.255.251-.56.447-.913.586-.355.14-.74.208-1.157.208-.416 0-.802-.07-1.156-.208a2.675 2.675 0 0 1-.914-.586 2.732 2.732 0 0 1-.6-.898 2.96 2.96 0 0 1-.22-1.16Zm.972 0c0 .286.044.552.133.795a1.84 1.84 0 0 0 .995 1.068c.235.105.499.157.792.157.292 0 .557-.052.792-.157a1.84 1.84 0 0 0 .994-1.068c.089-.243.133-.508.133-.795 0-.285-.044-.55-.133-.794a1.858 1.858 0 0 0-.387-.639 1.853 1.853 0 0 0-1.4-.586 1.92 1.92 0 0 0-.791.157 1.84 1.84 0 0 0-.995 1.068c-.09.243-.133.509-.133.794ZM75.829 41h-.89L73.4 36.825h-.024l-1.364 4.177h-.925l-1.758-5.43h.994l1.238 4.177h.023l1.4-4.176h.947l1.422 4.176h.023l1.226-4.176h.971L75.83 41Zm11.631-7.308h-2.705v7.309h-.97v-7.309h-2.706v-.904h6.383v.904h-.001Zm.984-1.461h.901v4.095h.024c.062-.108.147-.215.255-.32a1.91 1.91 0 0 1 .387-.284c.15-.084.318-.154.502-.208.185-.054.382-.081.59-.081.355 0 .66.054.92.162a1.718 1.718 0 0 1 1.017 1.155c.08.275.121.574.121.899V41h-.901v-3.26c0-.456-.101-.815-.301-1.078-.2-.263-.513-.394-.937-.394-.293 0-.545.05-.757.15a1.332 1.332 0 0 0-.52.43 1.924 1.924 0 0 0-.301.66 3.394 3.394 0 0 0-.099.848v2.645h-.901V32.23Zm11.262 7.784c-.323.417-.679.71-1.064.876-.385.166-.832.25-1.34.25a2.8 2.8 0 0 1-1.145-.227 2.574 2.574 0 0 1-.862-.609 2.664 2.664 0 0 1-.543-.905 3.223 3.223 0 0 1-.19-1.114c0-.417.069-.802.207-1.154a2.586 2.586 0 0 1 1.458-1.49 2.88 2.88 0 0 1 1.11-.209c.377 0 .724.064 1.04.192.316.127.588.313.816.556.227.244.402.542.526.894.123.351.185.752.185 1.2v.29h-4.37c.014.232.07.454.167.666.096.213.222.398.376.557.154.158.335.284.543.377.208.092.436.14.682.14.393 0 .725-.07.994-.21.27-.139.513-.343.729-.614l.681.534Zm-.775-2.216c-.016-.464-.165-.835-.451-1.114-.285-.279-.679-.418-1.18-.418-.5 0-.905.14-1.213.418-.309.278-.494.65-.555 1.114h3.4Zm5.747-5.011h1.225l4.741 6.82h.023v-6.82h.971V41h-1.225l-4.741-6.821h-.023V41h-.971v-8.212Zm8.521 5.498c0-.424.074-.812.22-1.16a2.658 2.658 0 0 1 1.514-1.484c.355-.14.74-.209 1.157-.209.416 0 .802.07 1.156.21.355.139.66.334.914.584.254.252.455.552.601.9.146.347.22.734.22 1.16 0 .425-.074.812-.22 1.16a2.752 2.752 0 0 1-.601.898 2.662 2.662 0 0 1-.914.586c-.354.14-.74.208-1.156.208-.417 0-.802-.07-1.157-.208a2.68 2.68 0 0 1-.913-.586 2.745 2.745 0 0 1-.601-.898 2.972 2.972 0 0 1-.22-1.16Zm.972 0c0 .286.044.552.133.795a1.842 1.842 0 0 0 .994 1.068c.236.105.499.157.793.157.292 0 .557-.052.792-.157a1.839 1.839 0 0 0 .994-1.068 2.32 2.32 0 0 0 .133-.795c0-.285-.045-.55-.133-.794a1.872 1.872 0 0 0-.387-.639 1.861 1.861 0 0 0-1.399-.586 1.85 1.85 0 0 0-1.4.586 1.85 1.85 0 0 0-.387.639 2.3 2.3 0 0 0-.133.794ZM126.184 41h-.89l-1.538-4.176h-.023l-1.364 4.177h-.926l-1.757-5.43h.994l1.237 4.177h.024l1.399-4.176h.948l1.422 4.176h.023l1.226-4.176h.971L126.184 41Z" />
          </svg>
        </Link>

        <button
          className="header__hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="header__hamburger-line" />
          <span className="header__hamburger-line" />
          <span className="header__hamburger-line" />
        </button>

        <nav className={`header__nav${mobileMenuOpen ? " header__nav--open" : ""}`}>
          <Link href="/" className="header__nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          {renderMegaMenu("solutions", "Solutions", solutionsMegaMenu)}
          {renderDropdown("industries", industriesDropdown)}
          {/* <Link href="/careers" className="header__nav-link" onClick={() => setMobileMenuOpen(false)}>Careers</Link> */}
          {/* {renderDropdown("newsroom", newsroomDropdown)} */}
          <Link href="/about" className="header__nav-link" onClick={() => setMobileMenuOpen(false)}>About us</Link>
          <Link href="/contact" className="header__cta button header__cta--mobile" onClick={() => setMobileMenuOpen(false)}>
            Contact us
          </Link>
        </nav>

        <Link href="/contact" className="header__cta button header__cta--desktop">
          Contact us
        </Link>
      </div>
    </header>
  );
}
