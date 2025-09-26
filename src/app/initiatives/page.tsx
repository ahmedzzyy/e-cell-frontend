import { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Static metadata for SEO
export const metadata: Metadata = {
  title: "Our Initiatives | E-Cell MIT Manipal - Driving Innovation",
  description:
    "Explore E-Cell MIT Manipal's key initiatives including E-10 Summit, Startup Scoop newsletter, and Business Clinic program that empower entrepreneurs and foster innovation.",
};

// Initiative Card Component
function InitiativeCard({
  image,
  title,
  description,
  isExternal = false,
}: {
  image: string | StaticImageData;
  title: string;
  description: string;
  isExternal?: boolean;
}) {
  return (
    <div className="group bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 rounded-xl shadow-xl overflow-hidden w-full max-w-sm transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400/50">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {isExternal ? (
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function InitiativesPage() {
  const initiatives = [
    {
      image: "/picture_e10_summit.webp",
      title: "E-10 Summit",
      description: `The inaugural E10 Entrepreneurship Summit, held on January 16, 2024, brought together the entrepreneurial communities of MAHE colleges. Organized by E-Cell, MIT Manipal, the event tackled challenges like securing sponsorships, boosting student interest, and improving networking. Insightful discussions set the stage for a stronger entrepreneurial ecosystem in Manipal, inspiring future collaborations and innovation.`,
      isExternal: false,
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHkJQEjTr3knw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723120932662?e=1740614400&v=beta&t=2mCjuIp_BiBCk6oIU9qI0U7H_ef_lFq5bHjAQLIwVbM",
      title: "Startup Scoop",
      description: `Startup Scoop is a bi-monthly newsletter where the latest news and updates from the dynamic world of business and entrepreneurship are delivered. Trending topics, and inspiring success stories are highlighted to keep readers informed. Startups from MAHE are given a spotlight in each edition, with their journeys and achievements showcased.`,
      isExternal: true,
    },
    {
      image: "/logo_business_clinic.webp",
      title: "Business Clinic",
      description: `Business Clinic is a structured approach to helping startups refine ideas, validate feasibility, and identify target markets. It emphasizes solving key problems, understanding customer needs, and analyzing competition. Startups test core functionality, gather user feedback, and launch simplified products, with progress guided by key performance metrics to ensure market readiness.`,
      isExternal: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Our Initiatives
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the programs and events that drive innovation, foster
            entrepreneurship, and build the startup ecosystem at MIT Manipal.
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <main className="flex-grow py-16 bg-slate-800">
        <div className="container mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {initiatives.map((initiative, index) => (
              <InitiativeCard
                key={index}
                image={initiative.image}
                title={initiative.title}
                description={initiative.description}
                isExternal={initiative.isExternal}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <section className="py-12 bg-slate-900/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Want to Get Involved?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our initiatives and be part of MIT Manipal&apos;s thriving
              entrepreneurship community. Whether you&apos;re looking to start
              your own venture or support others, there&apos;s a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Explore Blogs
              </a>
              <a
                href="/about"
                className="border-2 border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
