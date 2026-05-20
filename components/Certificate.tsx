import React, { forwardRef } from 'react';

interface CertificateProps {
  name: string;
  district: string;
}

const Certificate = forwardRef<HTMLDivElement, CertificateProps>(({ name, district }, ref) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Great+Vibes&family=Cinzel:wght@400..900&display=swap');
      `}} />
      {/* We apply isolated scaling so we can embed it properly on-screen but ensure it renders at high res exactly 1000x750 */}
      <div className="absolute pointer-events-none opacity-[0.01] z-[-100] left-[-9999px] top-[0] overflow-visible">
        <div 
          ref={ref}
          id="membership-certificate"
          className="w-[1000px] h-[750px] bg-[#fcfaf5] relative flex flex-row shadow-xl overflow-hidden"
          style={{ 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
          }}
        >
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-[600px] h-[600px]">
              <circle cx="32" cy="32" r="29" fill="none" stroke="#1A1108" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
              <circle cx="32" cy="32" r="29" fill="none" stroke="#1A1108" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
              <circle cx="32" cy="32" r="29" fill="none" stroke="#1A1108" strokeWidth="0.8"></circle>
              <ellipse cx="32" cy="36" rx="11" ry="16" fill="#1A1108"></ellipse>
              <ellipse cx="32" cy="25" rx="7" ry="6" fill="#1A1108"></ellipse>
              <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#1A1108" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
              <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#1A1108"></rect>
            </svg>
          </div>

          {/* Outer ornate border container */}
          <div className="absolute inset-6 border-[3px] border-[#8c7355] pointer-events-none z-20"></div>
          <div className="absolute inset-[30px] border border-[#8c7355] pointer-events-none z-20"></div>
          
          {/* Corner embellishments */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t-[4px] border-l-[4px] border-[#8c7355] z-20"></div>
          <div className="absolute top-5 right-5 w-8 h-8 border-t-[4px] border-r-[4px] border-[#8c7355] z-20"></div>
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b-[4px] border-l-[4px] border-[#8c7355] z-20"></div>
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-[4px] border-r-[4px] border-[#8c7355] z-20"></div>

          {/* Decorative Vertical Sash (Gamusa Motif) 
              Instead of placing an arbitrary stretched PNG, we replicate the traditional red-and-white motif 
              as a sophisticated printed border pattern. */}
          <div className="absolute left-[38px] top-[38px] bottom-[38px] w-[85px] z-10 border-r-2 border-[#8c7355]/40 bg-[#FDFAF4] flex flex-col items-center justify-between shadow-[inset_-3px_0_10px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Gamusa side red borders */}
            <div className="absolute left-[8px] top-0 bottom-0 w-[5px] bg-[#A62B16]"></div>
            <div className="absolute right-[8px] top-0 bottom-0 w-[5px] bg-[#A62B16]"></div>
            
            {/* The gamusa image used purely as a multiply texture over the sash to give it real fabric character */}
            <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply pointer-events-none filter sepia-[0.3] contrast-150 grayscale" style={{
              backgroundImage: 'url("https://i.ibb.co/N6jdPdfN/gamusa.png")',
              backgroundSize: '150% auto',
              backgroundPosition: 'center top'
            }}></div>

            <div className="w-full flex-1 flex flex-col justify-between py-12 z-10">
              <div className="flex flex-col gap-[14px] items-center">
                 <div className="w-[36px] h-[36px] bg-[#A62B16] transform rotate-45 flex items-center justify-center shadow-sm">
                    <div className="w-[16px] h-[16px] bg-[#FDFAF4]"></div>
                 </div>
                 <div className="w-[20px] h-[20px] bg-[#A62B16] transform rotate-45 flex items-center justify-center">
                    <div className="w-[6px] h-[6px] bg-[#FDFAF4]"></div>
                 </div>
                 <div className="w-[10px] h-[10px] bg-[#A62B16] transform rotate-45"></div>
              </div>

              <div className="flex flex-col gap-[14px] items-center">
                 <div className="w-[10px] h-[10px] bg-[#A62B16] transform rotate-45"></div>
                 <div className="w-[20px] h-[20px] bg-[#A62B16] transform rotate-45 flex items-center justify-center">
                    <div className="w-[6px] h-[6px] bg-[#FDFAF4]"></div>
                 </div>
                 <div className="w-[36px] h-[36px] bg-[#A62B16] transform rotate-45 flex items-center justify-center shadow-sm">
                    <div className="w-[16px] h-[16px] bg-[#FDFAF4]"></div>
                 </div>
              </div>
            </div>
            
            {/* Top and Bottom stripes */}
            <div className="absolute top-0 left-0 right-0 h-[30px] flex flex-col justify-evenly">
              <div className="w-full h-[2px] bg-[#A62B16] opacity-90"></div>
              <div className="w-full h-[2px] bg-[#A62B16] opacity-90"></div>
              <div className="w-full h-[3px] bg-[#A62B16]"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[30px] flex flex-col justify-evenly">
              <div className="w-full h-[3px] bg-[#A62B16]"></div>
              <div className="w-full h-[2px] bg-[#A62B16] opacity-90"></div>
              <div className="w-full h-[2px] bg-[#A62B16] opacity-90"></div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="ml-[145px] w-full relative z-30 flex flex-col items-center justify-center px-[60px] text-center h-full pt-[55px] pb-[55px] box-border">
            
            <div className="mb-5 drop-shadow-sm opacity-90 flex justify-center">
               <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-[64px] h-[64px]">
                 <circle cx="32" cy="32" r="29" fill="none" stroke="#8c7355" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
                 <circle cx="32" cy="32" r="29" fill="none" stroke="#8c7355" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
                 <circle cx="32" cy="32" r="29" fill="none" stroke="#8c7355" strokeWidth="0.8"></circle>
                 <ellipse cx="32" cy="36" rx="11" ry="16" fill="#8c7355"></ellipse>
                 <ellipse cx="32" cy="25" rx="7" ry="6" fill="#8c7355"></ellipse>
                 <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#8c7355" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
                 <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#3D2B1F"></rect>
               </svg>
            </div>
            
            <h1 
              className="text-[40px] leading-[1.1] text-[#2B2118] tracking-[0.12em] uppercase mb-1"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
            >
              Official Certificate of<br/>Membership
            </h1>
            
            <p 
              className="text-[20px] text-[#A62B16] tracking-[0.2em] uppercase mt-2 mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              সদস্যতাৰ চৰকাৰী প্ৰমাণপত্ৰ
            </p>

            <p 
              className="text-[17px] text-[#5C4A3D] uppercase tracking-[0.16em] mb-7"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              This document serves as formal validation that
            </p>

            <div className="w-full max-w-[600px] flex justify-center border-b-[2px] border-[#8c7355] pb-2 mb-8 px-10">
              <p 
                className="text-[76px] text-[#1A1108] leading-[0.8] pb-1 truncate"
                style={{ fontFamily: "'Great Vibes', cursive", textShadow: "1px 1px 2px rgba(0,0,0,0.05)" }}
              >
                {name || "Your Name Here"}
              </p>
            </div>

            <p 
              className="text-[19px] text-[#4A3B2F] max-w-[620px] leading-[1.8] mb-auto"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}
            >
              is a registered constituent of the CJP Assam Wing, hailing from the district of <strong className="text-[#A62B16] not-italic font-bold tracking-wide uppercase font-sans text-[16px] ml-1 mr-1">{district || "Your District"}</strong>, and is firmly committed to the resilient preservation of laziness, procrastination, and chronic online presence.
            </p>

            <div className="w-full flex justify-between items-end mt-10 px-4">
              
              {/* Seal */}
              <div className="relative flex justify-center items-center">
                <div className="w-[140px] h-[140px] rounded-full flex items-center justify-center relative shadow-[0_4px_15px_rgba(0,0,0,0.12)]">
                  {/* Gold gradient background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#dfc27d] via-[#f7eab0] to-[#b88c3a] border-[2px] border-[#8A6A24]" />
                  <div className="absolute inset-[6px] rounded-full border-[1px] border-dashed border-[#8A6A24] opacity-50" />
                  <div className="absolute inset-[10px] rounded-full border-[1px] border-[#8A6A24] opacity-70 flex flex-col items-center justify-center p-2 bg-gradient-to-tl from-[#dfc27d] via-[#f9f1cd] to-[#b88c3a]">
                     <div className="mb-2 opacity-90">
                       <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-[32px] h-[32px]">
                         <circle cx="32" cy="32" r="29" fill="none" stroke="#5c4516" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
                         <circle cx="32" cy="32" r="29" fill="none" stroke="#5c4516" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
                         <circle cx="32" cy="32" r="29" fill="none" stroke="#5c4516" strokeWidth="0.8"></circle>
                         <ellipse cx="32" cy="36" rx="11" ry="16" fill="#5c4516"></ellipse>
                         <ellipse cx="32" cy="25" rx="7" ry="6" fill="#5c4516"></ellipse>
                         <path d="M28 17 Q22 10 18 8 M36 17 Q42 10 46 8" stroke="#5c4516" strokeWidth="1.6" fill="none" strokeLinecap="round"></path>
                         <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#3D2B1F"></rect>
                       </svg>
                     </div>
                     <span className="text-[12px] text-[#5c4516] tracking-widest font-bold uppercase text-center leading-[1.2]" style={{ fontFamily: "'Cinzel', serif" }}>CJP<br/>ASSAM</span>
                  </div>
                   {/* Gold Foil Texture layer */}
                   <div className="absolute inset-0 rounded-full opacity-30 mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/brushed-alum.png")'}}></div>
                </div>
              </div>

              {/* Signature */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-[240px] border-b-[1.5px] border-[#8c7355] text-center pb-1 relative h-[60px]">
                  {/* Handwritten signature */}
                  <span 
                    className="text-[52px] text-[#1a252f] leading-[0.5] absolute bottom-2 left-0 right-0 transform -rotate-3" 
                    style={{ fontFamily: "'Great Vibes', cursive", opacity: 0.9 }}
                  >
                    Abhijeet Dipke
                  </span>
                </div>
                <p className="mt-2 text-[12px] uppercase tracking-[0.2em] text-[#5C4A3D]" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
                  Founder & Supreme Scavenger
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Certificate.displayName = 'Certificate';

export default Certificate;
