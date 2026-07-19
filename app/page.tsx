import Hero from '../components/sections/Hero';
import Impact from '../components/sections/Impact';
import Vault from '../components/sections/Vault';

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <Vault />
      <footer className="py-12 bg-midnight text-white text-center border-t border-slate-800">
        <p className="text-sm text-slate-400">
          © 2026 Pillarcode. Architected by Bey.
        </p>
      </footer>
    </main>
  );
}
