import { TAMARIND_IMPACT_METRICS } from "@/lib/systems";
import { TrendingUp, Award, Users, CheckCircle2 } from "lucide-react";

export default function MetricsBanner() {
  const icons = [TrendingUp, Award, Users, CheckCircle2];

  return (
    <section id="impact" className="relative z-10 -mt-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
      <div className="bg-white rounded-2xl shadow-xl border border-emerald-900/10 p-6 sm:p-8">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-[#004d40]">
            Measurable Group ROI & Performance
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Quantifiable Enterprise Impact Across Tamarind Group
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {TAMARIND_IMPACT_METRICS.map((metric, idx) => {
            const IconComponent = icons[idx] || TrendingUp;
            const bgColors = [
              "bg-amber-50 text-[#d97706] border border-amber-200",
              "bg-emerald-50 text-[#004d40] border border-emerald-200",
              "bg-blue-50 text-[#0b3b82] border border-blue-200",
              "bg-orange-50 text-[#c2410c] border border-orange-200"
            ];
            return (
              <div key={idx} className={`pt-4 lg:pt-0 ${idx > 0 ? "lg:pl-6" : ""}`}>
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2.5 rounded-xl ${bgColors[idx % bgColors.length]}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-3xl font-bold ${metric.color} tracking-tight`}>
                    {metric.value}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
