"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      "End-to-end automation integration covering system design, electrical coordination, commissioning, and support.",
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
    <section className="relative py-44 bg-[var(--light-bg)] text-[var(--text-dark)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-36"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Industrial Automation Services
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Engineered for
            <br />
            Industrial Reliability
          </h2>

          <p className="mt-8 text-lg text-[var(--muted)] max-w-3xl">
            We build automation systems with a focus on reliability, clarity,
            and long-term operational performance — designed to scale as your
            production grows.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="space-y-44">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-24 items-center"
            >
              {/* IMAGE */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_50px_140px_rgba(0,0,0,0.18)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={820}
                  height={620}
                  className="rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* CONTENT */}
              <div>
                <div className="mb-6 w-20 h-[3px] bg-[var(--accent)]" />

                <h3 className="text-3xl md:text-4xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {/* METRICS */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {service.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-[var(--accent)] pl-4"
                    >
                      <div className="text-lg font-semibold">
                        {metric.value}
                      </div>
                      <div className="text-sm text-[var(--muted)]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* TAGS */}
                <div className="mt-10 flex flex-wrap gap-3">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-xs font-medium rounded-full bg-black/5 text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-sm font-semibold tracking-wide text-[var(--accent)]">
                  Discuss Technical Scope →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ENTERPRISE CTA */}
        <div className="mt-56 border-t pt-20 text-center">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)]">
            Built to Scale With You
          </p>
          <h3 className="mt-6 text-3xl md:text-4xl font-bold">
            Let’s Design Your Automation Roadmap
          </h3>
        </div>
      </div>
    </section>
  );
}