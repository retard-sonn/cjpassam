"use client";

import { useState, useRef, useEffect } from "react";
import * as htmlToImage from "html-to-image";
import Certificate from "./Certificate";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", district: "" });
  const [stats, setStats] = useState({ visitors: 0, members: 0 });
  const certificateRef = useRef<HTMLDivElement>(null);
  const hasVisitedRef = useRef(false);

  useEffect(() => {
    // Record visit and fetch initial stats
    if (!hasVisitedRef.current) {
      hasVisitedRef.current = true;
      fetch('/api/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'visit' })
      })
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
    } else {
      // Just fetch latest if re-rendering without visit increment
      fetch('/api/stats')
        .then(res => res.json())
        .then(data => setStats(data))
        .catch(console.error);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      district: { value: string };
    };
    setFormData({
      name: target.name.value,
      district: target.district.value,
    });
    
    // Increment member count
    fetch('/api/stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'register' })
    })
    .then(res => res.json())
    .then(data => setStats(data))
    .catch(console.error);

    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };


  const downloadCertificate = () => {
    if (certificateRef.current) {
      htmlToImage.toPng(certificateRef.current, { quality: 0.95, pixelRatio: 2 })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `CJP_Membership_${formData.name.replace(/\s+/g, "_")}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Failed to generate certificate", err);
        });
    }
  };

  return (
    <section id="contact" className="py-[80px] lg:py-[120px] bg-[#F4EBD7] border-b-2 border-[#1A1108] px-5 sm:px-8 lg:px-14">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[56px] lg:gap-[80px] items-start">
        
        {/* Left Column: Contact info */}
        <div>
          <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[#B84915] mb-[22px]">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[0.92] tracking-[-0.005em] text-[#1A1108] mb-4">
            Connect<br />
            with us.
          </h2>
          <p className="font-sans text-[18px] leading-[1.6] text-[#3A2A1C] mb-10 max-w-md">
            Want to join, volunteer, complain, or send a meme? Use the form. We read everything. We reply to most things.
          </p>

          <ul className="list-none mt-10 flex flex-col gap-[18px]">
            <li className="grid grid-cols-[110px_1fr] gap-4 pb-4 border-b border-[#1A1108]/15 items-baseline">
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#6A5440]">Email</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-[#1A1108] font-medium break-words md:break-normal w-full overflow-wrap-anywhere">contact@cockroachjantaparty.org</span>
            </li>
            <li className="grid grid-cols-[110px_1fr] gap-4 pb-4 border-b border-[#1A1108]/15 items-baseline">
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#6A5440]">Press</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-[#1A1108] font-medium break-words md:break-normal w-full overflow-wrap-anywhere">contact@cockroachjantaparty.org</span>
            </li>
            <li className="grid grid-cols-[110px_1fr] gap-4 pb-4 border-b border-[#1A1108]/15 items-baseline">
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#6A5440]">Headquarters</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-[#1A1108] font-medium">Wherever the wifi works (in Assam).</span>
            </li>
            <li className="grid grid-cols-[110px_1fr] gap-4 items-baseline">
              <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#6A5440]">Founder</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-[#1A1108] font-medium flex flex-col gap-1">
                Abhijeet Dipke
                <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#6A5440] font-normal">FOUNDER & CONVENOR</span>
              </span>
            </li>
          </ul>

          {/* Live Stats */}
          <div className="mt-12 p-5 border-2 border-[#1A1108] bg-[#EADFC4] shadow-[4px_4px_0_#1A1108] max-w-sm">
            <h4 className="font-mono text-[10px] tracking-widest text-[#B84915] uppercase font-bold mb-4">Live Movement Stats</h4>
            <div className="flex justify-between items-center border-b border-[#1A1108]/20 pb-3 mb-3">
              <span className="font-sans text-[14px] text-[#3A2A1C]">Total Site Visitors</span>
              <span className="font-mono text-[16px] text-[#1A1108] font-bold">{stats.visitors.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-sans text-[14px] text-[#3A2A1C]">Members Registered</span>
              <span className="font-mono text-[16px] text-[#B84915] font-bold">{stats.members.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded form aesthetic */}
        <div className="bg-[#EADFC4] border-[3px] border-[#1A1108] shadow-[10px_10px_0_#1A1108] p-6 lg:p-[36px_36px_32px] flex flex-col gap-[22px]">
          {submitted ? (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="bg-[#F4EBD7] border-2 border-[#1A1108] w-full p-8 text-center text-[#1A1108]">
                <div className="text-6xl mb-4">🪳</div>
                <h3 className="text-2xl font-display uppercase mb-2 text-[#1F5A2E]">Welcome to the swarm.</h3>
                <p className="text-[#3A2A1C] font-sans mb-8">Your application has been received.</p>
                
                <button onClick={downloadCertificate} className="bg-[#1A1108] font-condensed text-[14px] text-white tracking-[0.2em] uppercase px-6 py-3 border-2 border-[#1A1108] hover:bg-[#B84915] hover:border-[#B84915] hover:-translate-y-[2px] hover:-translate-x-[2px] transition-all hover:shadow-[4px_4px_0_#1A1108] flex items-center justify-center gap-3 mx-auto">
                  <span>Download Certificate</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
              </div>

              <Certificate ref={certificateRef} name={formData.name} district={formData.district} />

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
              <div className="mb-4">
                <h3 className="font-display text-2xl text-[#1A1108] mb-2 uppercase tracking-wide">Membership Form</h3>
                <p className="font-sans text-sm text-[#3A2A1C]/80 italic">Fill this out lazily.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                 <label className="flex flex-col gap-2">
                   <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#3A2A1C]">Name *</span>
                   <input type="text" name="name" required className="bg-[#F4EBD7] border-2 border-[#1A1108] p-[12px_14px] font-sans text-[15px] text-[#1A1108] outline-none transition-all placeholder:text-[#1A1108]/40 focus:border-[#B84915] focus:shadow-[3px_3px_0_#B84915]" placeholder="Your answer" />
                 </label>

                 <label className="flex flex-col gap-2">
                   <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#3A2A1C]">District in Assam *</span>
                   <select name="district" required className="bg-[#F4EBD7] border-2 border-[#1A1108] p-[12px_14px] font-sans text-[15px] text-[#1A1108] outline-none transition-all focus:border-[#B84915] focus:shadow-[3px_3px_0_#B84915] appearance-none max-w-full">
                     <option value="">Choose your district</option>
                     <option value="Bajali">Bajali</option>
                     <option value="Baksa">Baksa</option>
                     <option value="Barpeta">Barpeta</option>
                     <option value="Biswanath">Biswanath</option>
                     <option value="Bongaigaon">Bongaigaon</option>
                     <option value="Cachar">Cachar</option>
                     <option value="Charaideo">Charaideo</option>
                     <option value="Chirang">Chirang</option>
                     <option value="Darrang">Darrang</option>
                     <option value="Dhemaji">Dhemaji</option>
                     <option value="Dhubri">Dhubri</option>
                     <option value="Dibrugarh">Dibrugarh</option>
                     <option value="Dima Hasao">Dima Hasao</option>
                     <option value="Goalpara">Goalpara</option>
                     <option value="Golaghat">Golaghat</option>
                     <option value="Hailakandi">Hailakandi</option>
                     <option value="Hojai">Hojai</option>
                     <option value="Jorhat">Jorhat</option>
                     <option value="Kamrup Metropolitan">Kamrup Metropolitan</option>
                     <option value="Kamrup">Kamrup</option>
                     <option value="Karbi Anglong">Karbi Anglong</option>
                     <option value="Karimganj">Karimganj</option>
                     <option value="Kokrajhar">Kokrajhar</option>
                     <option value="Lakhimpur">Lakhimpur</option>
                     <option value="Majuli">Majuli</option>
                     <option value="Morigaon">Morigaon</option>
                     <option value="Nagaon">Nagaon</option>
                     <option value="Nalbari">Nalbari</option>
                     <option value="Sivasagar">Sivasagar</option>
                     <option value="Sonitpur">Sonitpur</option>
                     <option value="South Salmara-Mankachar">South Salmara-Mankachar</option>
                     <option value="Tamulpur">Tamulpur</option>
                     <option value="Tinsukia">Tinsukia</option>
                     <option value="Udalguri">Udalguri</option>
                     <option value="West Karbi Anglong">West Karbi Anglong</option>
                     <option value="Other">Other / NRI</option>
                   </select>
                 </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#3A2A1C]">Email *</span>
                <input type="email" required className="bg-[#F4EBD7] border-2 border-[#1A1108] p-[12px_14px] font-sans text-[15px] text-[#1A1108] outline-none transition-all placeholder:text-[#1A1108]/40 focus:border-[#B84915] focus:shadow-[3px_3px_0_#B84915]" placeholder="Your answer" />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#3A2A1C]">Are you chronically online? *</span>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer pt-0">
                    <input type="radio" name="online" required className="w-4 h-4 accent-[#E0651E]" />
                    <span className="font-sans text-sm text-[#1A1108] normal-case tracking-normal">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer pt-0">
                    <input type="radio" name="online" className="w-4 h-4 accent-[#E0651E]" />
                    <span className="font-sans text-sm text-[#1A1108] normal-case tracking-normal">No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer pt-0">
                    <input type="radio" name="online" className="w-4 h-4 accent-[#E0651E]" />
                    <span className="font-sans text-sm text-[#1A1108] normal-case tracking-normal">Maybe</span>
                  </label>
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-[#3A2A1C]">Are you lazy? *</span>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer pt-0">
                    <input type="radio" name="lazy" required className="w-4 h-4 accent-[#E0651E]" />
                    <span className="font-sans text-sm text-[#1A1108] normal-case tracking-normal">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer pt-0">
                    <input type="radio" name="lazy" className="w-4 h-4 accent-[#E0651E]" />
                    <span className="font-sans text-sm text-[#1A1108] normal-case tracking-normal">No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer pt-0">
                    <input type="radio" name="lazy" className="w-4 h-4 accent-[#E0651E]" />
                    <span className="font-sans text-sm text-[#1A1108] normal-case tracking-normal">Maybe</span>
                  </label>
                </div>
              </label>

              <button type="submit" className="mt-2 bg-[#1A1108] text-[#F4EBD7] font-condensed text-[14px] font-bold tracking-[0.22em] uppercase p-[16px_22px] border-2 border-[#1A1108] transition-all cursor-pointer hover:bg-[#B84915] hover:border-[#B84915] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[4px_4px_0_#1A1108]">
                Submit Application
              </button>
              
              <p className="font-sans text-[12.5px] italic text-[#6A5440] text-center mt-2">
                By submitting this form, you agree to take a nap shortly after.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
