export default function IconCard({ icon, title, content, className }) {
  return (
    <div className={`icon-card${className ? ` ${className}` : ""}`}>
      {typeof icon === "string" ? (
        <div className="icon-card__icon" dangerouslySetInnerHTML={{ __html: icon }} />
      ) : (
        <div className="icon-card__icon">{icon}</div>
      )}
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__content">{content}</p>
    </div>
  );
}
