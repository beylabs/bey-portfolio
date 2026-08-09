"use client";
import { motion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Understand", description: "Sit with the actual workflow and the people running it before touching any tool." },
  { number: "02", title: "Analyze", description: "Find the real bottleneck, not the symptom, the specific step causing delay or error." },
  { number: "03", title: "Design", description: "Design a solution that fits the platform the institution can actually run and maintain." },
  { number: "04", title: "Build", description: "Build with the same discipline as any production system, concurrency safety, security, audit trails." },
  { number: "05", title: "Automate", description: "Remove the repetitive manual step entirely, not just make it faster." },
  { number: "06", title: "Improve", description: "Watch real usage, fix what breaks, and keep refining after launch." },
];

export default function HowIThink() {
  return (
    <section className="py-24 bg-midnight text-white" id="how-i-think">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-goldAccent font-mono text-xs tracking-widest uppercase mb-3 block">
            Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">How I Think</h2>
          <div className="h-1 w-20 bg-goldAccent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <span className="text-goldAccent font-mono text-sm">{step.number}</span>
              <h3 className="text-xl font-bold font-serif mt-2 mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
