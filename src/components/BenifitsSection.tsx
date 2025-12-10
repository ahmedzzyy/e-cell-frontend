// /components/BenefitsSection.tsx
import React from "react";
import { IPC_BENEFITS } from "@/data/ipc-config";

export const BenefitsSection: React.FC = () => (
  <section className="mt-12 text-slate-100">
    <h2 className="text-3xl font-bold text-white mb-6 border-b border-blue-600 pb-2">
      Outcomes & Opportunities
    </h2>

    <div className="p-6 bg-slate-900/40 rounded-xl shadow-xl ring-1 ring-slate-800">
      <p className="text-slate-300 mb-6">
        The Innovation Policy Consortium is focused on producing{" "}
        [cite_start]<strong>tangible policy documents</strong> [cite: 34] and fostering a national
        [cite_start]network of student policy teams[cite: 34].
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {IPC_BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-[#0b1220] rounded-xl border border-white/10 hover:border-blue-400/40 transition"
          >
           
            <div>
              <h3 className="text-lg font-semibold text-white">
                {benefit.title}
              </h3>

              {benefit.subtitle && (
                <p className="text-sm text-blue-300">{benefit.subtitle}</p>
              )}

              <p className="text-sm text-gray-400 mt-1">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);