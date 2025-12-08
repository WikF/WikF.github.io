import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-secondary to-brand-dark rounded-3xl p-8 md:p-16 text-center border border-brand-primary/30 shadow-2xl relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your data?</h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Whether it's peanuts or big business, we are ready to code. Drop us a line and tell us about your challenge.
        </p>
        
        <a 
          href="mailto:hello@datacee.com" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-slate-200 transition-all transform hover:-translate-y-1"
        >
          <Mail className="w-5 h-5" />
          hello@datacee.com
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Contact;