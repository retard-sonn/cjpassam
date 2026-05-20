"use client";

export default function CreatorSupport() {
  return (
    <section className="py-[100px] bg-[#1A1108] text-[#F4EBD7] px-5 sm:px-8 lg:px-14 border-b-2 border-[#E0651E]">
      <div className="max-w-[760px] mx-auto text-center flex flex-col items-center">
        <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[#F0823A] mb-[22px] bg-[#E0651E]/10 px-3 py-1.5 rounded-sm">
          CREATOR SUPPORT
        </span>
        <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.92] tracking-[-0.005em] mb-6">
          Feature the Swarm. <br/>
          <span className="text-white/60 text-[clamp(24px,3vw,40px)]">Tag us on your shorts & reels.</span>
        </h2>
        <p className="font-sans text-[16px] sm:text-[18px] leading-[1.6] text-white/80 max-w-[560px] mx-auto mb-10">
          Make a short video about the Cockroach Janta Party and tag us. We run entirely on public frustration, satire, and viral content. Help us grow the movement!
        </p>
        
        <div className="inline-block bg-[#F4EBD7] p-2 sm:p-4 border-[3px] border-[#E0651E] transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
          <div className="border-[3px] border-dashed border-[#1A1108] p-6 lg:p-10 flex flex-col items-center bg-[#EADFC4]">
             <a href="https://www.instagram.com/cjpassaam/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
               <svg className="mb-4 text-[#1A1108]" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg>
             </a>
             <p className="font-mono text-[12px] sm:text-[13px] text-[#3A2A1C] tracking-[0.15em] font-bold uppercase mb-4">GET FEATURED</p>
             <p className="font-sans text-[20px] sm:text-[26px] text-[#1A1108] font-bold border-b-4 border-[#B84915] pb-1 tracking-wide text-center">
               @cjpassaam
             </p>
             <p className="font-sans text-[13px] sm:text-[14px] text-[#6A5440] mt-5 max-w-[320px] text-center italic leading-[1.5]">
               (Make a funny intro, scream at a wall for 30 seconds, or review our manifesto. The lazier, the better.)
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}
