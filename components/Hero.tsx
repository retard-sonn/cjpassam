"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-[#1A1108] bg-[#F4EBD7]">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
        background: 'radial-gradient(ellipse 60% 50% at 85% 15%, rgba(224,101,30,0.12), transparent 60%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(31,90,46,0.10), transparent 60%)'
      }}></div>
      <div className="absolute -bottom-[120px] -right-[40px] font-display text-[520px] text-[#1A1108] opacity-5 leading-[0.8] select-none pointer-events-none">
        CJP
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.95fr] gap-12 lg:gap-16 items-center relative z-10 px-5 sm:px-8 lg:px-14 pt-[48px] lg:pt-[72px] pb-[64px] lg:pb-[90px]">
        
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center">
          <div className="border border-[#8B1A1A] rounded-full px-4 py-2 text-[11px] font-mono tracking-[0.22em] uppercase text-[#8B1A1A] mb-8 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#8B1A1A] animate-pulse"></span>
            PARTY LAUNCH · LIVE SINCE YESTERDAY
          </div>

          <div className="relative inline-block">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[clamp(58px,9.5vw,138px)] font-display leading-[0.86] tracking-[-0.015em] text-[#1A1108] mb-7 uppercase relative z-10"
            >
              Voice of the<br />
              <span className="text-[#B84915]">Lazy</span> &<br />
              <em className="text-[#1F5A2E] font-serif italic font-normal tracking-[-0.02em] capitalize">Unemployed.</em>
            </motion.h1>
            
            {/* Gamusa Image */}
            <div className="absolute -right-[20px] sm:-right-[40px] lg:-right-[80px] -top-[40px] sm:-top-[60px] lg:-top-[80px] w-[100px] sm:w-[140px] lg:w-[220px] z-20 drop-shadow-xl transform rotate-[15deg] pointer-events-none">
              <img 
                src="https://i.ibb.co/N6jdPdfN/gamusa.png"
                alt="Assamese Gamusa"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-[520px]"
          >
            <p className="text-[17px] sm:text-[19px] leading-[1.55] text-[#3A2A1C] mb-4">
              A political party for the people the system forgot to count.<br />
              Five demands. Zero sponsors. One large, stubborn swarm.
            </p>
            <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[#6A5440] font-sans mb-8 sm:mb-10">
              এনে এটা ৰাজনৈতিক দল, যিসকলক ব্যৱস্থাই গণ্য কৰিবলৈ পাহৰি গৈছে।<br />
              পাঁচটা দাবী। শূন্য প্ৰায়োজক। এটা বিশাল, জেদী জাক।
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5 sm:gap-6 mb-10 sm:mb-14">
              <button
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#B84915] hover:bg-[#1A1108] text-[#F4EBD7] px-8 py-4 text-[14px] font-condensed tracking-[0.2em] font-bold uppercase border-2 border-[#1A1108] shadow-[6px_6px_0px_#1A1108] hover:shadow-[3px_3px_0px_#1A1108] hover:translate-y-[3px] hover:translate-x-[3px] transition-all flex items-center gap-3"
              >
                Join The Party <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <a href="#manifesto" className="text-[14px] font-condensed font-medium tracking-[0.2em] uppercase border-b border-[#1A1108] pb-1 hover:text-[#B84915] hover:border-[#B84915] transition-colors">
                Read The Manifesto
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1A1108]/20 pt-[22px]">
              <div className="flex flex-col gap-1.5 pr-[18px] border-r border-[#1A1108]/10">
                <strong className="text-[36px] font-display font-normal text-[#1A1108] leading-none">5</strong>
                <span className="text-[10.5px] font-mono tracking-[0.18em] uppercase text-[#6A5440]">Demands</span>
              </div>
              <div className="flex flex-col gap-1.5 pr-[18px] border-r-0 md:border-r border-[#1A1108]/10">
                <strong className="text-[36px] font-display font-normal text-[#1A1108] leading-none">0</strong>
                <span className="text-[10.5px] font-mono tracking-[0.18em] uppercase text-[#6A5440]">Corporate Donors</span>
              </div>
              <div className="flex flex-col gap-1.5 pr-[18px] border-r border-[#1A1108]/10 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-[#1A1108]/10">
                <strong className="text-[36px] font-display font-normal text-[#1A1108] leading-none">∞</strong>
                <span className="text-[10.5px] font-mono tracking-[0.18em] uppercase text-[#6A5440]">Patience</span>
              </div>
              <div className="flex flex-col gap-1.5 pr-[18px] mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-[#1A1108]/10">
                <strong className="text-[36px] font-display font-normal text-[#1A1108] leading-none">1</strong>
                <span className="text-[10.5px] font-mono tracking-[0.18em] uppercase text-[#6A5440]">Founder, No PA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Poster */}
        <motion.div 
          initial={{ x: 50, opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 50 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="bg-[#EADFC4] border-[3px] border-[#1A1108] shadow-[8px_8px_0_#1A1108,8px_8px_0_4px_#B84915] lg:shadow-[12px_12px_0_#1A1108,12px_12px_0_4px_#B84915] transform rotate-[1.5deg] relative overflow-hidden z-10 w-full">
            
            <img 
              src="https://i.ibb.co/0VJxhbjS/image.png"
              alt="Stronger Together Poster"
              className="w-full aspect-[1024/1180] object-cover object-top block"
              referrerPolicy="no-referrer"
            />
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
