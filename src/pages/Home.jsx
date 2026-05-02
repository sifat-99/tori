import React from "react";

const Home = () => {
  return (
    <div className="bg-[#061826] text-white min-h-screen overflow-hidden font-sans">
      
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-widest text-cyan-200">PROJECT TORI</h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-200">
            <a href="#" className="hover:text-cyan-300 transition">Home</a>
            <a href="#" className="hover:text-cyan-300 transition">About</a>
            <a href="#" className="hover:text-cyan-300 transition">Features</a>
          </div>
          <button className="px-4 py-2 text-sm rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-200 hover:bg-cyan-400 hover:text-black transition">
            Explore
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION (REALLY DYNAMIC WAVE) ================= */}
      <div className="relative h-screen flex flex-col items-center overflow-hidden">
        
        {/* Sky - Upper Layer */}
        <div className="absolute inset-x-0 top-0 h-[45vh] bg-gradient-to-b from-[#1da1f2] via-[#aedefc] to-white z-0" />

        {/* Animated 3-Layer Wave Surface */}
        <div className="absolute inset-x-0 top-[40vh] h-[20vh] z-20 pointer-events-none">
          {/* Wave 1: Back (Slowest) */}
          <div className="absolute w-[300%] h-full bg-cyan-300/20 animate-wave-slow opacity-50 blur-[1px]" 
               style={{ borderRadius: '43% 47% 44% 48% / 40% 44% 42% 46%' }} />
          
          {/* Wave 2: Middle */}
          <div className="absolute w-[250%] h-full bg-cyan-400/30 animate-wave-mid opacity-40 blur-[2px]" 
               style={{ borderRadius: '40% 45% 42% 48% / 45% 40% 46% 42%' }} />
          
          {/* Wave 3: Front (Fastest & Main Surface) */}
          {/* Ekhane white bodle Blue-ish Cyan gradient use kora hoyeche */}
          <div className="absolute w-[200%] h-full bg-gradient-to-b from-cyan-500 via-[#00838f] to-transparent animate-wave-fast" 
               style={{ borderRadius: '45% 40% 46% 42% / 40% 45% 42% 48%' }} />
        </div>

        {/* Deep Water - Lower Layer */}
        <div className="absolute inset-x-0 top-[45vh] bottom-0 bg-gradient-to-b from-[#00bcd4] via-[#006064] to-[#071f33] z-0" />

        {/* HERO CONTENT */}
        <div className="relative z-30 flex flex-col justify-center items-center h-full text-center px-4 pt-[35vh]">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter drop-shadow-2xl">
            Project <span className="text-cyan-400 animate-pulse">Tori</span>
          </h1>
          <p className="mt-5 text-white/90 text-xl md:text-2xl max-w-xl font-medium drop-shadow-lg">
            Next Generation Underwater ROV System
          </p>
          <button className="mt-10 px-12 py-4 rounded-full bg-cyan-400 border-2 border-white/30 text-black hover:bg-white hover:scale-110 transition-all shadow-2xl text-lg font-bold">
            DIVE NOW
          </button>
        </div>

        {/* Blend Layer */}
        <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#071f33] to-transparent z-10" />
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-32 px-6 text-center bg-[#071f33] relative z-20">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-4xl font-bold text-cyan-200 tracking-tight">About Our Submarine</h2>
           <p className="mt-8 text-gray-300 text-xl leading-relaxed">
             Project Tori is an advanced underwater ROV designed for exploration, 
             real-time data collection, and precision navigation.
           </p>
        </div>
      </section>

      {/* ================= CSS ANIMATIONS ================= */}
      <style>
        {`
          @keyframes wave-move {
            0% { transform: translateX(0) rotate(0deg); }
            50% { transform: translateX(-25%) rotate(2deg); }
            100% { transform: translateX(-50%) rotate(0deg); }
          }
          
          .animate-wave-fast {
            animation: wave-move 7s ease-in-out infinite;
          }
          .animate-wave-mid {
            animation: wave-move 12s ease-in-out infinite;
            left: -50%;
          }
          .animate-wave-slow {
            animation: wave-move 20s ease-in-out infinite;
            left: -100%;
          }

          /* Fluid Border Radius Animation for the "Liquid" feel */
          @keyframes fluid {
            0% { border-radius: 45% 40% 46% 42% / 40% 45% 42% 48%; }
            50% { border-radius: 40% 45% 42% 48% / 45% 40% 46% 42%; }
            100% { border-radius: 45% 40% 46% 42% / 40% 45% 42% 48%; }
          }
          .animate-wave-fast, .animate-wave-mid, .animate-wave-slow {
            animation-name: wave-move, fluid;
          }
        `}
      </style>
    </div>
  );
};

export default Home;