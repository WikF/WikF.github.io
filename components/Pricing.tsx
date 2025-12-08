import React from 'react';
import { Nut, Handshake } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Engagement</h2>
          <p className="text-xl text-slate-400">No hidden fees, no corporate overhead bloat.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Small Projects Card */}
          <div className="bg-brand-secondary/40 border border-slate-800 rounded-3xl p-10 flex flex-col items-center text-center hover:border-slate-600 transition-colors">
            <div className="w-20 h-20 bg-slate-700/30 rounded-full flex items-center justify-center text-slate-300 mb-6">
              <Nut size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Micro Projects</h3>
            <p className="text-4xl font-extrabold text-slate-300 mb-6">For Peanuts</p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Have a small script, a quick data scraper, or a simple integration? We don't overcharge for simplicity. Quick turnaround, minimal bureaucracy.
            </p>
            <ul className="text-sm text-slate-300 space-y-3 mb-8 text-left w-full pl-8">
              <li className="list-disc">Quick automation scripts</li>
              <li className="list-disc">Data extraction & cleaning</li>
              <li className="list-disc">Simple API integrations</li>
            </ul>
            <a href="#contact" className="mt-auto w-full py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors">
              Request Quote
            </a>
          </div>

          {/* Big Projects Card */}
          <div className="bg-gradient-to-b from-brand-secondary to-[#151921] border border-brand-primary/30 rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden hover:border-brand-primary/60 transition-colors">
            <div className="absolute top-0 right-0 px-4 py-1 bg-brand-primary text-white text-xs font-bold rounded-bl-xl">
              ENTERPRISE
            </div>
            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-6">
              <Handshake size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Complex Solutions</h3>
            <p className="text-4xl font-extrabold text-white mb-6">Let's Talk</p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Building a full-scale AI platform or a complex data warehouse? We act as your strategic partner. Flexible engagement models (Time & Material or Fixed Price).
            </p>
            <ul className="text-sm text-slate-300 space-y-3 mb-8 text-left w-full pl-8">
              <li className="list-disc">End-to-end LLM Application Development</li>
              <li className="list-disc">Cloud Infrastructure (Databricks/AWS)</li>
              <li className="list-disc">Dedicated Data Engineering Teams</li>
            </ul>
            <a href="#contact" className="mt-auto w-full py-3 rounded-xl bg-brand-primary text-white font-semibold hover:bg-red-600 transition-colors shadow-lg shadow-brand-primary/20">
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;