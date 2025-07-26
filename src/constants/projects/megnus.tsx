import type { Project } from '.';

export const Megnus: Project = {
  filter: ['All Projects', 'Web Apps'],
  platform: 'Web Application',
  slug: 'megnus',
  cardImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/megnus/card.jpg',
  coverImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/megnus/cover.jpg',
  title: 'Megnus',
  subtitle: 'AI powered no-code platform to build custom ERP systems with workflows, roles, and a dynamic UI',
  tags: ['Typescript', 'React', 'Tailwind', 'Redux Toolkit', 'Formik', 'Firebase Cloud Messaging', 'Yup', 'Serverless Framework', 'MongoDB', 'Mongoose', 'AWS Lambda', 'AWS Cloudwatch', 'AWS S3', 'Github Actions'],
  info: [
    ['Industry', 'Business ERP'],
    ['Role', 'Full Stack Developer'],
    ['Duration', '2 years'],
    ['Year', '2023'],
  ],
  links: {},
  recommendedProjects: ['InsightTherapySolutions', 'Refered', 'AcTx'],
  overview: 'This project involved development of a no-code, AI-powered SaaS platform that enables both technical and non-technical users to build fully functional, custom ERP systems tailored to their specific business needs. Users can generate databases, build data forms, set up workflows, and manage access control, all without writing code. The platform includes powerful features such as a drag-and-drop form builder, AI-assisted data source and workflow generation, dynamic navigation configuration, and advanced role based access control. Each system runs on an isolated backend with its own database and configuration, ensuring complete data separation across tenants. The platform supports both manual and AI-assisted system creation, allowing users to either start from scratch or generate a complete ERP based on a natural language description of their business process.',
  details: [
    {
      title: 'Challenges',
      ol: [
        {
          title: 'Multi-Tenant Architecture',
          text: "Each user's ERP system required complete isolation, with its own database and configurations. Designing a secure, scalable, and performant per tenant backend was a core technical challenge.",
        },
        {
          title: 'No-Code System Generation',
          text: 'The platform had to let users build functional ERPs without coding via visual tools for data models, forms, workflows, permissions, and navigation while ensuring underlying technical correctness.',
        },
        {
          title: 'AI Integration for ERP Generation',
          text: 'AI needed to translate natural language into structured ERP blueprints. Ensuring accuracy, safety, and usability for non-technical users required extensive prompt engineering and guardrails.',
        },
        {
          title: 'Advanced Form and Field Logic',
          text: 'Forms needed to support complex input behaviors like conditional visibility, repeatable sections, formulas, and validations all in a drag-and-drop interface.',
        },
        {
          title: 'Workflow Engine Design',
          text: 'A visual workflow builder had to support conditions, triggers, schedules, and actions like API calls or record updates requiring event driven backend architecture and flexible abstractions.',
        },
        {
          title: 'Role Based Access Control (RBAC)',
          text: 'Users needed to define custom roles and assign granular permissions across views, forms, workflows, and navigation.',
        },
        {
          title: 'Visual Navigation Management',
          text: 'Navigation had to be fully configurable through a Kanban style editor, with nested groupings, custom icons, and role based visibility control.',
        },
        {
          title: 'Developer Focused Features',
          text: 'Beyond no-code tools, the system needed to support MongoDB queries and API key management for headless data access and developer workflows.',
        },
      ],
    },
    {
      title: 'My Contributions',
      text: 'As the full stack developer and system architect, I led development across backend infrastructure, AI integration, frontend UX, and developer tooling.',
      ol: [
        {
          title: 'Multi-Tenant Database Architecture',
          ul: ['Built a per tenant database system where each ERP ran in isolation', 'Structured tenant configurations as JSON based schemas covering data sources, workflows, navigation, and roles'],
        },
        {
          title: 'Authentication & User Onboarding',
          ul: ['Developed signup, login, and password reset flows with secure team onboarding', 'Implemented first time setup flows for ERP creation via AI, templates, or manual entry'],
        },
        {
          title: 'AI-Powered System Generation',
          ul: ['Integrated AI to convert business descriptions into ERP structures including data models and workflows', 'Enabled AI generated form fields and diagrams using PlantUML from natural language prompts'],
        },
        {
          title: 'Data Source & Form Builder',
          ul: ['Built a visual form builder with support for advanced inputs like formulas, repeatables, validations, and rich text', 'Enabled real time schema and CRUD API generation from form configs using unique slugs'],
        },
        {
          title: 'Visual Workflow Engine',
          ul: ['Created a node based workflow builder with triggers, schedules, and conditional logic', 'Integrated MongoDB query execution into workflows for complex automation'],
        },
        {
          title: 'Navigation & Role Management',
          ul: ['Built a drag-and-drop navigation manager with role based visibility and nested route support', 'Developed dynamic RBAC allowing users to define roles and control access to modules and routes'],
        },
        {
          title: 'Developer Tooling & API Key System',
          ul: ['Created an API key system with role bound access and expiration controls', 'Built a MongoDB query builder with live testing and preview functionality'],
        },
        {
          title: 'End-to-End Frontend Development',
          ul: ['Built a responsive, modular frontend using modern React best practices', 'Integrated live previews and conditional rendering throughout the no-code builders for a seamless UX'],
        },
      ],
    },
    {
      title: 'Impact',
      ol: [
        {
          title: 'Empowered Non-Technical Users',
          text: 'Users without coding skills could build and manage complete ERP systems tailored to their businesses.',
        },
        {
          title: 'Reduced Time to Deploy',
          text: 'AI-assisted generation and intuitive visual builders allowed users to launch functional ERPs within minutes.',
        },
        {
          title: 'Scalable by Design',
          text: 'The isolated, per tenant architecture ensured privacy and performance as systems scaled in complexity.',
        },
        {
          title: 'Bridged No-Code and Pro-Code',
          text: 'The platform supported a wide user base from small business owners to advanced developers through no-code tools and backend APIs.',
        },
        {
          title: 'Future Ready Foundation',
          text: 'Its modular architecture and AI capabilities laid the groundwork for vertical specific ERP templates and future enhancements.',
        },
      ],
    },
  ],
};
