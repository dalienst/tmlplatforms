import { Building2, Shield, HeartHandshake, Award, Cpu, CheckCircle } from "lucide-react";

export default function DepartmentSpotlight() {
  const departments = [
    {
      name: "Group Finance & Internal Audit",
      headline: "Immutable Accounting Controls & Ledger Accuracy",
      description: "Eliminated paper-based credit note approval delays, introduced automated multi-tier sign-off workflows, and eradicated duplicate journal adjustments across all Group properties.",
      impact: "75% Reduction in Credit Note SLA"
    },
    {
      name: "Executive Management & Operations",
      headline: "Actionable AI Intelligence on Guest Sentiment",
      description: "Enabled directors and general managers to receive automated synthesized digests of guest reviews, pinpointing root causes and enforcing resolution in under 24 hours.",
      impact: "Sub-24h Issue Resolution SLA"
    },
    {
      name: "Marine Operations (Tamarind Dhow)",
      headline: "Precision Harbor Boarding & Culinary Cost Control",
      description: "Replaced paper manifests with instant camera QR scanning and automated pantry yield calculations comparing covers booked against culinary food cost percentages.",
      impact: "Sub-Second Boarding QR Scan"
    },
    {
      name: "Group HR, Training & Staff Welfare",
      headline: "Standardized SOPs & Grassroots Employee Innovation",
      description: "Equipped over 1,000 staff members with role-based digital SOPs via Elimu LMS and frictionless Kaizen idea intake without requiring complex password logins.",
      impact: "300%+ Boost in Staff Feedback"
    }
  ];

  return (
    <section id="governance" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Cross-Departmental Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Empowering Every Tamarind Division
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            These platforms are built in close partnership with department heads to elevate operational standards, guest satisfaction, and financial rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-[#f4f6f4] border border-slate-200/90 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#004d40]">
                  {dept.name}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {dept.impact}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {dept.headline}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {dept.description}
              </p>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#004d40]">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Operational Standard Across All Units</span>
              </div>
            </div>
          ))}
        </div>

        {/* Unselfish Departmental Statement */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#002822] text-white text-center max-w-5xl mx-auto shadow-xl">
          <Award className="w-8 h-8 text-[#d97706] mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">
            A Testament to Group Digitalization & IT Leadership
          </h3>
          <p className="text-sm text-emerald-100/80 leading-relaxed max-w-2xl mx-auto">
            These systems reflect Tamarind Management Limited&apos;s commitment to pioneering hospitality technology in East Africa. Every platform is designed, continuously enhanced, and maintained to ensure peak reliability for our guests and staff.
          </p>
          <div className="mt-6 pt-6 border-t border-[#004d40] text-xs text-emerald-300/80 font-mono">
            Tamarind Management Limited · Group Information Technology · platforms.tamarind.co.ke
          </div>
        </div>
      </div>
    </section>
  );
}
