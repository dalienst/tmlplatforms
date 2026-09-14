export interface TamarindSystem {
  id: string;
  name: string;
  tagline: string;
  category: "Financial Governance" | "Guest Experience & AI" | "Marine Operations" | "Workforce & Knowledge" | "Digital Distribution";
  department: string;
  badge: string;
  iconName: string;
  businessBenefits: string[];
  keyFeatures: string[];
  techStack: string[];
  businessImpactMetric: {
    stat: string;
    label: string;
  };
  operationalScope: string;
  unitLogo?: string;
  colorTheme: {
    accentBorder: string;
    badgeStyle: string;
    iconBg: string;
    statColor: string;
    pillBg: string;
  };
}

export const TAMARIND_SYSTEMS: TamarindSystem[] = [
  {
    id: "finance-portal",
    name: "Group Finance & Credit Note Portal",
    tagline: "Digitized 4-tier approval engine with automated ledger audit validation.",
    category: "Financial Governance",
    department: "Group Finance & Internal Audit",
    badge: "Core Enterprise",
    iconName: "ShieldCheck",
    businessBenefits: [
      "75% acceleration in credit note turnaround time across all Group hospitality units.",
      "Algorithmic duplicate and triplicate posting detection preventing revenue leakage.",
      "Strict 4-stage digital sign-off sequence: Initiator → Internal Audit → Financial Controller → General Manager.",
      "Complete immutable timestamped audit trail adhering to corporate accounting compliance."
    ],
    keyFeatures: [
      "Digital multi-tier approval workflow with role-based segregation of duties",
      "Automated PDF generation and reconciliation against ledger accounts",
      "Live pending-approval inbox with urgency alerts and SLA escalation",
      "Comprehensive audit logging of every edit, approval, rejection, and comment"
    ],
    techStack: ["Next.js App Router", "TypeScript", "PostgreSQL", "Prisma ORM", "Resend Automated Workflows", "TailwindCSS"],
    businessImpactMetric: {
      stat: "75%",
      label: "Faster Approval Cycle"
    },
    operationalScope: "Tamarind Nairobi, Tamarind Mombasa, Tamarind Dhow, Carnivore, Tamarind Village",
    colorTheme: {
      accentBorder: "hover:border-amber-500/80",
      badgeStyle: "bg-amber-50 text-amber-800 border-amber-300",
      iconBg: "bg-[#b8860b] text-white",
      statColor: "text-[#b8860b]",
      pillBg: "bg-amber-50 text-amber-900 border-amber-200"
    }
  },
  {
    id: "ai-analyst",
    name: "Executive AI Guest Sentiment & Operations Analyst",
    tagline: "Autonomous RAG analytics synthesizing hundreds of weekly guest feedbacks into executive action plans.",
    category: "Guest Experience & AI",
    department: "Group General Management & Quality Assurance",
    badge: "AI Powered",
    iconName: "BrainCircuit",
    businessBenefits: [
      "Reduces guest complaint turnaround from days to under 24 hours via automated operational dispatch.",
      "Eliminates manual survey sorting by dynamically injecting historical guest commentary into contextual analysis.",
      "Generates scheduled monthly executive performance digests directly to directors via automated cron.",
      "Spots cross-property trends in food quality, service velocity, and ambiance before reputation impact."
    ],
    keyFeatures: [
      "Dynamic 50-comment SQL context injection for precision retrieval-augmented synthesis",
      "Multi-dimensional sentiment scoring across culinary, service, ambiance, and value",
      "Automated monthly executive briefing generation powered by high-capacity LLM reasoning",
      "Instant department-level root-cause diagnostics with actionable operational recommendations"
    ],
    techStack: ["Next.js", "GPT-4o / Claude Enterprise", "Vector/Context Ingestion", "PostgreSQL", "Resend Cron Dispatch", "TailwindCSS"],
    businessImpactMetric: {
      stat: "< 24h",
      label: "Issue Resolution SLA"
    },
    operationalScope: "Group-wide Hospitality Operations, General Management, Executive Board",
    colorTheme: {
      accentBorder: "hover:border-indigo-500/80",
      badgeStyle: "bg-indigo-50 text-indigo-800 border-indigo-300",
      iconBg: "bg-[#4338ca] text-white",
      statColor: "text-[#4338ca]",
      pillBg: "bg-indigo-50 text-indigo-900 border-indigo-200"
    }
  },
  {
    id: "dhow-cruise",
    name: "Tamarind Dhow Cruise Operations Core",
    tagline: "Marine hospitality engine handling reservation manifesting, sub-second QR check-in, and culinary costing.",
    category: "Marine Operations",
    department: "Tamarind Dhow Marine Division",
    badge: "Mission Critical",
    iconName: "Compass",
    businessBenefits: [
      "Zero boarding bottlenecks via sub-second smartphone camera QR boarding passes.",
      "Eliminates seafood & provisions wastage through automated sailing-to-pantry yield calculations.",
      "Daily per-sailing revenue and food cost percentage reconciliation within 10 minutes of cruise docking.",
      "Enhanced maritime safety through real-time electronic passenger manifesting."
    ],
    keyFeatures: [
      "High-speed browser-based camera QR boarding validation using html5-qrcode engine",
      "Per-sailing passenger manifest synchronization with reservations and dock staff",
      "Culinary yield analytics comparing covers booked against beverage and food provisioning",
      "Dynamic seating allocations and special dietary requirement alerts for galleys"
    ],
    techStack: ["Next.js", "html5-qrcode", "TypeScript", "PostgreSQL", "Prisma ORM", "TailwindCSS"],
    businessImpactMetric: {
      stat: "< 1s",
      label: "Boarding Pass QR Validation"
    },
    operationalScope: "Tamarind Dhow Mombasa Harbour Cruises (Lunch & Dinner Sailings)",
    unitLogo: "/dhow.jpg",
    colorTheme: {
      accentBorder: "hover:border-blue-600/80",
      badgeStyle: "bg-blue-50 text-[#0b3b82] border-blue-300 font-bold",
      iconBg: "bg-[#0b3b82] text-white",
      statColor: "text-[#0b3b82]",
      pillBg: "bg-blue-50 text-blue-900 border-blue-200"
    }
  },
  {
    id: "elimu-lms",
    name: "Elimu Digital Learning & SOP Hub",
    tagline: "Centralized institutional repository delivering role-based training and instant conversational SOP retrieval.",
    category: "Workforce & Knowledge",
    department: "Group Human Resources & Training",
    badge: "Enterprise Knowledge",
    iconName: "GraduationCap",
    businessBenefits: [
      "Ensures 100% standard operating procedure (SOP) compliance across culinary, front office, and security teams.",
      "Cuts onboarding time for new hospitality staff by over 40% with self-paced interactive courseware.",
      "Conversational AI assistant allows chefs and managers to query complex brand standards in seconds.",
      "Departmental RBAC prevents information overload by serving only relevant unit protocols."
    ],
    keyFeatures: [
      "Role-Based Access Control (RBAC) filtering SOPs by unit, division, and clearance tier",
      "Integrated AI document chat answering queries with verified Tamarind policy citations",
      "Departmental curriculum pathways with progress tracking and completion telemetry",
      "Mobile-optimized micro-learning modules for shift-based staff"
    ],
    techStack: ["Next.js", "AI Knowledge Base", "PostgreSQL", "Prisma ORM", "TailwindCSS"],
    businessImpactMetric: {
      stat: "40%",
      label: "Faster Staff Onboarding"
    },
    operationalScope: "All Tamarind Group Properties, 1,000+ Hospitality & Operations Personnel",
    colorTheme: {
      accentBorder: "hover:border-emerald-600/80",
      badgeStyle: "bg-emerald-50 text-[#004d40] border-emerald-300",
      iconBg: "bg-[#004d40] text-white",
      statColor: "text-[#004d40]",
      pillBg: "bg-emerald-50 text-emerald-900 border-emerald-200"
    }
  },
  {
    id: "kaizen-portal",
    name: "Kaizen Zero-Friction Staff Intake Portal",
    tagline: "Frictionless operational innovation hub with verified zero-password intake and direct committee review.",
    category: "Workforce & Knowledge",
    department: "Staff Welfare & Continuous Improvement Committee",
    badge: "Continuous Improvement",
    iconName: "Lightbulb",
    businessBenefits: [
      "Removes login barriers: staff submit continuous improvement ideas in under 60 seconds without account setup.",
      "Validates submissions instantaneously against HR personnel database via Staff ID or work email.",
      "Increases grassroots innovation submissions by over 300% across floor teams, kitchens, and engineering.",
      "Committee dashboard provides structured evaluation, scoring, and implementation tracking."
    ],
    keyFeatures: [
      "Zero-login verification protocol cross-referencing live employee master records",
      "Category tagging across guest experience, cost reduction, safety, and workplace happiness",
      "Executive review pipeline with automated progress updates to originating staff members",
      "Recognition leaderboard celebrating implemented cost-saving and efficiency suggestions"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Resend Notifications", "TailwindCSS"],
    businessImpactMetric: {
      stat: "300%+",
      label: "Increase in Staff Innovation Submissions"
    },
    operationalScope: "Tamarind Management Limited Staff Welfare & Operations Committee",
    colorTheme: {
      accentBorder: "hover:border-amber-500/80",
      badgeStyle: "bg-amber-50 text-amber-900 border-amber-300",
      iconBg: "bg-[#d97706] text-white",
      statColor: "text-[#d97706]",
      pillBg: "bg-amber-50 text-amber-900 border-amber-200"
    }
  },
  {
    id: "village-booking",
    name: "Tamarind Village Direct Booking & Guest Portal",
    tagline: "Direct-to-consumer luxury apartment booking portal capturing direct reservations without OTA commissions.",
    category: "Digital Distribution",
    department: "Tamarind Village & Group Revenue Management",
    badge: "Direct Revenue",
    iconName: "Building2",
    businessBenefits: [
      "Protects top-line margins by eliminating 15-25% Online Travel Agency (OTA) commission leakage.",
      "Direct integration with ProfitRoom booking engine ensures live rate parity and inventory sync.",
      "Tailored mobile experience optimized for high-converting direct guest room and suite bookings.",
      "Integrated concierge showcase promoting on-site Tamarind Dhow and fine-dining experiences."
    ],
    keyFeatures: [
      "Direct ProfitRoom reservation engine deep-linking with real-time rate availability",
      "Responsive luxury architectural showcase with optimized high-resolution gallery assets",
      "Interactive amenity explorer highlighting oceanfront suites, conference halls, and pools",
      "Integrated WhatsApp and concierge inquiry fast-track"
    ],
    techStack: ["Next.js", "ProfitRoom Booking API", "TypeScript", "TailwindCSS", "SEO Engine"],
    businessImpactMetric: {
      stat: "0%",
      label: "OTA Commission on Direct Channels"
    },
    operationalScope: "Tamarind Village Luxury Oceanfront Apartments, Mombasa",
    unitLogo: "/village.png",
    colorTheme: {
      accentBorder: "hover:border-orange-600/80",
      badgeStyle: "bg-orange-50 text-[#c2410c] border-orange-300 font-bold",
      iconBg: "bg-[#ea580c] text-white",
      statColor: "text-[#c2410c]",
      pillBg: "bg-orange-50 text-orange-900 border-orange-200"
    }
  },
  {
    id: "it-service-desk",
    name: "Group IT Operations & Service Desk",
    tagline: "Centralized IT infrastructure telemetry, asset lifecycle tracking, and SLA ticketing dispatch.",
    category: "Workforce & Knowledge",
    department: "Group Information Technology",
    badge: "IT Infrastructure",
    iconName: "Cpu",
    businessBenefits: [
      "Halves Mean Time to Resolution (MTTR) for mission-critical POS and network disruptions.",
      "Automated ticket routing by property and severity ensures rapid on-call technician dispatch.",
      "Hardware asset lifecycle tracking preventing unexpected hardware failures during peak service.",
      "Executive reporting on recurring system bottlenecks and network uptime statistics."
    ],
    keyFeatures: [
      "Tiered incident ticketing with automated SLA breach countdowns",
      "Multi-property asset inventory mapping POS terminals, APs, servers, and peripherals",
      "Knowledge base linking known error resolutions directly to incoming trouble tickets",
      "Executive uptime telemetry and service reliability metrics"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Resend SLA Alerts"],
    businessImpactMetric: {
      stat: "50%",
      label: "Reduction in IT MTTR"
    },
    operationalScope: "Group IT Systems across Nairobi, Mombasa, and Coastal Establishments",
    colorTheme: {
      accentBorder: "hover:border-slate-500/80",
      badgeStyle: "bg-slate-100 text-slate-800 border-slate-300",
      iconBg: "bg-[#334155] text-white",
      statColor: "text-[#334155]",
      pillBg: "bg-slate-100 text-slate-800 border-slate-200"
    }
  },
  {
    id: "sherehe-ticketing",
    name: "Sherehe Hospitality Ticketing Engine",
    tagline: "High-volume event ticketing platform with instant M-Pesa STK push and real-time gate redemption.",
    category: "Digital Distribution",
    department: "Events & Entertainment Division",
    badge: "Live Payments",
    iconName: "Ticket",
    businessBenefits: [
      "Flawless real-time ticket sales and reconciliation for major hospitality events (e.g. L-Boogie).",
      "Instant Safaricom M-Pesa Daraja STK Push completion with automated PDF/QR ticket delivery.",
      "Eliminates ticket fraud through cryptographically signed single-use QR gate validation.",
      "Real-time gate admission telemetry allowing event managers to balance entrance queues."
    ],
    keyFeatures: [
      "Native Safaricom Daraja M-Pesa STK Push API integration with webhook status reconciliation",
      "Automated branded PDF ticket generation with high-density QR verification tokens",
      "Sub-second gate scanner app functioning seamlessly on Android/iOS mobile devices",
      "Live sales and capacity dashboard with VIP, Early Bird, and Regular tier management"
    ],
    techStack: ["Next.js", "Safaricom Daraja API", "PostgreSQL", "Prisma ORM", "html5-qrcode", "Resend"],
    businessImpactMetric: {
      stat: "100%",
      label: "Cashless Instant Reconciliation"
    },
    operationalScope: "Tamarind Group Hospitality Events, Carnivore Entertainment, Themed Dinners",
    colorTheme: {
      accentBorder: "hover:border-rose-600/80",
      badgeStyle: "bg-rose-50 text-[#be123c] border-rose-300 font-bold",
      iconBg: "bg-[#be123c] text-white",
      statColor: "text-[#be123c]",
      pillBg: "bg-rose-50 text-rose-900 border-rose-200"
    }
  }
];

export const TAMARIND_IMPACT_METRICS = [
  { value: "8+", label: "Proprietary Platforms Deployed", detail: "Across finance, guest relations, marine, and workforce operations.", color: "text-[#d97706]" },
  { value: "75%", label: "Approval Cycle Reduction", detail: "Automated multi-tier financial governance and credit note workflows.", color: "text-[#004d40]" },
  { value: "1,000+", label: "Hospitality Workforce Connected", detail: "Daily operations, training SOPs, and grassroots Kaizen intake.", color: "text-[#0b3b82]" },
  { value: "100%", label: "Cashless Audit Precision", detail: "Real-time M-Pesa STK push and immutable ledger accountability.", color: "text-[#c2410c]" }
];
