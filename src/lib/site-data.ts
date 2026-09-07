export const company = {
  name: "GEAA Technologies Limited",
  tagline: "Enterprise Technology That Moves Business Forward.",
  address: "80 Akin Olowolagbe Street, Surulere, Lagos, Nigeria",
  phone: "0807 469 6508",
  domain: "geaatech.com",
};

export type Service = {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    id: "infrastructure",
    slug: "enterprise-infrastructure",
    number: "01",
    title: "Enterprise Infrastructure",
    description:
      "Servers, storage and virtualisation designed around how your business actually runs.",
    capabilities: ["Servers & storage", "Virtualisation", "Backup & recovery", "Data centre & branch design"],
  },
  {
    id: "cloud",
    slug: "cloud-microsoft-365",
    number: "02",
    title: "Cloud & Microsoft 365",
    description:
      "Migration, tenancy management and collaboration tooling that scales with your team.",
    capabilities: ["Exchange Online & Teams", "SharePoint & OneDrive", "Tenant migration", "Licensing management"],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    number: "03",
    title: "Cybersecurity",
    description:
      "Endpoint, email and network protection built in from the start, not bolted on after.",
    capabilities: ["Endpoint protection", "Email security", "Network security", "Threat monitoring"],
  },
  {
    id: "networking",
    slug: "networking",
    number: "04",
    title: "Networking",
    description:
      "Structured cabling, wireless and firewalls that keep every site connected and fast.",
    capabilities: ["Structured cabling", "Wireless design", "Switching & routing", "Firewalls & VPN"],
  },
  {
    id: "devices",
    slug: "devices-hardware",
    number: "05",
    title: "Devices & Hardware",
    description:
      "Laptops, desktops and peripherals sourced, configured and rolled out at fleet scale.",
    capabilities: ["Laptops & desktops", "Peripherals", "Fleet provisioning", "Asset lifecycle"],
  },
  {
    id: "software",
    slug: "software-licensing",
    number: "06",
    title: "Software & Licensing",
    description:
      "Licensing that stays compliant and software that reaches every user who needs it.",
    capabilities: ["License compliance", "Volume licensing", "Software deployment", "Subscription management"],
  },
  {
    id: "support",
    slug: "managed-it-support",
    number: "07",
    title: "Managed IT & Support",
    description:
      "A helpdesk and monitoring team that catches issues before your staff have to.",
    capabilities: ["Helpdesk", "Remote monitoring", "On-site response", "Ongoing coverage"],
  },
  {
    id: "procurement",
    slug: "it-procurement-deployment",
    number: "08",
    title: "IT Procurement & Deployment",
    description:
      "Sourcing and fleet rollout handled end to end, from purchase order to working desk.",
    capabilities: ["Sourcing & supply", "Configuration", "Logistics & rollout", "Vendor coordination"],
  },
  {
    id: "grc",
    slug: "grc-it-governance",
    number: "09",
    title: "GRC & IT Governance",
    description:
      "Governance, risk and compliance support for organisations making deliberate, defensible technology decisions.",
    capabilities: ["Governance advisory", "Risk assessment", "Policy development", "Compliance advisory", "Governance workshops"],
  },
  {
    id: "training",
    slug: "technology-training",
    number: "10",
    title: "Technology Training",
    description:
      "Hands-on technology training that helps staff confidently use the systems, software and security practices their organisation relies on.",
    capabilities: ["Staff training", "System workshops", "Security awareness", "Software & systems training", "Refresher sessions"],
  },
];

// Conceptual grouping for editorial display (e.g. the Solutions grid) —
// an information-architecture grouping, not separate legal divisions.
export const serviceGroups: { title: string; ids: string[] }[] = [
  {
    title: "Technology Infrastructure",
    ids: ["infrastructure", "cloud", "cybersecurity", "networking", "devices"],
  },
  {
    title: "Technology Operations",
    ids: ["software", "support", "procurement"],
  },
  {
    title: "Governance & Capability",
    ids: ["grc", "training"],
  },
];

export const ecosystemFlow = [
  "Infrastructure",
  "Cloud",
  "Security",
  "Network",
  "Devices",
  "Support",
];

export type Reason = {
  title: string;
  description: string;
};

export const whyGeaa: Reason[] = [
  {
    title: "Enterprise-grade thinking",
    description:
      "We plan technology the way a serious organisation needs it planned: for scale, for uptime, and for the next three years, not just the next quarter.",
  },
  {
    title: "Practical deployment",
    description:
      "Good architecture means nothing if it doesn't ship. We deploy on real timelines, in real offices, around real staff who still need to work.",
  },
  {
    title: "Security built in",
    description:
      "Protection is part of the design brief from day one, across endpoints, email and the network, not a separate project added on afterward.",
  },
  {
    title: "Ongoing support",
    description:
      "Systems need upkeep long after go-live. Our team stays on, watching, patching and answering the phone when something needs attention.",
  },
];

export type DeliverBlock = {
  verb: string;
  description: string;
};

export const deliverBlocks: DeliverBlock[] = [
  {
    verb: "Deploy",
    description:
      "Infrastructure, cloud tenancies and device fleets stood up correctly the first time, on schedule.",
  },
  {
    verb: "Secure",
    description:
      "Endpoints, email and networks protected against the threats that actually target Nigerian businesses.",
  },
  {
    verb: "Connect",
    description:
      "Every office, branch and remote worker on one network that behaves the same way everywhere.",
  },
  {
    verb: "Support",
    description:
      "A team that answers, resolves and follows up, long after the deployment is finished.",
  },
];

export const technologies = [
  "Microsoft 365",
  "Windows Server",
  "Sophos",
  "Zoho",
  "Fortinet",
  "Dell",
];

export const approachSteps = ["Understand", "Design", "Deploy", "Secure", "Support"];

export const beliefs: string[] = [
  "Technology should be practical.",
  "Security should be considered from the beginning.",
  "Infrastructure should be built to scale.",
  "Support should continue after deployment.",
];

export const capabilityVerbs = ["Acquire", "Deploy", "Secure", "Connect", "Support"];

// --- Enterprise Infrastructure (Page 04) ---

export type LayerStep = { label: string; caption: string };

export const infrastructureLayers: LayerStep[] = [
  { label: "Compute", caption: "Servers and virtual machines running the workload." },
  { label: "Storage", caption: "Where business data actually lives, sized for growth." },
  { label: "Network", caption: "The connection between compute, storage and the people using them." },
  { label: "Backup", caption: "A recovery path that exists before anything goes wrong, not after." },
  { label: "Business Operations", caption: "What all of the above exists to keep running." },
];

export const infrastructureProblems: { term: string; description: string }[] = [
  { term: "Reliability", description: "Systems that stay up because they were sized correctly, not because nothing has gone wrong yet." },
  { term: "Performance", description: "Infrastructure that keeps pace as usage grows, instead of quietly slowing everyone down." },
  { term: "Scalability", description: "Room to grow built in from the start, not bolted on during a crisis." },
  { term: "Business continuity", description: "A tested path back to normal, not just a backup folder somewhere." },
  { term: "Operational dependency", description: "An honest picture of what the business actually can't function without." },
];

export type CapabilityItem = {
  name: string;
  description: string;
  label: string;
};

export const infrastructureCapabilities: CapabilityItem[] = [
  {
    name: "Servers & Server Infrastructure",
    description: "Physical and virtual server environments sized and configured for the workload — not oversold, not underspecified.",
    label: "Physical & virtual",
  },
  {
    name: "Data Centre & On-Premise Infrastructure",
    description: "Server rooms and on-premise environments built properly: power, cooling, cabling and rack layout.",
    label: "On-site environments",
  },
  {
    name: "Storage",
    description: "Storage systems sized for current data volume and a realistic growth path, not just today's numbers.",
    label: "Capacity & growth",
  },
  {
    name: "Backup & Recovery Infrastructure",
    description: "Backup systems that are tested on a schedule, not installed once and left unchecked.",
    label: "Tested recovery",
  },
  {
    name: "Infrastructure Deployment",
    description: "New infrastructure installed, configured and handed over working, on a defined timeline.",
    label: "Installation & handover",
  },
  {
    name: "Infrastructure Maintenance & Support",
    description: "Ongoing monitoring and maintenance after go-live — an infrastructure practice, not a one-time project.",
    label: "Ongoing upkeep",
  },
  {
    name: "Enterprise Hardware Infrastructure",
    description: "Enterprise-grade hardware sourced and configured to match the environment it's going into.",
    label: "Sourced & configured",
  },
];

export const infrastructureProcess: LayerStep[] = [
  { label: "Assess", caption: "Understand the environment, workload and constraints before recommending anything." },
  { label: "Plan", caption: "Specify the right infrastructure for the requirement, not the most expensive option." },
  { label: "Deploy", caption: "Install, configure and hand over infrastructure that works from day one." },
  { label: "Support", caption: "Stay on after go-live to monitor, maintain and respond when it matters." },
];

// --- Cloud & Microsoft 365 (Page 05) ---

export const cloudLayers: LayerStep[] = [
  { label: "People", caption: "The staff who need to work, wherever they are." },
  { label: "Identity", caption: "One verified sign-in that controls what each person can reach." },
  { label: "Applications", caption: "Teams, Exchange Online, SharePoint and OneDrive — the tools people actually use." },
  { label: "Data", caption: "Documents, mail and files kept in one place instead of scattered across devices." },
  { label: "Cloud", caption: "The Microsoft 365 environment all of the above runs on." },
];

export const microsoft365Capabilities: CapabilityItem[] = [
  {
    name: "Exchange Online",
    description: "Business email that stays reachable from any device, configured properly from the start.",
    label: "Mail & calendar",
  },
  {
    name: "Teams",
    description: "Chat, calls and meetings set up so the whole organisation actually uses one system.",
    label: "Chat & meetings",
  },
  {
    name: "SharePoint",
    description: "Shared document libraries and sites structured so people can find what they need.",
    label: "Shared documents",
  },
  {
    name: "OneDrive",
    description: "Personal file storage that syncs properly and backs up work automatically.",
    label: "Personal storage",
  },
  {
    name: "Microsoft 365 Licensing",
    description: "The right plan for each user, reviewed as the team and its needs change.",
    label: "Plan management",
  },
];

export const cloudInfrastructureCapabilities: CapabilityItem[] = [
  {
    name: "Migration",
    description: "Moving mailboxes, files and settings across without losing data or downtime nobody agreed to.",
    label: "Cutover planning",
  },
  {
    name: "Deployment",
    description: "Tenant setup and rollout sequenced so departments come online in a sensible order.",
    label: "Tenant setup",
  },
  {
    name: "Configuration",
    description: "Security defaults, sharing rules and policies set deliberately, not left on defaults.",
    label: "Policy & settings",
  },
  {
    name: "User Management",
    description: "Accounts, groups and access kept current as people join, move roles, or leave.",
    label: "Accounts & access",
  },
  {
    name: "Backup Considerations",
    description: "Understanding what Microsoft backs up by default, and where a business needs its own backup.",
    label: "Data protection",
  },
];

// --- Cybersecurity (Page 06) ---

export const cybersecurityCapabilities: CapabilityItem[] = [
  {
    name: "Endpoint Protection",
    description: "Laptops and desktops protected against malware and unauthorised access, not left on default settings.",
    label: "Devices",
  },
  {
    name: "Network Security",
    description: "Firewalls and access controls configured to keep the perimeter actually closed.",
    label: "Perimeter",
  },
  {
    name: "Email Security",
    description: "Filtering and protection against phishing and malicious attachments before they reach an inbox.",
    label: "Inbox protection",
  },
  {
    name: "Threat Protection",
    description: "Monitoring for suspicious activity across the environment, not just at a single point.",
    label: "Monitoring",
  },
  {
    name: "Security Deployment",
    description: "Security tools installed and configured correctly from day one, not left on defaults.",
    label: "Implementation",
  },
  {
    name: "Security Support",
    description: "Ongoing tuning, patching and response as the environment and the threats it faces change.",
    label: "Ongoing care",
  },
];

export const protectionLayers: { label: string; caption: string }[] = [
  { label: "Network", caption: "The perimeter — what's allowed in and out." },
  { label: "Endpoint", caption: "The devices people actually work on." },
  { label: "Identity", caption: "Who is allowed to reach what." },
  { label: "Email", caption: "The most common way in." },
  { label: "Data", caption: "What all of the above exists to protect." },
];

// --- Networking (Page 07) ---

export const networkingProcess: LayerStep[] = [
  { label: "Assess", caption: "Understand current connectivity, traffic and pain points before changing anything." },
  { label: "Design", caption: "Plan a topology sized for the sites, users and systems that actually need to connect." },
  { label: "Deploy", caption: "Install cabling, switching and wireless that works the first time it's turned on." },
  { label: "Optimise", caption: "Tune performance once real traffic patterns are visible, not just on paper." },
  { label: "Support", caption: "Stay on to monitor and resolve issues as the network grows and changes." },
];

export const performanceReliability = {
  performance: {
    title: "Designed for performance.",
    description: "Networks specified for the traffic they'll actually carry, not the traffic on a spec sheet.",
  },
  reliability: {
    title: "Built for reliability.",
    description: "Cabling, switching and routing installed properly the first time, so faults are the exception, not routine.",
  },
};

export const networkingCapabilities: CapabilityItem[] = [
  {
    name: "LAN",
    description: "The local network connecting everyone in a building or office to each other and to shared resources.",
    label: "Local network",
  },
  {
    name: "WAN",
    description: "Connections between offices and sites, so multiple locations work as one network.",
    label: "Site to site",
  },
  {
    name: "Wi-Fi",
    description: "Wireless coverage designed for the space, not just a single access point in reception.",
    label: "Wireless coverage",
  },
  {
    name: "Switching",
    description: "The hardware that actually moves traffic between devices on the network.",
    label: "Traffic handling",
  },
  {
    name: "Routing",
    description: "Directing traffic between networks so it reaches the right destination efficiently.",
    label: "Traffic direction",
  },
  {
    name: "Network Infrastructure",
    description: "Cabling, racks and hardware installed to a standard that holds up over time.",
    label: "Physical build",
  },
  {
    name: "Business Connectivity",
    description: "Internet and inter-site links sized for what the business actually needs to run.",
    label: "Internet & links",
  },
];

// --- Devices & Hardware (Page 08) ---

export type DeviceCategory = {
  name: string;
  description: string;
  icon: "laptop" | "cpu" | "monitor" | "server" | "mouse" | "printer";
};

export const deviceCategories: DeviceCategory[] = [
  { name: "Laptops", description: "Business laptops configured and ready to work from the first login.", icon: "laptop" },
  { name: "Desktops", description: "Desktop workstations sized for the software people actually run.", icon: "cpu" },
  { name: "Monitors", description: "Displays that make a workstation comfortable for a full working day.", icon: "monitor" },
  { name: "Servers", description: "Physical and virtual servers, sourced and configured for the workload.", icon: "server" },
  { name: "Accessories", description: "Keyboards, mice, docks and the everyday hardware every desk needs.", icon: "mouse" },
  { name: "Business Peripherals", description: "Printers, scanners and shared-office hardware, deployed and maintained.", icon: "printer" },
];

export const deviceTiers: { title: string; description: string }[] = [
  {
    title: "Featured Technology",
    description: "The devices we recommend most, chosen for reliability and fit rather than whichever has the highest margin.",
  },
  {
    title: "Business Devices",
    description: "Laptops, desktops, monitors and accessories for the people doing the day-to-day work.",
  },
  {
    title: "Enterprise Hardware",
    description: "Servers and infrastructure-grade equipment, sourced and configured for the environment they're going into.",
  },
];

// --- Software & Licensing (Page 09) ---

export const estateRegister: { layer: string; managed: string }[] = [
  { layer: "Users", managed: "Who's licensed for what, and whether that still matches who's actually on the team." },
  { layer: "Applications", managed: "Microsoft 365, Zoho and the other software the business runs on day to day." },
  { layer: "Licences", managed: "Subscriptions tracked against what's actually assigned and actually used." },
  { layer: "Security", managed: "Licensing that includes the protection it's supposed to, not just the base plan." },
  { layer: "Support", managed: "Someone accountable when a subscription lapses or a renewal gets missed." },
];

export const softwareCapabilities: CapabilityItem[] = [
  {
    name: "Microsoft 365",
    description: "Licence tiers and subscriptions kept aligned with who's actually using what.",
    label: "Licensing angle",
  },
  {
    name: "Business Software",
    description: "Line-of-business applications the business depends on, tracked and licensed properly.",
    label: "Line-of-business",
  },
  {
    name: "Security Licensing",
    description: "The licensing tier that actually includes the protection a business needs, not just the base plan.",
    label: "Protection tier",
  },
  {
    name: "Productivity Software",
    description: "Zoho and other everyday business software, licensed for the people who use it.",
    label: "Everyday tools",
  },
  {
    name: "Enterprise Licensing",
    description: "Volume and enterprise agreements structured for how the organisation actually operates.",
    label: "Volume agreements",
  },
  {
    name: "Subscription Management",
    description: "Renewals, seat counts and unused licences tracked so nothing lapses or gets forgotten.",
    label: "Renewals & seats",
  },
];

// --- Managed IT & Support (Page 10) ---

export const continuityRhythm = ["Monitor", "Respond", "Resolve", "Maintain", "Improve"];

export const supportCapabilities: CapabilityItem[] = [
  {
    name: "IT Support",
    description: "A team to call when something isn't working, not just a ticket number.",
    label: "First point of contact",
  },
  {
    name: "Maintenance",
    description: "Routine upkeep that happens on a schedule, not only when something breaks.",
    label: "Scheduled upkeep",
  },
  {
    name: "Monitoring",
    description: "Watching systems for early signs of trouble, before they become outages.",
    label: "Ongoing visibility",
  },
  {
    name: "Troubleshooting",
    description: "Diagnosing the actual cause of an issue, not just the symptom in front of you.",
    label: "Root cause",
  },
  {
    name: "Device Support",
    description: "Laptops, desktops and peripherals kept working for the people using them.",
    label: "End-user devices",
  },
  {
    name: "Infrastructure Support",
    description: "Servers, storage and network equipment kept healthy after the project ends.",
    label: "Backend systems",
  },
  {
    name: "Vendor Coordination",
    description: "Chasing warranty claims and vendor tickets so the business doesn't have to.",
    label: "Third-party liaison",
  },
];

// --- IT Procurement & Deployment (Page 11) ---

export const requirementOutcomePairs: { requirement: string; outcome: string }[] = [
  { requirement: "40 new laptops", outcome: "40 laptops, imaged and delivered ready to work." },
  { requirement: "A file server that's ageing", outcome: "New server specified, procured and running in production." },
  { requirement: "Patchy Wi-Fi in the warehouse", outcome: "A wireless survey completed and access points installed." },
  { requirement: "Everyone needs to be on Microsoft 365", outcome: "Microsoft 365 licensed, configured and rolled out to every user." },
];

export const procurementCapabilities: CapabilityItem[] = [
  {
    name: "Hardware",
    description: "Laptops, desktops, servers and peripherals sourced to match the actual requirement.",
    label: "Devices & servers",
  },
  {
    name: "Software",
    description: "Applications and productivity tools procured and licensed for the people using them.",
    label: "Applications",
  },
  {
    name: "Licensing",
    description: "Subscriptions and licence agreements set up correctly from the start.",
    label: "Agreements",
  },
  {
    name: "Infrastructure",
    description: "Servers, storage and the physical environment technology runs in.",
    label: "Physical build",
  },
  {
    name: "Networking",
    description: "Switches, wireless and connectivity procured as part of the same requirement.",
    label: "Connectivity",
  },
];

// --- Industries (Page 12) ---

export type IndustryContext = {
  name: string;
  change: string;
  emphasis: { title: string; slug: string }[];
};

export const industryContexts: IndustryContext[] = [
  {
    name: "SMEs",
    change: "Technology decisions made without wasting money on things a small team doesn't need yet.",
    emphasis: [
      { title: "Managed IT & Support", slug: "managed-it-support" },
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
    ],
  },
  {
    name: "Corporate Organisations",
    change: "Multiple departments and locations running to one technology standard, not several.",
    emphasis: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Networking", slug: "networking" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
  },
  {
    name: "Professional Services",
    change: "Client work that depends on uptime and confidentiality holding at the same time.",
    emphasis: [
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
  },
  {
    name: "Education",
    change: "Device fleets and network capacity that hold up across an entire student body, not just a staff room.",
    emphasis: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "Networking", slug: "networking" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
      { title: "Technology Training", slug: "technology-training" },
    ],
  },
  {
    name: "Healthcare",
    change: "Systems that stay available and protect sensitive records at the same time.",
    emphasis: [
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
  },
  {
    name: "Financial Services",
    change: "Security and compliance considerations that shape the infrastructure from the start, not after an audit.",
    emphasis: [
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Software & Licensing", slug: "software-licensing" },
      { title: "GRC & IT Governance", slug: "grc-it-governance" },
    ],
  },
  {
    name: "Government / Public Sector",
    change: "Procurement processes and accountability requirements that shape how technology gets bought and deployed.",
    emphasis: [
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
      { title: "GRC & IT Governance", slug: "grc-it-governance" },
    ],
  },
];

// --- GEAA Insights (Page 14) ---

export const insightsCategories: string[] = [
  "Infrastructure",
  "Cybersecurity",
  "Microsoft 365",
  "Networking",
  "Business Technology",
  "IT Procurement",
  "Technology Tips",
];

// Content architecture for future articles. No instances exist yet —
// this type exists so real posts can be added later without a
// redesign, per the brief's request to build the CMS structure
// without populating fake thought leadership.
export type InsightArticle = {
  slug: string;
  title: string;
  category: (typeof insightsCategories)[number];
  excerpt: string;
  author: string;
  date: string;
  readingMinutes: number;
};

export const insightArticles: InsightArticle[] = [];

// --- Contact / Get a Quote (Page 17) ---

export const enquiryTypes = [
  { value: "quote", label: "Request a Quote" },
  { value: "talk", label: "Talk to GEAA" },
  { value: "support", label: "Request IT Support" },
] as const;

export const budgetOptions = [
  "Not sure yet",
  "Single item / small purchase",
  "Departmental project",
  "Organisation-wide project",
  "Multi-site / enterprise programme",
];

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1\u20133 months",
  "Just researching for now",
];

export const contactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either" },
] as const;

// --- GEAA Support (Page 18) ---

export const supportCategories: { name: string; description: string }[] = [
  { name: "Technical Support", description: "General technical issues that don't fit neatly into one category." },
  { name: "Device / Hardware Support", description: "A laptop, desktop or piece of hardware that isn't working properly." },
  { name: "Microsoft 365 Support", description: "Email, Teams, SharePoint or OneDrive not behaving as expected." },
  { name: "Network Support", description: "Connectivity, Wi-Fi or network access problems." },
  { name: "Cybersecurity Support", description: "A security concern, suspicious activity, or a protection issue." },
  { name: "Software / Licensing Support", description: "An application, licence or subscription issue." },
  { name: "Infrastructure Support", description: "A server, storage or backend system problem." },
  { name: "General Support", description: "Anything else \u2014 we'll route it to the right person." },
];

// --- GRC & IT Governance (Page 19) ---

export const grcRegisterFields: { label: string; description: string }[] = [
  { label: "Technology decision", description: "A new system, policy or process is being considered." },
  { label: "Owner", description: "Someone specific is responsible for it \u2014 not \u2018IT\u2019 in general." },
  { label: "Risk", description: "What could go wrong, and how serious that would be." },
  { label: "Policy / Control", description: "The rule or safeguard that applies once the decision is made." },
  { label: "Review", description: "A point where the decision gets checked again, not left indefinitely." },
];

export const grcCapabilities: { number: string; title: string; description: string }[] = [
  {
    number: "01",
    title: "Governance Advisory",
    description: "Practical support for structuring technology responsibilities, decision-making and governance practices.",
  },
  {
    number: "02",
    title: "Risk Assessment",
    description: "Review technology-related risks, identify areas requiring attention and provide a clearer basis for prioritisation.",
  },
  {
    number: "03",
    title: "Policy Development",
    description: "Support the creation and refinement of practical technology policies and operating guidelines.",
  },
  {
    number: "04",
    title: "Compliance Advisory",
    description: "Help organisations understand and organise technology-related compliance considerations.",
  },
  {
    number: "05",
    title: "Governance Workshops",
    description: "Facilitated sessions that help teams establish clearer understanding, ownership and governance practices around technology.",
  },
];

export const activityVsGovernance = {
  activity: "Someone manages it.",
  governance: [
    "Someone owns it.",
    "The decision is understood.",
    "The risk is visible.",
    "The policy is clear.",
    "The review happens.",
  ],
};

export const grcEstateRelations: { title: string; description: string; slug: string }[] = [
  { title: "Cybersecurity", description: "Risk, security practices and technology controls.", slug: "cybersecurity" },
  { title: "Software & Licensing", description: "Software ownership, licensing considerations and technology asset discipline.", slug: "software-licensing" },
  { title: "IT Procurement & Deployment", description: "Technology decisions, procurement controls and deployment considerations.", slug: "it-procurement-deployment" },
  { title: "Managed IT & Support", description: "Operational practices, ownership and ongoing technology governance.", slug: "managed-it-support" },
];

export const grcApproachSteps: { number: string; title: string; description: string }[] = [
  { number: "01", title: "Understand", description: "Understand the organisation's technology environment, responsibilities and governance concerns." },
  { number: "02", title: "Assess", description: "Identify governance, risk, policy or compliance areas requiring attention." },
  { number: "03", title: "Structure", description: "Help establish clearer policies, responsibilities and practical governance practices." },
  { number: "04", title: "Review", description: "Support ongoing review and refinement of the governance approach." },
];

export const grcWorkshopTopics: string[] = [
  "Responsibilities",
  "Policies",
  "Technology risks",
  "Security practices",
  "Decision-making",
  "Operational expectations",
];

// --- Technology Training (Page 20) ---

export const learningStages: { number: string; title: string; description: string }[] = [
  { number: "01", title: "Observe", description: "Understand what the system does and why it matters." },
  { number: "02", title: "Practice", description: "Work through the system or workflow in a practical setting." },
  { number: "03", title: "Apply", description: "Use the technology in a real organisational context." },
  { number: "04", title: "Reinforce", description: "Return to important workflows and security practices through refresher learning." },
];

export const trainingScenarios: string[] = [
  "Introducing new software",
  "Rolling out Microsoft 365",
  "Understanding business systems",
  "Reinforcing security practices",
  "Onboarding staff to organisational technology",
  "Refresher sessions after systems have been in use",
];

export const trainingCapabilities: CapabilityItem[] = [
  {
    name: "Staff Training",
    description: "Practical sessions designed around the technology people use in their day-to-day work.",
    label: "Day-to-day systems",
  },
  {
    name: "System Workshops",
    description: "Hands-on workshops focused on understanding and using organisational systems and workflows.",
    label: "Hands-on sessions",
  },
  {
    name: "Security Awareness",
    description: "Practical learning around responsible technology and security practices.",
    label: "Responsible use",
  },
  {
    name: "Software & Systems Training",
    description: "Training that helps users work confidently with the software and systems their organisation relies on.",
    label: "Confident use",
  },
  {
    name: "Refresher Sessions",
    description: "Focused follow-up sessions that revisit important workflows, systems or practices.",
    label: "Follow-up",
  },
];

export const trainingRelatedAreas: { title: string; description: string; slug: string }[] = [
  { title: "Cloud & Microsoft 365", description: "Training can help users understand and adopt cloud-based productivity and collaboration systems.", slug: "cloud-microsoft-365" },
  { title: "Cybersecurity", description: "Security awareness can reinforce responsible user behaviour and technology practices.", slug: "cybersecurity" },
  { title: "Managed IT & Support", description: "Training can complement technology support by helping users understand the systems they work with.", slug: "managed-it-support" },
];

export const trainingEngagementModel: { title: string; description: string }[] = [
  { title: "Understand", description: "We start by understanding the systems, users and technology context involved." },
  { title: "Focus", description: "From there, identify the workflows, software or practices that actually need attention." },
  { title: "Practise", description: "Work through the relevant systems and scenarios in a hands-on session." },
  { title: "Reinforce", description: "Come back to it with refresher or follow-up sessions where it's useful." },
];

export const securityAwarenessTopics: string[] = [
  "Account & access awareness",
  "Safe handling of information",
  "Recognising suspicious activity",
  "Responsible system use",
  "Following security practices",
];

// --- Case Studies / Selected Work (Page 13) ---
// All content below reflects facts the project owner explicitly
// confirmed for public use. No quantities, dates, or outcomes beyond
// what was confirmed are included.

export type CaseStudy = {
  slug: string;
  client: string;
  positioning: string;
  status: string;
  summary: string;
  context: string;
  requirement: string;
  geaaRole: string[];
  outcome: string;
  relatedServices: { title: string; slug: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lagos-state-sports-center",
    client: "Lagos State Sports Center",
    positioning: "Print Infrastructure & Ongoing Device Support",
    status: "Ongoing \u2014 second year",
    summary:
      "GEAA supplied and installed new printing equipment for Lagos State Sports Center, in a joint delivery with Krunchy Data, and continues to support the organisation through recurring toner supply and printer servicing.",
    context:
      "Lagos State Sports Center needed reliable printing infrastructure \u2014 new equipment, properly installed, and kept running over time.",
    requirement:
      "New printers, supplied and installed correctly, with the consumables and servicing to keep them working.",
    geaaRole: [
      "New printer procurement and supply",
      "Printer installation",
      "Toner supply",
      "Ongoing printer servicing",
    ],
    outcome:
      "The engagement remains ongoing, now in its second year, with GEAA continuing to support the organisation's printing requirements.",
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
  },
  {
    slug: "phd-nigeria",
    client: "PHD Nigeria",
    positioning: "Workplace Technology, Security & Microsoft 365",
    status: "Multi-area technology deployment",
    summary:
      "GEAA delivered workplace technology and security infrastructure for PHD Nigeria, spanning security cameras, network access controls, laptops, software licensing and a full Microsoft 365 environment.",
    context:
      "PHD Nigeria needed workplace technology and security systems supplied, installed and properly administered across several areas at once.",
    requirement:
      "Security hardware, laptops, software licensing, and a fully configured Microsoft 365 environment.",
    geaaRole: [
      "Smart locks \u2014 supply",
      "Security cameras \u2014 supply, installation, configuration and maintenance",
      "Network access control delivery",
      "Laptops \u2014 supply",
      "Software and licensing sales",
      "Microsoft 365 \u2014 licensing, user and domain configuration, account setup, email configuration, Teams, SharePoint, OneDrive, and administration/support",
    ],
    outcome:
      "PHD Nigeria's workplace technology, security systems and Microsoft 365 environment continue to be supported and administered by GEAA.",
    relatedServices: [
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "Networking", slug: "networking" },
    ],
  },
  {
    slug: "sashamc-lexlyn-grc",
    client: "SashaMC / Lexlyn Career Boost",
    positioning: "Security Posture, Backup & Data Protection Governance",
    status: "GRC engagement",
    summary:
      "GEAA carried out a governance, risk and compliance engagement for SashaMC / Lexlyn Career Boost, assessing security posture, backup practices and data protection compliance, alongside supporting policy work and training.",
    context:
      "SashaMC / Lexlyn Career Boost needed a clearer picture of its security posture, backup practices and data protection compliance position.",
    requirement:
      "An assessment of security posture, backup practices and data protection compliance, alongside supporting policy work and training.",
    geaaRole: [
      "Security posture assessment",
      "Backup assessment",
      "Data protection compliance assessment",
      "Policy work",
      "Compliance and backup training",
    ],
    outcome:
      "The assessment produced a documented view of the organisation's security posture, backup practices and data protection compliance position.",
    relatedServices: [
      { title: "GRC & IT Governance", slug: "grc-it-governance" },
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Software & Licensing", slug: "software-licensing" },
    ],
  },
];

export const m365SelectedWork = {
  scope: [
    "Microsoft 365 licensing",
    "User and domain configuration",
    "Account setup",
    "Email configuration",
    "Teams, SharePoint and OneDrive",
    "Administration and support",
  ],
  clients: ["OTB Media Concepts", "Pie Atelier Interiors", "Recency Media Ltd", "Raseno Media"],
};

export const digitalWork: { name: string; type: string; description: string }[] = [
  { name: "Metric Calculator", type: "Digital Product", description: "A calculation tool." },
  { name: "Screen Recorder", type: "Digital Product", description: "A screen recording tool." },
  { name: "Any Application Converter", type: "Digital Product", description: "A file and application conversion tool." },
  { name: "Pie Atelier", type: "Website", description: "Website for an interior design and architecture company." },
  { name: "SashaMC", type: "Website", description: "Website." },
  { name: "Lexlyn Career Boost", type: "Website", description: "Website for a career-development service." },
  { name: "Woodbox Digital", type: "Website", description: "Website." },
  { name: "AskHenry", type: "Application", description: "An AI-powered career guidance platform." },
  { name: "Yayas Kitchen", type: "Website", description: "Website for a food and restaurant business." },
  { name: "Loughthon Dental", type: "Website", description: "Website for a dental practice." },
];

export const trainingWork: { client: string; areas: string[] }[] = [
  { client: "SashaMC", areas: ["Compliance training", "Backup training"] },
  { client: "Ultimate Balsam Global", areas: ["Invoicing training"] },
  { client: "TOWB", areas: ["Data analysis training", "Invoicing training"] },
];

// --- Shop (Page 15) — category framework only, no products yet ---

export type ShopCategory = {
  slug: string;
  name: string;
  description: string;
  relatedService: { title: string; slug: string };
};

export const shopCategories: ShopCategory[] = [
  {
    slug: "devices-hardware",
    name: "Devices & Hardware",
    description: "Laptops, desktops, monitors and the everyday devices a team runs on.",
    relatedService: { title: "Devices & Hardware", slug: "devices-hardware" },
  },
  {
    slug: "servers-infrastructure",
    name: "Servers & Infrastructure",
    description: "Physical and virtual servers, storage and the infrastructure they run on.",
    relatedService: { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
  },
  {
    slug: "networking",
    name: "Networking",
    description: "Switches, wireless access points, routers and the equipment a network runs on.",
    relatedService: { title: "Networking", slug: "networking" },
  },
  {
    slug: "software-licensing",
    name: "Software & Licensing",
    description: "Business software and licensing outside the vendor categories below.",
    relatedService: { title: "Software & Licensing", slug: "software-licensing" },
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    description: "Microsoft 365 licensing and subscriptions for the plans an organisation needs.",
    relatedService: { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
  },
  {
    slug: "google",
    name: "Google",
    description: "Google Workspace and related licensing for teams that run on Google.",
    relatedService: { title: "Software & Licensing", slug: "software-licensing" },
  },
  {
    slug: "zoho",
    name: "Zoho",
    description: "Zoho applications and licensing for everyday business operations.",
    relatedService: { title: "Software & Licensing", slug: "software-licensing" },
  },
  {
    slug: "sophos",
    name: "Sophos",
    description: "Sophos security licensing and endpoint protection products.",
    relatedService: { title: "Cybersecurity", slug: "cybersecurity" },
  },
  {
    slug: "accessories-peripherals",
    name: "Accessories & Peripherals",
    description: "Keyboards, mice, docks, printers and the everyday hardware every desk needs.",
    relatedService: { title: "Devices & Hardware", slug: "devices-hardware" },
  },
];

// --- Real Product Catalogue (Page 16) ---
// Vendor reference prices sourced from official vendor pages and
// checked on the date shown. These are NOT GEAA's final selling
// prices \u2014 see customerPricingDescription on each product.

export type PricingModelType = "MARKET_PRICED" | "VENDOR_PRICED" | "QUOTE_REQUIRED";

export type ProductConfiguration = {
  name: string;
  vendorReferencePrice?: number;
  vendorCurrency?: string;
  billingPeriod?: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  manufacturer: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  keySpecs: string[];
  configurations: ProductConfiguration[];
  useCases: string[];
  relatedServices: { title: string; slug: string }[];
  pricingModel: PricingModelType;
  vendorPriceSource?: string;
  lastPriceChecked?: string;
  customerPricingLabel: string;
  customerPricingDescription: string;
  // Internal commercial fields (acquisitionCost, markupPercentage,
  // marginPercentage, internalSellingPrice) are supported by this
  // model conceptually but deliberately not populated here \u2014 no
  // admin/backend exists yet to manage them, and they must never be
  // rendered in any public component.
};

export const products: Product[] = [
  {
    id: "microsoft-365-business",
    slug: "microsoft-365-business",
    name: "Microsoft 365 Business",
    manufacturer: "Microsoft",
    categorySlug: "microsoft-365",
    shortDescription: "Business email, Office apps, Teams and cloud storage, licensed per user.",
    description:
      "Microsoft 365 Business plans bundle custom business email, the core Office apps, Microsoft Teams and cloud storage into a single per-user subscription, with higher tiers adding device security and Copilot.",
    keySpecs: ["Licensed per user", "Annual or monthly billing", "Up to 300 users per tenant"],
    configurations: [
      {
        name: "Business Basic",
        vendorReferencePrice: 7.0,
        vendorCurrency: "USD",
        billingPeriod: "per user/month, billed annually",
        description: "Web and mobile Office apps, business email, Teams, and 1TB storage per user.",
      },
      {
        name: "Business Standard (with Copilot)",
        vendorReferencePrice: 23.5,
        vendorCurrency: "USD",
        billingPeriod: "per user/month, billed annually",
        description: "Adds desktop Office apps and Microsoft 365 Copilot Business.",
      },
      {
        name: "Business Premium (with Copilot)",
        vendorReferencePrice: 32.0,
        vendorCurrency: "USD",
        billingPeriod: "per user/month, billed annually",
        description: "Adds advanced device security, threat protection and Copilot.",
      },
    ],
    useCases: ["Business email on a custom domain", "Team collaboration with Teams and SharePoint", "Device security for company-managed laptops"],
    relatedServices: [
      { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "VENDOR_PRICED",
    vendorPriceSource: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing",
    lastPriceChecked: "2026-09-06",
    customerPricingLabel: "Official vendor reference price",
    customerPricingDescription:
      "This is Microsoft's published list price, shown for reference. GEAA's final quotation can depend on quantity, edition, subscription term, deployment and support.",
  },
  {
    id: "google-workspace",
    slug: "google-workspace",
    name: "Google Workspace",
    manufacturer: "Google",
    categorySlug: "google",
    shortDescription: "Business email, Drive, Meet and Google's productivity apps, licensed per user.",
    description:
      "Google Workspace bundles custom business email, cloud storage, and Google's productivity and meeting tools into a single per-user subscription across three business tiers.",
    keySpecs: ["Licensed per user", "Annual or monthly billing", "Up to 300 users per tenant"],
    configurations: [
      {
        name: "Business Starter",
        vendorReferencePrice: 7.0,
        vendorCurrency: "USD",
        billingPeriod: "per user/month, billed annually",
        description: "Custom business email, 30GB storage per user, Meet for up to 100 participants.",
      },
      {
        name: "Business Standard",
        vendorReferencePrice: 14.0,
        vendorCurrency: "USD",
        billingPeriod: "per user/month, billed annually",
        description: "2TB storage per user, Meet for up to 150 participants with recording.",
      },
      {
        name: "Business Plus",
        vendorReferencePrice: 22.0,
        vendorCurrency: "USD",
        billingPeriod: "per user/month, billed annually",
        description: "5TB storage per user, enhanced security controls, Meet for up to 500 participants.",
      },
    ],
    useCases: ["Business email on a custom domain", "Cloud file storage and collaboration", "Video meetings for distributed teams"],
    relatedServices: [
      { title: "Software & Licensing", slug: "software-licensing" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "VENDOR_PRICED",
    vendorPriceSource: "https://workspace.google.com/pricing",
    lastPriceChecked: "2026-09-06",
    customerPricingLabel: "Official vendor reference price",
    customerPricingDescription:
      "This is Google's published list price, shown for reference. GEAA's final quotation can depend on quantity, edition, subscription term, deployment and support.",
  },
  {
    id: "zoho-one",
    slug: "zoho-one",
    name: "Zoho One",
    manufacturer: "Zoho",
    categorySlug: "zoho",
    shortDescription: "A bundled suite of Zoho's CRM, finance, HR and support applications.",
    description:
      "Zoho One bundles Zoho's business applications \u2014 including CRM, Books and People \u2014 under one subscription, licensed either per employee across the whole organisation or per selected user.",
    keySpecs: ["Two licensing models", "Annual or monthly billing", "Bundles 40+ Zoho applications"],
    configurations: [
      {
        name: "All Employee",
        vendorReferencePrice: 37.0,
        vendorCurrency: "USD",
        billingPeriod: "per employee/month, billed annually",
        description: "Every employee on payroll licensed for the full Zoho One application suite.",
      },
      {
        name: "Flexible User",
        vendorReferencePrice: 90.0,
        vendorCurrency: "USD",
        billingPeriod: "per user/month, billed annually",
        description: "Licence only the specific users who need access to the suite.",
      },
    ],
    useCases: ["CRM and sales pipeline management", "Invoicing and accounting", "HR and business operations tools"],
    relatedServices: [
      { title: "Software & Licensing", slug: "software-licensing" },
      { title: "GRC & IT Governance", slug: "grc-it-governance" },
    ],
    pricingModel: "VENDOR_PRICED",
    vendorPriceSource: "https://www.zoho.com/one/pricing.html",
    lastPriceChecked: "2026-09-06",
    customerPricingLabel: "Official vendor reference price",
    customerPricingDescription:
      "This is Zoho's published list price, shown for reference. GEAA's final quotation can depend on quantity, edition, subscription term, deployment and support.",
  },
  {
    id: "sophos-endpoint-protection",
    slug: "sophos-endpoint-protection",
    name: "Sophos Endpoint Protection",
    manufacturer: "Sophos",
    categorySlug: "sophos",
    shortDescription: "Endpoint security licensing for laptops and desktops.",
    description:
      "Sophos Endpoint Protection secures company laptops and desktops against malware and unauthorised access. Sophos prices this on a quote basis according to device count and protection tier.",
    keySpecs: ["Licensed per device", "Quote-based pricing"],
    configurations: [],
    useCases: ["Protecting a company laptop fleet", "Centralised endpoint security management"],
    relatedServices: [
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Devices & Hardware", slug: "devices-hardware" },
    ],
    pricingModel: "QUOTE_REQUIRED",
    customerPricingLabel: "Custom pricing",
    customerPricingDescription: "Pricing depends on your licensing, deployment and protection requirements.",
  },
  {
    id: "sophos-firewall",
    slug: "sophos-firewall",
    name: "Sophos Firewall",
    manufacturer: "Sophos",
    categorySlug: "sophos",
    shortDescription: "Network firewall and perimeter security licensing.",
    description:
      "Sophos Firewall protects the network perimeter with traffic inspection and access control. Sophos prices this on a quote basis according to appliance model and licensing term.",
    keySpecs: ["Hardware or virtual appliance", "Quote-based pricing"],
    configurations: [],
    useCases: ["Network perimeter security", "Branch office connectivity"],
    relatedServices: [
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Networking", slug: "networking" },
    ],
    pricingModel: "QUOTE_REQUIRED",
    customerPricingLabel: "Custom pricing",
    customerPricingDescription: "Pricing depends on your licensing, deployment and protection requirements.",
  },
];

// --- Hardware & Infrastructure Catalogue Expansion (Page 16b) ---
// MARKET_PRICED only \u2014 no prices, no stock, no availability claims.
// Manufacturer/model names verified against current manufacturer and
// retailer sources as of September 2026. Dell's commercial lineup is
// represented under its 2025\u20132026 "Dell Pro" rebrand (Latitude,
// Precision and OptiPlex were officially discontinued and folded into
// Dell Pro / Dell Pro Precision as of January 2025) \u2014 HP and Lenovo
// naming was verified unchanged for 2026.

const hardwareProducts: Product[] = [
  // Devices & Hardware
  {
    id: "dell-pro-laptop",
    slug: "dell-pro-laptop",
    name: "Dell Pro Laptop",
    manufacturer: "Dell",
    categorySlug: "devices-hardware",
    shortDescription: "Dell's current commercial laptop line, spanning entry to premium mobile tiers.",
    description:
      "Dell Pro is Dell's current business laptop family, replacing the former Latitude line as part of Dell's 2025\u20132026 commercial lineup simplification. It spans Dell Pro 3, 5, 7 and Pro Premium tiers, from functional office laptops to thin, travel-ready premium models.",
    keySpecs: ["Business laptop, multiple screen sizes", "Intel Core / Core Ultra processor options", "Business security and manageability features"],
    configurations: [],
    useCases: ["Everyday office and knowledge-work laptops", "Fleet deployment for staff at scale", "Travel-ready laptops for mobile professionals"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "dell-pro-precision-workstation",
    slug: "dell-pro-precision-workstation",
    name: "Dell Pro Precision Mobile Workstation",
    manufacturer: "Dell",
    categorySlug: "devices-hardware",
    shortDescription: "Dell's mobile workstation line for demanding technical and creative work.",
    description:
      "Dell Pro Precision is Dell's current mobile workstation family, the successor to the Precision line, offering workstation-class performance for CAD, engineering, data analysis and content creation.",
    keySpecs: ["Mobile workstation, 14\u201316\" chassis options", "High-performance processor and graphics options", "ISV-certified for professional applications"],
    configurations: [],
    useCases: ["CAD and engineering workloads", "Data analysis and technical computing", "Content creation requiring sustained performance"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "dell-pro-desktop",
    slug: "dell-pro-desktop",
    name: "Dell Pro Desktop",
    manufacturer: "Dell",
    categorySlug: "devices-hardware",
    shortDescription: "Dell's current business desktop line, spanning micro, small-form-factor and tower chassis.",
    description:
      "Dell Pro Desktop is Dell's current commercial desktop family, replacing the former OptiPlex line, available in micro, slim and tower form factors for office and space-constrained deployments.",
    keySpecs: ["Micro, slim and tower form factors", "Intel Core / Core Ultra processor options", "Business security and remote management features"],
    configurations: [],
    useCases: ["Standard office desktop deployment", "Space-constrained workstations", "Fleet-scale desktop rollouts"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "hp-elitebook",
    slug: "hp-elitebook",
    name: "HP EliteBook",
    manufacturer: "HP",
    categorySlug: "devices-hardware",
    shortDescription: "HP's premium business laptop line.",
    description:
      "HP EliteBook is HP's premium commercial laptop family, part of HP's current 2026 business lineup alongside ProBook and ZBook, built for professionals who need premium build quality alongside enterprise security and manageability.",
    keySpecs: ["Premium business laptop", "Intel or AMD processor options", "Enterprise security and management features"],
    configurations: [],
    useCases: ["Executive and professional-tier laptops", "Security-conscious enterprise deployments"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "Cybersecurity", slug: "cybersecurity" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "hp-probook",
    slug: "hp-probook",
    name: "HP ProBook",
    manufacturer: "HP",
    categorySlug: "devices-hardware",
    shortDescription: "HP's mainstream business laptop line.",
    description:
      "HP ProBook is HP's mainstream commercial laptop family, offering business-grade reliability and manageability at a more accessible tier than EliteBook.",
    keySpecs: ["Mainstream business laptop", "Intel or AMD processor options", "Business manageability features"],
    configurations: [],
    useCases: ["Everyday office laptop deployment", "Cost-conscious fleet rollouts"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "hp-zbook",
    slug: "hp-zbook",
    name: "HP ZBook Mobile Workstation",
    manufacturer: "HP",
    categorySlug: "devices-hardware",
    shortDescription: "HP's mobile workstation line for technical and creative professionals.",
    description:
      "HP ZBook is HP's mobile workstation family, part of HP's current business lineup, built for CAD, engineering and creative workloads that need workstation-class graphics and processing.",
    keySpecs: ["Mobile workstation chassis", "Professional graphics options", "ISV-certified for technical applications"],
    configurations: [],
    useCases: ["CAD and engineering workloads", "Video and content production"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "lenovo-thinkpad",
    slug: "lenovo-thinkpad",
    name: "Lenovo ThinkPad",
    manufacturer: "Lenovo",
    categorySlug: "devices-hardware",
    shortDescription: "Lenovo's long-standing business laptop line.",
    description:
      "Lenovo ThinkPad is Lenovo's established business laptop family (T, X, L and E series), confirmed unchanged in naming direction for 2026, known for durability and enterprise manageability.",
    keySpecs: ["T, X, L and E series options", "MIL-STD durability testing", "Enterprise security and manageability"],
    configurations: [],
    useCases: ["Durable everyday business laptops", "Mobile professional use", "Fleet-scale deployment"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "lenovo-thinkcentre",
    slug: "lenovo-thinkcentre",
    name: "Lenovo ThinkCentre",
    manufacturer: "Lenovo",
    categorySlug: "devices-hardware",
    shortDescription: "Lenovo's business desktop line.",
    description:
      "Lenovo ThinkCentre is Lenovo's business desktop family, available in tiny, small-form-factor and tower chassis for office deployment.",
    keySpecs: ["Tiny, SFF and tower form factors", "Business security and manageability features"],
    configurations: [],
    useCases: ["Standard office desktop deployment", "Space-constrained office setups"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "lenovo-thinkstation",
    slug: "lenovo-thinkstation",
    name: "Lenovo ThinkStation",
    manufacturer: "Lenovo",
    categorySlug: "devices-hardware",
    shortDescription: "Lenovo's desktop workstation line.",
    description:
      "Lenovo ThinkStation is Lenovo's desktop workstation family, built for engineering, design and data-intensive workloads that need workstation-class reliability.",
    keySpecs: ["Tower workstation chassis", "Professional graphics options", "ISV-certified for technical applications"],
    configurations: [],
    useCases: ["CAD and engineering workstations", "Data-intensive technical workloads"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },

  // Servers & Infrastructure
  {
    id: "dell-poweredge-rack",
    slug: "dell-poweredge-rack",
    name: "Dell PowerEdge Rack Server",
    manufacturer: "Dell",
    categorySlug: "servers-infrastructure",
    shortDescription: "Dell's current enterprise rack server family (R-Series).",
    description:
      "Dell PowerEdge R-Series rack servers remain Dell's current enterprise rack server line, spanning entry-level single-socket models to high-density multi-socket platforms. Exact processor, memory and storage configuration is specified per requirement.",
    keySpecs: ["1U\u20132U rack form factors", "Intel Xeon processor family", "iDRAC remote management", "Configurable storage bays and RAID"],
    configurations: [],
    useCases: ["Virtualisation hosts", "Database and application servers", "General-purpose data centre infrastructure"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "dell-poweredge-tower",
    slug: "dell-poweredge-tower",
    name: "Dell PowerEdge Tower Server",
    manufacturer: "Dell",
    categorySlug: "servers-infrastructure",
    shortDescription: "Dell's current enterprise tower server family (T-Series).",
    description:
      "Dell PowerEdge T-Series tower servers suit organisations without a dedicated server rack, offering the same PowerEdge platform in a standalone tower chassis.",
    keySpecs: ["Tower form factor", "Intel Xeon processor family", "iDRAC remote management", "Configurable storage bays and RAID"],
    configurations: [],
    useCases: ["Branch office server deployment", "Small-to-medium business infrastructure without a server rack"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "hpe-proliant-rack",
    slug: "hpe-proliant-rack",
    name: "HPE ProLiant Rack Server",
    manufacturer: "HPE",
    categorySlug: "servers-infrastructure",
    shortDescription: "HPE's current enterprise rack server family (DL-Series).",
    description:
      "HPE ProLiant DL-Series rack servers are HPE's current enterprise rack server line, used across virtualisation, database and general-purpose enterprise workloads.",
    keySpecs: ["1U\u20132U rack form factors", "Intel Xeon processor family", "iLO remote management", "Configurable storage bays and RAID"],
    configurations: [],
    useCases: ["Virtualisation hosts", "Database and application servers", "General-purpose data centre infrastructure"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "hpe-proliant-tower",
    slug: "hpe-proliant-tower",
    name: "HPE ProLiant Tower Server",
    manufacturer: "HPE",
    categorySlug: "servers-infrastructure",
    shortDescription: "HPE's enterprise tower server family.",
    description:
      "HPE ProLiant tower servers offer the ProLiant platform in a standalone tower chassis, suited to organisations without a dedicated server rack.",
    keySpecs: ["Tower form factor", "Intel Xeon processor family", "iLO remote management", "Configurable storage bays and RAID"],
    configurations: [],
    useCases: ["Branch office server deployment", "Small-to-medium business infrastructure without a server rack"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "lenovo-thinksystem-rack",
    slug: "lenovo-thinksystem-rack",
    name: "Lenovo ThinkSystem Rack Server",
    manufacturer: "Lenovo",
    categorySlug: "servers-infrastructure",
    shortDescription: "Lenovo's current enterprise rack server family (SR-Series).",
    description:
      "Lenovo ThinkSystem SR-Series rack servers are Lenovo's current enterprise rack server line, spanning edge-focused single-socket models to dense multi-socket platforms.",
    keySpecs: ["1U\u20132U rack form factors", "Intel Xeon processor family", "XClarity remote management", "Configurable storage bays and RAID"],
    configurations: [],
    useCases: ["Virtualisation hosts", "Edge and small-to-medium business deployment", "General-purpose data centre infrastructure"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "lenovo-thinksystem-tower",
    slug: "lenovo-thinksystem-tower",
    name: "Lenovo ThinkSystem Tower Server",
    manufacturer: "Lenovo",
    categorySlug: "servers-infrastructure",
    shortDescription: "Lenovo's enterprise tower server family (ST-Series).",
    description:
      "Lenovo ThinkSystem ST-Series tower servers offer the ThinkSystem platform in a standalone tower chassis, suited to organisations without a dedicated server rack.",
    keySpecs: ["Tower form factor", "Intel Xeon processor family", "XClarity remote management", "Configurable storage bays and RAID"],
    configurations: [],
    useCases: ["Branch office server deployment", "Small-to-medium business infrastructure without a server rack"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },

  // Networking
  {
    id: "cisco-catalyst-switch",
    slug: "cisco-catalyst-switch",
    name: "Cisco Catalyst Switch",
    manufacturer: "Cisco",
    categorySlug: "networking",
    shortDescription: "Cisco's enterprise managed switch family.",
    description:
      "Cisco Catalyst switches remain Cisco's current enterprise managed switching line, covering Layer 2 and Layer 3 switching for office and campus networks.",
    keySpecs: ["Managed Layer 2 / Layer 3 switching", "PoE and non-PoE options", "Stackable configurations"],
    configurations: [],
    useCases: ["Office and campus network switching", "PoE deployment for phones, cameras and access points"],
    relatedServices: [
      { title: "Networking", slug: "networking" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "hpe-aruba-switch",
    slug: "hpe-aruba-switch",
    name: "HPE Aruba Networking Switch",
    manufacturer: "HPE Aruba Networking",
    categorySlug: "networking",
    shortDescription: "HPE Aruba Networking's managed switch family.",
    description:
      "HPE Aruba Networking switches provide managed Layer 2 / Layer 3 switching for office and campus environments, with centralised cloud management options.",
    keySpecs: ["Managed Layer 2 / Layer 3 switching", "PoE options", "Cloud-managed options available"],
    configurations: [],
    useCases: ["Office and campus network switching", "Centrally managed multi-site networks"],
    relatedServices: [
      { title: "Networking", slug: "networking" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "ubiquiti-unifi-access-point",
    slug: "ubiquiti-unifi-access-point",
    name: "Ubiquiti UniFi Access Point",
    manufacturer: "Ubiquiti",
    categorySlug: "networking",
    shortDescription: "Ubiquiti's UniFi wireless access point family.",
    description:
      "Ubiquiti UniFi access points remain Ubiquiti's current wireless access point line, centrally managed through the UniFi controller platform.",
    keySpecs: ["Wi-Fi 6 / Wi-Fi 7 options", "PoE-powered", "Centralised UniFi controller management"],
    configurations: [],
    useCases: ["Office wireless coverage", "Multi-site wireless deployment under one controller"],
    relatedServices: [
      { title: "Networking", slug: "networking" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "fortinet-fortigate-firewall",
    slug: "fortinet-fortigate-firewall",
    name: "Fortinet FortiGate Firewall",
    manufacturer: "Fortinet",
    categorySlug: "networking",
    shortDescription: "Fortinet's current network firewall family.",
    description:
      "Fortinet FortiGate firewalls remain Fortinet's current network security appliance line, providing firewall, VPN and threat protection for the network perimeter.",
    keySpecs: ["Firewall, VPN and threat protection", "Desktop and rack-mount appliance sizes", "FortiOS-managed"],
    configurations: [],
    useCases: ["Network perimeter security", "Branch office VPN connectivity"],
    relatedServices: [
      { title: "Cybersecurity", slug: "cybersecurity" },
      { title: "Networking", slug: "networking" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "mikrotik-router",
    slug: "mikrotik-router",
    name: "MikroTik Router",
    manufacturer: "MikroTik",
    categorySlug: "networking",
    shortDescription: "MikroTik's RouterOS-based router family.",
    description:
      "MikroTik routers run RouterOS and are widely used for cost-effective routing, VPN and traffic management in small-to-medium business networks.",
    keySpecs: ["RouterOS-based", "Multiple Ethernet/SFP port configurations", "VPN and traffic-shaping capability"],
    configurations: [],
    useCases: ["Small-to-medium business routing", "Site-to-site VPN connectivity"],
    relatedServices: [
      { title: "Networking", slug: "networking" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "structured-cabling-patch-panels",
    slug: "structured-cabling-patch-panels",
    name: "Structured Cabling & Patch Panels",
    manufacturer: "Multiple manufacturers",
    categorySlug: "networking",
    shortDescription: "Cat6/Cat6a structured cabling, patch panels and network racks.",
    description:
      "Structured cabling components \u2014 patch panels, network racks and Cat6/Cat6a cabling \u2014 for wiring an office network properly rather than relying on ad hoc cable runs.",
    keySpecs: ["Cat6 / Cat6a cabling", "Rack-mount patch panels", "Network rack enclosures"],
    configurations: [],
    useCases: ["New office network wiring", "Server room and comms room build-outs"],
    relatedServices: [
      { title: "Networking", slug: "networking" },
      { title: "IT Procurement & Deployment", slug: "it-procurement-deployment" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },

  // Accessories & Peripherals
  {
    id: "business-monitor",
    slug: "business-monitor",
    name: "Professional Business Monitor",
    manufacturer: "Multiple manufacturers",
    categorySlug: "accessories-peripherals",
    shortDescription: "Business-grade monitors from major manufacturers.",
    description:
      "Professional business monitors from manufacturers including Dell, HP and Lenovo, sized and specified according to the workstation they're supporting.",
    keySpecs: ["Common sizes from 24\" to 34\" ultrawide", "Full HD, QHD or 4K resolution options", "Ergonomic stand options"],
    configurations: [],
    useCases: ["Standard office workstation displays", "Multi-monitor productivity setups"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "usb-c-docking-station",
    slug: "usb-c-docking-station",
    name: "USB-C Docking Station",
    manufacturer: "Multiple manufacturers",
    categorySlug: "accessories-peripherals",
    shortDescription: "USB-C docking stations for single-cable laptop connectivity.",
    description:
      "USB-C docking stations from major manufacturers, providing single-cable connectivity for power, displays, network and peripherals at a desk.",
    keySpecs: ["Single-cable USB-C connectivity", "Multiple display outputs", "Ethernet and USB pass-through"],
    configurations: [],
    useCases: ["Hot-desking and hybrid work setups", "Multi-monitor laptop workstations"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "wireless-keyboard-mouse",
    slug: "wireless-keyboard-mouse",
    name: "Wireless Keyboard & Mouse Set",
    manufacturer: "Multiple manufacturers",
    categorySlug: "accessories-peripherals",
    shortDescription: "Business wireless keyboard and mouse sets.",
    description:
      "Wireless keyboard and mouse sets for everyday office use, sourced from established peripheral manufacturers.",
    keySpecs: ["Wireless (RF or Bluetooth)", "Full-size or compact layouts"],
    configurations: [],
    useCases: ["Standard desk setup", "Hot-desking environments"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "business-headset",
    slug: "business-headset",
    name: "Business Headset",
    manufacturer: "Multiple manufacturers",
    categorySlug: "accessories-peripherals",
    shortDescription: "Business headsets for calls and video conferencing.",
    description:
      "Wired or wireless business headsets suited to calls, meetings and video conferencing, sourced from established peripheral manufacturers.",
    keySpecs: ["Wired or wireless options", "Noise-cancelling microphone options", "UC-certified for common conferencing platforms"],
    configurations: [],
    useCases: ["Daily calls and video meetings", "Contact centre and support desk use"],
    relatedServices: [
      { title: "Devices & Hardware", slug: "devices-hardware" },
      { title: "Cloud & Microsoft 365", slug: "cloud-microsoft-365" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "external-ssd-storage",
    slug: "external-ssd-storage",
    name: "External SSD Storage",
    manufacturer: "Multiple manufacturers",
    categorySlug: "accessories-peripherals",
    shortDescription: "Portable external SSD storage for backup and file transfer.",
    description:
      "Portable external SSD drives for backup, file transfer and additional storage, sourced from established storage manufacturers.",
    keySpecs: ["USB-C or USB-A connectivity", "Common capacities from 500GB to 4TB"],
    configurations: [],
    useCases: ["Local backup", "Portable file transfer between sites"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
  {
    id: "business-ups",
    slug: "business-ups",
    name: "Business UPS & Surge Protection",
    manufacturer: "Multiple manufacturers",
    categorySlug: "accessories-peripherals",
    shortDescription: "Uninterruptible power supplies and surge protection for office and server equipment.",
    description:
      "UPS units and surge protection for keeping desks, network equipment and small server rooms running through short outages and protected from power surges.",
    keySpecs: ["Multiple VA/wattage capacities", "Rack-mount or standalone options", "Surge and battery backup protection"],
    configurations: [],
    useCases: ["Protecting desktops and network equipment from outages", "Server room power continuity for short outages"],
    relatedServices: [
      { title: "Enterprise Infrastructure", slug: "enterprise-infrastructure" },
      { title: "Managed IT & Support", slug: "managed-it-support" },
    ],
    pricingModel: "MARKET_PRICED",
    customerPricingLabel: "Request Current Pricing",
    customerPricingDescription: "Pricing varies based on configuration, availability and current market sourcing.",
  },
];

products.push(...hardwareProducts);
