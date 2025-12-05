"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroImg = "/conceptio-globe.png";
const benefitsImg = "/images/benefits.png";

const HeroBanner: React.FC = () => {
  const target = new Date("2026-01-05T23:59:59");
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const sec = Math.floor(diff / 1000) % 60;
    const min = Math.floor(diff / (1000 * 60)) % 60;
    const hr = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hr, min, sec, total: diff };
  });

  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const sec = Math.floor(diff / 1000) % 60;
      const min = Math.floor(diff / (1000 * 60)) % 60;
      const hr = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setTimeLeft({ days, hr, min, sec, total: diff });
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full relative">
      <div className="relative w-full h-[900px]">
        <Image src={heroImg} alt="globe background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pointer-events-auto">
          <div className="grid lg:grid-cols-12 items-center gap-8">

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="text-xs bg-slate-800/60 px-3 py-1 rounded-full text-slate-300">E-Cell MIT</span>
                <span className="text-xs text-slate-300 font-bold">presents</span>
              </div>

              <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-3 text-white" style={{ letterSpacing: "-1px" }}>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-violet-600">CONCEPTIŌ</span>
                <span className="block text-white text-3xl mt-1">2026</span>
              </h2>

              <p className="max-w-xl text-slate-300 mb-8">
                Ignite your vision. Craft your solution. Present your future.
              </p>

         <div className="flex items-center gap-4">
  <a
    href="https://forms.microsoft.com/"   
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-full bg-slate-900/60 ring-1 ring-slate-700 hover:ring-blue-500 transition focus:outline-none text-white"
  >
    Register Now
  </a>
                <a className="text-sm text-slate-200 underline hover:text-white" href="#timeline">
                  View Timeline
                </a>
              </div>
            </div>

    <div className="lg:col-span-5 flex justify-center lg:justify-end">
  <div className="relative w-full max-w-md mt-12 lg:mt-0">
    <div className="bg-slate-900/70 border border-slate-700 rounded-xl px-6 py-6 shadow-xl text-center">
      <div className="text-xl text-slate-100 mb-3">Submission Closes In!</div>
      <div className="flex justify-center items-end gap-6 text-white font-semibold text-5xl">
        <div>
          <div className="text-5xl">{timeLeft.days}</div>
          <div className="text-xs text-slate-400 mt-1">Days</div>
        </div>
        <div className="text-5xl">:</div>
        <div>
          <div className="text-5xl">{String(timeLeft.hr).padStart(2, "0")}</div>
          <div className="text-xs text-slate-400 mt-1">Hours</div>
        </div>
        <div className="text-5xl">:</div>
        <div>
          <div className="text-5xl">{String(timeLeft.min).padStart(2, "0")}</div>
          <div className="text-xs text-slate-400 mt-1">Minutes</div>
        </div>
      </div>
      {timeLeft.total <= 0 && <div className="text-xs text-rose-400 mt-2">Registration closed</div>}
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </header>
  );
};

const BENEFITS = [
  {
    title: "CASH PRIZES",
    description: "(₹75,000 PRIZE POOL)",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
  },
  {
    title: "INCUBATION OPPORTUNITIES",
    description: "(DIRECT ACCESS TO MAHE'S INCUBATION NETWORK)",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    ),
  },
  {
    title: "CERTIFICATION & RECOGNITION",
    description: "(TOP TEAMS GET TO SHOWCASE THEIR WORK AT INNOVATION MELA 2026)",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.21a50 50 0 00-4.507-.442A28 28 0 0012 8.5V20m-5.618-4.21a50 50 0 014.507-.442A28 28 0 0112 15.5V4"></path>
      </svg>
    ),
  },
  {
    title: "BUSINESS CLINIC MENTORSHIP",
    description: "(WEEK-LONG MENTORSHIP PROGRAM BY INNOVATION EXPERTS)",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"></path>
      </svg>
    ),
  },
];

type Step = {
  id: number;
  date: string;
  title: string;
  short: string;
  details: string[];
  deliverables: string[];
  evaluation: string[];
  image?: string;
  type: "round" | "event";
};

const STEPS: Step[] = [
  {
    id: 1,
    date: "17 November 2025",
    title: "Hackathon Launch & Problem Statements",
    short: "Launch, problem statements release and mentor onboarding.",
    details: [
      "Conceptiō launches with problem statements curated by industry and faculty. This marks the official start where participants get access to resources, themes and mentor lists.",
      "Organizers provide templates (pitch deck, video guide) and a portal for submissions. Colleges are encouraged to run internal awareness drives.",
    ],
    deliverables: [
      "Launch pack: problem statements, resource links, mentor bios",
      "Templates: Pitch deck PPT, pitch checklist, explainer script guide",
    ],
    evaluation: ["N/A — launch phase"],
    type: "event",
  },

  {
    id: 2,
    date: "17 Nov — 05 Jan 2026",
    title: "Round 1 — Registrations & Ideation Submissions",
    short: "Teams register and submit Pitch Deck + Explainer Video.",
    details: [
      "Teams (1–4 members) register on the Conceptiō portal. Each team submits a concise Pitch Deck (PPT/PDF) and a 2–3 minute explainer video detailing problem, idea, and impact.",
      "College-level shortlisting: Each participating college can shortlist top entries based on internal evaluation. Shortlisted teams will be invited to Round 2.",
    ],
    deliverables: [
      "Pitch Deck (max 12 slides): problem, solution, target users, tech/approach, business model, team, ask",
      "Explainer Video (2–3 mins): 1–2 slides + talking heads or demo, clear problem statement",
    ],
    evaluation: ["Creativity & Originality ", "Problem Relevance & Clarity ", "Clarity of proposed solution "],
    type: "round",
  },

  {
    id: 3,
    date: "Mid-Jan 2026",
    title: "Shortlisting & Feedback",
    short: "Organizers evaluate submissions and share feedback.",
    details: [
      "Panel of reviewers performs initial scoring. Top teams receive written feedback highlighting strengths and areas to improve before PoC development.",
      "Top teams per college will be called for the PoC workshop.",
    ],
    deliverables: ["Shortlist announcement", "Feedback document for shortlisted teams"],
    evaluation: ["Scoring rubric: novelty, feasibility, impact, team"],
    type: "event",
  },

  {
    id: 4,
    date: "PoC Workshop Week",
    title: "Round 2 — PoC Development (Workshop)",
    short: "One-day workshop, mentorship and two-week build window.",
    details: [
      "Shortlisted teams attend a hands-on PoC workshop where they get product design, prototyping and pitch coaching from experts.",
      "Teams get two weeks to develop a basic working model, mock-up or demonstration video (max 5 minutes).",
    ],
    deliverables: ["Prototype / working demo OR demonstration video (<=5 mins)", "Progress report outlining technical approach and next milestones"],
    evaluation: ["Technical Feasibility & Execution ", "Progress during development window ", "Quality of demo / working model"],
    type: "round",
  },

  {
    id: 5,
    date: "Top 15 Selected",
    title: "Mentorship Week",
    short: "Top teams paired with mentors for one-week intensive mentorship.",
    details: [
      "Selected teams receive one-on-one mentorship covering go-to-market, business strategy, product refinement, and investor readiness.",
      "Mentors help polish the pitch and advise on potential incubation pathways.",
    ],
    deliverables: ["Mentorship deliverables: mentor feedback, milestone plan"],
    evaluation: ["Improvements post-mentorship, market clarity"],
    type: "event",
  },

  {
    id: 6,
    date: "Final Showcase Day",
    title: "Round 3 — Final Pitch & Q&A",
    short: "7-minute final pitches followed by Q&A with judges.",
    details: [
      "Each team presents a 7-minute pitch followed by a 6–10 minute Q&A. Judges evaluate across technical, market and business parameters.",
      "Finalists may be offered incubation, funding introductions, and showcase slots at Innovation Mela 2026.",
    ],
    deliverables: ["Final pitch (7 mins)", "Q&A readiness"],
    evaluation: ["Innovation & Originality ", "Market Viability & Business Model ", "Sustainability & Impact ", "Presentation & Q&A handling"],
    type: "round",
  },

  {
    id: 7,
    date: "Winner Announcement",
    title: "Awards & Opportunities",
    short: "Cash prizes, incubation & showcase opportunities.",
    details: [
      "Top teams split the cash prize pool (₹75,000), receive certificates, incubation access and opportunities to present at MAHE events.",
      "Selected teams may receive follow-on mentorship, investor intros and continued incubation support.",
    ],
    deliverables: ["Prizes, certificates, incubation invites"],
    evaluation: ["Final ranking based on judges' scores"],
    image: benefitsImg,
    type: "event",
  },
];

const StepDetailCard: React.FC<{ step: Step }> = ({ step }) => (
  <div className="bg-slate-800/60 p-6 rounded-xl shadow-2xl ring-1 ring-slate-700 mt-6 animate-fadeIn">
    <div className="text-xl font-bold mb-3 text-blue-400">{step.title}</div>
    <div className="text-sm text-slate-400 mb-4">{step.date}</div>

    <div className="mb-6 space-y-4 text-slate-300">
      {step.details.map((d, i) => (
        <p key={i}>{d}</p>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-700/50">
      <div>
        <h4 className="font-semibold text-lg text-slate-100 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Deliverables
        </h4>
        <ul className="list-disc ml-5 space-y-1 text-slate-300">
          {step.deliverables.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg text-slate-100 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Evaluation Metrics
        </h4>
        <ul className="list-disc ml-5 space-y-1 text-slate-300">
          {step.evaluation.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </div>

    {step.image && (
      <div className="mt-8">
        <h4 className="font-semibold text-lg text-slate-100 mb-2">Slide Preview</h4>
        <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-inner">
          <div className="relative w-full h-48">
            <Image src={encodeURI(step.image)} alt={`step-${step.id} preview`} fill className="object-contain" />
          </div>
        </div>
      </div>
    )}
  </div>
);

const BenefitsSection: React.FC = () => (
  <section className="mt-8 text-slate-100">
    <h2 className="text-3xl font-bold text-white mb-6 border-b border-blue-600 pb-2">Benefits & Opportunities</h2>

    <div className="p-6 bg-slate-900/40 rounded-xl shadow-xl ring-1 ring-slate-800">
      <p className="text-slate-300 mb-6">
        Conceptiō '26 opens the door to <strong>MAHE's entrepreneurial ecosystem and beyond</strong>, providing not just prizes, but pathways to real-world business development.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-slate-800/70 rounded-lg border border-slate-700 transition duration-300 hover:bg-slate-700/50 shadow-lg"
          >
            <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-blue-300">{benefit.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mt-1">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function ConceptioPage() {
  const [activeRound, setActiveRound] = useState<number>(2);
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(1);

  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const roundSteps = useMemo(() => STEPS.filter((s) => s.type === "round"), []);
  const otherSteps = useMemo(() => STEPS.filter((s) => s.type !== "round"), []);

  useEffect(() => {
    setActiveRound(roundSteps[0]?.id || 2);
    setActiveTimelineStep(STEPS[0]?.id || 1);
  }, [roundSteps]);

  const scrollToStep = (id: number) => {
    setActiveTimelineStep(id);
    const el = itemRefs.current[id - 1];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      const isRound = STEPS.find((s) => s.id === id)?.type === "round";
      if (isRound) {
        setActiveRound(id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {<Navbar />}

      <HeroBanner />

      <div className="pt-20">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="grid lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-8">
              <div className="mb-10 p-6 rounded-2xl bg-slate-900/50 ring-1 ring-slate-800 shadow-xl">
                <div className="w-full rounded-xl overflow-hidden mb-6 shadow-2xl bg-black"></div>

                <h1 className="text-4xl font-extrabold text-white">Conceptiō — Ideathon 2026</h1>
                <p className="mt-3 text-slate-300 text-lg leading-relaxed border-b border-slate-700 pb-4">
                  Conceptiō (Ideathon 2026) is a national innovation initiative by E-Cell MIT Manipal that encourages students across India to think creatively and develop entrepreneurial solutions to real-world problems. Through a structured process of ideation, creation, validation, mentorship, and proof-of-concept development, participants refine their ideas with guidance from industry experts and startup professionals. The program aims to foster a strong culture of collaboration, innovation, and problem-solving, ultimately nurturing the next generation of entrepreneurs and changemakers.
                </p>

                <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 shadow-lg">
                    <div className="text-sm text-slate-400">Total Prize Pool</div>
                    <div className="text-2xl font-bold text-blue-400">₹75,000</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 shadow-lg">
                    <div className="text-sm text-slate-400">Key Opportunity</div>
                    <div className="text-xl font-bold">Innovation Mela Showcase</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 shadow-lg">
                    <div className="text-sm text-slate-400">Mentorship</div>
                    <div className="text-xl font-bold">Industry & Alumni Experts</div>
                  </div>
                </div>
              </div>

              <section id="timeline" className="mt-8 space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-blue-600 pb-2">Timeline Events</h2>
                {otherSteps.map((s) => (
                  <div
                    key={s.id}
                    className="p-6 bg-slate-900/40 rounded-lg shadow-xl ring-1 ring-slate-800"
                    ref={(el) => (itemRefs.current[s.id - 1] = el)}
                  >
                    <h3 className="text-2xl font-semibold text-blue-300">{s.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{s.date}</p>
                    <div className="text-slate-300 mt-2 space-y-2">{s.details.map((d, i) => (<p key={i}>{d}</p>))}</div>
                  </div>
                ))}
              </section>

              <BenefitsSection />

              <section className="mt-12">
                <h2 className="text-3xl font-bold text-white mb-6 border-b border-blue-600 pb-2">Competition Rounds</h2>

                <div className="flex flex-wrap gap-4 mb-6 p-2 bg-slate-800 rounded-xl shadow-inner ring-1 ring-slate-700">
                  {roundSteps.map((round) => (
                    <button
                      key={round.id}
                      onClick={() => setActiveRound(round.id)}
                      className={`
                        px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300
                        ${activeRound === round.id ? "bg-blue-600 text-white shadow-md shadow-blue-500/50" : "bg-transparent text-slate-300 hover:bg-slate-700"}
                      `}
                    >
                      {round.title.split("—")[0].trim()}
                    </button>
                  ))}
                </div>

                <div>
                  {roundSteps.map((round) => {
                    if (activeRound === round.id) {
                      return (
                        <div key={round.id} ref={(el) => (itemRefs.current[round.id - 1] = el)} className="animate-fade-in">
                          <StepDetailCard step={round} />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4 lg:sticky lg:top-24 w-full">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 ring-1 ring-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Timeline
                </h3>
                <p className="text-slate-400 text-sm mb-6">Click a step to jump to its details. Rounds are integrated into the tabbed structure.</p>

                <div className="relative">
                  <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-slate-700/50 rounded-full" />

                  {STEPS.map((s) => (
                    <div key={s.id} className="mb-6 relative pl-12">
                      <button onClick={() => scrollToStep(s.id)} className="flex items-center gap-4 w-full text-left transition-transform duration-200 hover:scale-[1.02]">
                        <div
                          className={`
                            absolute -left-1 w-6 h-6 rounded-full transition-all duration-300
                            ${s.id <= activeTimelineStep ? "bg-blue-500" : "bg-slate-700"}
                            shadow-md grid place-items-center
                          `}
                        >
                          {s.id <= activeTimelineStep && (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          )}
                        </div>

                        <div className="p-2 rounded-lg">
                          <div className="text-xs font-semibold text-blue-300">{s.date}</div>
                          <div className={s.id === activeTimelineStep ? "text-white" : "text-slate-200"}>{s.title}</div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bg-slate-900/30 ring-1 ring-slate-800">
                <h4 className="font-bold text-xl text-white mb-3">Contact Organizers</h4>
                <p className="text-slate-300 space-y-1">
                  <span className="block font-medium">Aryan Nair: <span className="text-blue-400">+91 81697 57229</span></span>
                  <span className="block font-medium">Anshuman Utpal: <span className="text-blue-400">+91 70156 82115</span></span>
                  <span className="block font-medium">Vansh Sharma: <span className="text-blue-400">+91 90829 92145</span></span>
                  <span className="block font-medium">Email: <span className="text-blue-400">ecell.mit@manipal.edu</span></span>
                </p>
              </div>
            </aside>

          </section>
        </main>

        {<Footer />}

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
          @media (max-width: 1024px) {
            .lg\\:sticky {
              position: static !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function scrollToStep(id: number) {
  const el = document.querySelector(`[data-step-id="${id}"]`) as HTMLElement | null;
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
