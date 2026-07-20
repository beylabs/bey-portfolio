"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 bg-midnight text-white" id="contact">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Let's Build the Future</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Open for strategic partnerships in Digital Transformation, AI Implementation, <br className="hidden md:block" /> 
            and Institutional Governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:ksani.official@gmail.com" className="px-8 py-4 bg-goldAccent text-midnight font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
              Send an Email
            </a>
            <a href="https://linkedin.com/in/sanikhalidumar" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 rounded-full hover:bg-white/5 transition-colors">
              Connect on LinkedIn
            </a>
            <a href="https://github.com/beylabs" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-slate-700 rounded-full hover:bg-white/5 transition-colors">
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
