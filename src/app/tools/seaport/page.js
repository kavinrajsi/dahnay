export const metadata = {
  title: "Seaport Directory",
  alternates: {
    canonical: "/tools/seaport",
  },
};

export default function SeaportPage() {
  return (
    <div className="page page--tool">
      <iframe
        className="fs"
        src="https://searates.dahnaylogix.com/seaport.html"
        style={{ width: "100%", height: "850px", borderStyle: "none" }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
