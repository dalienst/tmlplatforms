"use client";

import Image from "next/image";
import { TamarindSystem } from "@/lib/systems";
import { X, CheckCircle, Cpu, Building2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

interface SystemModalProps {
  system: TamarindSystem | null;
  onClose: () => void;
}

export default function SystemModal({ system, onClose }: SystemModalProps) {
  if (!system) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#004d40]/10 text-[#004d40] border border-[#004d40]/20">
            {system.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            {system.badge}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Enterprise Production</span>
          </span>
        </div>

        <div className="flex items-center space-x-3.5 mb-2">
          {system.unitLogo && (
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
              <Image
                src={system.unitLogo}
                alt={`${system.name} Unit Logo`}
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {system.name}
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-6">
          {system.tagline}
        </p>

        {/* Department Ownership */}
        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
          <Building2 className="w-5 h-5 text-[#004d40] shrink-0" />
          <div>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Governing Department</span>
            <p className="text-sm font-semibold text-slate-900">{system.department}</p>
          </div>
        </div>

        {/* Operational Scope */}
        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
          <ShieldCheck className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Operational Scope & Deployment</span>
            <p className="text-sm font-semibold text-slate-900 mt-0.5">{system.operationalScope}</p>
          </div>
        </div>

        {/* Core Value Alignment */}
        <div className="mb-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start space-x-3">
          <Sparkles className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
          <div>
            <span className="text-xs uppercase font-bold text-amber-900 tracking-wider">Tamarind Core Value Alignment</span>
            <p className="text-sm font-bold text-slate-900 mt-0.5">{system.coreValue}</p>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{system.coreValueAlignment}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-[#d97706]" />
            <span>Key Operational Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {system.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                {feat}
              </div>
            ))}
          </div>
        </div>

        {/* Technology Architecture & Scope */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs uppercase font-bold text-slate-500 block mb-2">Technical Foundation</span>
            <div className="flex flex-wrap gap-1.5">
              {system.techStack.map((tech, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-slate-500 block mb-2">Operational Deployment Scope</span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {system.operationalScope}
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Internal Platform ID: <code className="text-slate-600 font-mono">{system.id}</code>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
