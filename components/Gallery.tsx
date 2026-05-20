"use client";

import Script from "next/script";

export default function Gallery() {
  return (
    <section className="py-[100px] lg:py-[140px] bg-[#EADFC4] border-b-2 border-[#1A1108] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 mb-10">
         <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[#B84915] mb-[16px] border border-[#B84915] px-3 py-1">
           SOCIAL FEED
         </span>
         <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[0.92] tracking-[-0.005em] text-[#1A1108]">
           Visuals of The <em className="font-serif italic font-normal text-[#1F5A2E]">Movement.</em>
         </h2>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="border-[3px] border-[#1A1108] shadow-[10px_10px_0_#B84915] bg-white overflow-hidden p-2 sm:p-4 rounded-xl min-h-[500px]">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-475e4dde-118e-46a8-beea-ca7bb7ed1679" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  )
}
