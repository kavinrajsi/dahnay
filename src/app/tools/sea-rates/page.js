export const metadata = {
  title: "Sea Freight Rates",
};

export default function SeaRatesPage() {
  return (
    <div className="page page--tool">
      <iframe
        className="fs"
        src="https://searates.dahnaylogix.com/logphp.php"
        style={{ width: "100%", height: "850px", borderStyle: "none" }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
