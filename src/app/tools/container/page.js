export const metadata = {
  title: "Container Specifications",
  alternates: {
    canonical: "/tools/container",
  },
};

export default function ContainerPage() {
  return (
    <div className="page page--tool">
      <iframe
        className="fs"
        src="https://searates.dahnaylogix.com/container.html"
        style={{ width: "100%", height: "850px", borderStyle: "none" }}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}
