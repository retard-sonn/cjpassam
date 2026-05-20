"use client";

export default function Eligibility() {
  const criteria = [
    {
      id: "REQ / 01",
      title: "Unemployed",
      titleAs: "নিবনুৱা",
      desc: "By force, by choice, or by principle. We don't ask.",
      descAs: "বাধ্য হৈ, নিজৰ ইচ্ছাৰে, বা নীতিগতভাৱে। আমি নুসুধো।"
    },
    {
      id: "REQ / 02",
      title: "Lazy",
      titleAs: "এলেহুৱা",
      desc: "Physically only. The brain may continue to spiral.",
      descAs: "শাৰীৰিকভাৱেহে। মগজু ঘূৰি থাকিব পাৰে।"
    },
    {
      id: "REQ / 03",
      title: "Chronically online",
      titleAs: "সদায় অনলাইন",
      desc: "Minimum 11 hours a day, including bathroom breaks.",
      descAs: "দিনে নূন্যতম ১১ ঘণ্টা, বাথৰুম ব্ৰেককো ধৰি।"
    },
    {
      id: "REQ / 04",
      title: "Can rant professionally",
      titleAs: "পেশাদাৰীভাৱে গালি পাৰিব পৰা",
      desc: "As long as the content is sharp, honest, and points at something that actually matters.",
      descAs: "যেতিয়ালৈকে কথাখিনি চোকা, সঁচা আৰু প্ৰকৃত প্ৰয়োজন থকা বস্তুক আঙুলিয়াই দিয়ে।"
    }
  ];

  return (
    <section id="eligibility" className="py-[120px] bg-[#F4EBD7] border-b-2 border-[#1A1108] px-5 sm:px-8 lg:px-14">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-[64px]">
          <span className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase text-[#B84915] mb-[22px]">
            MEMBERSHIP
          </span>
          <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[0.92] tracking-[-0.005em] text-[#1A1108] mb-6">
            Are you eligible<br />
            to <em className="font-serif italic font-normal text-[#1F5A2E]">join?</em>
          </h2>
          <p className="font-sans text-[18px] leading-[1.55] text-[#3A2A1C] mt-6">
            We do not check religion, caste, or gender. We do, however, have four (4) standards.
          </p>
          <p className="font-sans text-[15.5px] leading-[1.55] text-[#6A5440] mt-2">
            আমি ধৰ্ম, জাতি, বা লিংগ পৰীক্ষা নকৰো। কিন্তু আমি চাৰিটা (৪) মাপকাঠী মানি চলোঁ।
          </p>
        </div>

        <ul className="list-none grid gap-4 max-w-[920px] mx-auto">
          {criteria.map((item, i) => (
            <li 
              key={i} 
              className="flex flex-col lg:grid lg:grid-cols-[140px_1fr_64px] gap-y-3 gap-x-4 lg:gap-x-7 items-start lg:items-center p-[20px] sm:p-[24px_32px] bg-[#EADFC4] border-2 border-[#1A1108] shadow-[5px_5px_0_#1A1108] transition-all duration-200 cursor-default hover:bg-[#DBCBA5] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[7px_7px_0_#1A1108] group relative"
            >
              <div className="absolute top-[20px] right-[20px] lg:relative lg:top-0 lg:right-0 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] border-2 border-[#1A1108] rounded-full flex items-center justify-center text-[18px] sm:text-[22px] text-[#1F5A2E] bg-[#F4EBD7] transition-all duration-200 group-hover:bg-[#1F5A2E] group-hover:text-[#F4EBD7] lg:ml-auto lg:order-3">
                ✓
              </div>
              <span className="font-mono text-[11px] tracking-[0.22em] font-semibold text-[#B84915] lg:order-1 mt-1 lg:mt-0">
                {item.id}
              </span>
              <div className="flex flex-col lg:order-2 pr-[48px] lg:pr-0 w-full">
                <div className="flex flex-col mb-3 lg:mb-2">
                  <span className="font-display text-[22px] sm:text-[28px] text-[#1A1108] tracking-[-0.005em] leading-[1.1] mb-1">
                    {item.title}
                  </span>
                  <span className="font-sans text-[14.5px] text-[#6A5440] font-medium leading-none">
                    {item.titleAs}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 pt-3 lg:pt-3 border-t border-[#1A1108]/15">
                  <span className="font-sans text-[14.5px] italic text-[#3A2A1C] leading-[1.4]">
                    {item.desc}
                  </span>
                  <span className="font-sans text-[13.5px] text-[#6A5440] leading-[1.4]">
                    {item.descAs}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-[56px] text-center">
          <button
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#B84915] hover:bg-[#1A1108] text-[#F4EBD7] px-8 py-4 text-[14px] font-condensed font-bold tracking-[0.2em] uppercase border-2 border-[#1A1108] shadow-[6px_6px_0_#1A1108] hover:shadow-[3px_3px_0_#1A1108] hover:translate-y-[3px] hover:translate-x-[3px] transition-all inline-flex items-center gap-3"
          >
            Join the Party <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <p className="mt-6 font-sans text-[14px] italic text-[#6A5440] leading-[1.6]">
            Membership is free, lifelong, and revocable only by you.<br />
            No fees. No selfies with the leader. No &quot;missed call to register.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
