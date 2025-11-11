"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Navigation items with proper typing
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Blogs", href: "/blog" },
  { name: "The Team", href: "/team" },
  { name: "MES", href: "/mes" },
  { name: "Conceptio", href: "/conceptio" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on escape key press and handle body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full bg-slate-900 shadow-lg z-50 sticky top-0">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
            >
              <Image
                src="/transparent-logo.webp"
                alt="E-Cell MIT Manipal Logo"
                width={70}
                height={70}
                className="w-12 h-auto cursor-pointer transition-transform duration-300 hover:scale-105 sm:w-16 lg:w-[70px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-12 xl:space-x-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    font-semibold text-base lg:text-lg transition-all duration-300 relative group
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1
                    text-white hover:text-blue-400
                  "
                >
                  {item.name}
                  <span
                    className="
                  absolute left-1/2 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-full group-hover:left-0
                  "
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-300 z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {/* Hamburger/Close Icon */}
            <div className="w-6 h-6 relative">
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    block py-3 px-4 font-semibold text-lg rounded-lg transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900
                    text-white hover:bg-white/10 hover:text-blue-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
