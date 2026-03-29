"use client";

import { useState } from "react";

export default function TrackingBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="tracking-bar">
      <form className="tracking-bar__form" onSubmit={handleSubmit}>
        <div className="tracking-bar__input-wrapper">
          <svg className="tracking-bar__search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM19 19l-4.35-4.35" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            className="tracking-bar__input"
            type="text"
            placeholder="Enter B/L, container number or parcel"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button className="tracking-bar__button" type="submit">
          Track
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  );
}
