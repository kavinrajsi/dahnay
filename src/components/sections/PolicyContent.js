export default function PolicyContent({ title, lastUpdated, children }) {
  return (
    <section className="policy">
      <div className="container">
        <h1 className="policy__title">{title}</h1>
        {lastUpdated && (
          <p className="policy__date">Last updated: {lastUpdated}</p>
        )}
        <div className="policy__body">{children}</div>
      </div>
    </section>
  );
}
