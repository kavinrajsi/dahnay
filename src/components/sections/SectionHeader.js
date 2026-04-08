export default function SectionHeader({
  tag,
  title,
  titleAccent,
  content,
  align = "left",
  className = "",
}) {
  return (
    <div className={`section-header section-header--${align} ${className}`}>
      {tag && <span className="section-header__tag">{tag}</span>}

      {title && (
        <h2 className="section-header__title">
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="section-header__accent">{titleAccent}</span>
            </>
          )}
        </h2>
      )}

      {content && (
        Array.isArray(content)
          ? content.map((text, i) => <p key={i} className="section-header__content">{text}</p>)
          : <p className="section-header__content">{content}</p>
      )}
    </div>
  );
}
