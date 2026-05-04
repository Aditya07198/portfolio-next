export const skills = {
  languages: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "PHP", "HTML5", "CSS3", "SQL"],
  frontend: ["Angular (v12-v17)", "React", "RxJS", "NgRx", "Bootstrap", "SCSS", "Responsive Design", "WCAG Accessibility"],
  backend: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs", "Microservices", "JWT", "OAuth2", "MSAL"],
  databases: ["Azure SQL Server", "MySQL", "Schema Design", "Indexing", "Query Optimization"],
  cloudDevOps: ["Azure App Services", "API Management (APIM)", "Azure Functions", "Key Vault", "Blob Storage", "Azure DevOps CI/CD", "Maven", "npm", "Git"],
  gisIntegrations: ["ArcGIS Online", "ArcGIS REST API", "Survey123", "Field Maps", "ArcGIS Token Validation"],
  toolsMethodologies: ["Agile/Scrum", "Jira", "Confluence", "IntelliJ IDEA", "VS Code", "Eclipse", "Postman", "SharePoint", "Power Automate"]
};

export const experience = [
  {
    company: "Axella Compusoft Inc",
    title: "Software Developer (Full-Stack, Cloud & DevOps)",
    location: "Brampton, Ontario, Canada",
    start: "Dec 2021",
    end: "Present",
    bullets: [
      "Architected and delivered enterprise features using Angular (v12-v17) and Spring Boot with responsive WCAG-compliant interfaces.",
      "Leading modernization efforts by migrating Java, Angular, Maven, and related dependencies to latest LTS versions while resolving deprecations and compatibility issues.",
      "Designed and tuned Azure SQL Server schemas, normalization, and indexing for production-grade performance.",
      "Built Azure infrastructure across App Services, APIM, Functions, Key Vault, and Blob Storage for DEV/IST/UAT/PRD environments.",
      "Created Azure DevOps CI/CD pipelines for Maven, Node.js, and Angular with gated deployments and rollback paths.",
      "Implemented OAuth2/MSAL authentication, JWT token handling, and ArcGIS token validation for secure API access.",
      "Integrated ArcGIS Online, Survey123, and Field Maps into Azure-hosted apps for geospatial data ingestion and workflows."
    ]
  },
  {
    company: "TD Bank",
    title: "Website Developer (Contract)",
    location: "Toronto, Ontario, Canada",
    start: "Jun 2023",
    end: "Sep 2023",
    bullets: [
      "Developed a SharePoint use-case management platform from scratch aligned to business and end-user requirements.",
      "Implemented Power Automate workflows for approvals and data movement to improve operational efficiency.",
      "Performed maintenance, backups, and security patching while supporting end users under SLA targets.",
      "Collaborated with cross-functional teams to gather requirements and continuously improve platform capability."
    ]
  },
  {
    company: "R.K. Enterprise",
    title: "Web Developer",
    location: "Vadodara, India",
    start: "Jan 2020",
    end: "Jun 2021",
    bullets: [
      "Developed and maintained WordPress websites using HTML, CSS, JavaScript, and PHP with strong cross-browser compatibility.",
      "Built business automation workflows with Power Automate across data entry, document management, and approvals.",
      "Optimized workflow performance and security using AI Builder capabilities including sentiment analysis and object detection."
    ]
  }
];

export const projects = [
  {
    title: "Enterprise Application for Field Survey System",
    stack: ["Angular", "Spring Boot", "Azure Front Door", "APIM", "App Service", "Key Vault", "Azure SQL", "Blob Storage", "Azure DevOps CI/CD", "Survey123", "ArcGIS"],
    summary: "Enterprise platform for OMAFRA with end-to-end delivery across frontend workflows, secure APIs, cloud infra, geospatial ingestion, and continuous LTS modernization.",
    link: "#",
    repo: "#"
  },
  {
    title: "Case Management Platform",
    stack: ["SharePoint", "Power Automate"],
    summary: "Use-case management solution with automated internal approval and operations workflows.",
    link: "#",
    repo: "#"
  },
  {
    title: "Portfolio Site",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    summary: "Personal portfolio highlighting full-stack, cloud, and enterprise delivery experience.",
    link: "#",
    repo: "#"
  }
];
