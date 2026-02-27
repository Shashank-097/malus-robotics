"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {name: "Home" , href:"/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold transition ${
            scrolled ? "text-[var(--dark-bg)]" : "text-white"
          }`}
        >
          Malus Robotics
        </Link>

        {/* Desktop Menu with Animated Underline */}
        <div
          className={`hidden md:flex space-x-8 font-medium transition ${
            scrolled ? "text-[var(--dark-bg)]" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
                {link.name}
              </span>

              {/* Animated Underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-[var(--accent)] text-white rounded-lg hover:scale-105 transition duration-300">
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X
                className={`transition ${
                  scrolled ? "text-[var(--dark-bg)]" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`transition ${
                  scrolled ? "text-[var(--dark-bg)]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-6 pb-6 space-y-4 text-[var(--dark-bg)] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block hover:text-[var(--accent)] transition"
            >
              {link.name}
            </Link>
          ))}

          <button className="w-full mt-4 px-5 py-2 bg-[var(--accent)] text-white rounded-lg">
            Get Quote
          </button>
        </div>
      )}
    </motion.nav>
  );
}