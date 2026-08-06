export const personalData = {
  name: "Golden Kumar",
  role: "Full-Stack & AI/ML Engineer",
  tagline: "Bridging the gap between Machine Learning intelligence, computer vision, and modern web architectures.",
  phone: "+91-7667711403",
  email: "goldenkrsingh921@gmail.com",
  location: "Jaipur, Rajasthan, India",
  education: {
    institution: "Vivekananda Global University",
    degree: "Bachelor of Technology in Computer Science",
    cgpa: "7.05",
    year: "2026",
    location: "Jaipur, Rajasthan, India"
  },
  socials: {
    github: "https://github.com/golden7667",
    linkedin: "https://linkedin.com/in/golden-kr-singh",
    email: "mailto:goldenkrsingh921@gmail.com",
    phone: "tel:+917667711403"
  },
  stats: [
    { label: "B.Tech CGPA", value: "7.05", icon: "GraduationCap" },
    { label: "ML & AI Models", value: "10+", icon: "Cpu" },
    { label: "Full-Stack Apps", value: "8+", icon: "Code2" },
    { label: "Graduation", value: "2026", icon: "Calendar" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Python", level: 95, icon: "Terminal", badge: "Expert" },
      { name: "JavaScript", level: 88, icon: "Code", badge: "Advanced" },
      { name: "TypeScript", level: 82, icon: "FileCode", badge: "Proficient" },
      { name: "React", level: 90, icon: "Layers", badge: "Advanced" }
    ]
  },
  {
    category: "Web Technologies",
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "FastAPI", level: 88, icon: "Zap", badge: "Advanced" },
      { name: "Flask", level: 90, icon: "Server", badge: "Advanced" },
      { name: "React / Vite", level: 92, icon: "Globe", badge: "Expert" },
      { name: "Tailwind CSS", level: 90, icon: "Palette", badge: "Advanced" },
      { name: "HTML5 / CSS3", level: 95, icon: "Layout", badge: "Expert" }
    ]
  },
  {
    category: "AI, Machine Learning & Vision",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Scikit-learn", level: 92, icon: "BrainCircuit", badge: "Expert" },
      { name: "OpenCV", level: 88, icon: "Eye", badge: "Advanced" },
      { name: "Random Forest", level: 90, icon: "GitFork", badge: "Advanced" },
      { name: "LBPH Face Recognition", level: 85, icon: "UserCheck", badge: "Specialist" },
      { name: "Image Classification", level: 86, icon: "Image", badge: "Proficient" }
    ]
  },
  {
    category: "Libraries & Data Utilities",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "NumPy", level: 92, icon: "Grid", badge: "Expert" },
      { name: "Pandas", level: 94, icon: "Table", badge: "Expert" },
      { name: "Pillow (PIL)", level: 85, icon: "FileImage", badge: "Proficient" },
      { name: "Tkinter", level: 88, icon: "Box", badge: "Advanced" },
      { name: "ReportLab (PDF)", level: 86, icon: "FileText", badge: "Advanced" }
    ]
  },
  {
    category: "Database & Tools",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "MySQL (CRUD & Backup)", level: 88, icon: "Database", badge: "Advanced" },
      { name: "Git & GitHub", level: 90, icon: "GitBranch", badge: "Advanced" },
      { name: "CSV Data Pipelines", level: 94, icon: "Workflow", badge: "Expert" },
      { name: "PDF Generation", level: 88, icon: "Printer", badge: "Advanced" }
    ]
  }
];

export const experienceData = [
  {
    id: "rentlee",
    title: "Python Developer Intern",
    company: "Rentlee",
    mode: "Hybrid",
    period: "Internship",
    badge: "Backend & Systems",
    color: "#00f2fe",
    points: [
      "Developed high-performance Python backend applications and micro-services tailored for business operational requirements.",
      "Designed and integrated robust REST APIs, background automation scripts, and ETL data processing workflows.",
      "Collaborated on debugging, comprehensive testing, and version-controlled deployment using Git workflows."
    ],
    tech: ["Python", "REST APIs", "Automation Scripts", "Data Workflows", "Git"]
  },
  {
    id: "codec",
    title: "Artificial Intelligence Intern",
    company: "Codec Technologies Pvt. Ltd.",
    mode: "Remote",
    period: "Internship",
    badge: "Machine Learning & AI",
    color: "#9055ff",
    points: [
      "Architected and trained predictive Machine Learning models using Python for real-world enterprise AI applications.",
      "Executed data preprocessing, feature engineering, hyperparameter tuning, and model optimization workflows.",
      "Collaborated with multi-disciplinary engineering teams to integrate trained AI inference models into existing software systems."
    ],
    tech: ["Python", "Scikit-Learn", "Data Preprocessing", "Model Optimization", "AI Integration"]
  }
];

export const projectsData = [
  {
    id: "enterprise-erp-system",
    title: "Smart Enterprise ERP & Resource Planning Platform",
    subtitle: "Full-Stack Enterprise Management Architecture",
    category: "Full-Stack & Systems",
    featured: true,
    tags: ["Python", "FastAPI", "React", "MySQL", "Tailwind CSS", "ReportLab", "REST APIs", "JWT Auth"],
    github: "https://github.com/golden7667",
    live: "https://erp-management-system-sandy.vercel.app/accounts/login/",
    summary: "Architected a comprehensive, modular Enterprise Resource Planning (ERP) platform for real-time inventory tracking, HR payroll processing, financial ledger management, and automated report generation.",
    details: [
      "Modular core architecture integrating Inventory Control, HR & Payroll, Sales Order Workflows, and Procurement.",
      "Role-Based Access Control (RBAC) with JWT authentication securing sensitive financial records and employee data.",
      "Real-time analytics dashboard with automated low-stock notifications, transaction telemetry, and revenue monitoring.",
      "Automated PDF generation engine for instant creation of Purchase Orders, Tax Invoices, and Monthly Payroll Summaries."
    ],
    demoData: {
      stats: [
        { label: "Active ERP Modules", val: "6 Core Modules" },
        { label: "API Response Time", val: "< 45ms" },
        { label: "Database Transactions", val: "10k+/min" }
      ]
    }
  },
  {
    id: "steel-properties-predictive",
    title: "Steel Properties Predictive Analytics Platform",
    subtitle: "Full-Stack Machine Learning Platform",
    category: "Machine Learning & Web",
    featured: true,
    tags: ["Python", "Flask", "Scikit-Learn", "Pandas", "NumPy", "JavaScript", "HTML/CSS"],
    github: "https://github.com/golden7667",
    live: "https://steel-properties-analytics.demo",
    summary: "Built a full-stack machine learning platform to predict Yield Strength, Tensile Strength, and Elongation from steel alloy compositions.",
    details: [
      "Implemented Multi-Output Random Forest regressor models achieving high precision on alloy composition feature spaces.",
      "Real-time prediction suite, interactive feature importance analysis, and live model retraining pipeline.",
      "Interactive analytics dashboard for dataset management, visualization charts, and model health monitoring.",
      "Automated PDF and CSV export capabilities for prediction results, alloy composition logs, and analytical insights."
    ],
    demoData: {
      inputs: [
        { label: "Carbon (C %)", default: 0.22, min: 0.05, max: 0.6 },
        { label: "Manganese (Mn %)", default: 1.35, min: 0.2, max: 2.0 },
        { label: "Silicon (Si %)", default: 0.35, min: 0.1, max: 0.8 },
        { label: "Chromium (Cr %)", default: 0.50, min: 0.0, max: 1.5 },
        { label: "Nickel (Ni %)", default: 0.15, min: 0.0, max: 1.0 }
      ],
      samplePredictions: {
        yieldStrength: "485.4 MPa",
        tensileStrength: "642.1 MPa",
        elongation: "22.8 %",
        qualityGrade: "High Structural Grade A+"
      }
    }
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Automated Attendance System",
    subtitle: "Computer Vision & Database Application",
    category: "Computer Vision & Systems",
    featured: true,
    tags: ["Python", "OpenCV", "LBPH Algorithm", "MySQL", "Tkinter", "ReportLab"],
    github: "https://github.com/golden7667",
    summary: "Developed an automated, contactless attendance tracking system utilizing OpenCV and Local Binary Patterns Histograms (LBPH) face recognition.",
    details: [
      "Real-time facial detection and recognition engine using LBPH algorithms for high accuracy under varying lighting.",
      "Sleek Tkinter desktop GUI for student registration, facial dataset training, live attendance capturing, and record search.",
      "MySQL relational database integration featuring CRUD operations, automated daily backup & restore, and data validation.",
      "Instant generation of attendance compliance reports in CSV and styled PDF formats with ReportLab."
    ],
    demoData: {
      stats: [
        { label: "Accuracy Rate", val: "97.4%" },
        { label: "Recognition Speed", val: "< 120ms" },
        { label: "Facial Landmarks", val: "128 Points" }
      ]
    }
  }
];

export const competenciesData = {
  technical: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Software Development Lifecycle",
    "Debugging & Performance Tuning",
    "RESTful API Architecture",
    "Machine Learning Pipeline Engineering"
  ],
  professional: [
    "Analytical Problem Solving",
    "Cross-functional Team Collaboration",
    "Technical & Verbal Communication",
    "Adaptability to Emerging Tech",
    "Quick Technology Adoption",
    "Meticulous Attention to Detail"
  ]
};
