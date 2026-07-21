"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight text-white pt-16">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-goldAccent/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-goldAccent font-mono text-sm tracking-widest uppercase mb-4 block">
            The Intersection of Governance & AI
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif">
            Architecting the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Digital Governance
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Bridging high-level public administration with enterprise software engineering.
            Specializing in the digital transformation of institutional workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#impact" className="px-8 py-4 bg-goldAccent text-midnight font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-goldAccent/20">
              View My Impact
            </a>
            <a href="#contact" className="px-8 py-4 border border-slate-700 rounded-full hover:bg-white/5 transition-colors">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
