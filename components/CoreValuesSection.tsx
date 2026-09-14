import { TAMARIND_CORE_VALUES, TAMARIND_SYSTEMS } from "@/lib/systems";
import { HeartHandshake, Users, Lightbulb, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CoreValuesSection() {
  const iconMap: Record<string, any> = {
    HeartHandshake,
    Users,
    Lightbulb,
    TrendingUp,
    ShieldCheck
  };

  return (
    <section id="values" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Institutional Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Core Values of Tamarind Management Limited
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every platform in the Tamarind digital ecosystem is architected to actively uphold and advance our 5 core organizational commitments.
          </p>
        </div>

        {/* 5 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TAMARIND_CORE_VALUES.map((val, idx) => {
            const Icon = iconMap[val.iconName] || ShieldCheck;
            const alignedSystems = TAMARIND_SYSTEMS.filter(
              (sys) => sys.coreValue.toLowerCase().includes(val.name.toLowerCase().split("/")[0].trim().toLowerCase())
            );

            return (
              <div
                key={val.id}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
                      <Icon className="w-5 h-5 text-[#d97706]" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      VALUE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {val.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                    &ldquo;{val.statement}&rdquo;
                  </p>
                </div>

                {alignedSystems.length > 0 && (
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">
                      Active Operational Systems
                    </span>
                    <div className="space-y-1.5">
                      {alignedSystems.map((sys) => (
                        <div key={sys.id} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="font-medium">{sys.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
