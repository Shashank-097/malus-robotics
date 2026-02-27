"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-black text-gray-200">

      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* ================= METALLIC MATTE OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--metal-dark)]/95 via-[var(--metal-mid)]/85 to-black/95" />

      {/* ================= ENGINEERING GRID ================= */}
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight max-w-5xl"
        >
          Automation.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Engineered for Industry.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          Robotics integration, PLC systems, digital twin simulation,
          and intelligent automation built for real-world industrial environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-6"
        >
          <button className="px-8 py-3 bg-[var(--accent)] text-white font-semibold tracking-wide rounded-md hover:scale-105 hover:shadow-[0_0_40px_var(--accent)] transition-all">
            Explore Solutions
          </button>

          <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition">
            View Projects
          </button>
        </motion.div>

        {/* ================= TRUST STRIP ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap gap-12 text-sm text-gray-500 uppercase tracking-widest"
        >
          <span>Industrial Robotics</span>
          <span>PLC & SCADA</span>
          <span>Digital Twin</span>
          <span>System Integration</span>
          <span>Virtual Commissioning</span>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-widest"
      >
        SCROLL
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 w-[1px] h-12 bg-gray-600"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      />
    </section>
  );
}