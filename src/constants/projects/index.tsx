import { AcTx } from './actx';
import { Dvago } from './dvago';
import { InsightTherapySolutions } from './insight-therapy-solutions';
import { Megnus } from './megnus';
import { Refered } from './refered';
import { Rocketeams } from './rocketeams';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allowedTags = [
  // 🧠 Programming Languages / Core
  'Typescript',

  // ⚛️ React Ecosystem
  'React',
  'React Native',
  'React Navigation',
  'Next.js',

  // 🗂 State Management
  'Zustand',
  'Redux Toolkit',
  'Formik',
  'React Hook Form',
  'Zod',
  'Yup',

  // 🎨 UI Libraries / Styling
  'Tailwind',
  'Shadcn',
  'Chakra UI',
  'NativeBase UI',
  'SCSS',
  'Framer Motion',

  // 🔌 Backend / Serverless / APIs
  'Serverless Framework',
  'AWS Lambda',
  'AWS Cloudwatch',
  'AWS S3',
  'MongoDB',
  'Mongoose',
  'Firebase Firestore',
  'Firebase Auth',
  'Firebase Storage',
  'Firebase Analytics',
  'Firebase Crashlytics',
  'Firebase Cloud Messaging',
  'Firebase Dynamic Links',
  'Supabase',

  // 🔧 Dev Tools / Build Tools
  'Github Actions',
  'Microsoft Codepush',

  // 📊 Analytics & Tracking
  'Facebook Pixel',
  'Google Maps API',

  // 📚 Data Fetching / Tables / Routers
  'Tanstack Query',
  'Tanstack Table',
  'Tanstack Router',
  'Tanstack Virtual',
  'Sanity CMS',
] as const;

export const projectFilters = ['All Projects', 'Web Apps', 'Mobile Apps'] as const;
export const projects = { InsightTherapySolutions, Megnus, Refered, Dvago, Rocketeams, AcTx } as const;
export type Project = {
  filter: (typeof projectFilters)[number][];
  platform: 'Web Application' | 'Mobile Application';
  slug: string;
  cardImage: string;
  coverImage: string;
  title: string;
  subtitle: string;
  tags: (typeof allowedTags)[number][];
  info: Array<['Year' | 'Role' | 'Client' | 'Industry' | 'Duration', string]>;
  links?: Partial<{ code: string; live: string; ios: string; android: string }>;
  recommendedProjects: (keyof typeof projects)[];
  overview: string;
  details: {
    title: string;
    text?: string;
    ol?: {
      title: string;
      text?: string;
      ul?: string[];
    }[];
  }[];
};
