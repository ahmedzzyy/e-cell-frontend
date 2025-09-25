import { type LucideIcon } from "lucide-react";

type Statistic = { icon?: LucideIcon | null; number: string; label: string };

export const stats: Statistic[] = [
  { icon: null, number: "200+", label: "Members" },
  { icon: null, number: "100+", label: "Startups Associated" },
  { icon: null, number: "10+", label: "VCs and Mentors onboarded" },
];

type Initiative = { heading: string; description: string };

export const initiatives: Initiative[] = [
  {
    heading: "Startup Scoop",
    description:
      "Startup Scoop is a bi-monthly newsletter where the latest news and updates from the dynamic world of business and entrepreneurship are delivered. Trending topics, groundbreaking innovations, and inspiring success stories are highlighted to keep readers informed. Startups from MAHE are given a spotlight in each edition, with their journeys and achievements showcased.",
  },
  {
    heading: "Business Clinic",
    description:
      "Business Clinic is a structured approach to helping startups refine ideas, validate feasibility, and identify target markets. It emphasizes solving key problems, understanding customer needs, and analyzing competition. Startups test core functionality, gather user feedback, and launch simplified products, with progress guided by key performance metrics to ensure market readiness.",
  },
  {
    heading: "E-10 Summit",
    description:
      "The inaugural E10 Entrepreneurship Summit, held on January 16, 2024, brought MAHE's entrepreneurial communities together to foster collaboration and innovation. Organized by E-Cell, MIT Manipal, it tackled challenges like sponsorships, student engagement, and networking. A key highlight was signing a charter to support entrepreneurship across MAHE. The summit featured discussions, success stories, and initiatives, building a stronger entrepreneurial ecosystem in Manipal.",
  },
];
