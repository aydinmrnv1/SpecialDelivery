import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Sun, Home } from 'lucide-react';

const navItems = [
  { id: 'top', icon: Home, label: 'Home' },
  { id: 'program', icon: Music, label: 'Program' },
  { id: 'cast', icon: Users, label: 'Cast' },
  { id: 'courtyard', icon: Sun, label: 'Experience' },
];

export const Navigation: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex items-center gap-4 px-4 py-3 bg-black/60 backdrop-blur-2xl border border-amber-500/30 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.2)] hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] transition-shadow duration-500"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative group p-3 rounded-full hover:bg-white/10 transition-all duration-300 text-amber-100/70 hover:text-amber-100 hover:scale-110"
            aria-label={item.label}
          >
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <item.icon size={22} strokeWidth={1.5} className="relative z-10 drop-shadow-[0_0_8px_rgba(253,230,138,0.5)]" />
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 text-amber-50 text-[10px] uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap backdrop-blur-md border border-amber-500/20 shadow-xl">
              {item.label}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
};