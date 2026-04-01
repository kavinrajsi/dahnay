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
        <div className="career-jobs__filter-fields">
          <div className="career-jobs__filter-field">
            <label className="career-jobs__label">Search</label>
            <div className="career-jobs__field-wrapper">
              <input
                className="career-jobs__input"
                type="text"
                placeholder="Job Title, Skills, Etc"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="career-jobs__field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke="#6D6F71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="career-jobs__filter-field">
            <label className="career-jobs__label">Location</label>
            <div className="career-jobs__field-wrapper">
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
              <svg className="career-jobs__field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke="#6D6F71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="career-jobs__filter-field">
            <label className="career-jobs__label">Job Type</label>
            <div className="career-jobs__field-wrapper">
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
              <svg className="career-jobs__field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke="#6D6F71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
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
            <Link
              key={job.id}
              href={`/careers/${job.slug}`}
              className="job-card"
            >
              <div className="job-card__body">
                <p className="job-card__title">{job.title}</p>
                <p className="job-card__location">{job.location}</p>
              </div>
              <div className="job-card__footer">
                <span className="job-card__date">{job.date}</span>
                <svg
                  className="job-card__arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25005 20.25C8.05823 20.25 7.86623 20.1767 7.7198 20.0302C7.42673 19.7372 7.42673 19.2626 7.7198 18.9697L14.6895 12L7.7198 5.03023C7.42673 4.73716 7.42673 4.2626 7.7198 3.96973C8.01286 3.67685 8.48742 3.67666 8.7803 3.96973L16.2803 11.4697C16.5734 11.7628 16.5734 12.2374 16.2803 12.5302L8.7803 20.0302C8.63386 20.1767 8.44186 20.25 8.25005 20.25Z"
                    fill="#EF4230"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
