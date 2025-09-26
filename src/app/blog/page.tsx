import { Metadata } from "next";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

// Static metadata for SEO
export const metadata: Metadata = {
  title:
    "Startup Scoop Blog | E-Cell MIT Manipal - Latest Entrepreneurship Insights",
  description:
    "Stay updated with E-Cell MIT Manipal's Startup Scoop newsletter featuring the latest startup news, entrepreneurship insights, and business trends from India and around the world.",
};

// Blog data with proper typing
const blogPosts = [
  {
    id: "startup-scoop-16",
    image: "/blogScreenshot.webp",
    title: "Startup Scoop - Edition 16",
    description:
      "Thapy makes therapy accessible, Jagriti Yatra fosters startup dreams, loss leader pricing draws customers, and tech firms overhire from FOMO and market growth.",
    postURL:
      "https://www.linkedin.com/pulse/startup-scoop-edition-16-ecellmit-dni7f/?trackingId=qEBPn%2F58SLqObIxdTvrNiw%3D%3D",
    publishedAt: "2024-12-15",
  },
  {
    id: "startup-scoop-15",
    image: "/blogScreenshot1.webp",
    title: "Startup Scoop - Edition 15",
    description:
      "Blackfrog Technologies boosts healthcare logistics in Fiji, AI revolutionizes finance, Ola Electric faces revenue decline, and drones improve medical supply access.",
    postURL:
      "https://www.linkedin.com/pulse/startup-scoop-edition-15-ecellmit-sew8f/",
    publishedAt: "2024-12-01",
  },
  {
    id: "startup-scoop-14",
    image: "/blogScreenshot2.webp",
    title: "Startup Scoop - Edition 14",
    description:
      "Instrumus expands rapid prototyping services, Acko disrupts insurance with a digital model, RBI sees a 52% increase in reserves income, and major IPOs like Swiggy and Navi are shaping India's economy.",
    postURL:
      "https://www.linkedin.com/pulse/startup-scoop-edition-14-ecellmit-fbycf/?trackingId=pEiC%2BLhqSpCUc077wVSALw%3D%3D",
    publishedAt: "2024-11-15",
  },
  {
    id: "startup-scoop-13",
    image: "/blogScreenshot3.webp",
    title: "Startup Scoop - Edition 13",
    description:
      "FightHer offers free self-defense classes for women; InvisaWear provides smart jewelry for safety; Parul Gulati thrives in the hair industry; Canva's creative journey continues, and Lijjat Papad, started with 80 Rs by seven women, is now worth 1600 Cr.",
    postURL:
      "https://www.linkedin.com/pulse/startup-scoop-edition-13-ecellmit-evqof/?trackingId=ea2RiOGfS0CrVs%2F4ialzMQ%3D%3D",
    publishedAt: "2024-11-01",
  },
  {
    id: "startup-scoop-12",
    image: "/blogScreenshot4.webp",
    title: "Startup Scoop - Edition 12",
    description:
      "Budget 2024-25 sparks mixed reactions, while WazirX faces a $230M hack, Soothe Healthcare expands, Google targets growth with HubSpot, Zomato's CEO becomes a billionaire, and Musk shifts HQs to Texas over California's law.",
    postURL:
      "https://www.linkedin.com/pulse/startup-scoop-edition-12-ecellmit-ewm4f/?trackingId=fLFOi8X7Rz2JUNV6BNT%2Bdw%3D%3D",
    publishedAt: "2024-10-15",
  },
  {
    id: "startup-scoop-11",
    image: "/blogScreenshot5.webp",
    title: "Startup Scoop - Edition 11",
    description:
      "SWARM Robotics wins at Regatta 2.0, Unikon.ai raises $2M, OneCoin's $15B scam exposed, Elon Musk innovates with SpaceX, Flipkart launches Super.money UPI app, and BluSmart drives India's EV revolution.",
    postURL:
      "https://www.linkedin.com/pulse/startup-scoop-edition-11-ecellmit-jkh3f/?trackingId=1Gmk0%2Fq6TNi9w29r9Ybzug%3D%3D",
    publishedAt: "2024-10-01",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Startup Scoop</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Your bi-monthly dose of entrepreneurship insights, startup success
            stories, and the latest trends shaping the business world.
          </p>

          {/* Newsletter CTA */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 backdrop-blur-sm px-6 py-3 rounded-full">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-blue-300 text-sm font-medium">
              Published Bi-Monthly
            </span>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <main className="py-16 bg-slate-800">
        <div className="container mx-auto px-6 mb-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-slate-300 text-lg">
              Catch up on the most recent startup news and entrepreneurship
              insights.
            </p>
          </div>

          <BlogList posts={blogPosts} />
        </div>

        {/* Subscription CTA */}
        <section className="py-16 bg-slate-900/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Never miss an edition of Startup Scoop. Follow us on LinkedIn to
              get the latest entrepreneurship insights delivered directly to
              your feed.
            </p>
            <a
              href="https://www.linkedin.com/company/ecellmit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
