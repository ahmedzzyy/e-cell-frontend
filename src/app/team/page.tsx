"use client";

import { useState } from "react";
// import Image from "next/image";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import team data
import { teamData } from "@/data/teamData";

// Department Head Card Component
// function DepartmentHeadCard({ head }: { head: HeadInfo }) {
//   return (
//     <div className="group bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400/50 w-full max-w-sm mx-auto">
//       {/* Profile Image */}
//       <div className="relative h-64 overflow-hidden bg-slate-700">
//         <Image
//           src={head.image}
//           alt={head.name}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-110"
//           sizes="300px"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
//
//         {/* Social Links */}
//         <div className="absolute top-6 right-6 flex gap-3">
//           {head.linkedin && (
//             <a
//               href={head.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-slate-900/70 backdrop-blur-sm p-3 rounded-full hover:bg-blue-600/80 transition-all duration-300 transform hover:scale-110"
//               aria-label={`${head.name} LinkedIn Profile`}
//             >
//               <svg
//                 className="w-5 h-5 text-white"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>
//           )}
//           {head.instagram && (
//             <a
//               href={head.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-slate-900/70 backdrop-blur-sm p-3 rounded-full hover:bg-pink-600/80 transition-all duration-300 transform hover:scale-110"
//               aria-label={`Email ${head.name}`}
//             >
//               <svg
//                 role="img"
//                 className="w-5 h-5 text-white"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Instagram</title>
//                 <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
//               </svg>
//             </a>
//           )}
//         </div>
//
//         {/* Name and Position Overlay */}
//         <div className="absolute bottom-0 left-0 right-0 p-6">
//           <h3 className="text-2xl font-bold text-white mb-1">{head.name}</h3>
//           <p className="text-blue-400 font-medium text-lg">{head.position}</p>
//         </div>
//       </div>
//
//       {/* Quote Section */}
//       <div className="p-6 text-center">
//         <div className="relative">
//           {/* Quote Icon */}
//           <svg
//             className="w-6 h-6 text-blue-400/30 mx-auto mb-2"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
//           </svg>
//
//           <blockquote className="text-slate-300 text-lg italic leading-relaxed">
//             &quot;{head.motto}&quot;
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   );
// }

// Department Menu Component
function DepartmentMenu({
  departments,
  activeDepartment,
  onSelectDepartment,
}: {
  departments: string[];
  activeDepartment: string;
  onSelectDepartment: (dept: string) => void;
}) {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Departments</h2>
      <ul className="space-y-3">
        {departments.map((department) => (
          <li key={department}>
            <button
              onClick={() => onSelectDepartment(department)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                activeDepartment === department
                  ? "bg-blue-600/80 text-white border border-blue-400/50"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white border border-transparent"
              }`}
            >
              <span className="font-medium">{department}</span>
              {activeDepartment === department && (
                <svg
                  className="w-5 h-5 float-right mt-0.5 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Coming Soon Card Component
function ComingSoonCard({ department }: { department: string }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-12 text-center max-w-2xl mx-auto">
      {/* Animated Icon */}
      <div className="w-24 h-24 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
        <svg
          className="w-12 h-12 text-blue-400"
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
      </div>

      {/* Main Message */}
      <h3 className="text-2xl font-bold text-white mb-4">
        New Board Coming Soon!
      </h3>

      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        We&apos;re excited to announce that the new{" "}
        <span className="text-blue-400 font-medium">{department}</span>{" "}
        leadership team will be revealed soon. Stay tuned for updates!
      </p>

      {/* Features */}
      <div className="space-y-3 mb-8">
        <div className="flex items-center justify-center gap-3 text-slate-400">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-sm">Fresh leadership & new vision</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-slate-400">
          <div
            className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <span className="text-sm">Innovative programs & initiatives</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-slate-400">
          <div
            className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <span className="text-sm">Enhanced opportunities for students</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/about"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
        >
          Learn About E-Cell
        </a>
        <a
          href="/initiatives"
          className="border-2 border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
        >
          View Our Programs
        </a>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const departments = Object.keys(teamData);
  const [activeDepartment, setActiveDepartment] = useState(departments[0]);

  // const currentHeads = teamData[activeDepartment] || [];
  // const headsCount = currentHeads.length;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Meet Our Team</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the passionate leaders driving innovation and fostering
            entrepreneurship across different departments at E-Cell MIT Manipal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Department Menu - Left Side */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <DepartmentMenu
                  departments={departments}
                  activeDepartment={activeDepartment}
                  onSelectDepartment={setActiveDepartment}
                />
              </div>
            </div>

            {/* Department Head Display - Right Side */}
            <div className="lg:col-span-2">
              {/*<div className="text-center mb-12">*/}
              {/*  <h2 className="text-3xl font-bold text-white mb-4">*/}
              {/*    {activeDepartment}*/}
              {/*  </h2>*/}
              {/*  <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>*/}
              {/*  <p className="text-slate-300 text-lg">*/}
              {/*    {activeDepartment === "Executive Board"*/}
              {/*      ? "Meet our Executive Board"*/}
              {/*      : `Meet the head of our ${activeDepartment} department`}*/}
              {/*  </p>*/}
              {/*</div>*/}

              {/* Coming Soon Display - Right Side */}
              <div className="lg:col-span-3">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {activeDepartment}
                  </h2>
                  <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
                  <p className="text-slate-300 text-lg">
                    The new leadership team for {activeDepartment.toLowerCase()}{" "}
                    is being finalized
                  </p>
                </div>

                {/* Coming Soon Card */}
                <ComingSoonCard department={activeDepartment} />
              </div>

              {/* Department Head Card */}
              {/*{currentHeads.length > 0 ? (*/}
              {/*  <div*/}
              {/*    className={`grid gap-8 ${*/}
              {/*      headsCount === 1*/}
              {/*        ? "grid-cols-1 max-w-sm mx-auto"*/}
              {/*        : "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"*/}
              {/*    }`}*/}
              {/*  >*/}
              {/*    {currentHeads.map((head, idx) => (*/}
              {/*      <DepartmentHeadCard*/}
              {/*        head={head}*/}
              {/*        key={`${head.name}-${idx}`}*/}
              {/*      />*/}
              {/*    ))}*/}
              {/*  </div>*/}
              {/*) : (*/}
              {/*  <div className="bg-slate-800/50 border border-slate-600/30 rounded-2xl p-12 text-center">*/}
              {/*    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">*/}
              {/*      <svg*/}
              {/*        className="w-8 h-8 text-slate-400"*/}
              {/*        fill="none"*/}
              {/*        stroke="currentColor"*/}
              {/*        viewBox="0 0 24 24"*/}
              {/*      >*/}
              {/*        <path*/}
              {/*          strokeLinecap="round"*/}
              {/*          strokeLinejoin="round"*/}
              {/*          strokeWidth="2"*/}
              {/*          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"*/}
              {/*        />*/}
              {/*      </svg>*/}
              {/*    </div>*/}
              {/*    <h3 className="text-xl text-slate-400 mb-2">*/}
              {/*      No Team Head Available*/}
              {/*    </h3>*/}
              {/*    <p className="text-slate-500">*/}
              {/*      This department currently has no designated head.*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*)}*/}
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <section className="py-16 bg-slate-900/50 mt-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Want to Join Our Leadership Team?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Be part of MIT Manipal&apos;s premier entrepreneurship cell and
              lead the future of innovation on campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Learn more About Us
              </a>
              <a
                href="/initiatives"
                className="border-2 border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-4 rounded-full font-medium transition-colors duration-200"
              >
                Learn About Our Work
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
