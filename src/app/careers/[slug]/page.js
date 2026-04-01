import { notFound } from "next/navigation";
import { JOBS, getJobBySlug } from "@/data/careers/jobs";
import CareerApplyForm from "@/components/sections/CareerApplyForm";

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Careers | DahNAY" };
  return {
    title: `${job.title} - Careers | DahNAY`,
    description: `${job.intro}. ${job.location} — ${job.type}.`,
  };
}

export default async function CareerDetailPage({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

  return (
    <div className="page page--career-detail">
      <div className="career-detail container">

        {/* Header: title/location + posted date/apply */}
        <div className="career-detail__header">
          <div className="career-detail__title-group">
            <h1 className="career-detail__title">{job.title}</h1>
            <p className="career-detail__location">{job.location}</p>
          </div>
          <div className="career-detail__actions">
            <span className="career-detail__posted">{job.postedAgo}</span>
            <a href="#apply-form" className="career-detail__apply-btn">
              Apply
            </a>
          </div>
        </div>

        {/* Job meta */}
        <div className="career-detail__meta">
          <p className="career-detail__meta-heading">{job.intro}</p>
          <div className="career-detail__meta-rows">
            <p className="career-detail__meta-row">
              <strong>Location: </strong>
              {job.location}
            </p>
            <p className="career-detail__meta-row">
              <strong>Schedule: </strong>
              {job.schedule}
            </p>
          </div>
        </div>

        {/* Roles and Responsibilities */}
        <div className="career-detail__section">
          <h2 className="career-detail__section-title">
            Roles and Responsibilities
          </h2>
          <ul className="career-detail__list">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Job Description */}
        <div className="career-detail__section">
          <h2 className="career-detail__section-title">Job Description</h2>
          <div className="career-detail__desc-group">
            {job.description.map((block, i) => (
              <div key={i} className="career-detail__desc-item">
                <p className="career-detail__desc-para">
                  {i + 1}. {block.para}
                </p>
                <ul className="career-detail__list career-detail__list--sub">
                  {block.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Application form */}
        <CareerApplyForm jobTitle={job.title} />
      </div>
    </div>
  );
}
