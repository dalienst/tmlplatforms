export interface TamarindCoreValue {
  id: string;
  name: string;
  statement: string;
  iconName: string;
  badgeColor: string;
}

export const TAMARIND_CORE_VALUES: TamarindCoreValue[] = [
  {
    id: "customer-satisfaction",
    name: "Customer Satisfaction",
    statement: "To make every single customer feel welcome, valued and totally satisfied.",
    iconName: "HeartHandshake",
    badgeColor: "bg-amber-50 text-[#b8860b] border-amber-200"
  },
  {
    id: "hr-development",
    name: "HR Development / Learning & Growth",
    statement: "To develop staff who are enthusiastic, vibrant, responsible, flexible and courteous while ensuring that they feel empowered, respected and cared for in harmonious work environment.",
    iconName: "Users",
    badgeColor: "bg-emerald-50 text-[#004d40] border-emerald-200"
  },
  {
    id: "innovation-process",
    name: "Innovation / Business Process",
    statement: "To challenge all staff to constantly strive to initiate fresh, enticing and innovative products, services and processes.",
    iconName: "Lightbulb",
    badgeColor: "bg-blue-50 text-[#0b3b82] border-blue-200"
  },
  {
    id: "shareholder-financial",
    name: "Shareholder Satisfaction / Financial Results",
    statement: "To achieve long-term growth through profitability in relation to shareholder investment.",
    iconName: "TrendingUp",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200"
  },
  {
    id: "community-relations",
    name: "Community Relations",
    statement: "To treat the wider community and stakeholders with utmost respect, integrity and be actively involved in our community and environmental concerns.",
    iconName: "ShieldCheck",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200"
  }
];

export interface TamarindSystem {
  id: string;
  name: string;
  tagline: string;
  category: "Financial Governance" | "Guest Experience & AI" | "Dhow Sailing" | "Workforce & Knowledge" | "Digital Distribution";
  department: string;
  badge: string;
  iconName: string;
  coreValue: string;
  coreValueAlignment: string;
  keyFeatures: string[];
  techStack: string[];
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
    id: "ai-analyst",
    name: "AI Guest Sentiment & Operations Analyst",
    tagline: "Guest feedback analysis system providing categorized sentiment summaries and monthly management digests.",
    category: "Guest Experience & AI",
    department: "Group General Management & Operations",
    badge: "Operations AI",
    iconName: "BrainCircuit",
    coreValue: "Customer Satisfaction",
    coreValueAlignment: "Ensures every single customer feels valued and totally satisfied by accelerating management action on guest feedback within 24 hours.",
    keyFeatures: [
      "Centralized guest feedback database linking physical review cards and online reviews",
      "Conversational search assistant allowing managers to query comments by department and shift",
      "Automated monthly email digest delivered to General Managers on the 1st of every month",
      "Categorization across food quality, service velocity, staff friendliness, and ambiance"
    ],
    techStack: ["Google Generative AI (Gemini)", "Next.js", "Django REST", "PostgreSQL", "Resend", "TailwindCSS"],
    operationalScope: "Tamarind Mombasa (Dhow, Village, Restaurant), Group Operations",
    colorTheme: {
      accentBorder: "hover:border-indigo-500",
      badgeStyle: "bg-indigo-50 text-indigo-800 border-indigo-300",
      iconBg: "bg-[#4338ca] text-white",
      statColor: "text-[#4338ca]",
      pillBg: "bg-indigo-50 text-indigo-900 border-indigo-200"
    }
  },
  {
    id: "finance-portal",
    name: "Finance & Credit Note Portal",
    tagline: "Digital approval workflow and posting verification system for credit note adjustments.",
    category: "Financial Governance",
    department: "Group Finance & Internal Audit",
    badge: "Finance",
    iconName: "ShieldCheck",
    coreValue: "Shareholder Satisfaction / Financial Results",
    coreValueAlignment: "Protects shareholder profitability by enforcing strict audit governance and preventing duplicate accounting adjustments.",
    keyFeatures: [
      "4-tier digital approval pipeline: Initiator → Internal Audit → Financial Controller → General Manager",
      "Automated verification checking for duplicate or triplicate invoice entries",
      "One-click branded PDF credit note generation for accounting records",
      "Timestamped audit logs tracking all approvals, rejections, and review comments"
    ],
    techStack: ["Next.js App Router", "Django REST Framework", "PostgreSQL", "Prisma ORM", "Resend", "TailwindCSS"],
    operationalScope: "Tamarind Nairobi, Tamarind Mombasa, Tamarind Dhow, Carnivore, Tamarind Village",
    colorTheme: {
      accentBorder: "hover:border-amber-500",
      badgeStyle: "bg-amber-50 text-amber-800 border-amber-300",
      iconBg: "bg-[#b8860b] text-white",
      statColor: "text-[#b8860b]",
      pillBg: "bg-amber-50 text-amber-900 border-amber-200"
    }
  },
  {
    id: "village-booking",
    name: "Tamarind Village Direct Booking Portal",
    tagline: "Website and direct booking integration with the ProfitRoom reservation engine.",
    category: "Digital Distribution",
    department: "Tamarind Village & Reservations",
    badge: "Reservations",
    iconName: "Building2",
    coreValue: "Shareholder Satisfaction / Financial Results",
    coreValueAlignment: "Strengthens financial returns and shareholder value by capturing direct reservations and avoiding third-party OTA commission deductions.",
    keyFeatures: [
      "Direct integration with the ProfitRoom booking engine for live apartment rates and suite availability",
      "Responsive accommodation showcase highlighting oceanfront suites, amenities, and pool facilities",
      "Automated lead categorization routing dining, conference, and room inquiries to department inboxes",
      "Mobile-optimized direct reservation flow"
    ],
    techStack: ["React 19 / Next.js", "ProfitRoom API", "PostgreSQL", "TailwindCSS"],
    operationalScope: "Tamarind Village Oceanfront Luxury Apartments, Mombasa",
    unitLogo: "/village.png",
    colorTheme: {
      accentBorder: "hover:border-orange-600",
      badgeStyle: "bg-orange-50 text-[#c2410c] border-orange-300 font-bold",
      iconBg: "bg-[#ea580c] text-white",
      statColor: "text-[#c2410c]",
      pillBg: "bg-orange-50 text-orange-900 border-orange-200"
    }
  },
  {
    id: "dhow-cruise",
    name: "Tamarind Dhow Cruise Operations Core",
    tagline: "Jetty check-in, passenger manifest management, and daily food & beverage reporting.",
    category: "Dhow Sailing",
    department: "Tamarind Dhow Restaurant",
    badge: "Dhow Sailing",
    iconName: "Compass",
    coreValue: "Customer Satisfaction",
    coreValueAlignment: "Enhances guest arrival experience through rapid QR boarding check-in and provides galley crew with live passenger counts and dietary flags.",
    keyFeatures: [
      "In-browser smartphone camera QR code scanner for guest boarding at the jetty",
      "Real-time manifest synchronization between dock staff and galley crew",
      "Table seating allocations, beverage package tracking, and special dietary flags",
      "Daily per-sailing passenger counts and food & beverage cost tracking"
    ],
    techStack: ["Next.js", "html5-qrcode", "TypeScript", "PostgreSQL", "TailwindCSS"],
    operationalScope: "Tamarind Dhow Cruises (Lunch & Dinner)",
    unitLogo: "/dhow.jpg",
    colorTheme: {
      accentBorder: "hover:border-blue-600",
      badgeStyle: "bg-blue-50 text-[#0b3b82] border-blue-300 font-bold",
      iconBg: "bg-[#0b3b82] text-white",
      statColor: "text-[#0b3b82]",
      pillBg: "bg-blue-50 text-blue-900 border-blue-200"
    }
  },
  {
    id: "elimu-lms",
    name: "Tamarind Elimu SOP Hub",
    tagline: "Centralized standard operating procedure repository with role-based access and procedure search.",
    category: "Workforce & Knowledge",
    department: "Group Human Resources & Training",
    badge: "Training",
    iconName: "GraduationCap",
    coreValue: "HR Development / Learning & Growth",
    coreValueAlignment: "Develops frontline staff through accessible role-based standard operating procedures and an intelligent procedural Q&A assistant.",
    keyFeatures: [
      "Centralized digital library for brand Standard Operating Procedures (SOPs)",
      "Department-level Role-Based Access Control ensuring staff access relevant role procedures",
      "Integrated procedure search assistant answering common operational questions",
      "Manager tracking dashboard to monitor staff reading progress on mandatory standards"
    ],
    techStack: ["Next.js", "Django REST Framework", "Google Generative AI", "PostgreSQL", "TailwindCSS"],
    operationalScope: "All Tamarind Group Properties, Kitchen, Service & Operations Staff",
    colorTheme: {
      accentBorder: "hover:border-emerald-600",
      badgeStyle: "bg-emerald-50 text-[#004d40] border-emerald-300",
      iconBg: "bg-[#004d40] text-white",
      statColor: "text-[#004d40]",
      pillBg: "bg-emerald-50 text-emerald-900 border-emerald-200"
    }
  },
  {
    id: "kaizen-portal",
    name: "Kaizen Staff Innovation Portal",
    tagline: "Staff improvement idea submission portal with employee roster verification.",
    category: "Workforce & Knowledge",
    department: "Staff Welfare & General Management",
    badge: "Continuous Improvement",
    iconName: "Lightbulb",
    coreValue: "Innovation / Business Process",
    coreValueAlignment: "Challenges all staff to initiate fresh operational improvements through a zero-password mobile submission flow validated against the HR roster.",
    keyFeatures: [
      "Zero-password submission form validated in real time against internal HR roster via Staff ID & Email",
      "Direct mobile photo upload for before-and-after improvement suggestions",
      "Department manager review boards to track suggested initiatives from proposal to completion",
      "General management summary views across departments and branches"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "TailwindCSS"],
    operationalScope: "Tamarind Group Operations & Frontline Staff",
    colorTheme: {
      accentBorder: "hover:border-amber-500",
      badgeStyle: "bg-amber-50 text-amber-900 border-amber-300",
      iconBg: "bg-[#d97706] text-white",
      statColor: "text-[#d97706]",
      pillBg: "bg-amber-50 text-amber-900 border-amber-200"
    }
  },
  {
    id: "it-service-desk",
    name: "Tamarind IT Helpdesk Platform",
    tagline: "Internal IT request logging, ticket routing, and equipment tracking.",
    category: "Workforce & Knowledge",
    department: "Group Information Technology",
    badge: "IT Infrastructure",
    iconName: "Cpu",
    coreValue: "Innovation / Business Process",
    coreValueAlignment: "Modernizes internal support processes with clear SLA targets, tracking hardware reliability to ensure seamless dining room operations.",
    keyFeatures: [
      "Centralized ticket intake by property, department, and priority level",
      "Service Level Agreement (SLA) countdown targets for point-of-sale and network issues",
      "Hardware asset registry linking POS terminals and network access points to service history",
      "Management uptime logs tracking incident turnaround times"
    ],
    techStack: ["Next.js", "PostgreSQL", "Django REST Framework", "TailwindCSS"],
    operationalScope: "Group IT Infrastructure across Nairobi and Coastal Establishments",
    colorTheme: {
      accentBorder: "hover:border-slate-500",
      badgeStyle: "bg-slate-100 text-slate-800 border-slate-300",
      iconBg: "bg-[#334155] text-white",
      statColor: "text-[#334155]",
      pillBg: "bg-slate-100 text-slate-800 border-slate-200"
    }
  }
];
