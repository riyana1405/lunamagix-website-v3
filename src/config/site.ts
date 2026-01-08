export const siteConfig = {
  name: "Lunamagix Futuretech Private Limited",
  shortName: "Lunamagix",
  description:
    "Where cutting-edge AI meets compassionate innovation — empowering every learner, supporting every life.",
  url: "https://lunamagix.app",
  email: "social@lunamagix.app",
  address: {
    street: "A34, Kumarasamy Street, Thiruanagar 7th Stop",
    city: "Madurai",
    state: "Tamil Nadu",
    postalCode: "625006",
    country: "India",
  },
  links: {
    linkedin: "https://linkedin.com/company/lunamagix",
    twitter: "https://twitter.com/lunamagix",
  },
  founders: [
    {
      name: "Ms. Sai Naveena Sri",
      role: "Co-Founder & CEO",
      credentials: "MS from IIT Madras",
      description:
        "Extensive biomedical research experience. Pioneered VR experiences for special schools.",
    },
    {
      name: "Mr. S. Vaidyanathan",
      role: "Co-Founder & COO",
      credentials: "Academician turned tech entrepreneur",
      description:
        "Expertise in AI/ML and immersive tech. Background in pedagogical model design.",
    },
  ],
  advisors: [
    {
      name: "Dr. D. Tamilselvi",
      role: "Honorary Director & Mentor",
      credentials: "Professor, Thiagarajar College of Engineering",
      description: "Extensive research in AI/ML and education technology.",
    },
  ],
};

export const navItems = [
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "For Education",
        href: "/products/education",
        items: [
          { title: "LunaViz 3D", href: "/products/education/lunaviz", description: "3D Presentation Tool" },
          { title: "LunaWatch", href: "/products/education/lunawatch", description: "Campus Security" },
          { title: "LunaFit", href: "/products/education/lunafit", description: "Sports & Wellness AI" },
          { title: "LunaLearn", href: "/products/education/lunalearn", description: "LearnOS Platform" },
          { title: "LunaSense", href: "/products/education/lunasense", description: "Multi-Sensory Suite" },
        ],
      },
      {
        title: "For Assistive Living",
        href: "/products/assistive",
        items: [
          { title: "LunaGuide", href: "/products/assistive/lunaguide", description: "PathPal Rover" },
          { title: "LunaMove", href: "/products/assistive/lunamove", description: "Adaptive Wheelchair" },
          { title: "LunaSound", href: "/products/assistive/lunasound", description: "AI Hearing Enhancement" },
        ],
      },
      {
        title: "For Healthcare",
        href: "/products/healthcare",
        items: [
          { title: "LunaCare", href: "/products/healthcare/lunacare", description: "Therapeutic Immersion" },
          { title: "LunaScan", href: "/products/healthcare/lunascan", description: "Diagnostic AI" },
          { title: "LunaScribe", href: "/products/healthcare/lunascribe", description: "Clinical Documentation" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    children: [
      { title: "For Schools", href: "/solutions/schools" },
      { title: "For Special Education", href: "/solutions/special-education" },
      { title: "For Coaching Institutes", href: "/solutions/coaching" },
      { title: "For Healthcare", href: "/solutions/healthcare" },
      { title: "For Parents & Families", href: "/solutions/parents" },
      { title: "For Sports & Fitness", href: "/solutions/sports" },
    ],
  },
  {
    title: "Free Assessment",
    href: "/assessment",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Whitepapers", href: "/resources/whitepapers" },
      { title: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  {
    title: "Partner With Us",
    href: "/partner",
  },
];
