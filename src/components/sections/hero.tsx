"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden
                 flex items-center bg-black text-gray-200"
    >
      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* ===== DARK INDUSTRIAL OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B3A3B]/90 via-black/85 to-black/95" />

      {/* ===== ENGINEERING GRID ===== */}
      <div
        className="absolute inset-0 opacity-[0.08]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:120px_120px]"
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10">
        {/* ===== HEADLINE ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="
            font-bold tracking-tight
            leading-[1.05]
            text-[clamp(2.6rem,6vw,5.5rem)]
            max-w-[20ch]
          "
        >
          Industrial
          <br />
          <span
            className="text-transparent bg-clip-text
            bg-gradient-to-r from-[#5B8770] via-[#C6CCCC] to-[#5B8770]"
          >
            Automation & Robotics
          </span>
        </motion.h1>

        {/* ===== SUBTEXT ===== */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="
            mt-8 text-gray-400
            text-[clamp(1rem,1.6vw,1.25rem)]
            max-w-[60ch]
          "
        >
          End-to-end robotics integration, PLC & SCADA systems,
          digital twin simulation, and intelligent automation
          engineered for real industrial environments.
        </motion.p>

        {/* ===== CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="
              px-8 py-3 rounded-md font-semibold tracking-wide
              bg-[#5B8770] text-black
              hover:shadow-[0_0_35px_rgba(91,135,112,0.7)]
              transition-all
            "
          >
            Explore Solutions
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            className="
              px-8 py-3 rounded-md border border-[#9AA2A2]
              text-[#C6CCCC]
              hover:border-[#5B8770] hover:text-[#5B8770]
              transition
            "
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* ===== TRUST STRIP ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            mt-20 flex flex-wrap gap-x-12 gap-y-4
            text-xs uppercase tracking-widest text-gray-500
          "
        >
          <span>Robotics Integration</span>
          <span>PLC & SCADA</span>
          <span>Digital Twin</span>
          <span>System Integration</span>
          <span>Virtual Commissioning</span>
        </motion.div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        className="absolute bottom-14 left-1/2 -translate-x-1/2
                   text-xs tracking-widest text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        SCROLL
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 w-[1px] h-12 bg-[#5B8770]"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      />
    </section>
  );
}
