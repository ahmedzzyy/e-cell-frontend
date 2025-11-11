"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function ConceptioPage() {
  const [form, setForm] = useState({
    teamName: "",
    teamLeaderName: "",
    email: "",
    contactNumber: "",
    yearOfStudy: "",
    teamMembers: [{ name: "", yearOfStudy: "" }],
  });

  const [message, setMessage] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 🌈 Parallax Lighting Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 100;
      const y = (e.clientY / innerHeight - 0.5) * 100;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  type MemberField = "name" | "yearOfStudy";

  const handleMemberChange = (index: number, field: MemberField, value: string) => {
  const updated = [...form.teamMembers];
  updated[index] = { ...updated[index], [field]: value };
  setForm((prev) => ({ ...prev, teamMembers: updated }));
  };


  const addMember = () => {
    if (form.teamMembers.length < 4) {
      setForm((prev) => ({
        ...prev,
        teamMembers: [...prev.teamMembers, { name: "", yearOfStudy: "" }],
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage("✅ Submission ready for backend integration!");
  };

  return (
    <main>
        <div className="relative min-h-screen flex items-center justify-center bg-[#0b0b0d] overflow-hidden py-20 px-4">
      {/*Glowing Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-r from-[#FF5E5E] via-[#FFD464] to-[#E23C64] opacity-30 blur-[140px] animate-slowFloat"
          style={{
            transform: `translate(${mousePos.x / 8}px, ${mousePos.y / 8}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#B0183D] via-[#FF5E5E] to-[#FFD464] opacity-25 blur-[130px] animate-slowFloatReverse"
          style={{
            transform: `translate(${mousePos.x / -10}px, ${mousePos.y / 10}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-[#FFD464] via-[#FF5E5E] to-[#E23C64] opacity-20 blur-[160px] animate-slowPulse"
          style={{
            transform: `translate(${mousePos.x / 12}px, ${mousePos.y / -12}px)`,
          }}
        ></div>
      </div>

      {/*Form Container */}
      <div className="relative z-10 w-full max-w-3xl form-container">
        <img
          src="/transparent-logo.webp"
          alt="Logo"
          className="w-20 h-20 align-center mx-auto mb-4"
        />
        <h1 className="text-4xl font-extrabold text-[#FFD464] text-center mb-3">
          Conceptiō – Ideathon ‘26
        </h1>
        <p className="text-center text-[#FCEDD8] mb-10 font-medium">
          Organized by <span className="font-semibold text-[#FFD464]">E-Cell MIT, Manipal</span>
          <br />
          Submit your startup idea to get mentorship, feedback & a chance to win prizes!
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/*Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Team Name *</label>
              <input
                type="text"
                name="teamName"
                value={form.teamName}
                onChange={handleChange}
                placeholder="Team Innovators"
                className="form-input glow-focus"
                required
              />
            </div>
            <div>
              <label className="form-label">Full Name (Team Leader) *</label>
              <input
                type="text"
                name="teamLeaderName"
                value={form.teamLeaderName}
                onChange={handleChange}
                placeholder="John Doe"
                className="form-input glow-focus"
                required
              />
            </div>
            <div>
              <label className="form-label">Email ID *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john.mitmpl2025@learner.manipal.edu"
                className="form-input glow-focus"
                required
              />
            </div>
            <div>
              <label className="form-label">Contact Number *</label>
              <input
                type="tel"
                name="contactNumber"
                value={form.contactNumber}
                onChange={handleChange}
                placeholder="9876543210"
                className="form-input glow-focus"
                required
              />
            </div>
            <div>
              <label className="form-label">Year of Study (Leader) *</label>
              <select
                name="yearOfStudy"
                value={form.yearOfStudy}
                onChange={handleChange}
                className="form-input glow-focus"
                required
              >
                <option value="">Select Year</option>
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-2xl font-bold text-[#FFD464] mb-4">Team Members</h2>
            {form.teamMembers.map((member, i) => (
              <div key={i} className="relative grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
                <input
                  type="text"
                  placeholder={`Member ${i + 2} Name (e.g. Jane Doe)`}
                  value={member.name}
                  onChange={(e) => handleMemberChange(i, "name", e.target.value)}
                  className="form-input glow-focus"
                />
                <select
                  value={member.yearOfStudy}
                  onChange={(e) => handleMemberChange(i, "yearOfStudy", e.target.value)}
                  className="form-input glow-focus"
                >
                  <option value="">Year of Study</option>
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>

                {i > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        teamMembers: prev.teamMembers.filter((_, idx) => idx !== i),
                      }))
                    }
                    className="absolute right-[-3rem] top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                  >
                    <img
                      src="/trash.svg"
                      alt="Delete"
                      className="w-10 h-10 mr-2 opacity-80 hover:opacity-100 transition trash-icon"
                    />
                  </button>
                )}
              </div>
            ))}

            {form.teamMembers.length < 3 && (
              <button
                type="button"
                onClick={addMember}
                className="mt-3 inline-flex items-center gap-2 text-[#FFD464] font-medium hover:text-[#FF5E5E] transition add-btn"
              >
                <span className="text-xl">＋</span>
                <span>Add another member</span>
              </button>
            )}
          </div>

          {/* File Upload */}
          <div>
            <h2 className="text-2xl font-bold text-[#FFD464] mb-4 ">Submission Files</h2>
            <div className="space-y-6">
              <div>
                <label className="form-label">Pitch Deck (PDF/PPT) *</label>
                <label className="custom-upload mt-2 mb-2">
                  <img src="/upload.svg" alt="Upload" className="w-5 h-5 mr-2" />
                  Upload File
                  <input type="file" accept=".pdf,.ppt,.pptx" className="hidden" />
                </label>
                <p className="text-xs text-[#FFD464]/70 mt-1">
                  File size limit: 100MB | Allowed types: PDF, PPT
                </p>
              </div>

              <div>
                <label className="form-label">Pitch Deck Explainer Video *</label>
                <label className="custom-upload mt-2 mb-2">
                  <img src="/upload.svg" alt="Upload" className="w-5 h-5 mr-2" />
                  Upload File
                  <input type="file" accept="video/*" className="hidden" />
                </label>
                <p className="text-xs text-[#FFD464]/70 mt-1">
                  File size limit: 100MB | Allowed types: Video
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 rounded-xl font-semibold text-lg bg-gradient-to-r from-[#E23C64] to-[#B0183D] text-white hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,94,94,0.4)] transition"
          >
            Submit
          </button>

          {message && (
            <p className="text-center text-[#FFD464] mt-4 font-medium">{message}</p>
          )}
        </form>
      </div>
    </div>
    </main>
    );
}
