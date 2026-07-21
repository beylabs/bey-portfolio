"use client";
import { motion } from "framer-motion";

const STATS = [
  { value: "6+", label: "Years in Public Administration & Digital Transformation" },
  { value: "3", label: "Live Institutional Systems Designed & Deployed" },
  { value: "75%", label: "Reduction in Manual Administrative Workload" },
  { value: "500+", label: "Staff Served Across Zonal Operations" },
];

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-goldAccent font-mono text-xs tracking-widest uppercase mb-3 block">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-midnight font-serif mb-6 leading-tight">
              Where public administration meets production code.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I lead administration and HR operations for a federal government institution
              in Nigeria, and I build the software that runs it. Over the past three years,
              I've designed and deployed three live systems now used daily by government
              staff, students, and institutional stakeholders across multiple state offices.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Most people in senior public sector roles delegate the technical work.
              I write it myself, from atomic concurrency handling in a multi-office
              headcount portal, to salted password hashing and session persistence in a
              live school management platform. That combination is rare, and it's the
              lens I bring to every system I build: institutional constraints, engineered properly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-ghost border border-slate-100"
              >
                <p className="text-3xl md:text-4xl font-bold text-midnight font-serif mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
