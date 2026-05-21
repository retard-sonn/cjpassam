"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Only show once per session or just show on load since there's no requirement to persist
    const hasSeen = sessionStorage.getItem("cjp_welcome_seen");
    if (!hasSeen) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("cjp_welcome_seen", "true");
    
    // Play audio
    const audioUrl = "https://pub-96341f2c15ec4f1a856db0d45591d6d5.r2.dev/azadi-divine-gully-boy-political-sukrut-edits-128k_ohmYZEQY.mp3";
    
    if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
        // loop or volume?
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
    }
    
    audioRef.current.play().catch(e => console.log("Audio playback was prevented:", e));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#1A1108]/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-[#F4EBD7] border-4 border-[#1A1108] p-8 max-w-[500px] w-full text-center relative shadow-[8px_8px_0_#B84915]"
          >
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-[64px] h-[64px]">
                 <circle cx="32" cy="32" r="29" fill="none" stroke="#B84915" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
                 <circle cx="32" cy="32" r="29" fill="none" stroke="#B84915" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
                 <circle cx="32" cy="32" r="29" fill="none" stroke="#B84915" strokeWidth="0.8"></circle>
                 <ellipse cx="32" cy="36" rx="11" ry="16" fill="#B84915"></ellipse>
                 <ellipse cx="32" cy="25" rx="7" ry="6" fill="#B84915"></ellipse>
                 <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#B84915" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
                 <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#F4EBD7"></rect>
              </svg>
            </div>
            
            <h2 className="font-display text-[28px] leading-tight text-[#1A1108] uppercase tracking-wide mb-4">
              Welcome to the <br /> <span className="text-[#B84915]">Assam Wing</span> <br /> of Cockroach Janta Party
            </h2>
            
            <div className="w-16 h-1 bg-[#1A1108] mx-auto mb-6"></div>
            
            <p className="font-sans font-medium text-[18px] text-[#3A2A1C] mb-8 italic">
              "Congratulations on exerting the bare minimum effort required to open this link. We admire your dedication to avoiding real work. Welcome to the swarm."
            </p>
            
            <button 
              onClick={handleClose}
              className="bg-[#1A1108] hover:bg-[#B84915] text-[#F4EBD7] px-8 py-4 font-condensed text-[16px] font-bold uppercase tracking-[0.2em] transition-all border-2 border-[#1A1108] hover:border-[#B84915] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_#1A1108] w-full"
            >
              I Accept My Laziness
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
