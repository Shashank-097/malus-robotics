"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ================= SERVICES DATA ================= */
const services = [
  {
    title: "Industrial Robotics",
    description:
      "Design and integration of industrial robotic cells engineered for accuracy, repeatability, and continuous operation in manufacturing environments.",
    image: "/images/robotics.jpg",
    metrics: [
      { label: "Designed for Uptime", value: "24/7 Operation" },
      { label: "Focus Area", value: "Precision Automation" },
    ],
    tags: [
      "6-Axis Robot Cells",
      "End-of-Arm Tooling",
      "Vision-Guided Systems",
      "Safety-Compliant Design",
    ],
  },
  {
    title: "PLC & SCADA Systems",
    description:
      "Robust PLC programming and SCADA system architectures for real-time control, monitoring, and industrial data visibility.",
    image: "/images/plc.jpg",
    metrics: [
      { label: "Control Standard", value: "IEC 61131-3" },
      { label: "System Type", value: "Industrial Control" },
    ],
    tags: [
      "PLC Logic Development",
      "SCADA Visualization",
      "Alarm & Event Handling",
      "Industrial Networking",
    ],
  },
  {
    title: "Digital Twin Simulation",
    description:
      "Virtual system modeling to validate automation logic, workflows, and layouts before physical deployment.",
    image: "/images/digital1-twin.jpg",
    metrics: [
      { label: "Purpose", value: "Risk Reduction" },
      { label: "Application", value: "Virtual Commissioning" },
    ],
    tags: [
      "Process Simulation",
      "Virtual PLC Logic",
      "System Validation",
      "Performance Analysis",
    ],
  },
  {
    title: "System Integration",
    description:
      "End-to-end automation integration covering system design, electrical coordination, commissioning, and long-term support.",
    image: "/images/integration.jpg",
    metrics: [
      { label: "Delivery Model", value: "Project-Based" },
      { label: "Compliance Focus", value: "Industrial Safety" },
    ],
    tags: [
      "Automation Architecture",
      "Electrical Integration",
      "On-Site Commissioning",
      "Lifecycle Support",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      className="
        relative
        bg-[var(--light-bg)]
        text-[var(--text-dark)]
        pt-6 sm:pt-10 lg:pt-14
        pb-20 sm:pb-28 lg:pb-32
      "
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14 sm:mb-18"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
            Industrial Automation Services
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Engineered for
            <br />
            Industrial Reliability
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[var(--muted)]">
            Modular automation services designed for performance, reliability,
            and long-term industrial scalability.
          </p>
        </motion.div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                bg-white
                border border-black/5
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7">
                <div className="mb-3 w-10 h-[3px] bg-[var(--accent)]" />

                <h3 className="text-xl sm:text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {service.description}
                </p>

                {/* METRICS */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {service.metrics.map((metric, i) => (
                    <div key={i} className="border-l-2 border-[var(--accent)] pl-3">
                      <div className="text-sm font-semibold">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--muted)]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* TAGS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        text-[10px] font-medium
                        rounded-full
                        bg-black/5
                        text-black/70
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                  Explore Service <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= FOOTER CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 sm:mt-28 pt-14 border-t text-center"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--muted)]">
            Built to Scale With You
          </p>
          <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">
            Let’s Design Your Automation Roadmap
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
