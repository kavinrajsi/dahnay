export const metadata = {
  title: "Unit Convertor",
  alternates: {
    canonical: "/tools/unit-convertor",
  },
};

export default function UnitConvertorPage() {
  return (
    <div className="page page--tool">
      <iframe
        className="fs"
        src="https://searates.dahnaylogix.com/unitconv.html"
        style={{ width: "100%", height: "850px", borderStyle: "none" }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
