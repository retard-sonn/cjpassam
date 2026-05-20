export default function Footer() {
  return (
    <footer className="bg-[#1A1108] text-[#F4EBD7]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-[80px] pt-[64px] pb-[48px] lg:pt-[80px] lg:pb-[60px]">
        {/* Left Col */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3.5 mb-[18px]">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
                <circle cx="32" cy="32" r="29" fill="none" stroke="#E0651E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(-90 32 32)"></circle>
                <circle cx="32" cy="32" r="29" fill="none" stroke="#1F5A2E" strokeWidth="3" strokeDasharray="46 1000" transform="rotate(30 32 32)"></circle>
                <ellipse cx="32" cy="36" rx="11" ry="16" fill="#F0E5D0"></ellipse>
                <ellipse cx="32" cy="25" rx="7" ry="6" fill="#F0E5D0"></ellipse>
                <rect x="26" y="23" width="12" height="3.5" rx="1" fill="#1a1410"></rect>
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 leading-none">
              <span className="font-display text-[16px] text-[#F4EBD7] tracking-[0.01em] leading-[0.94] uppercase">Cockroach<br />Janta Party</span>
              <span className="font-mono text-[10px] text-[#F0823A] tracking-[0.16em] uppercase flex flex-col sm:flex-row items-start sm:items-center gap-1.5 mt-1 sm:mt-0">
                 <span className="bg-[#E0651E] text-white px-1.5 py-0.5 rounded-sm font-bold shadow-[1px_1px_0_#FFF] leading-none">ASSAM WING</span>
                 <span>ককৰোচ জনতা পাৰ্টি</span>
              </span>
            </div>
          </div>
          <p className="font-sans text-[15px] leading-[1.6] text-white/60 max-w-[320px]">
            A political party for the lazy, the unemployed, and the chronically correct.
            Headquartered wherever the wifi works.
          </p>
        </div>

        {/* Right Col */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-9">
          <div className="flex flex-col">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#F0823A] font-semibold mb-[18px] pb-3 border-b border-white/20">The Party</h4>
            <ul className="list-none flex flex-col gap-[11px]">
              <li><a href="#vision" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Vision</a></li>
              <li><a href="#manifesto" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Manifesto</a></li>
              <li><a href="#contact" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Founder</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#F0823A] font-semibold mb-[18px] pb-3 border-b border-white/20">Get involved</h4>
            <ul className="list-none flex flex-col gap-[11px]">
              <li><a href="#eligibility" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Eligibility</a></li>
              <li><a href="#join" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Join the party</a></li>
              <li><a href="#join" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Volunteer</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#F0823A] font-semibold mb-[18px] pb-3 border-b border-white/20">Follow</h4>
            <ul className="list-none flex flex-col gap-[11px]">
              <li><a href="#" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Twitter / X</a></li>
              <li><a href="https://www.instagram.com/cjpassaam/" target="_blank" rel="noopener noreferrer" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Instagram</a></li>
              <li><a href="#" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">YouTube</a></li>
              <li><a href="#" className="font-sans text-[15px] text-[#F4EBD7]/70 hover:text-[#F0823A] transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-[22px]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#F4EBD7]/50 gap-4">
          <span>© 2026 COCKROACH JANTA PARTY · ALL RANTS RESERVED.</span>
          <span className="bg-[#E0651E] text-[#F4EBD7] px-3 py-1 font-bold tracking-[0.22em]">
            ⚠️ A WORK OF SATIRE
          </span>
          <span className="flex gap-2">
            <a href="#" className="hover:text-[#F0823A] transition-colors">Privacy</a> · 
            <a href="#" className="hover:text-[#F0823A] transition-colors">Press</a> · 
            <a href="#contact" className="hover:text-[#F0823A] transition-colors">Contact</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
