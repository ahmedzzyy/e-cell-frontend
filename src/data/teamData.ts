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
  "Executive Board": [],
  "Startup Guidance and Development": [],
  Technical: [
    {
      id: 16,
      name: "Ahmed Sahigara",
      position: "Department Head",
      motto:
        "Entrepreneurship shines in proving that every problem carries within it a solution.",
      image: "/Ahmed_Sahigara.webp",
      linkedin: "https://www.linkedin.com/in/ahmed-sahigara/",
      instagram: "https://www.instagram.com/spfeezy",
    },
  ],
  "Events and Operations": [
    {
      id: 1,
      name: "Aryan Nair",
      position: "Department Head",
      motto: "There's always light at the end of the tunnel",
      image: "/Aryan_Nair.webp",
      linkedin: "https://www.linkedin.com/in/aryan-nair-a1805-n",
      instagram: "https://www.instagram.com/aryannair_18o5",
    },
  ],
  "Internal Relations & Resource Management": [],
  Marketing: [
    {
      id: 2,
      name: "Krishna Vatsal Mishra",
      position: "Department Head",
      motto: "Tez nahi, zyada bhaag",
      image: "/Krishna_Vatsal_Mishra.webp",
      linkedin: "https://www.linkedin.com/in/krishna-vatsal-mishra-163638258",
      instagram: "https://www.instagram.com/krishnaaa.0_o",
    },
  ],
  "Corporate and Alumni Relations": [],
  "Public Relations and Outreach": [
    {
      id: 3,
      name: "Preyanshi Doshi",
      position: "Department Head",
      motto: "Passion fuels purpose",
      image: "/Preyanshi_Doshi.webp",
      linkedin: "https://www.linkedin.com/in/preyanshi-doshi-0aa909281",
      instagram: "https://www.instagram.com/preyanshi.doshi",
    },
  ],
};
