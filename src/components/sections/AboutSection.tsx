"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ---------------- COUNTER ---------------- */
function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: reduceMotion ? 0 : 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value, count, reduceMotion]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--light-bg)] py-20 sm:py-28 lg:py-32">

      {/* ===== AMBIENT BLOBS (SUBTLE) ===== */}
      <div className="absolute -left-40 top-24 w-[28rem] h-[28rem] bg-[var(--accent)] opacity-[0.08] blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[22rem] h-[22rem] bg-cyan-400 opacity-[0.05] blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[var(--accent)]">
            Who We Are
          </span>

          <h2 className="
            mt-4
            text-3xl sm:text-4xl lg:text-5xl
            font-bold leading-tight
            text-[var(--dark-bg)]
          ">
            Precision Engineering.
            <br />
            Intelligent Automation.
          </h2>

          <p className="
            mt-6
            max-w-xl
            text-base sm:text-lg
            text-[var(--muted)]
            leading-relaxed
          ">
            Malus Robotics delivers advanced industrial automation solutions —
            from robotics integration and PLC–SCADA systems to digital twins and
            virtual commissioning — enabling factories to operate smarter,
            faster, and with minimal downtime.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-5">
            {[
              "End-to-End System Integration & Commissioning",
              "Robotics Simulation & Digital Twin Deployment",
              "Global Engineering Support & Production Optimization",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="
                  mt-2
                  w-2.5 h-2.5
                  rounded-full
                  bg-[var(--accent)]
                  shadow-[0_0_8px_var(--accent)]
                " />
                <p className="text-[var(--muted)]">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-6 sm:gap-8">
            {[
              { label: "Projects", value: 50 },
              { label: "Engineers", value: 10 },
              { label: "Countries", value: 3 },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">
                  <AnimatedCounter value={stat.value} />+
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[var(--muted)]">
                  {stat.label}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="
                    mt-3 h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-[var(--accent)]
                    to-cyan-400
                  "
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* IMAGE GLOW */}
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-[var(--accent)] opacity-[0.08] blur-[90px] rounded-full" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/factory.jpg"
              alt="Industrial Automation Facility"
              width={700}
              height={520}
              priority
              className="
                w-full h-auto
                rounded-2xl
                shadow-2xl
              "
            />
          </motion.div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute -bottom-10 -left-10
              hidden lg:block
              max-w-xs
              p-6
              rounded-xl
              backdrop-blur-xl
              bg-white/80
              border border-white/40
              shadow-xl
            "
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
