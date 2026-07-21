"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#impact" },
  { label: "Certifications", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-white font-serif font-bold text-lg">
          Khalid Sani Umar
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 text-sm hover:text-goldAccent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-goldAccent text-midnight font-bold text-sm rounded-full hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-midnight border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 text-sm hover:text-goldAccent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2 bg-goldAccent text-midnight font-bold text-sm rounded-full text-center"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
