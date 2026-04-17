export const JOBS = [];

export function getJobBySlug(slug) {
  return JOBS.find((j) => j.slug === slug) ?? null;
}
