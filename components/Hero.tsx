import Image from "next/image";
import { ArrowDown, Layers, CheckCircle2, ShieldCheck, Sparkles, Building } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-b from-[#00241f] via-[#00332c] to-[#004239] text-white pt-16 pb-24 border-b border-[#005a4b]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#00695c]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#002c25] border border-[#d97706]/40 text-xs text-amber-200/90 mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            <span className="font-semibold tracking-wide uppercase">Institutional Platforms Portal</span>
            <span className="text-[#00695c]">|</span>
            <span className="text-emerald-300">platforms.tamarind.co.ke</span>
          </div>

          {/* Group & Unit Crests / Logos */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
            {/* Tamarind Group */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/15 p-2.5 flex items-center justify-center backdrop-blur-sm shadow-xl hover:border-[#d97706]/60 transition-colors">
                <Image
                  src="/logo2.png"
                  alt="Tamarind Official Emblem"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-amber-200/80 font-medium mt-1.5 uppercase tracking-wider">Group</span>
            </div>

            {/* Tamarind Dhow Unit Logo */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl border border-white/20 hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src="/dhow.jpg"
                  alt="Tamarind Dhow Mombasa Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-amber-200/80 font-medium mt-1.5 uppercase tracking-wider">Dhow</span>
            </div>

            {/* Tamarind Village Unit Logo */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl border border-white/20 hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src="/village.png"
                  alt="Tamarind Village Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-amber-200/80 font-medium mt-1.5 uppercase tracking-wider">Village</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Tamarind Group <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-[#d97706] bg-clip-text text-transparent">
              Enterprise Digital Ecosystem
            </span>
          </h1>

          {/* Executive Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-emerald-100/90 leading-relaxed font-normal max-w-4xl mx-auto">
            A unified suite of high-availability internal workflows, AI analytics, and guest-facing portals powering operational efficiency, financial governance, and elevated hospitality excellence across all Tamarind properties.
          </p>

          {/* Departmental Attribution Banner */}
          <div className="mt-8 p-4 rounded-xl bg-[#002b24]/80 border border-[#005446] text-left max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              <Building className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-amber-300/90">
                  Departmental Attribution & Governance
                </p>
                <p className="text-sm text-emerald-100/80 mt-1 leading-normal">
                  Initiative of the <strong className="text-white font-semibold">Tamarind Group IT Department</strong> in collaboration with Group Finance, General Management, Marine, HR, and Operations.
                </p>
                <p className="text-xs text-emerald-300/70 mt-1 font-mono">
                  Architected & Deployed by Dalienst Owino Oduor · IT Assistant & Digital Solutions Architect
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#systems"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#b8860b] to-[#d97706] text-white font-medium text-sm hover:from-[#d97706] hover:to-[#b8860b] shadow-lg shadow-amber-950/40 transition-all hover:scale-[1.02] flex items-center space-x-2"
            >
              <Layers className="w-4 h-4" />
              <span>Explore All 8 Platforms</span>
            </a>
            <a
              href="#impact"
              className="px-6 py-3 rounded-xl bg-[#002f27] border border-[#005e4e] text-emerald-100 font-medium text-sm hover:bg-[#003d33] hover:text-white transition-all flex items-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Review Business ROI</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
