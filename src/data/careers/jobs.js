const SHARED_RESPONSIBILITIES = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
  "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
  "Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
];

const SHARED_DESCRIPTION = [
  {
    para: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    bullets: [
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
    ],
  },
  {
    para: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    bullets: [
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
      "Nullam quis imperdiet augue. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
    ],
  },
];

export const JOBS = [
  {
    id: 1,
    slug: "senior-freight-manager",
    title: "Senior Freight Manager",
    location: "Chennai, India",
    type: "Full Time",
    schedule: "Full Time | 9:00am – 6:00pm",
    date: "15 March 2026",
    postedAgo: "5 days ago",
    intro: "Join DahNAY as a Senior Freight Manager",
    responsibilities: SHARED_RESPONSIBILITIES,
    description: SHARED_DESCRIPTION,
  },
  {
    id: 2,
    slug: "logistics-coordinator",
    title: "Logistics Coordinator",
    location: "Mumbai, India",
    type: "Full Time",
    schedule: "Full Time | 9:00am – 6:00pm",
    date: "12 March 2026",
    postedAgo: "8 days ago",
    intro: "Join DahNAY as a Logistics Coordinator",
    responsibilities: SHARED_RESPONSIBILITIES,
    description: SHARED_DESCRIPTION,
  },
  {
    id: 3,
    slug: "customs-clearance-specialist",
    title: "Customs Clearance Specialist",
    location: "Delhi, India",
    type: "Full Time",
    schedule: "Full Time | 9:00am – 6:00pm",
    date: "10 March 2026",
    postedAgo: "10 days ago",
    intro: "Join DahNAY as a Customs Clearance Specialist",
    responsibilities: SHARED_RESPONSIBILITIES,
    description: SHARED_DESCRIPTION,
  },
  {
    id: 4,
    slug: "operations-analyst",
    title: "Operations Analyst",
    location: "Bangalore, India",
    type: "Full Time",
    schedule: "Full Time | 9:00am – 6:00pm",
    date: "8 March 2026",
    postedAgo: "12 days ago",
    intro: "Join DahNAY as an Operations Analyst",
    responsibilities: SHARED_RESPONSIBILITIES,
    description: SHARED_DESCRIPTION,
  },
  {
    id: 5,
    slug: "sales-executive-air-freight",
    title: "Sales Executive – Air Freight",
    location: "Chennai, India",
    type: "Full Time",
    schedule: "Full Time | 9:00am – 6:00pm",
    date: "5 March 2026",
    postedAgo: "15 days ago",
    intro: "Join DahNAY as a Sales Executive – Air Freight",
    responsibilities: SHARED_RESPONSIBILITIES,
    description: SHARED_DESCRIPTION,
  },
  {
    id: 6,
    slug: "it-systems-engineer",
    title: "IT Systems Engineer",
    location: "Chennai, India",
    type: "Full Time",
    schedule: "Full Time | 9:00am – 6:00pm",
    date: "1 March 2026",
    postedAgo: "19 days ago",
    intro: "Join DahNAY as an IT Systems Engineer",
    responsibilities: SHARED_RESPONSIBILITIES,
    description: SHARED_DESCRIPTION,
  },
];

export function getJobBySlug(slug) {
  return JOBS.find((j) => j.slug === slug) ?? null;
}
