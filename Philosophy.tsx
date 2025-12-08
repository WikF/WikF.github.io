import React from 'react';
import { Code2, Briefcase, Database } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#141820] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our DNA
            </h2>
            <div className="space-y-6">
               <blockquote className="text-2xl md:text-3xl font-medium leading-normal text-brand-primary font-serif italic">
                "We are engineers that run business, not the business that runs on engineers."
              </blockquote>
              <p className="text-slate-400 text-lg leading-relaxed">
                We believe in technical excellence driven by pragmatic business goals. No fluff, no endless meetings—just high-quality code that solves real problems.
              </p>
              
              <div className="bg-brand-secondary/30 p-4 rounded-xl border border-slate-700/50">
                 <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                    <Database size={20} className="text-brand-primary" />
                    <span>Modern Data Stack Experts</span>
                 </div>
                 <p className="text-slate-400 text-sm">
                   We live and breathe the modern ecosystem: <span className="text-slate-200">dbt, Databricks, Snowflake, Cloud (AWS/GCP/Azure)</span>, and scalable orchestration.
                 </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-orange-600 rounded-2xl blur-lg opacity-10 transform rotate-3"></div>
             <div className="relative bg-[#1B1F2A] p-8 rounded-2xl border border-slate-800 shadow-2xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Technical Leadership</h3>
                      <p className="text-slate-400">Founded by senior engineers who understand the complexity of modern data stacks.</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-800"></div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Business Pragmatism</h3>
                      <p className="text-slate-400">We optimize for ROI. Whether it's a POC or an enterprise platform, the numbers must make sense.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;