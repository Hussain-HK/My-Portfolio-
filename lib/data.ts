export const siteConfig = {
  name: 'Hakeem Hussain',
  initials: 'HH',
  roles: ['Senior BI Developer', 'Power BI Expert', 'Data Analyst'],
  tagline: 'Transforming raw data into executive-ready insights with Power BI, DAX, and Python.',
  bio: "Senior Business Intelligence Developer with 7+ years of experience designing and implementing enterprise data solutions. I specialise in Microsoft Power BI, SQL, DAX, and Python — building dashboards used daily by C-suite and branch managers, and self-service platforms that empower entire organisations to explore their own data.",
  bio2: "Microsoft Certified Data Analyst and Certified Trainer. I've delivered BI training to 100+ professionals at banking and telecom organisations, and led migrations from legacy tools like Qlik View to modern Power BI platforms.",
  email: 'HussainAkeem57@gmail.com',
  github: 'https://github.com/Hussain-HK',
  linkedin: 'https://linkedin.com/in/hakeem-hussain',
  twitter: '',
  location: 'Lagos, Nigeria',
  availability: 'Open to opportunities',
  yearsOfExperience: 7,
  projectsCompleted: 65,
  staffTrained: 100,
  resumeUrl: '/resume.pdf',
}

export type Skill = {
  category: string
  icon: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'BI & Visualisation',
    icon: '◎',
    items: ['Power BI', 'Tableau', 'SSRS', 'Power BI Service', 'Report Builder', 'Dashboard Design'],
  },
  {
    category: 'Languages & Query',
    icon: '{ }',
    items: ['SQL (T-SQL)', 'DAX', 'M Query', 'Python', 'Stored Procedures'],
  },
  {
    category: 'Data & ETL',
    icon: '⚙',
    items: ['Data Modeling', 'ETL', 'SSIS', 'Power Query', 'Excel', 'Data Blending', 'Data Warehousing'],
  },
  {
    category: 'Cloud & Platforms',
    icon: '☁',
    items: ['Azure Data Studio', 'Azure Analytics', 'SQL Server', 'SAP', 'Oracle', 'Azure Boards'],
  },
  {
    category: 'Automation & Tools',
    icon: '▶',
    items: ['Power Automate', 'PowerApps', 'Git', 'JIRA', 'Azure DevOps', 'Agile / Scrum'],
  },
]

export type Experience = {
  title: string
  company: string
  companyUrl: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    title: 'Senior Business Intelligence Analyst',
    company: 'First Bank Nigeria',
    companyUrl: 'https://www.firstbanknigeria.com',
    location: 'Lagos, Nigeria',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: [
      'Led development of 65+ enterprise-level Power BI reports and dashboards used daily by executive management.',
      'Automated data pipelines using Power Automate and SQL jobs, reducing data processing time by 40%.',
      'Trained 100+ staff in Power BI and Excel through internal capacity-building initiatives.',
      'Led cross-functional team to implement a customer segmentation model using Python and SQL.',
      'Deployed self-service BI solutions enabling 200+ branch managers to independently monitor KPIs.',
    ],
    tags: ['Power BI', 'DAX', 'SQL', 'Python', 'Power Automate'],
  },
  {
    title: 'BI Analyst / Trainer',
    company: 'Foresight BI & Analytics Consulting',
    companyUrl: 'https://www.foresightbi.com.ng',
    location: 'Lagos, Nigeria',
    startDate: 'Jan 2019',
    endDate: 'Dec 2023',
    description: [
      'Built and published interactive Power BI and Tableau dashboards from multiple data sources using Data Blending.',
      'Developed BI modules using Power BI, SSIS, and SSRS; automated business processes with Power Automate and PowerApps.',
      'Created stored procedures and SQL queries to pull data into Power Pivot data models.',
      'Used DAX to write measures and calculated tables; designed charts including cross tabs, maps, scatter plots, pie, and bar.',
      'Delivered weekly presentations to business stakeholders on reports, changes, and analytics findings.',
    ],
    tags: ['Power BI', 'Tableau', 'SQL', 'SSIS', 'DAX', 'Power Automate', 'SSRS'],
  },
  {
    title: 'Data Analyst (Freelance)',
    company: 'US Dept. of Veterans Affairs',
    companyUrl: 'https://www.va.gov',
    location: 'Remote',
    startDate: '2022',
    endDate: '2022',
    description: [
      'Migrated Qlik View and Qlik Sense BI assets to Power BI for the Veterans Health Administration (VHA) and Veterans Benefits Administration (VBA).',
      'Built dashboards for Calls Tracking, Facility Utilization, Strategy Programming, and Portfolio management.',
      'Analyzed survey data against client KPI requests using Oracle Data Warehouse, MySQL, Azure Boards, and Excel.',
      'Created Azure DevOps user stories and delivered training demos and presentations to business users.',
    ],
    tags: ['Power BI', 'Qlik View', 'Oracle', 'SQL', 'DAX', 'Azure DevOps'],
  },
  {
    title: 'Reporting Analyst',
    company: 'Compass UK',
    companyUrl: 'https://www.compass-group.com',
    location: 'Lagos, Nigeria',
    startDate: 'Dec 2019',
    endDate: 'Oct 2020',
    description: [
      'Maintained dashboards and reports for multiple sales and unit department teams.',
      'Conducted system audits and monitored data collection processes to meet stakeholder reporting requirements.',
      'Built reports using Power BI, Power Automate, PowerApps, and Azure Analytics Services.',
      'Performed exploratory data analysis (EDA) using Python programming.',
    ],
    tags: ['Power BI', 'Power Automate', 'Azure', 'Python', 'DAX'],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Enterprise Performance Dashboard',
    description:
      'Real-time Power BI dashboard for executive leadership at First Bank Nigeria, integrating data from CRM, ERP, and core banking systems. Used by C-suite for daily KPI monitoring.',
    tags: ['Power BI', 'DAX', 'SQL Server', 'CRM', 'ERP'],
    githubUrl: 'https://github.com/Hussain-HK',
    demoUrl: '',
    featured: true,
  },
  {
    title: 'Customer Churn Analysis',
    description:
      'Predictive churn model combining Power BI visualization with Python machine learning. Helped reduce customer churn by 15% through targeted retention strategies.',
    tags: ['Power BI', 'Python', 'SQL', 'Machine Learning', 'DAX'],
    githubUrl: 'https://github.com/Hussain-HK',
    demoUrl: '',
    featured: true,
  },
  {
    title: 'Qlik to Power BI Migration',
    description:
      'Led full migration of Qlik View health dashboards to Power BI for the US Department of Veterans Affairs, covering VHA and VBA dashboards including Calls Tracking and Facility Utilization.',
    tags: ['Power BI', 'Qlik View', 'Oracle', 'SQL', 'Azure DevOps'],
    githubUrl: 'https://github.com/Hussain-HK',
    demoUrl: '',
    featured: true,
  },
  {
    title: 'Expense Management Tracker',
    description:
      'Automated monthly expense reporting using Power Automate and Power BI. Eliminated manual processes, reducing errors and saving 20+ man-hours per month.',
    tags: ['Power Automate', 'Power BI', 'SQL', 'Excel'],
    githubUrl: 'https://github.com/Hussain-HK',
    demoUrl: '',
    featured: false,
  },
  {
    title: 'Self-Service BI Platform',
    description:
      'Designed and deployed a self-service BI ecosystem at First Bank Nigeria enabling 200+ branch managers to independently monitor KPIs without relying on the central BI team.',
    tags: ['Power BI', 'DAX', 'M Query', 'Power BI Service'],
    githubUrl: 'https://github.com/Hussain-HK',
    demoUrl: '',
    featured: false,
  },
  {
    title: 'Sales Performance Analytics Suite',
    description:
      'Multi-source Tableau and Power BI dashboards using Data Blending at Foresight BI. Included scheduled automated refreshes and weekly stakeholder presentations.',
    tags: ['Power BI', 'Tableau', 'SQL', 'SSIS', 'DAX'],
    githubUrl: 'https://github.com/Hussain-HK',
    demoUrl: '',
    featured: false,
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]
