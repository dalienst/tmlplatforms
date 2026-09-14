"use client";

import { useState } from "react";
import Image from "next/image";
import { TAMARIND_SYSTEMS, TamarindSystem } from "@/lib/systems";
import SystemModal from "@/components/SystemModal";
import {
  ShieldCheck,
  BrainCircuit,
  Compass,
  GraduationCap,
  Lightbulb,
  Building2,
  Cpu,
  Ticket,
  ArrowRight,
  Search,
  CheckCircle2,
  SlidersHorizontal,
  ExternalLink
} from "lucide-react";

export default function SystemsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalSystem, setActiveModalSystem] = useState<TamarindSystem | null>(null);

  const categories = [
    "All",
    "Financial Governance",
    "Guest Experience & AI",
    "Marine Operations",
    "Workforce & Knowledge",
    "Digital Distribution"
  ];

  const iconMap: Record<string, any> = {
    ShieldCheck,
    BrainCircuit,
    Compass,
    GraduationCap,
    Lightbulb,
    Building2,
    Cpu,
    Ticket
  };

  const filteredSystems = TAMARIND_SYSTEMS.filter((sys) => {
    const matchesCategory =
      selectedCategory === "All" || sys.category === selectedCategory;
    const matchesSearch =
      sys.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sys.operationalScope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="systems" className="py-20 bg-[#fbfbf9]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-5xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#004d40]/10 border border-[#004d40]/20 text-xs font-semibold text-[#004d40] mb-3">
            <SlidersHorizontal className="w-3 h-3" />
            <span>Operational Systems Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Institutional Platforms & Core Applications
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Engineered specifically to solve core operational, financial, and guest experience bottlenecks across Tamarind Group properties.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#004d40] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat} {cat === "All" ? `(${TAMARIND_SYSTEMS.length})` : ""}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by system, department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            />
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSystems.map((system) => {
            const IconComponent = iconMap[system.iconName] || ShieldCheck;
            return (
              <div
                key={system.id}
                className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg ${system.colorTheme.accentBorder} transition-all flex flex-col justify-between overflow-hidden group`}
              >
                {/* Card Top */}
                <div className="p-6 sm:p-7">
                  {/* Category & Department Banner */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {system.category}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded border ${system.colorTheme.badgeStyle}`}>
                      {system.badge}
                    </span>
                  </div>

                  {/* Title & Icon / Unit Logo */}
                  <div className="flex items-start space-x-3.5 mb-3">
                    {system.unitLogo ? (
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 p-1.5 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                        <Image
                          src={system.unitLogo}
                          alt={`${system.name} Unit Logo`}
                          width={42}
                          height={42}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className={`p-3 rounded-xl ${system.colorTheme.iconBg} shrink-0 group-hover:scale-105 transition-transform shadow-sm`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                        {system.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {system.department}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {system.tagline}
                  </p>

                  {/* Key Operational Features */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Functional Capabilities
                    </span>
                    {system.keyFeatures.slice(0, 2).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Scope */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      Properties & Units Covered
                    </span>
                    <p className="text-xs text-slate-600 font-medium line-clamp-1">
                      {system.operationalScope}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="bg-slate-50/80 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                    {system.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white border border-slate-200 text-slate-600">
                        {tech}
                      </span>
                    ))}
                    {system.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                        +{system.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalSystem(system)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-slate-800 hover:text-[#d97706] transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSystems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-sm font-semibold text-slate-700">No platforms match your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#004d40] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal View */}
      <SystemModal
        system={activeModalSystem}
        onClose={() => setActiveModalSystem(null)}
      />
    </section>
  );
}
