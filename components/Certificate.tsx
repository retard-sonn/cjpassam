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
          className="w-[1000px] h-[750px] bg-[#fcfaf5] relative flex flex-row shadow-xl"
          style={{ 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
          }}
        >
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
            <span style={{ fontSize: "500px" }}>🪳</span>
          </div>

          {/* Outer ornate border container */}
          <div className="absolute inset-6 border-[3px] border-[#8c7355] pointer-events-none z-20"></div>
          <div className="absolute inset-[30px] border border-[#8c7355] pointer-events-none z-20"></div>
          
          {/* Corner embellishments */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t-[4px] border-l-[4px] border-[#8c7355] z-20"></div>
          <div className="absolute top-5 right-5 w-8 h-8 border-t-[4px] border-r-[4px] border-[#8c7355] z-20"></div>
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b-[4px] border-l-[4px] border-[#8c7355] z-20"></div>
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b-[4px] border-r-[4px] border-[#8c7355] z-20"></div>

          {/* Decorative Vertical Sash (Gamusa integrated) */}
          <div className="absolute left-[38px] top-[38px] bottom-[38px] w-[140px] z-10 border-r border-[#8c7355]/30 overflow-hidden flex items-stretch bg-[#F4EBD7]">
            <img 
              src="https://i.ibb.co/N6jdPdfN/gamusa.png" 
              alt="Gamusa Pattern" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80 filter saturate-50 contrast-125" 
              crossOrigin="anonymous"
            />
            {/* Overlay to give it a printed texture */}
            <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}></div>
          </div>

          {/* Main Content Area */}
          <div className="ml-[180px] w-full relative z-30 flex flex-col items-center justify-center px-[80px] text-center h-full pt-[60px] pb-[60px] box-border">
            
            <div className="text-[60px] mb-4 drop-shadow-sm opacity-90 leading-none">🪳</div>
            
            <h1 
              className="text-[40px] leading-tight text-[#2B2118] tracking-[0.1em] uppercase mb-1"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
            >
              Official Certificate of Membership
            </h1>
            
            <p 
              className="text-[20px] text-[#A62B16] tracking-[0.2em] uppercase mt-0 mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              সদস্যতাৰ চৰকাৰী প্ৰমাণপত্ৰ
            </p>

            <p 
              className="text-[17px] text-[#5C4A3D] uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              This document serves as formal validation that
            </p>

            <div className="w-full flex justify-center border-b-[2px] border-[#8c7355] pb-2 mb-8 px-10">
              <p 
                className="text-[76px] text-[#1A1108] leading-[0.8] pb-2"
                style={{ fontFamily: "'Great Vibes', cursive", textShadow: "1px 1px 2px rgba(0,0,0,0.05)" }}
              >
                {name || "Your Name Here"}
              </p>
            </div>

            <p 
              className="text-[19px] text-[#4A3B2F] max-w-[650px] leading-[1.8] mb-auto"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}
            >
              is a registered constituent of the CJP Assam Wing, hailing from the district of <strong className="text-[#A62B16] not-italic">{district || "Your District"}</strong>, and is firmly committed to the resilient preservation of laziness, procrastination, and chronic online presence.
            </p>

            <div className="w-full flex justify-between items-end mt-12 px-2">
              
              {/* Seal */}
              <div className="relative flex justify-center items-center">
                <div className="w-[140px] h-[140px] rounded-full flex items-center justify-center relative shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                  {/* Gold gradient background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#dfc27d] via-[#f7eab0] to-[#b88c3a] border-[2px] border-[#8A6A24]" />
                  <div className="absolute inset-[6px] rounded-full border-[1px] border-dashed border-[#8A6A24] opacity-50" />
                  <div className="absolute inset-[10px] rounded-full border-[1px] border-[#8A6A24] opacity-70 flex flex-col items-center justify-center p-2 bg-gradient-to-tl from-[#dfc27d] via-[#f9f1cd] to-[#b88c3a]">
                     <span style={{ fontSize: "32px", lineHeight: 1 }} className="mb-2 opacity-90">🪳</span>
                     <span className="text-[12px] text-[#5c4516] tracking-widest font-bold uppercase text-center leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>CJP<br/>ASSAM</span>
                  </div>
                   {/* Gold Foil Texture overlay */}
                   <div className="absolute inset-0 rounded-full opacity-30 mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/brushed-alum.png")'}}></div>
                </div>
              </div>

              {/* Signature */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-[240px] border-b-[1.5px] border-[#8c7355] text-center pb-1 relative h-[60px]">
                  {/* Handwritten signature */}
                  <span 
                    className="text-[52px] text-[#1a252f] leading-[0.5] absolute bottom-1 left-0 right-0 transform -rotate-3" 
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
