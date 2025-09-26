export type HeadInfo = {
  id: number;
  name: string;
  position: string;
  motto: string;
  image: string;
  linkedin: string;
  instagram: string;
};

type TeamInfo = {
  [key: string]: HeadInfo[];
};

export const teamData: TeamInfo = {
  "Executive Board": [
    {
      id: 1,
      name: "Arjun Mehta",
      position: "Chairperson",
      motto: "Leading with vision and purpose",
      image: "/images/team/placeholder-1.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Deputy Chairperson",
      motto: "Innovation through collaboration",
      image: "/images/team/placeholder-2.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      position: "Deputy Chairperson",
      motto: "Excellence in every detail",
      image: "/images/team/placeholder-3.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  "Startup Guidance and Development": [
    {
      id: 4,
      name: "Rohan Verma",
      position: "Startup Guidance and Development Head",
      motto: "Take the risk or lose the chance.",
      image: "/images/team/placeholder-4.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 5,
      name: "Ananya Patel",
      position: "Startup Guidance and Development Head",
      motto: "Turning ideas into reality",
      image: "/images/team/placeholder-5.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  Technical: [
    {
      id: 6,
      name: "Dev Agarwal",
      position: "Technical Head",
      motto: "Building the future with code",
      image: "/images/team/placeholder-6.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 7,
      name: "Sneha Reddy",
      position: "Technical Head",
      motto: "Innovation through technology",
      image: "/images/team/placeholder-7.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  "Events & Operations": [
    {
      id: 8,
      name: "Nisha Kapoor",
      position: "Events and PR Head",
      motto: "Sometimes you gotta risk it to make it.",
      image: "/images/team/placeholder-8.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 9,
      name: "Karan Singh",
      position: "Events and PR Head",
      motto: "Creating connections that matter",
      image: "/images/team/placeholder-9.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  "Internal Relations & Resource Management": [
    {
      id: 10,
      name: "Riya Jain",
      position: "Internal Relations & Resource Management Head",
      motto: "People first, success follows",
      image: "/images/team/placeholder-10.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  "Social Media and Graphics Design": [
    {
      id: 11,
      name: "Neha Gupta",
      position: "Social Media and Graphics Design Head",
      motto: "Design with purpose and passion",
      image: "/images/team/placeholder-12.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 12,
      name: "Vikram Rao",
      position: "Social Media and Graphics Design Head",
      motto: "Connecting ideas with the world",
      image: "/images/team/placeholder-13.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  "Corporate and Alumni Relations": [
    {
      id: 13,
      name: "Shreya Kapoor",
      position: "Corporate and Alumni Relations Head",
      motto: "Building bridges to success",
      image: "/images/team/placeholder-14.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 14,
      name: "Aditya Malhotra",
      position: "Corporate and Alumni Relations Head",
      motto: "Connecting past, present, and future",
      image: "/images/team/placeholder-15.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
  "Public Relations and Outreach": [
    {
      id: 15,
      name: "Ishita Mehra",
      position: "Public Relations and Outreach Head",
      motto: "Connecting the organization with the world",
      image: "/images/team/placeholder-16.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: 16,
      name: "Kunal Sharma",
      position: "Public Relations and Outreach Head",
      motto: "Building bridges through communication",
      image: "/images/team/placeholder-17.jpg",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ],
};
