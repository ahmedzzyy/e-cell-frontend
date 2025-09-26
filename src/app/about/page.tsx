import { Metadata } from "next";
import { Suspense } from "react";

// Client components
import ImageCarousel from "@/components/ImageCarousel";

// Import optimized images
import bgBuildingImg from "@/../public/bg-building.webp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Static metadata for SEO
export const metadata: Metadata = {
  title: "About Us | E-Cell MIT Manipal - Empowering Innovation",
  description:
    "Learn about E-Cell MIT Manipal, our vision, mission, and the Manipal Entrepreneurship Summit (MES). Discover how we foster entrepreneurial thinking and support startups.",
};

// Carousel images data
const carouselImages = [
  {
    src: "/InnovationCentre_ECellPic.webp",
    alt: "E-Cell Innovation Centre MIT Manipal",
    title: "Innovation Centre",
  },
  {
    src: "/Reveal_Board_Faculty_Pic_2025.webp",
    alt: "E-Cell Board and Faculty Reveal 2025",
    title: "Board Reveal 2025",
  },
  {
    src: "/MES_Creative_Handout_Banner.webp",
    alt: "Manipal Entrepreneurship Summit 2025 Banner",
    title: "MES 2025",
  },
];

// Loading skeleton for carousel
function CarouselSkeleton() {
  return (
    <div className="w-full lg:w-1/2">
      <div className="aspect-video bg-slate-700 animate-pulse rounded-lg mb-4" />
      <div className="flex justify-center gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-24 h-16 bg-slate-700 animate-pulse rounded"
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="bg-slate-900 min-h-screen text-white">
        {/* Hero Section with Carousel */}
        <section
          className="py-16 bg-slate-800 text-white bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgBuildingImg.src})` }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-slate-900/70" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Carousel Section */}
              <Suspense fallback={<CarouselSkeleton />}>
                <ImageCarousel images={carouselImages} />
              </Suspense>

              {/* About Content */}
              <div className="w-full lg:w-1/2">
                <div className="bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-slate-600/30">
                  <h1 className="text-4xl font-bold mb-6 text-white">
                    About E-Cell MIT Manipal
                  </h1>

                  <div className="space-y-4 text-slate-200">
                    <p className="text-base leading-relaxed">
                      E-Cell MIT Manipal is a student-led organization that
                      fosters entrepreneurial thinking, encourages innovation,
                      and supports startups. We aim to create an ecosystem where
                      ideas can thrive and leaders are born.
                    </p>

                    <p className="text-base leading-relaxed">
                      Through a combination of workshops, events, and mentorship
                      programs, we provide the tools and resources needed to
                      turn ideas into successful ventures.
                    </p>

                    <p className="text-base leading-relaxed font-medium text-blue-300">
                      Join us on this journey to innovation and leadership.
                      Together, let&apos;s build something extraordinary!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Our Vision & Mission
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Vision Card */}
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-400/30 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-slate-300">
                  To empower entrepreneurs by providing them with a vibrant
                  start-up ecosystem and developing ideas into successful
                  ventures through dedicated mentorship.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-400/30 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-slate-300">
                  To inculcate the spirit of entrepreneurship within the student
                  community through greater awareness and act as a one-stop
                  destination for all students looking to convert their ideas
                  into viable start-ups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About MES Section */}
        <section className="py-16 bg-slate-800 border-t border-slate-600/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              About MES
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-700/50 to-blue-900/30 backdrop-blur-sm border border-slate-600/30 p-8 rounded-xl shadow-xl">
                <div className="space-y-6 text-slate-200">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-blue-300">
                      Manipal Entrepreneurship Summit (MES)
                    </strong>{" "}
                    is the flagship event of MAHE organized by E-Cell, MIT
                    Manipal. Driven by our dedication to entrepreneurial growth,
                    MES aims to transform the campus into a hub of innovation,
                    where students are empowered to become job creators.
                  </p>

                  <p className="text-lg leading-relaxed">
                    The summit provides an inspiring platform, connecting
                    ambitious students with successful alumni and industry
                    leaders. It serves as a launchpad for ideas, a hub for
                    networking, and a breeding ground for the next wave of
                    Indian innovators and visionaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Join Our Journey?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
              Be part of MIT Manipal&apos;s thriving entrepreneurship ecosystem
              and turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/initiatives"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Explore Our Initiatives
              </a>
              <a
                href="/team"
                className="border-2 border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
