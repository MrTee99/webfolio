import type { Project } from '.';

export const InsightTherapySolutions: Project = {
  filter: ['All Projects', 'Web Apps'],
  platform: 'Web Application',
  slug: 'insight-therapy-solutions',
  cardImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/insight-therapy-solutions/card.jpg',
  coverImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/insight-therapy-solutions/cover.jpg',
  title: 'Insight Therapy Solutions',
  subtitle: 'A Robust EHR System to streamline Client Therapist Operations',
  tags: ['Typescript', 'React', 'Next.js', 'Tailwind', 'Zustand', 'Shadcn', 'React Hook Form', 'Zod', 'Tanstack Query', 'Tanstack Table'],
  info: [
    ['Industry', 'Health'],
    ['Role', 'Frontend Developer'],
    ['Duration', '1.5 years'],
    ['Year', '2025'],
  ],
  links: {},
  recommendedProjects: ['Megnus', 'Refered', 'AcTx'],
  overview: 'This project involved building the frontend for a sophisticated Electronic Health Records (EHR) platform tailored to the needs of therapy practices. The platform integrates client therapist matchmaking, scheduling, billing, secure video calls, and reporting into a single, user friendly interface. A special emphasis was placed on handling timezone complexities, which was a critical pain point for users.',
  details: [
    {
      title: 'Challenges',
      ol: [
        {
          title: 'User Role Complexity',
          text: 'The application needed to support multiple user roles, including Admins, Staff (with sub roles), Therapists (with hierarchical structures), and Clients, each requiring unique access and functionality.',
        },
        {
          title: 'Timezone Constraints',
          ul: ['Ensure that Staff and Admins view all data in the centralized company timezone, configurable within the app.', 'Display data for Therapists and Clients in their respective local timezones.', 'Allow Staff to book appointments while seamlessly viewing and selecting available timeslots in any of the three timezones: company, therapist, or client.'],
        },
        {
          title: 'Matchmaking and Scheduling',
          text: 'Implement an intuitive, timezone aware calendar system for efficient matchmaking between clients and therapists.',
        },
        {
          title: 'In-App Video Conferencing',
          text: 'Create a distraction free, secure video calling interface with multitasking capabilities for therapists (such as filling therapy forms during call).',
        },
        {
          title: 'Dynamic Form Management',
          text: 'Design intuitive interfaces for therapists to manage complex clinical forms, supporting workflows like draft saving, submission, and QA approvals.',
        },
      ],
    },
    {
      title: 'My Contributions',
      text: 'As the Frontend Developer, I focused on creating a highly interactive and user friendly interface using modern web development tools, while solving critical challenges like timezone management.',
      ol: [
        {
          title: 'Role Based Dashboards',
          text: 'Designed role specific dashboards that dynamically adjust based on user permissions, ensuring seamless navigation.',
        },
        {
          title: 'Timezone Management',
          ul: ['Implemented logic to display data in user specific timezones while maintaining consistency for centralized roles like Staff and Admin.', 'Built a flexible timezone selection feature for staff when booking appointments, enabling them to view available slots in the company, client, or therapist timezones.'],
        },
        {
          title: 'Appointment Scheduling Interface',
          ul: ['Developed a calendar based scheduling tool with real time timezone adjustments and user friendly error handling.', 'Added a visual representation of timezone differences to reduce booking errors.'],
        },
        {
          title: 'Therapist Portal Enhancements',
          ul: ['Created a video call interface with advanced features like picture-in-picture mode for multitasking.', 'Designed intuitive form interfaces for clinical documentation, including saving drafts and managing QA feedback.'],
        },
        {
          title: 'Matchmaking Management',
          text: 'Built an interactive matchmaking dashboard with daily and weekly views, filters, and timezone based availability checks.',
        },
        {
          title: 'Responsive Design',
          text: 'Ensured full responsiveness across devices, providing a seamless experience for all users.',
        },
      ],
    },
    {
      title: 'Impact',
      ol: [
        {
          title: 'Timezone Resolution',
          text: 'Drastically reduced scheduling errors and improved user satisfaction by addressing the complexities of timezone management.',
        },
        {
          title: 'Efficiency Gains',
          text: 'Simplified workflows for staff and therapists, reducing manual efforts and saving time.',
        },
        {
          title: 'Enhanced Usability',
          text: 'Delivered a seamless user experience tailored to the needs of diverse roles and workflows.',
        },
      ],
    },
  ],
};
