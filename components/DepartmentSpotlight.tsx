import { Building2, Shield, HeartHandshake, Award, Cpu, CheckCircle } from "lucide-react";

export default function DepartmentSpotlight() {
  const departments = [
    {
      name: "Finance & Internal Audit",
      headline: "Digital Accounting Controls & Ledger Accuracy",
      description: "Digital multi-tier sign-off workflows replacing paper routing slips, with automated duplicate invoice verification across Group properties.",
      impact: "Internal Financial Control"
    },
    {
      name: "Management & Operations",
      headline: "AI Intelligence on Guest Sentiment",
      description: "Automated analysis of guest feedback across dining rooms and suites, providing categorized operational summaries for unit managers.",
      impact: "Operational Insights"
    },
    {
      name: "Tamarind Dhow Restaurant",
      headline: "Dhow Boarding & Daily F&B Cost Management",
      description: "Jetty smartphone camera QR check-in and passenger manifests synchronized directly with galley provisioning and dining registers.",
      impact: "Dhow Sailing"
    },
    {
      name: "Human Resources & Staff Welfare",
      headline: "Standardized SOPs & Frontline Kaizen Intake",
      description: "Role-based digital SOP procedure search for staff and a direct employee idea submission workflow validated against the staff roster.",
      impact: "Staff Enablement"
    }
  ];

  return (
    <section id="governance" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Cross-Departmental Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Supporting Every Tamarind Division
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            These platforms are built in close partnership with department heads to elevate operational standards, guest satisfaction, and financial rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {dept.name}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white text-slate-700 border border-slate-200">
                    {dept.impact}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {dept.headline}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {dept.description}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 pt-3 border-t border-slate-200/60">
                <CheckCircle className="w-4 h-4 text-slate-400" />
                <span>Active Across Designated Properties</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Statement */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-slate-900 text-white text-center max-w-5xl mx-auto shadow-xl">
          <Award className="w-8 h-8 text-[#d97706] mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">
            Group Digitalization &amp; Information Technology
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            These systems reflect Tamarind Management Limited&apos;s commitment to pioneering hospitality technology in East Africa. Every platform is designed, continuously enhanced, and maintained to ensure peak reliability for our guests and staff.
          </p>
          <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400 font-mono">
            Tamarind Management Limited · Group Information Technology · platforms.tamarind.co.ke
          </div>
        </div>
      </div>
    </section>
  );
}
