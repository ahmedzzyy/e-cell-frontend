"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./conceptio-form.css";
import {
  FiUsers,
  FiMail,
  FiPhone,
  FiUploadCloud,
  FiFilm,
  FiUser,
} from "react-icons/fi";

interface FormData {
  teamName: string;
  leaderName: string;
  email: string;
  contact: string;
  year: string;
  member2: string;
  year2: string;
  member3: string;
  year3: string;
  member4: string;
  year4: string;
  pitchDeck: File | string;
  pitchVideo: File | string;
}

export default function ConceptioForm() {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    leaderName: "",
    email: "",
    contact: "",
    year: "",
    member2: "",
    year2: "",
    member3: "",
    year3: "",
    member4: "",
    year4: "",
    pitchDeck: "",
    pitchVideo: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully (UI only)");
  };

  return (
    <>
      <Navbar />

      <div className="form-page">
        <div className="form-container">
  <div className="mes-banner">
    <span className="mes-highlight">MES 2026</span> — Manipal Entrepreneurship Summit
  </div>

          <h1 className="form-title">Conceptiō - Ideathon '26</h1>
          <p className="form-subtitle">
            Organized by <span className="highlight">E-Cell MIT, Manipal</span>
            <br />
            Submit your startup idea to get mentorship, feedback & a chance to
            win prizes!
          </p>

          <form onSubmit={handleSubmit} className="form-content">
            <label>
              <FiUsers className="icon" /> Team Name *
            </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              required
              placeholder="Enter your team name"
            />

            <label>
              <FiUser className="icon" /> Full Name (Team Leader) *
            </label>
            <input
              type="text"
              name="leaderName"
              value={formData.leaderName}
              onChange={handleChange}
              required
              placeholder="Team leader's name"
            />

            <label>
              <FiMail className="icon" /> Email ID *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />

            <label>
              <FiPhone className="icon" /> Contact Number *
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="+91 9876543210"
            />

            <label>Year of Study (Leader) *</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="5">5th Year</option>
            </select>

            <h2 className="section-title">
              <FiUsers className="icon1" /> Team Members
            </h2>
            {[2, 3, 4].map((num) => (
              <div key={num} className="member-fields">
                <input
                  type="text"
                  name={`member${num}`}
                  placeholder={`Member ${num} Name`}
                  value={(formData as any)[`member${num}`]}
                  onChange={handleChange}
                />
                <select
                  name={`year${num}`}
                  value={(formData as any)[`year${num}`]}
                  onChange={handleChange}
                >
                  <option value="">Year of Study</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                </select>
              </div>
            ))}

            <h2 className="section-title">
              Submission Files
            </h2>

            <label>
              <FiUploadCloud className="icon" /> Pitch Deck
            </label>
            <input
              type="file"
              name="pitchDeck"
              accept=".pdf,.ppt,.pptx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file && file.size > 100 * 1024 * 1024) {
                  alert("Pitch Deck must be less than 100 MB");
                  e.target.value = "";
                  return;
                }
                handleChange(e);
              }}
              required
            />
            <p className="file-guidelines">
              File number limit: 1 | Single file size limit: 100MB | Allowed file
              types: PPT, PDF
            </p>

            <label>
              <FiFilm className="icon" /> Pitch Video
            </label>
            <input
              type="file"
              name="pitchVideo"
              accept="video/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file && file.size > 100 * 1024 * 1024) {
                  alert("Pitch Video must be less than 100 MB");
                  e.target.value = "";
                  return;
                }
                handleChange(e);
              }}
              required
            />
            <p className="file-guidelines">
              File number limit: 1 | Single file size limit: 100MB | Allowed file
              types: Video
            </p>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          <p className="footer-text">
            Submission Deadline: <b>31st December 2025</b> <br />
            Queries: Aryan Nair (+91 8169757229), Anshuman Utpal (+91
            7015682115)
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
