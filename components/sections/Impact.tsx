"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "../../constants/projects";
import Link from 'next/link';

export default function Impact() {
  return (
    <section className="py-24 bg-ghost" id="impact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-midnight font-serif mb-4">Measured Impact</h2>
          <div className="h-1 w-20 bg-goldAccent mx-auto"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            Transforming traditional administrative burdens into high-performance digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`h-2 w-12 rounded-full mb-6 bg-gradient-to-r ${proj.color}`}></div>
              <h3 className="text-2xl font-bold text-midnight mb-2">{proj.title}</h3>
              <p className="text-goldAccent font-mono text-xs uppercase tracking-tighter mb-4">{proj.role}</p>
              <p className="text-slate-600 mb-6 leading-relaxed">{proj.description}</p>
              
              <div className="bg-slate-50 p-4 rounded-lg mb-6 border-l-4 border-goldAccent">
                <p className="text-sm font-bold text-midnight mb-1">Key Result:</p>
                <p className="text-sm text-slate-600 italic">{proj.impact}</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-1 bg-slate-100 text-slate-500 rounded uppercase font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${proj.slug}`} className="text-center py-2 bg-midnight text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors">
                  View Full Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
