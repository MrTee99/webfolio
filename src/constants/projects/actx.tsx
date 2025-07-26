import type { Project } from '.';

export const AcTx: Project = {
  filter: ['All Projects', 'Web Apps'],
  platform: 'Web Application',
  slug: 'actx',
  cardImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/actx/cover.jpg',
  coverImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/actx/cover.jpg',
  title: 'AcTx',
  subtitle: 'A CRM streamlining customer and service management for a tax and business consultancy firm.',
  tags: ['Typescript', 'React', 'Next.js', 'Supabase', 'SCSS', 'Chakra UI', 'Formik', 'Yup', 'Redux Toolkit'],
  info: [
    ['Industry', 'Tax & Business Consultancy CRM'],
    ['Duration', '1 month'],
    ['Role', 'Full Stack Developer'],
    ['Year', '2022'],
  ],
  links: {},
  recommendedProjects: ['InsightTherapySolutions', 'Megnus', 'Refered'],
  overview: 'This application is a custom built internal CRM designed specifically for the operational needs of a tax and business consultancy firm. It centralizes client management and streamlines key services such as VAT filing, corporate tax registration, accounting, and audit reporting. The system includes robust role based access control, enabling administrators to invite users, assign roles, and configure granular permissions. The frontend is built with React and Next.js, while Supabase powers the backend, handling authentication, data storage, and real time updates.',
  details: [
    {
      title: 'Challenges',
      ol: [
        {
          title: 'Complex Service Structures',
          text: 'The CRM had to support diverse services such as VAT filing, corporate tax, accounting, and audits each with its own lifecycle and handling requirements.',
        },
        {
          title: 'Role Based Access Control (RBAC)',
          text: 'Admins needed the ability to define roles and assign granular permissions to control feature visibility and user access.',
        },
        {
          title: 'Custom PostgreSQL Architecture',
          text: 'Supabase’s PostgreSQL backend was extended with modular schemas, reusable logic, and dynamic row level security policies to support custom requirements.',
        },
        {
          title: 'Internal Only Authentication',
          text: 'The system required secure, invite only access with flows for password reset and admin managed user onboarding.',
        },
        {
          title: 'Service Automation',
          text: 'Routine operations like VAT filing needed to be automated with PostgreSQL cron jobs to reduce manual work and improve reliability.',
        },
      ],
    },
    {
      title: 'My Contributions',
      text: 'As the full stack developer, I handled backend architecture, authentication, RBAC, automation, and frontend development to deliver a secure, scalable internal CRM.',
      ol: [
        {
          title: 'PostgreSQL Schema Architecture (Supabase)',
          ul: ['Designed modular schemas to organize business logic, utilities, and policies', 'Built reusable functions and triggers to support RBAC, logging, and data integrity', 'Implemented dynamic row level security for scoped access', 'Established a scalable foundation with clear separation of concerns'],
        },
        {
          title: 'Role and Permission Management',
          ul: ['Created a UI based RBAC system for defining roles and assigning permissions', 'Added triggers to auto assign permissions when roles are created or updated'],
        },
        {
          title: 'Authentication and User Onboarding',
          ul: ['Used Supabase Auth for login and password management', 'Implemented password reset and change flows', 'Restricted signup to admin invitations only and seeded initial users manually'],
        },
        {
          title: 'Automated VAT Filing',
          ul: ['Set up a monthly cron job to auto generate VAT filings for configured users', 'Reduced manual errors and ensured consistent compliance'],
        },
        {
          title: 'Frontend Development with React and Next.js',
          ul: ['Built responsive interfaces for managing clients, services, and roles', 'Created dynamic dashboards that adapted to user roles and permissions', 'Optimized for clarity, speed, and mobile responsiveness'],
        },
      ],
    },
    {
      title: 'Impact',
      ol: [
        {
          title: 'Scalable Architecture',
          text: 'Modular schema design enabled easy expansion as new features and services were added.',
        },
        {
          title: 'Secure Data Access',
          text: 'RBAC and row level security ensured only authorized users accessed sensitive data.',
        },
        {
          title: 'Operational Efficiency',
          text: 'Automated VAT filings reduced manual workload and minimized human errors.',
        },
        {
          title: 'Streamlined Internal Management',
          text: 'Admins could manage access and roles independently without developer intervention.',
        },
        {
          title: 'Reliable Internal Tooling',
          text: 'The CRM provided a stable, modern interface for daily operations across the consultancy team.',
        },
      ],
    },
  ],
};
