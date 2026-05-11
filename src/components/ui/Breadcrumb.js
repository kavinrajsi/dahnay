import Link from "next/link";

export default function Breadcrumb({ trail }) {
  if (!trail || trail.length < 2) return null;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container breadcrumb__container">
        <ol className="breadcrumb__list">
          {trail.map((item, idx) => {
            const isLast = idx === trail.length - 1;
            return (
              <li key={item.path + item.name} className="breadcrumb__item">
                {isLast ? (
                  <span className="breadcrumb__current" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.path} className="breadcrumb__link">
                      {item.name}
                    </Link>
                    <svg
                      className="breadcrumb__separator"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.5 3L7.5 6L4.5 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
