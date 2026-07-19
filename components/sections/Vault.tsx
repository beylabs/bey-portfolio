"use client";
import { motion } from "framer-motion";
import { CERTS } from "../../constants/certs";

export default function Vault() {
  return (
    <section className="py-24 bg-white" id="certs">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-midnight font-serif mb-4">Technical DNA</h2>
          <div className="h-1 w-20 bg-goldAccent mx-auto"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            A curated collection of 42+ global certifications validating expertise in AI, Security, and Governance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 border border-slate-100 rounded-xl bg-ghost hover:border-goldAccent transition-colors group"
            >
              <p className="text-xs font-bold text-goldAccent uppercase mb-1">{cert.category}</p>
              <h4 className="text-sm font-bold text-midnight group-hover:text-blue-600 transition-colors">{cert.name}</h4>
              <p className="text-[10px] text-slate-400 mt-1">{cert.issuer}</p>
            </motion.div>
          ))}
          <div className="p-4 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-center">
            <p className="text-xs font-bold text-slate-400">...and 32 more professional credentials</p>
          </div >
        </div>
      </div>
    </section>
  );
}
