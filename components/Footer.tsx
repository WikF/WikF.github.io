import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white tracking-tight">Data<span className="text-brand-primary">CEE</span></h3>
          <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} DataCEE. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-400">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;