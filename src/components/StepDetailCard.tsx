// /components/StepDetailCard.tsx
import React from "react";
import { Step } from "@/data/ipc-config";

export const StepDetailCard: React.FC<{ step: Step }> = ({ step }) => (
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
          <svg
            className="w-5 h-5 mr-2 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
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
          <svg
            className="w-5 h-5 mr-2 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          Evaluation / Focus
        </h4>
        <ul className="list-disc ml-5 space-y-1 text-slate-300">
          {step.evaluation.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);