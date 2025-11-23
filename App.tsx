import React from 'react';
import Starfield from './components/Starfield';
import PixieDust from './components/PixieDust';
import { Reveal } from './components/Reveal';
import { Navigation } from './components/Navigation';
import { 
  PROGRAM_SONGS, ANGELS, HOLY_FAMILY, SHEPHERDS, WISE_MEN, 
  CHOIR, PRODUCTION_MUSIC, PRODUCTION_CREATIVE, PRODUCTION_TECH 
} from './data';
import { Music, Star, Flame, Coffee, Camera, Mic2, HeartHandshake } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#020410] text-slate-200 selection:bg-amber-500/30 overflow-hidden relative">
      <Starfield />
      <Navigation />

      {/* Aurora Borealis Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[60vw] bg-purple-600/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite] mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-teal-600/10 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite] mix-blend-screen delay-1000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[80vw] h-[50vw] bg-amber-500/5 rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite] mix-blend-screen delay-2000" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020410]/50 to-[#020410] z-10" />
      </div>

      {/* HERO SECTION */}
      <header id="top" className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center z-10 perspective-1000">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {/* Rotating Light Beam Effect - Subtler for Aura style */}
           <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite] opacity-10 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(252,211,77,0.1)_20deg,transparent_40deg)]" />
        </div>

        <Reveal width="100%" className="max-w-5xl mx-auto relative">
          {/* Pixie Dust Container */}
          <div className="absolute -inset-20 z-20 pointer-events-none">
             <PixieDust />
          </div>

          <div className="mb-8 flex flex-col items-center gap-4 relative z-10">
            <span className="text-amber-200/80 text-xs md:text-sm tracking-[0.4em] uppercase font-semibold drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]">First Slavic Evangelical Baptist Church Presents</span>
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-300 to-transparent shadow-[0_0_25px_rgba(251,191,36,1)]" />
          </div>
          
          {/* Gold Embossed Title */}
          <h1 className="font-['Cinzel_Decorative'] text-6xl md:text-8xl lg:text-9xl mb-8 tracking-wide gold-text relative z-10 p-4">
            Special Delivery
          </h1>
          
          <p className="font-['Playfair_Display'] italic text-xl md:text-3xl text-amber-100/80 mb-10 tracking-wide drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
            A Christmas Musical Experience
          </p>
          
          <p className="max-w-xl mx-auto text-slate-300 leading-relaxed text-sm md:text-lg mb-14 font-light mix-blend-screen shadow-black drop-shadow-md">
            On a quiet night in Bethlehem, Heaven’s greatest gift arrived in the humblest of places. 
            Tonight, through music, story, and light, we remember the King.
          </p>

          <a href="#program" className="group relative z-30 inline-flex items-center gap-4 px-12 py-5 bg-black/40 border border-amber-500/50 rounded-full overflow-hidden transition-all duration-500 hover:border-amber-300 hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)]">
             <div className="absolute inset-0 bg-amber-500/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
             <Star className="w-5 h-5 text-amber-200 group-hover:rotate-180 transition-transform duration-700 ease-out drop-shadow-[0_0_15px_rgba(253,230,138,1)]" />
             <span className="relative font-['Cinzel'] text-amber-50 tracking-[0.2em] text-sm uppercase font-semibold group-hover:text-white text-shadow-glow">Begin Journey</span>
          </a>
        </Reveal>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-32 space-y-32 md:space-y-48">

        {/* PROGRAM SECTION */}
        <section id="program" className="scroll-mt-32">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-['Cinzel_Decorative'] text-amber-100 mb-6 drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]">The Musical Journey</h2>
              <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
              <p className="mt-6 text-slate-400 font-light text-lg">From the first note to the final blessing</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 bg-slate-950/40 backdrop-blur-md border border-amber-500/10 rounded-[2rem] p-8 md:p-14 shadow-[0_0_60px_rgba(0,0,0,0.6)] hover:shadow-[0_0_80px_rgba(251,191,36,0.05)] transition-shadow duration-700">
              <div>
                <div className="mb-10">
                  <h3 className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-2 font-bold drop-shadow-md">
                    <Mic2 size={14} className="text-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" /> Opening
                  </h3>
                  <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-100 font-['Cinzel'] text-lg">Opening Greeting</span>
                    <span className="text-slate-500 text-sm">Daniel Petrenko</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2 font-bold drop-shadow-md">
                    <Music size={14} className="text-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" /> Selections 1-6
                  </h3>
                  {PROGRAM_SONGS.slice(0, 6).map((song) => (
                    <div key={song.id} className="group flex items-center gap-5 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default border border-transparent hover:border-amber-500/20 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                      <span className="text-amber-500/60 font-['Cinzel'] text-sm w-6 text-right group-hover:text-amber-300 transition-colors font-bold">{song.id.toString().padStart(2, '0')}</span>
                      <span className="text-slate-300 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">{song.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="space-y-4 mb-10">
                  <h3 className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-6 md:opacity-0 font-bold">Selections 7-12</h3>
                  {PROGRAM_SONGS.slice(6).map((song) => (
                    <div key={song.id} className="group flex items-center gap-5 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default border border-transparent hover:border-amber-500/20 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                      <span className="text-amber-500/60 font-['Cinzel'] text-sm w-6 text-right group-hover:text-amber-300 transition-colors font-bold">{song.id.toString().padStart(2, '0')}</span>
                      <span className="text-slate-300 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">{song.title}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10">
                   <h3 className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-4 font-bold drop-shadow-md flex items-center gap-2">
                     <HeartHandshake size={14} className="text-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" /> Closing
                   </h3>
                   <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-100 font-['Cinzel'] text-lg">Closing Message</span>
                      <span className="text-slate-400 text-sm">Alan Inje & Russ Moroz</span>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-slate-500 leading-relaxed italic border-l-2 border-amber-500/30 pl-4">
                    "The Child in the manger is the Savior on the cross."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CAST SECTION */}
        <section id="cast" className="scroll-mt-32">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-['Cinzel_Decorative'] text-amber-100 mb-6 drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]">Cast & Characters</h2>
              <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Angels Card */}
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md border border-amber-500/10 p-10 rounded-[2rem] hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(251,191,36,0.15)] group h-full">
                <h3 className="text-2xl font-['Cinzel'] text-amber-200 mb-8 flex items-center gap-4 pb-4 border-b border-white/5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_15px_rgba(251,191,36,1)]"></span>
                  </span>
                  Heavenly Hosts
                </h3>
                <ul className="grid gap-y-4">
                  {ANGELS.map((p, i) => (
                    <li key={i} className="flex justify-between items-center text-sm group/item">
                      <span className="text-slate-400 group-hover/item:text-slate-300 transition-colors">{p.role}</span>
                      <span className="text-slate-100 font-medium font-['Cinzel'] group-hover/item:text-amber-100 transition-colors">{p.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special Night (Consolidated) Card */}
              <div className="bg-gradient-to-br from-indigo-950/40 to-slate-950/60 backdrop-blur-md border border-blue-500/10 p-8 md:p-10 rounded-[2rem] hover:border-blue-400/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(96,165,250,0.2)] group flex flex-col h-full">
                <h3 className="text-2xl font-['Cinzel'] text-blue-200 mb-8 flex items-center gap-4 pb-4 border-b border-white/5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_15px_rgba(96,165,250,1)]"></span>
                  </span>
                  A Special Night
                </h3>
                
                <div className="flex flex-col gap-10">
                  {/* Holy Family */}
                  <div>
                    <h4 className="text-amber-200/90 text-xs uppercase tracking-[0.2em] mb-4 font-bold border-l-2 border-amber-500/50 pl-3">The Holy Family</h4>
                    <ul className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/5">
                      {HOLY_FAMILY.map((p, i) => (
                        <li key={i} className="flex justify-between items-center text-sm group/item">
                          <span className="text-slate-400 group-hover/item:text-slate-300">{p.role}</span>
                          <span className="text-slate-100 font-medium font-['Cinzel'] group-hover/item:text-blue-100">{p.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Shepherds */}
                    <div>
                      <h4 className="text-amber-200/90 text-xs uppercase tracking-[0.2em] mb-4 font-bold border-l-2 border-amber-500/50 pl-3">Shepherds</h4>
                      <ul className="space-y-3">
                        {SHEPHERDS.map((name, i) => (
                          <li key={i} className="text-sm text-slate-300 font-['Cinzel'] hover:text-amber-100 transition-colors pl-2">{name}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Wise Men */}
                    <div>
                      <h4 className="text-amber-200/90 text-xs uppercase tracking-[0.2em] mb-4 font-bold border-l-2 border-amber-500/50 pl-3">Wise Men</h4>
                      <ul className="space-y-3">
                        {WISE_MEN.map((name, i) => (
                          <li key={i} className="text-sm text-slate-300 font-['Cinzel'] hover:text-amber-100 transition-colors pl-2">{name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </section>

        {/* CHOIR SECTION */}
        <section className="scroll-mt-32">
          <Reveal>
             <div className="bg-gradient-to-b from-indigo-950/40 via-slate-950/60 to-black/60 rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-1000 shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(251,191,36,0.1)]">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/10 transition-colors duration-1000" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 text-center mb-12">
                   <h2 className="text-3xl md:text-4xl font-['Cinzel_Decorative'] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-200 mb-3 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">Choir</h2>
                   <p className="text-slate-400 font-light tracking-wide">Voices of Wonder</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 relative z-10">
                  {CHOIR.map((name, idx) => (
                    <div key={idx} className="text-xs md:text-sm text-slate-400 hover:text-amber-100 transition-colors text-center font-light hover:scale-105 duration-300">
                      {name}
                    </div>
                  ))}
                </div>
                
                <p className="mt-12 text-center text-xs text-slate-600 relative z-10 border-t border-white/5 pt-8 max-w-lg mx-auto">
                   Thank you, families, for your courage, joy, and bright hearts.
                </p>
             </div>
          </Reveal>
        </section>

        {/* TEAM SECTION */}
        <section className="scroll-mt-32">
           <Reveal>
             <div className="text-center mb-16">
               <span className="text-amber-500/60 uppercase tracking-[0.3em] text-xs font-bold drop-shadow-md">Behind the Scenes</span>
               <h2 className="text-3xl md:text-4xl font-['Cinzel_Decorative'] text-slate-200 mt-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Production Team</h2>
             </div>
             
             <div className="grid md:grid-cols-3 gap-12 text-sm max-w-6xl mx-auto">
                <div className="space-y-8 bg-white/[0.02] p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(251,191,36,0.1)] transition-all">
                   <h3 className="text-amber-100 font-['Cinzel'] text-lg border-b border-white/10 pb-2 mb-4">Music</h3>
                   {PRODUCTION_MUSIC.map((p, i) => (
                      <div key={i}>
                        <div className="text-amber-500/70 text-[10px] uppercase tracking-wider mb-1 font-bold">{p.role}</div>
                        <div className="text-slate-300 font-['Cinzel']">{p.name}</div>
                      </div>
                   ))}
                </div>
                <div className="space-y-8 bg-white/[0.02] p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(251,191,36,0.1)] transition-all">
                   <h3 className="text-amber-100 font-['Cinzel'] text-lg border-b border-white/10 pb-2 mb-4">Creative</h3>
                   {PRODUCTION_CREATIVE.map((p, i) => (
                      <div key={i}>
                        <div className="text-amber-500/70 text-[10px] uppercase tracking-wider mb-1 font-bold">{p.role}</div>
                        <div className="text-slate-300 font-['Cinzel']">{p.name}</div>
                      </div>
                   ))}
                </div>
                <div className="space-y-8 bg-white/[0.02] p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(251,191,36,0.1)] transition-all">
                   <h3 className="text-amber-100 font-['Cinzel'] text-lg border-b border-white/10 pb-2 mb-4">Technical</h3>
                   {PRODUCTION_TECH.map((p, i) => (
                      <div key={i}>
                        <div className="text-amber-500/70 text-[10px] uppercase tracking-wider mb-1 font-bold">{p.role}</div>
                        <div className="text-slate-300 font-['Cinzel']">{p.name}</div>
                      </div>
                   ))}
                </div>
             </div>
           </Reveal>
        </section>

        {/* COURTYARD EXPERIENCE */}
        <section id="courtyard" className="scroll-mt-32 pb-20">
          <Reveal>
             <div className="relative rounded-[3rem] overflow-hidden border border-amber-500/20 bg-black/60 shadow-[0_0_80px_rgba(245,158,11,0.2)] group hover:shadow-[0_0_120px_rgba(245,158,11,0.3)] transition-shadow duration-700">
                {/* Background image tint */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-black/80 to-black z-0" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                
                <div className="relative z-10 p-8 md:p-20 text-center">
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-amber-500/10 mb-8 border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                    <Flame className="w-8 h-8 text-amber-400 animate-pulse drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-['Cinzel_Decorative'] text-transparent bg-clip-text bg-gradient-to-b from-amber-50 to-amber-400 mb-8 drop-shadow-sm">The Glowing Courtyard</h2>
                  <p className="max-w-2xl mx-auto text-amber-100/90 mb-16 leading-relaxed font-light text-lg">
                    After the final note, you’re warmly invited to step outside. 
                    We’ve prepared a cozy courtyard where you can savor the beauty of the season together.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="bg-amber-950/20 p-8 rounded-2xl border border-amber-500/10 backdrop-blur-md hover:bg-amber-900/30 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center mb-6 text-amber-300 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                        <Coffee size={24} />
                      </div>
                      <h3 className="font-['Cinzel'] text-amber-100 mb-3 text-lg">Hot Chocolate & Café</h3>
                      <p className="text-sm text-amber-200/60 leading-relaxed">Complimentary warm drinks and seasonal treats prepared with love.</p>
                    </div>

                    <div className="bg-amber-950/20 p-8 rounded-2xl border border-amber-500/10 backdrop-blur-md hover:bg-amber-900/30 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center mb-6 text-amber-300 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                        <Flame size={24} />
                      </div>
                      <h3 className="font-['Cinzel'] text-amber-100 mb-3 text-lg">Fire & Warmth</h3>
                      <p className="text-sm text-amber-200/60 leading-relaxed">Gather around outdoor fireplaces and share stories in the glow.</p>
                    </div>

                    <div className="bg-amber-950/20 p-8 rounded-2xl border border-amber-500/10 backdrop-blur-md hover:bg-amber-900/30 transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center mb-6 text-amber-300 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                        <Camera size={24} />
                      </div>
                      <h3 className="font-['Cinzel'] text-amber-100 mb-3 text-lg">Lights & Memories</h3>
                      <p className="text-sm text-amber-200/60 leading-relaxed">Walk through light displays and capture moments at our photo spots.</p>
                    </div>
                  </div>
                </div>
             </div>
          </Reveal>
        </section>

        {/* BLESSING */}
        <section className="text-center py-20 relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto px-6">
               <div className="inline-block p-4 rounded-full bg-white/5 mb-8 border border-white/5 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                 <Star className="w-6 h-6 text-slate-400" />
               </div>
               <h3 className="font-['Cinzel_Decorative'] text-3xl text-amber-200 mb-8 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">Light for the Journey</h3>
               <p className="font-['Playfair_Display'] text-2xl md:text-4xl italic text-slate-300 mb-12 leading-tight">
                 "May the Light of Christ, born in Bethlehem, fill your heart with peace, your home with joy, and your life with hope this Christmas season."
               </p>
               <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto mb-10" />
               <p className="text-slate-500 text-sm tracking-widest uppercase">Merry Christmas from the Special Delivery Musical Team.</p>
            </div>
          </Reveal>
        </section>

      </main>

      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-slate-600 text-xs">
         <p className="hover:text-slate-500 transition-colors">&copy; 2025 First Slavic Evangelical Baptist Church</p>
      </footer>
    </div>
  );
}

export default App;