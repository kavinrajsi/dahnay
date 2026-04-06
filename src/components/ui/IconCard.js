export default function IconCard({ icon, title, content, className }) {
  const isImagePath = typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http"));
  const isHtmlString = typeof icon === "string" && !isImagePath;

  return (
    <div className={`icon-card${className ? ` ${className}` : ""}`}>
      {isImagePath ? (
        <div className="icon-card__icon">
          <img src={icon} alt="" width={64} height={64} />
        </div>
      ) : isHtmlString ? (
        <div className="icon-card__icon" dangerouslySetInnerHTML={{ __html: icon }} />
      ) : (
        <div className="icon-card__icon">{icon}</div>
      )}
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__content">{content}</p>
    </div>
  );
}
