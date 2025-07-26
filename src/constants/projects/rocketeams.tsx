import type { Project } from '.';

export const Rocketeams: Project = {
  filter: ['All Projects', 'Web Apps'],
  platform: 'Web Application',
  slug: 'rocketeams',
  cardImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/rocketeams/card.jpg',
  coverImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/rocketeams/cover.jpg',
  title: 'Rocketeams',
  subtitle: 'A platform that helps companies quickly build and scale remote engineering teams with vetted offshore tech talent.',
  tags: ['Typescript', 'React', 'Next.js', 'Tailwind', 'Sanity CMS', 'Shadcn', 'Firebase Firestore', 'Firebase Storage', 'Framer Motion'],
  info: [
    ['Client', 'Enigma'],
    ['Industry', 'Remote Team Staffing'],
    ['Duration', '1 month'],
    ['Role', 'Full Stack Developer'],
    ['Year', '2023'],
  ],
  links: {
    live: 'https://rocketeams.com/',
  },
  recommendedProjects: ['Dvago', 'Refered', 'Megnus'],
  overview: 'Rocket Teams is a dual sided tech talent platform connecting startups and enterprises with top remote professionals from emerging markets. Companies can quickly hire vetted engineers, designers, and product specialists, while talent can register to access premium global opportunities. The platform is built using React and Next.js, with content managed via Sanity CMS and form submissions handled through Firebase Firestore.',
  details: [
    {
      title: 'Challenges',
      ol: [
        {
          title: 'Dual User Experiences',
          text: 'The platform had to serve both businesses looking to hire and talent registering for opportunities, each requiring distinct onboarding flows, data models, and UI elements.',
        },
        {
          title: 'Real Time Data Handling',
          text: 'Submissions from the "Hire Talent" and "Talent Registration" forms needed to be captured and stored in Firestore in real time while ensuring responsiveness and reliability.',
        },
        {
          title: 'Content Flexibility with Sanity CMS',
          text: "The marketing and operations team needed full control over the site's content, requiring a customizable and scalable CMS structure without developer dependency.",
        },
        {
          title: 'Performance & SEO Optimization',
          text: 'The platform had to load quickly for a global audience and be SEO friendly to drive organic traffic and conversions.',
        },
        {
          title: 'Building Trust Through UX',
          text: 'The UI had to clearly communicate Rocket Teams value props such as 72 hour hiring, top 5% talent vetting, and a free 2 week trial, all within a clean and credible layout.',
        },
      ],
    },
    {
      title: 'My Contributions',
      text: 'As the sole developer, I worked on the design, development, and deployment of the entire platform across frontend, CMS, and backend integrations.',
      ol: [
        {
          title: 'Frontend Development with Next.js + React',
          ul: ['Built all responsive pages with modern component based architecture using React and Next.js', 'Implemented dynamic routing, smooth animations and transitions with framer motion, optimized assets, and SEO friendly page structures'],
        },
        {
          title: 'Firebase Integration',
          ul: ['Connected Firestore for storing dynamic form submissions from talent and businesses', 'Implemented validation and error handling for real time, secure data capture'],
        },
        {
          title: 'Sanity CMS Integration',
          ul: ['Modeled content types for pages, FAQs, testimonials, and blogs', 'Enabled dynamic content rendering and real time preview functionality'],
        },
        {
          title: 'User Flow Design',
          ul: ['Designed clear, distinct flows for company hiring and talent onboarding', 'Created intuitive forms and calls to action for higher conversion'],
        },
        {
          title: 'Performance Optimization',
          ul: ['Leveraged Next.js static generation and image optimization for speed', 'Implemented lazy loading and efficient component rendering'],
        },
      ],
    },
    {
      title: 'Impact',
      ol: [
        {
          title: 'Global Accessibility',
          text: 'Delivered a fast, modern platform usable across devices and geographies to support both businesses and talent worldwide.',
        },
        {
          title: 'Effortless Hiring & Registration',
          text: 'Enabled seamless talent intake and hiring request submissions through Firestore powered dynamic forms.',
        },
        {
          title: 'CMS Driven Content Control',
          text: 'Allowed non-developers to manage site content end-to-end through Sanity CMS with real time updates.',
        },
        {
          title: 'Improved Conversion & Trust',
          text: 'The polished UI and clear messaging increased platform credibility and encouraged more user signups and hiring activity.',
        },
      ],
    },
  ],
};
