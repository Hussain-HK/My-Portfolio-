// ─── UPDATE ALL PLACEHOLDER VALUES MARKED WITH ← ───────────────────────────

export const siteConfig = {
  name: 'Hakeem Hussain',
  initials: 'HH',
  roles: ['Data Engineer', 'Analytics Engineer', 'Data Analyst'],
  tagline: 'Building data infrastructure that turns raw signals into business clarity.',
  bio: "I'm a Data Engineer and Analytics Engineer with a passion for building scalable data systems that empower teams to make smarter decisions. I specialise in designing end-to-end pipelines, transforming messy data into clean reliable models, and creating analytics infrastructure that scales from startup to enterprise.",
  bio2: "When I'm not engineering data pipelines, I'm exploring new tools in the modern data stack, contributing to open-source projects, or writing about data engineering best practices.",
  email: 'hussainakeem57@gmail.com',
  github: 'https://github.com/your-username',       // ← Update
  linkedin: 'https://linkedin.com/in/your-profile',  // ← Update
  twitter: '',                                        // ← Optional
  location: 'Lagos, Nigeria',                         // ← Update
  availability: 'Open to opportunities',
  yearsOfExperience: 4,   // ← Update
  projectsCompleted: 20,  // ← Update
  pipelinesBuilt: 100,    // ← Update
  resumeUrl: '/resume.pdf', // ← Drop resume.pdf into /public folder
}

export type Skill = {
  category: string
  icon: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Languages & Query',
    icon: '{ }',
    items: ['Python', 'SQL', 'R', 'Bash', 'YAML'],
  },
  {
    category: 'Data Engineering',
    icon: '⚙',
    items: ['dbt', 'Apache Airflow', 'Apache Spark', 'Apache Kafka', 'Flink', 'PySpark'],
  },
  {
    category: 'Warehouses & Lakes',
    icon: '◈',
    items: ['Snowflake', 'BigQuery', 'Redshift', 'PostgreSQL', 'Delta Lake', 'Iceberg'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Terraform'],
  },
  {
    category: 'BI & Visualisation',
    icon: '◎',
    items: ['Looker', 'Power BI', 'Tableau', 'Metabase', 'Apache Superset'],
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
    title: 'Senior Analytics Engineer',   // ← Update
    company: 'Company Name',              // ← Update
    companyUrl: 'https://company.com',    // ← Update
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [
      'Built and maintained the core dbt transformation layer serving 50+ analysts and data scientists',
      'Designed a Snowflake data warehouse architecture reducing query costs by 40%',
      'Led migration from legacy ETL scripts to Airflow DAGs, improving pipeline reliability from 87% to 99.5%',
      'Established data quality testing standards adopted across the engineering organisation',
    ],
    tags: ['dbt', 'Snowflake', 'Airflow', 'Python'],
  },
  {
    title: 'Data Engineer',               // ← Update
    company: 'Company Name',              // ← Update
    companyUrl: 'https://company.com',    // ← Update
    location: 'Lagos, Nigeria',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Built real-time streaming pipelines using Kafka and Spark processing 2M+ events per day',
      'Implemented a feature store on BigQuery enabling ML teams to reuse features across 12+ models',
      'Automated 30+ manual reporting workflows, saving the analytics team 20+ hours per week',
      'Collaborated with cross-functional teams to define data contracts and SLAs',
    ],
    tags: ['Kafka', 'Spark', 'BigQuery', 'Python'],
  },
  {
    title: 'Data Analyst',                // ← Update
    company: 'Company Name',              // ← Update
    companyUrl: 'https://company.com',    // ← Update
    location: 'Lagos, Nigeria',
    startDate: 'Sep 2020',
    endDate: 'May 2021',
    description: [
      'Built executive-level KPI dashboards in Power BI consumed by C-suite and board members',
      'Wrote complex SQL queries analysing customer behaviour, directly informing product decisions',
      'Developed an automated anomaly detection system reducing data incident response time by 60%',
      'Partnered with the product team to instrument event tracking and build behavioural analytics',
    ],
    tags: ['SQL', 'Power BI', 'Python', 'Excel'],
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
    title: 'Real-Time Event Pipeline',
    description:
      'End-to-end streaming pipeline processing 1M+ events per day. Kafka for ingestion, Spark Streaming for transformation, BigQuery as the analytical sink with sub-second latency.',
    tags: ['Kafka', 'Spark', 'BigQuery', 'Python', 'Docker'],
    githubUrl: 'https://github.com',  // ← Update
    demoUrl: '',
    featured: true,
  },
  {
    title: 'Data Warehouse Migration',
    description:
      'End-to-end migration from legacy Redshift to Snowflake with a dbt transformation layer. Reduced query costs by 40% and improved data freshness from T+1 to near real-time.',
    tags: ['Snowflake', 'dbt', 'Redshift', 'SQL', 'Python'],
    githubUrl: 'https://github.com',  // ← Update
    demoUrl: '',
    featured: true,
  },
  {
    title: 'Airflow Orchestration Platform',
    description:
      'Scalable DAG orchestration system managing 200+ data pipelines with automated monitoring, alerting, and retry logic. Reduced pipeline failures by 75%.',
    tags: ['Airflow', 'Python', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com',  // ← Update
    demoUrl: '',
    featured: true,
  },
  {
    title: 'Business Analytics Dashboard',
    description:
      'Executive KPI dashboard in Power BI consuming clean data from a dbt-modelled Snowflake warehouse. Automated daily refresh with email distribution to 40+ stakeholders.',
    tags: ['Power BI', 'dbt', 'Snowflake', 'DAX'],
    githubUrl: 'https://github.com',  // ← Update
    demoUrl: '',
    featured: false,
  },
  {
    title: 'ML Feature Store',
    description:
      'Centralised feature store on BigQuery enabling ML teams to discover and reuse features across 15+ models. Cut feature engineering time by 60%.',
    tags: ['BigQuery', 'Python', 'dbt', 'Feast'],
    githubUrl: 'https://github.com',  // ← Update
    demoUrl: '',
    featured: false,
  },
  {
    title: 'dbt Quality Testing Suite',
    description:
      'Open-source dbt package providing 30+ custom data quality tests — freshness checks, referential integrity, statistical distributions, and business rule validation.',
    tags: ['dbt', 'SQL', 'Python', 'GitHub Actions'],
    githubUrl: 'https://github.com',  // ← Update
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
