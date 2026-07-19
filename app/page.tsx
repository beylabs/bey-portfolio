import Hero from '../components/sections/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="min-h-screen bg-ghost">
        <div className="flex items-center justify-center h-full text-slate-400 font-medium">
          Case Studies coming in the next push...
        </div>
      </div>
    </main>
  );
}
