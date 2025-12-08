import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { YES_VARIANTS } from '../constants';

const Hero: React.FC = () => {
  const [step, setStep] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    // If step is even (0, 2, 4...), we are showing "Data CEE".
    // If step is odd (1, 3, 5...), we are showing a "Data? Yes!" variant.
    const isBaseState = step % 2 === 0;
    
    // Faster animation cycle: 1500ms for base, 1200ms for variant
    const delay = isBaseState ? 1500 : 1200;
    
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
      setFadeKey((prev) => prev + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [step]);

  const isBaseState = step % 2 === 0;
  
  // Calculate which "Yes" word to show
  const yesIndex = Math.floor(step / 2) % YES_VARIANTS.length;

  // Base state: "Data" + "CEE" (no space). Variant state: "Data?" + "Yes!" (with space)
  const prefix = isBaseState ? "Data" : "Data?";
  const suffix = isBaseState ? "CEE" : YES_VARIANTS[yesIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight min-h-[1.2em]">
          <span className="inline-block transition-all duration-300">
            {prefix}
          </span>
          <br className="md:hidden" />
          <span 
            key={fadeKey} 
            className={`text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent inline-block transition-all duration-500 transform animate-fade-in-up ${isBaseState ? '' : 'ml-2 md:ml-4'}`}
          >
            {suffix}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The Data & AI oriented software house powering the next generation of business in Central Eastern Europe and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
          >
            Let's Talk Data
          </a>
          <a 
            href="#services"
            className="px-8 py-4 bg-brand-secondary/50 text-white border border-slate-700 rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:border-slate-500"
          >
            View Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;