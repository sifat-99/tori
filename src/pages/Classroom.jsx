import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import tori from "../assets/tori-logo.png";

const Classroom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const videos = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Dummy Video Title ${i + 1}`,
    description: "Placeholder description for video content."
  }));

  return (
    <div className="bg-[#061826] text-white min-h-screen font-sans flex flex-col">
      {/* Navbar (Simplified for Classroom) */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 md:h-10 md:w-10 border rounded-full overflow-hidden bg-white/10">
              <img src={tori} alt="logo" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-lg md:text-2xl font-bold tracking-widest">ProjectTori</h1>
          </div>

          <div className="hidden md:flex gap-2 md:gap-4 text-base md:text-lg">
            <Link to="/" className="btn-wave px-4 py-2 rounded-lg transition font-medium"><span className="relative z-10">Back to Home</span></Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn-wave p-2 rounded-lg bg-cyan-500/20 border border-cyan-400 transition"
            >
              <span className="relative z-10">{isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}</span>
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/80 backdrop-blur-md border-t border-white/10 py-4 px-4 flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="btn-wave text-white transition py-2 px-4 rounded-lg"
            >
              <span className="relative z-10">Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 md:px-6 max-w-6xl mx-auto flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-cyan-400">Classroom</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our video lessons and tutorials to learn more about Project Tori, underwater robotics, and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-[#071f33] rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all group shadow-lg shadow-black/50">
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#061826] to-[#00bcd4]/10 cursor-pointer">
                {/* Simulated video thumbnail with logo and type */}
                <div className="absolute inset-0 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 opacity-30">
                  <img src={tori} alt="logo" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3" />
                  <span className="font-bold tracking-widest uppercase text-sm">Video Content</span>
                </div>

                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 bg-cyan-500/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-auto bg-[#061826]">
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ProjectTori. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Classroom;
