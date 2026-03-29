export default function CenteredIntro({ title, descriptions = [] }) {
  return (
    <section className="centered-intro">
      <div className="container">
        <div className="centered-intro__content">
          {title && <h2 className="centered-intro__title">{title}</h2>}
          {descriptions.map((text, index) => (
            <p key={index} className="centered-intro__text">{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
