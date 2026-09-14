"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-11 h-11 rounded-lg bg-slate-900 border border-slate-700 p-1.5 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#d97706] transition-colors">
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
                <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-[#d97706] border border-[#d97706]/30">
                  Platforms Hub
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wide font-normal">
                Internal Systems &amp; Operational Infrastructure
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase">
            <a
              href="#overview"
              className="text-slate-300 hover:text-[#d97706] transition-colors"
            >
              Overview
            </a>
            <a
              href="#systems"
              className="text-slate-300 hover:text-[#d97706] transition-colors"
            >
              Platforms (8)
            </a>
            <a
              href="#governance"
              className="text-slate-300 hover:text-[#d97706] transition-colors"
            >
              Departments
            </a>
          </nav>

          {/* Operational Status */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-[11px]">8 Systems Operational</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 py-4 px-2 space-y-2 bg-slate-950">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#d97706]"
            >
              Overview
            </a>
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#d97706]"
            >
              Platforms (8)
            </a>
            <a
              href="#governance"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-[#d97706]"
            >
              Departments
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
