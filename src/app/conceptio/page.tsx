"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConceptioPage() {
  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);
  const [pitchVideoFile, setPitchVideoFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    teamName: "",
    teamLeaderName: "",
    email: "",
    contactNumber: "",
    college: "",
    yearOfStudy: "",
    teamMembers: [] as Array<{ name: string; yearOfStudy: string }>,
  });

  const [message, setMessage] = useState("");
  const [loading,setLoading]=useState(false);
  const [angle,setangle]=useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Lighting Effect
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




  // Generic input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (form.teamMembers.length < 3) {
      setForm((prev) => ({
        ...prev,
        teamMembers: [...prev.teamMembers, { name: "", yearOfStudy: "" }],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pitchDeckFile || !pitchVideoFile) {
      setMessage("Both pitch deck and video need to be uploaded");
      return;
    }

    const cleanedMembers = form.teamMembers.filter(
      (m) => m.name.trim() !== "" && m.yearOfStudy !== ""
    );

    const formData = new FormData();
    formData.append("teamName", form.teamName);
    formData.append("teamLeaderName", form.teamLeaderName);
    formData.append("email", form.email);
    formData.append("contactNumber", form.contactNumber);
    formData.append("college", form.college);
    formData.append("yearOfStudy", form.yearOfStudy);
    formData.append("teamMembers", JSON.stringify(cleanedMembers));
    formData.append("pitchDeckFile", pitchDeckFile);
    formData.append("pitchVideoFile", pitchVideoFile);

    try {
      setLoading(true);// to start the spinner 
      const response = await fetch("https://e-cell-backend-v439.onrender.com/submission", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Submission successful!");
        console.log("Server response:", data);
      } else {
        setMessage(`❌ Error: ${data.message || "Something went wrong"}`);
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("❌ Failed to connect to the server");
    }
  setLoading(false);
    setPitchDeckFile(null);
    setPitchVideoFile(null);
  };

  // Spinner dot positions based on angle
  const radius = 40;
  const spinnerDots = [
    { offset: 0 },
    { offset: 90 },
    { offset: 180 },
    { offset: 270 },
  ].map((dot) => {
    const rad = ((angle + dot.offset) * Math.PI) / 180;
    return {
      x: radius * Math.cos(rad),
      y: radius * Math.sin(rad),
    };
  });

  return (
    <main>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/galaxy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",

        }}
      />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
        {/*Gradient Background */}
        <div className="absolute inset-0">
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-30 blur-[140px] animate-slowFloat rounded-full"
            style={{
              background:
                "radial-gradient(circle at 25% 30%, rgba(79,70,229,0.28) 0%, transparent 45%), radial-gradient(circle at 50% 60%, rgba(59,130,246,0.14) 0%, transparent 40%)",
              transform: `translate(${mousePos.x / 8}px, ${mousePos.y / 8}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/3 right-0 w-[500px] h-[500px] opacity-22 blur-[130px] animate-slowFloatReverse rounded-full"
            style={{
              background:
                "radial-gradient(circle at 70% 40%, rgba(99,102,241,0.22) 0%, transparent 45%), radial-gradient(circle at 30% 70%, rgba(124,58,237,0.12) 0%, transparent 40%)",
              transform: `translate(${mousePos.x / -10}px, ${mousePos.y / 10}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] opacity-16 blur-[160px] animate-slowPulse rounded-full"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(14,165,233,0.12) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(99,102,241,0.06) 0%, transparent 60%)",
              transform: `translate(${mousePos.x / 12}px, ${mousePos.y / -12}px)`,
            }}
          ></div>
        </div>

        {/*Form Container */}
        <div className="relative z-10 w-full max-w-3xl form-container" style={{ background: "rgba(6,10,28,0.8)", borderColor: "rgba(99,102,241,0.06)" }}>
          <img src="/transparent-logo.webp" alt="Logo" className="w-20 h-20 align-center mx-auto mb-4" />
          <h1
            className="text-4xl md:text-5xl font-extrabold text-center mb-3 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.12)]"
            style={{
              background:
                "linear-gradient(90deg, #9fb3ff 0%, #7c8ef0 50%, #be58f5 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Conceptiō – Ideathon ‘26
          </h1>

          <p className="text-center text-[#fffff] mb-10 font-medium">
            Organized by <span className="font-semibold text-[#9fb3ff]">E-Cell MIT, Manipal</span>
            <br />
            Submit your startup idea to get mentorship, feedback & a chance to win prizes!
          </p>
      

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label" style={{ color: "#9fb3ff" }}>Team Name *</label>
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
                <label className="form-label" style={{ color: "#9fb3ff" }}>Full Name (Team Leader) *</label>
            
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
                <label className="form-label" style={{ color: "#9fb3ff" }}>Email ID *</label>
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
                <label className="form-label" style={{ color: "#9fb3ff" }}>Contact Number *</label>
                {/* FIX #3 — Correct validation */}
         
                <input
                  type="tel"
                  name="contactNumber"
                  value={form.contactNumber}
                  onChange={handleChange}
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  inputMode="numeric"
                  title="Enter a 10-digit phone number"
                  className="form-input glow-focus"
                  required
                />
              </div>

              <div>
              <label className="form-label" style={{ color: "#9fb3ff" }}>College *<span className="text-[#9fb3ff] text-sm block mt-1">Use acronym format e.g., MIT Manipal, IIT Madras</span></label>

              <input
                type="text"
                name="college"
                value={form.college}
                onChange={handleChange}
                placeholder="MIT Manipal / IIT Madras"
                className="form-input glow-focus"
                required
              />
              </div>
              <div>
                <label className="form-label" style={{ color: "#9fb3ff" }}>Year of Study (Leader) *</label>
               
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
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-[#ffffff] leading-none">Team Members</h2>
                  <span className="text-sm text-[#9fb3ff]/85 leading-none">
                    (Optional, max 3 additional members)
                  </span>
                </div>

        
                {form.teamMembers.length < 3 && (
                  <button
                    type="button"
                    onClick={addMember}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-xl
                   border-2 border-dashed border-[#9fb3ff]/25
                   bg-[#9fb3ff]/6 hover:bg-[#9fb3ff]/12
                   text-[#9fb3ff] font-semibold
                   transition-all duration-200
                   shadow-[inset_0_0_0_1px_rgba(79,70,229,0.03)]"
                  >
                    <span className="w-6 h-6 rounded-full flex items-center justify-center
  bg-transparent border border-[#9fb3ff]/40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-[#9fb3ff] translate-x-[0.5px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                      </svg>
                    </span>

                    <span>Add Team Member</span>
                 
                  

                  </button>
                )}
              </div>
              <div className="space-y-3">
                {form.teamMembers.map((member, i) => (
                  <div key={i} className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder={`Member ${i + 2} Name`}
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

                    {i > -1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            teamMembers: prev.teamMembers.filter((_, idx) => idx !== i),
                          }))
                        }
                        className="absolute right-[-2.75rem] top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                      >
                        <img
                          src="/trash.svg"
                          alt="Delete"
                          className="w-12 h-12 opacity-80 hover:opacity-100 transition trash-icon"
                        />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          teamMembers: prev.teamMembers.filter((_, idx) => idx !== i),
                        }))
                      }
                      className="absolute right-[-2.75rem] top-1/2 -translate-y-1/2"
                    >
                      <img src="/trash.svg" alt="Delete" className="w-12 h-12" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h2 className="text-2xl font-bold text-[#ffffff] mb-4">Submission Files</h2>
              <div className="space-y-6">
                <div>
                  <label className="form-label" style={{ color: "#9fb3ff" }}>Pitch Deck (PDF/PPT) *</label>
                  <label className={`custom-upload cursor-pointer ${pitchDeckFile ? "selected" : ""}`}>
                    <img src="/upload.svg" alt="Upload" className="w-5 h-5 mr-2" />
                    {pitchDeckFile ? "File Selected: " + pitchDeckFile.name : "Upload File"}
                    <input
                      type="file"
                      accept=".pdf,.ppt,.pptx"
                      className="hidden"
                      onChange={(e) => setPitchDeckFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  {pitchDeckFile && (
                    <p className="text-xs text-emerald-400 mt-1">✅ {pitchDeckFile.name} selected</p>
                  )}
                  <p className="text-xs text-[#ffffff]/70 mt-1">
                    File size limit: 100MB | Allowed types: PDF, PPT
                  </p>
                </div>

                <div>
                  <label className="form-label" style={{ color: "#9fb3ff" }}>Pitch Video *</label>
                  <label className={`custom-upload cursor-pointer ${pitchVideoFile ? "selected" : ""}`}>
                    <img src="/upload.svg" alt="Upload" className="w-5 h-5 mr-2" />
                    {pitchVideoFile ? "File Selected: " + pitchVideoFile.name : "Upload File"}
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => setPitchVideoFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  {pitchVideoFile && (
                    <p className="text-xs text-emerald-400 mt-1">✅ {pitchVideoFile.name} selected</p>
                  )}
                  <p className="text-xs text-[#ffffff]/70 mt-1">
                    File size limit: 100MB | Allowed types: Video
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 mt-6 rounded-xl font-semibold text-lg text-white hover:scale-[1.03] transition"
              style={{
                background: "linear-gradient(90deg,#2563eb,#4f46e5)",
                boxShadow: "0 10px 30px rgba(79,70,229,0.12)",
              }}
                 disabled={loading}
            
            >
              Submit
            </button>
   {/* Blue spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

            {message && <p className="text-center text-[#9fb3ff] mt-4 font-medium">{message}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}