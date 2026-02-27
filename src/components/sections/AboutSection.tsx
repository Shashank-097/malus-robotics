"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { JSX, useEffect } from "react";

/* ---------------- COUNTER HOOK ---------------- */
function AnimatedCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2.2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function AboutSection(): JSX.Element {
  return (
    <section className="relative py-32 bg-[var(--light-bg)] overflow-hidden">

      {/* Ambient Background Blobs */}
      <div className="absolute -left-40 top-32 w-[30rem] h-[30rem] bg-[var(--accent)] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[24rem] h-[24rem] bg-cyan-400 opacity-5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--dark-bg)] leading-tight">
            Precision Engineering.
            <br />
            Intelligent Automation.
          </h2>

          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-xl">
            Malus Robotics delivers advanced industrial automation solutions —
            from robotics integration and PLC–SCADA systems to digital twins and
            virtual commissioning — enabling factories to operate smarter,
            faster, and with minimal downtime.
          </p>

          {/* Feature Bullets */}
          <div className="mt-10 space-y-5">
            {[
              "End-to-End System Integration & Commissioning",
              "Robotics Simulation & Digital Twin Deployment",
              "Global Engineering Support & Production Optimization",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                <p className="text-[var(--muted)]">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats + Progress */}
          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              { label: "Projects", value: 50 },
              { label: "Engineers", value: 10 },
              { label: "Countries", value: 3 },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl font-bold text-[var(--accent)]">
                  <AnimatedCounter value={stat.value} />+
                </h3>
                <p className="text-sm text-[var(--muted)] mt-1">{stat.label}</p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-3 h-[3px] bg-gradient-to-r from-[var(--accent)] to-cyan-400 rounded-full"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Image Glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[var(--accent)] opacity-10 blur-[90px] rounded-full" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/factory.jpg"
              alt="Industrial Automation"
              width={700}
              height={520}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Floating Glass Card */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 hidden md:block
                       backdrop-blur-xl bg-white/80 border border-white/40
                       p-6 rounded-xl shadow-xl max-w-xs"
          >
            <p className="text-sm font-semibold text-[var(--accent)]">
              Industry 4.0 Ready
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Intelligent, data-driven automation engineered for modern
              manufacturing ecosystems.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}