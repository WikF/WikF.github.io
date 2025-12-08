import React from 'react';
import { Users, Bot, Database, Workflow, BarChart3 } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, gradient }) => (
  <div className="group relative p-1 rounded-2xl bg-brand-secondary/40 hover:bg-brand-secondary/80 transition-colors duration-300">
    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
    <div className="relative h-full bg-[#161b24] p-8 rounded-xl border border-slate-800 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-colors" />
      
      <div className="mb-6 inline-flex p-3 rounded-lg bg-slate-900 border border-slate-800 text-white group-hover:scale-110 group-hover:border-brand-primary/50 transition-all duration-300">
        <Icon size={32} />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Specialized engineering for the modern data era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <ServiceCard 
            title="Data Platforms & Analytics"
            description="We build robust data services: from scalable pipelines and lakehouse architectures to advanced analytics platforms. We turn raw data into actionable insights."
            icon={Database}
            gradient="from-brand-primary to-orange-600"
          />
          <ServiceCard 
            title="AI & LLM Solutions"
            description="Cutting-edge applications leveraging Large Language Models. RAG architectures, custom fine-tuning, and agentic workflows."
            icon={Bot}
            gradient="from-orange-500 to-amber-500"
          />
          <ServiceCard 
            title="Team Augmentation"
            description="Need specialized talent? We provide top-tier Data Engineers, ML Ops specialists, and Backend developers to integrate seamlessly with your team."
            icon={Users}
            gradient="from-slate-600 to-slate-400"
          />
        </div>
        
        {/* Additional Highlight Strip */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-secondary to-[#1B1F2A] border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
             <div className="p-4 bg-brand-primary/10 rounded-full text-brand-primary">
               <Workflow size={32} />
             </div>
             <div>
               <h3 className="text-xl font-bold text-white">Tech Stack Agnostic</h3>
               <p className="text-slate-400 text-sm">Python, Rust, Go, TypeScript, PyTorch, TensorFlow.</p>
             </div>
          </div>
          <div className="h-px w-full md:w-px md:h-16 bg-slate-700"></div>
          <div className="text-center md:text-right">
             <p className="text-slate-300 font-medium">Focusing on high-performance</p>
             <p className="text-brand-primary font-bold text-2xl">Data-Intensive Applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;