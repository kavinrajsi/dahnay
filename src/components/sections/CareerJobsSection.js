"use client";

import { useState } from "react";
import Link from "next/link";
import { JOBS } from "@/data/careers/jobs";

const LOCATIONS = [
  "All Locations",
  "Chennai, India",
  "Mumbai, India",
  "Delhi, India",
  "Bangalore, India",
];
const JOB_TYPES = ["All Types", "Full Time", "Part Time", "Contract"];

export default function CareerJobsSection() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [jobType, setJobType] = useState("All Types");
  const [filtered, setFiltered] = useState(JOBS);

  const handleSearch = () => {
    const results = JOBS.filter((job) => {
      const matchSearch =
        !search || job.title.toLowerCase().includes(search.toLowerCase());
      const matchLocation =
        location === "All Locations" || job.location === location;
      const matchType = jobType === "All Types" || job.type === jobType;
      return matchSearch && matchLocation && matchType;
    });
    setFiltered(results);
  };

  return (
    <section className="career-jobs container">
      <div className="career-jobs__filters">
        <div className="career-jobs__filter-field">
          <input
            className="career-jobs__input"
            type="text"
            placeholder="Search job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="career-jobs__filter-field">
          <select
            className="career-jobs__select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {LOCATIONS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="career-jobs__filter-field">
          <select
            className="career-jobs__select"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <button className="career-jobs__search-btn" onClick={handleSearch}>
          Search Job
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="career-jobs__empty">
          No jobs found matching your criteria.
        </p>
      ) : (
        <div className="career-jobs__grid">
          {filtered.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card__body">
                <Link href={`/careers/${job.slug}`} className="job-card__title">
                  {job.title}
                </Link>
                <div className="job-card__meta">
                  <span className="job-card__location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#6d6f71"
                      />
                    </svg>
                    {job.location}
                  </span>
                  <span className="job-card__date">{job.date}</span>
                </div>
              </div>
              <div className="job-card__footer">
                <span className="job-card__type">{job.type}</span>
                <Link
                  href={`/careers/${job.slug}`}
                  className="job-card__apply"
                  aria-label={`View ${job.title}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="#ef4230"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
