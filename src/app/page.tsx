import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

// Client components for interactive features
import HeroTypewriter from "@/components/HeroTypewriter";
import InitiativesCarousel from "@/components/InitiativesCarousel";
import ScrollToTop from "@/components/ScrollToTop";

// Server components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";

// Data imports
import { initiatives, stats } from "@/data/homeData";

// Loading fallback for hero section
function HeroSkeleton() {
  return (
    <div className="h-[90vh] bg-gradient-to-br from-slate-900 to-blue-900 animate-pulse flex items-center justify-center">
      <div className="text-center">
        <div className="h-16 bg-slate-700 rounded mb-6 w-96 mx-auto"></div>
        <div className="h-12 bg-slate-700 rounded w-32 mx-auto"></div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/bg-homepage.webp"
            alt="E-Cell MIT Manipal Background"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="/bg-homepage.webp"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/50" />

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Suspense fallback={<HeroSkeleton />}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <HeroTypewriter />
              </h1>
            </Suspense>

            <Link
              href="/mes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-colors duration-200"
            >
              MES 2025
            </Link>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-slate-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Results that matter
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <StatCard key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="py-32 bg-slate-800 border-t border-slate-600">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Initiatives
            </h2>

            <Suspense
              fallback={
                <div className="h-96 bg-slate-700 animate-pulse rounded" />
              }
            >
              <InitiativesCarousel initiatives={initiatives} />
            </Suspense>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="py-16 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">
                  Discover Our Insights
                </h2>
                <p className="text-xl text-slate-300">
                  Explore Blogs & Stay Updated with E-Cell MIT!
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Explore Blogs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
