export const metadata = {
  title: "Load Calculator",
};

export default function LoadCalculatorPage() {
  return (
    <div className="page page--tool">
      <iframe
        className="fs"
        src="https://searates.dahnaylogix.com/loadcalc.html"
        style={{ width: "100%", height: "850px", borderStyle: "none" }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
