// /components/TimelineSidebar.tsx
import React from "react";
import { STEPS } from "@/data/ipc-config";

// Helper function to determine the timeline marker status
const getTimelineStatus = (s: typeof STEPS[0]) => {
  const now = Date.now();
  const start = new Date(s.start).getTime();
  const end = new Date(s.end).getTime();

  const isActive = now >= start && now <= end;
  const isCompleted = now > end;
  const isCurrent = isActive && !isCompleted;

  return { isCompleted, isCurrent };
};

export const TimelineSidebar: React.FC = () => (
  <aside className="lg:col-span-4 lg:sticky lg:top-24 w-full">
    {/* Timeline Box */}
    <div
      id="timeline-box"
      className="p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 ring-1 ring-slate-700 shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        Timeline (Fixed Dates)
      </h3>

      <div className="relative">
        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-slate-700/50" />

        <div className="flex flex-col">
          {STEPS.map((s) => {
            const { isCompleted, isCurrent } = getTimelineStatus(s);

            return (
              <div key={s.id} className="flex items-start mb-6">
                <div className="w-10 flex flex-col items-center z-10">
                  {isCompleted ? (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#8B5CF6] shadow-md">
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879A1 1 0 003.293 9.293l4 4a1 1 0 001.414 0l8-8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ) : isCurrent ? (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white/90"></div>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-700/80">
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    </div>
                  )}
                </div>

                <div className="flex-1 pl-3 pt-1">
                  <div
                    className={`text-xs mb-1 ${isCompleted ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {s.date}
                  </div>
                  <div
                    className={`text-sm leading-snug ${isCompleted ? "text-white" : "text-slate-200"} ${s.type === 'round' ? 'font-medium' : ''}`}
                  >
               {s.title} 
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    {/* Organizer/Contact Box */}
    <div className="mt-6 p-6 rounded-xl bg-slate-900/30 ring-1 ring-slate-800">
      <h4 className="font-bold text-xl text-white mb-3">Organized By</h4>
      <p className="text-slate-300 space-y-2">
        <span className="block font-medium">
          Entrepreneurship Cell (E-Cell), Manipal Institute of Technology,
         Manipal
        </span>
        <span className="block font-medium pt-3 border-t border-slate-700/50">
          Registration Platform:
          <a href="#" className="text-blue-400 hover:text-blue-300 ml-2">
            Official E-Cell MIT Manipal Website 
          </a>
        </span>
      </p>
    </div>

    <div className="mt-6 p-6 rounded-xl bg-slate-900/30 ring-1 ring-slate-800">
      <h4 className="font-bold text-xl text-white mb-3">Contact Organizers</h4>

      <p className="text-slate-300 space-y-2">
        <span className="block font-medium">
       Ambica Mehra: <span className="text-blue-400 hover:text-blue-300 cursor-pointer">+91 8422074189 </span>
        </span>
        <span className="block font-medium">
          Priyanshi Doshi: <span className="text-blue-400 hover:text-blue-300 cursor-pointer">+91 9082992145‬</span>
        </span>
      
    
        <span className="block font-medium">
          Email: <span className="text-blue-400 hover:text-blue-300 cursor-pointer">ecell.mit@manipal.edu</span>
        </span>
      </p>
    </div>
  </aside>
);