import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 p-1 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Tamarind Group Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-white block">
                  TAMARIND MANAGEMENT LIMITED
                </span>
                <span className="text-xs text-[#d97706] font-medium">
                  Group Information Technology & Digital Infrastructure
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Official institutional portal hosting the enterprise operational suite, financial workflows, and guest analytics powering Tamarind hospitality establishments across Kenya.
            </p>

            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#d97706]" />
              <span>Internal Enterprise Systems Hub · platforms.tamarind.co.ke</span>
            </div>
          </div>

          {/* Col 2: Group Properties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Hospitality Properties
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>Carnivore Restaurant, Nairobi</li>
              <li>Tamarind Restaurant, Nairobi</li>
              <li>Tamarind Restaurant, Mombasa</li>
              <li>Tamarind Dhow Restaurant</li>
              <li>Tamarind Village Oceanfront Suites</li>
              <li>Roast by Carnivore</li>
            </ul>
          </div>

          {/* Col 3: Core Platforms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Core Platforms (7)
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>Finance &amp; Credit Note Portal</li>
              <li>AI Guest Sentiment &amp; Operations Analyst</li>
              <li>Tamarind Dhow Cruise Operations Core</li>
              <li>Elimu LMS &amp; SOP Hub</li>
              <li>Kaizen Staff Innovation Portal</li>
              <li>Village Direct Booking Engine</li>
              <li>IT Helpdesk &amp; Service Desk</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Tamarind Management Limited. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Initiative of Group IT · Architected &amp; Deployed by Dalienst Owino Oduor
          </p>
        </div>
      </div>
    </footer>
  );
}
