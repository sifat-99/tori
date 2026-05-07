import React, { useState } from "react";
import tori from "../assets/tori-logo.png";

import sajid from "../assets/team/sajid.png"
import sifat from "../assets/team/sifat.png"
import mosharrof from "../assets/team/mosharrof.png";
import tanvir from "../assets/team/tanvir.png";
import nafee from "../assets/team/nafee.png";
import ContactUs from "./ContactUs";

import { FaFacebookMessenger, FaBars, FaTimes } from "react-icons/fa";

const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Sajidul Islam",
      role: "Founder & CEO",
      img: sajid
    },
    {
      name: "Abdur Rahman",
      role: "Founder & CTO",
      img: sifat
    },
    {
      name: "Mosharrof Hossain",
      role: "Founder & CMO",
      img: mosharrof
    },
    {
      name: "Tanvir Ahmed",
      role: "Public Relations",
      img: tanvir
    },
    {
      name: "AFM Nafee",
      role: "Member",
      img: nafee
    }
  ];

  // scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#061826] text-white min-h-screen overflow-hidden font-sans">

      {/* navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">

          <div className="flex items-center gap-3">
            <div className="h-9 w-9 md:h-10 md:w-10 border rounded-full overflow-hidden bg-white/10">
              <img src={tori} alt="logo" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-lg md:text-2xl font-bold tracking-widest">ProjectTori</h1>
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex gap-6 md:gap-8 text-base md:text-lg">
            <a href="#home" className="hover:text-cyan-300 transition">Home</a>
            <a href="#about" className="hover:text-cyan-300 transition">About</a>
            <a href="#team" className="hover:text-cyan-300 transition">Team</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
          </div>

          {/* mobile menu */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-full bg-cyan-500/20 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Explore
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-cyan-500/20 border border-cyan-400 hover:bg-cyan-400 transition"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>

        {/* mobile dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/80 backdrop-blur-md border-t border-white/10 py-4 px-4 flex flex-col gap-3">
            <a 
              href="#home" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-300 transition py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-300 transition py-2 px-3 rounded-lg hover:bg-white/10"
            >
              About
            </a>
            <a 
              href="#team" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-300 transition py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="text-white hover:text-cyan-300 transition py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Contact
            </a>
            <button 
              onClick={() => {
                handleLinkClick();
                scrollToAbout();
              }}
              className="mt-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Explore
            </button>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <div id="home" className="relative h-screen flex flex-col items-center overflow-hidden">

        <div className="absolute inset-x-0 top-0 h-[45vh] bg-gradient-to-b from-[#1da1f2] via-[#aedefc] to-white z-0" />

        <div className="absolute inset-x-0 top-[40vh] h-[20vh] z-20 pointer-events-none">
          <div className="absolute w-[300%] h-full bg-cyan-300/20 animate-wave-slow opacity-50 blur-[1px]" />
          <div className="absolute w-[250%] h-full bg-cyan-400/30 animate-wave-mid opacity-40 blur-[2px]" />
          <div className="absolute w-[200%] h-full bg-gradient-to-b from-cyan-500 via-[#00838f] to-transparent animate-wave-fast" />
        </div>

        <div className="absolute inset-x-0 top-[45vh] bottom-0 bg-gradient-to-b from-[#00bcd4] via-[#006064] to-[#071f33]" />

        <div className="relative z-30 flex flex-col justify-center items-center h-full text-center px-4 pt-[35vh]">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold">
            Project <span className="text-cyan-400 animate-pulse">Tori</span>
          </h1>
          <p className="mt-5 text-base sm:text-xl md:text-2xl">
            Next Generation Underwater ROV System
          </p>
          <button 
            onClick={scrollToAbout}
            className="mt-10 px-8 md:px-12 py-3 md:py-4 rounded-full bg-white text-black hover:scale-110 transition font-bold"
          >
            DIVE NOW
          </button>
        </div>
      </div>

      {/* about section */}
      <section id="about" className="w-full bg-[#071f33] text-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-cyan-400">Project Tori</span>
          </h2>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">📜 Our Beginning</h3>
            <p className="text-gray-300 leading-relaxed">
              Project Tori শুরু হয়েছিল একটি ছোট আইডিয়া থেকে—একটা curiosity যে, আমরা কি এমন কিছু বানাতে পারি
              যেটা বাস্তব সমস্যার সমাধান করবে এবং একই সাথে আমাদের engineering skills কে next level এ নিয়ে যাবে।
              প্রথমে এটা ছিল শুধু একটা student project, কিন্তু ধীরে ধীরে এটা evolve করে একটি full engineering team effort এ পরিণত হয়।
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">🎯 Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              আমাদের mission হলো low-cost কিন্তু high-impact engineering solutions তৈরি করা—বিশেষ করে
              underwater systems, robotics, control systems এবং AI integration এর মাধ্যমে।
              আমরা চাই student level innovation কে বাস্তব world engineering এর কাছাকাছি নিয়ে যেতে।
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">🚀 Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              আমাদের vision হলো এমন একটি future তৈরি করা যেখানে student-built systems শুধু competition এর জন্য না,
              বরং real-world applications এ ব্যবহার করা যায়। আমরা চাই Project Tori future marine exploration,
              autonomous robotics এবং smart control systems এর একটি foundation হয়ে উঠুক।
            </p>
          </div>

          <div className="text-center mt-12 text-cyan-400 font-semibold text-lg">
            “Started as an idea — growing into an engineering movement.”
          </div>

        </div>
      </section>

      {/* team section */}
      <section id="team" className="py-24 md:py-32 px-4 md:px-6 text-center bg-[#061826] scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 mb-12 md:mb-16">Our Team</h2>

        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center">

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg hover:scale-110 transition duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="mt-3 md:mt-4 text-base md:text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-xs md:text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 md:mt-20 bg-cyan-900/20 border border-cyan-500/30 p-6 md:p-8 rounded-xl backdrop-blur-md relative rotate-[-2deg] shadow-lg shadow-cyan-500/20">

          <span className="text-5xl md:text-7xl text-cyan-400 absolute -top-6 md:-top-8 left-4 md:left-6">❝</span>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed italic">
            In the depths where light fades and pressure rises,  
            we choose to go further — not because it’s easy,  
            but because it’s unexplored.  

            <br /><br />

            Every wire, every line of code, every design we craft  
            is driven by a single belief —  
            that innovation begins where comfort ends.  

            <br /><br />

            We are the minds beneath the surface,  
            building the future in silence, strength, and determination.
          </p>

          <span className="text-5xl md:text-7xl text-cyan-400 absolute -bottom-8 md:-bottom-10 right-4 md:right-6">❞</span>

        </div>

      </section>

      {/* messenger button */}
      <a
        href="https://m.me/ProjectTori"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-12 z-50 bg-[#0084FF] hover:bg-[#0a6be0] p-2 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaFacebookMessenger size={28} className="text-white" />
      </a>

      <ContactUs/>

      {/* footer */}
      <footer className="bg-[#061826] border-t border-white/10 py-10 px-4 md:px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          <div className="order-1">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-9 w-9 md:h-10 md:w-10 rounded-full overflow-hidden border bg-white/10">
                <img src={tori} alt="logo" className="h-full w-full object-cover" />
              </div>
              <h1 className="text-lg md:text-xl font-bold tracking-widest">ProjectTori</h1>
            </div>

            <p className="mt-4 text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Building next-generation underwater ROV systems for exploration, research, and innovation.
            </p>
          </div>

          <div className="order-3 md:order-2">
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
              <li><a href="#team" className="hover:text-cyan-300 transition">Team</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
            </ul>
          </div>

          <div className="order-2 md:order-3">
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">Contact</h3>
            <p className="text-gray-400 text-sm">Email: projecttori@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">Phone: +880 1234-567890</p>

            <a
              href="https://m.me/ProjectTori"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-full bg-[#0084FF] hover:bg-[#0a6be0] text-white text-sm font-semibold transition"
            >
              Message Us
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ProjectTori. All rights reserved.
        </div>

      </footer>

    </div>
  );
};

export default Home;