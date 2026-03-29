import Link from "next/link";

const tabs = [
  { label: "DahNAY Logistics", href: "/solutions/logistics", id: "logistics" },
  { label: "DahNAY Lines", href: "/solutions/lines", id: "lines" },
  { label: "DahNAY Ports & Infra", href: "/solutions/ports-infra", id: "ports-infra" },
];

export default function TabSwitcher({ activeTab }) {
  return (
    <div className="tab-switcher">
      <div className="tab-switcher__tabs">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`tab-switcher__tab ${activeTab === tab.id ? "tab-switcher__tab--active" : ""}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
