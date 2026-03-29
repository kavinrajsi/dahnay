import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) {
  const classes = [
    "button",
    `button--${variant}`,
    fullWidth ? "button--full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
