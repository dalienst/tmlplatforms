"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Shield, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#002822]/95 backdrop-blur-md border-b border-[#004d40]/60 text-white transition-all">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-11 h-11 rounded-lg bg-[#003830] border border-[#d97706]/40 p-1.5 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#d97706] transition-colors">
              <Image
                src="/logo.png"
                alt="Tamarind Group Logo"
                width={38}
                height={38}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#d97706] transition-colors">
                  TAMARIND GROUP
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#004d40] text-[#d97706] border border-[#d97706]/30">
                  Platforms Hub
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 tracking-wide font-normal">
                Enterprise Systems & Digital Infrastructure
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#overview"
              className="text-emerald-100/80 hover:text-[#d97706] transition-colors"
            >
              Overview
            </a>
            <a
              href="#systems"
              className="text-emerald-100/80 hover:text-[#d97706] transition-colors"
            >
              Platforms (8)
            </a>
            <a
              href="#impact"
              className="text-emerald-100/80 hover:text-[#d97706] transition-colors"
            >
              Business Impact
            </a>
            <a
              href="#governance"
              className="text-emerald-100/80 hover:text-[#d97706] transition-colors"
            >
              Departments
            </a>
          </nav>

          {/* Operational Status & Direct Access */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#003830] border border-emerald-500/30 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">All 8 Systems Live</span>
            </div>
            <a
              href="#systems"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#b8860b] to-[#d97706] text-white font-medium text-xs hover:from-[#d97706] hover:to-[#b8860b] shadow-md shadow-amber-900/20 transition-all hover:scale-[1.02]"
            >
              <span>Explore Systems</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-[#003830] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#004d40] py-4 px-2 space-y-2 bg-[#002822]">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-100 hover:bg-[#003830] hover:text-[#d97706]"
            >
              Overview
            </a>
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-100 hover:bg-[#003830] hover:text-[#d97706]"
            >
              Platforms (8)
            </a>
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-100 hover:bg-[#003830] hover:text-[#d97706]"
            >
              Business Impact
            </a>
            <a
              href="#governance"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-100 hover:bg-[#003830] hover:text-[#d97706]"
            >
              Departments
            </a>
            <div className="pt-2">
              <a
                href="#systems"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-[#d97706] text-white font-medium text-sm"
              >
                <span>View All Platforms</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
