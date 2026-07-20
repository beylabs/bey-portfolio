import { PROJECTS } from '../../../constants/projects';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-ghost py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <a href="/" className="text-midnight font-bold hover:underline mb-8 block">← Back to Portfolio</a>
        
        <div className={`h-2 w-24 rounded-full mb-8 bg-gradient-to-r ${project.color}`}></div>
        
        <h1 className="text-5xl font-bold text-midnight font-serif mb-4">{project.title}</h1>
        <p className="text-goldAccent font-mono uppercase tracking-widest mb-8">{project.role}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="text-xl font-bold text-midnight mb-3">The Challenge</h3>
              <p className="text-slate-600 leading-relaxed">{project.description}</p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold text-midnight mb-3">The Engineering Win</h3>
              <p className="text-slate-600 leading-relaxed">
                Implemented a high-performance data bridge using la-Symmetry architecture, 
                ensuring 100% synchronization between frontend and backend systems.
              </p>
            </section>
            
            <section className="bg-midnight text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-goldAccent mb-3">Quantifiable Result</h3>
              <p className="text-lg italic leading-relaxed">{project.impact}</p>
            </section>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-midnight mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 bg-slate-100 text-slate-500 rounded font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
