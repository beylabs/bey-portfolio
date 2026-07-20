export default function Footer() {
  return (
    <footer className="py-12 bg-midnight text-white text-center border-t border-slate-800">
      <div className="container mx-auto px-6">
        <p className="text-sm text-slate-500">
          &copy; 2026 <span className="text-white font-medium">Khalid Sani Umar</span>
        </p>
        <p className="text-[10px] text-slate-600 mt-2 uppercase tracking-widest">
          Built with Next.js, Firebase & Google Apps Script
        </p>
      </div>
    </footer>
  );
}
