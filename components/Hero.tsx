import Image from "next/image";
import { Layers, Building } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-slate-950 text-white pt-14 pb-20 border-b border-slate-800">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-grid-dark opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-300 mb-8 shadow-sm">
            <span className="font-semibold tracking-wide uppercase">Institutional Platforms Portal</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">platforms.tamarind.co.ke</span>
          </div>

          {/* Group & Operating Unit Logos */}
          <div className="flex items-center justify-center gap-5 sm:gap-8 mb-6">
            {/* Tamarind Group */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 border border-slate-800 p-2.5 flex items-center justify-center shadow-lg hover:border-slate-700 transition-colors">
                <Image
                  src="/logo2.png"
                  alt="Tamarind Group Emblem"
                  width={58}
                  height={58}
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] text-slate-400 font-medium mt-1.5 uppercase tracking-wider">Group</span>
            </div>

            {/* Tamarind Dhow */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg border border-slate-800 hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src="/dhow.jpg"
                  alt="Tamarind Dhow Mombasa Logo"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] text-slate-400 font-medium mt-1.5 uppercase tracking-wider">Dhow</span>
            </div>

            {/* Tamarind Village */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg border border-slate-800 hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src="/village.png"
                  alt="Tamarind Village Logo"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] text-slate-400 font-medium mt-1.5 uppercase tracking-wider">Village</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Tamarind Group <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-[#d97706] bg-clip-text text-transparent">
              Enterprise Digital Ecosystem
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            A unified suite of internal workflows, operational management systems, and direct guest channels supporting teams across Tamarind properties.
          </p>

          {/* Departmental Attribution Banner */}
          <div className="mt-7 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left max-w-3xl mx-auto">
            <div className="flex items-start space-x-3.5">
              <Building className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-amber-300">
                  Departmental Attribution &amp; Governance
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-normal">
                  Initiative of the <strong className="text-white font-semibold">Tamarind Group IT Department</strong> in collaboration with Group Finance, General Management, Marine Division, HR, and Operations.
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Architected &amp; Deployed by Dalienst Owino Oduor · IT Assistant &amp; Digital Solutions Architect
                </p>
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div className="mt-8 flex items-center justify-center">
            <a
              href="#systems"
              className="px-6 py-3 rounded-xl bg-[#d97706] hover:bg-amber-600 text-white font-semibold text-xs transition-all shadow-md flex items-center space-x-2"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Operational Platforms (7)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
