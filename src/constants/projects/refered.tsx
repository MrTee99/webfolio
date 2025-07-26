import type { Project } from '.';

export const Refered: Project = {
  filter: ['All Projects', 'Web Apps'],
  platform: 'Web Application',
  slug: 'refered',
  cardImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/referd/card.jpg',
  coverImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/referd/cover.jpg',
  title: "Refer'd",
  subtitle: 'An app that connects users with trusted professionals for various services, rewarding them for referrals.',
  tags: ['Typescript', 'React', 'Next.js', 'React Hook Form', 'Firebase Auth', 'Firebase Firestore', 'Firebase Cloud Messaging', 'Firebase Storage', 'Shadcn', 'Zod', 'Zustand'],
  info: [
    ['Client', "Refer'd Co"],
    ['Industry', 'Referral Marketing'],
    ['Duration', '2 months'],
    ['Role', 'Full Stack Developer'],
    ['Year', '2024'],
  ],
  links: {},
  recommendedProjects: ['InsightTherapySolutions', 'Megnus', 'AcTx'],
  overview: 'This app is a versatile platform designed to connect business users and consumers through a seamless referral marketing ecosystem. Business users create detailed profiles and define their own referral rewards and discounts, while consumer users join with basic information. Both user types verify their phone numbers via OTP and log in securely with phone and password. The app enables advanced search and filtering to discover businesses and users, the ability to mark favorites, and share referral links that automatically track and record referral activity. Users can chat in real time and receive notifications about referrals and messages. With integrated FAQs and support, the app acts as a social network focused on referral marketing, helping businesses grow through word of mouth while rewarding users for sharing and connecting.',
  details: [
    {
      title: 'Challenges',
      ol: [
        {
          title: 'Dual User Roles',
          text: 'Managing distinct onboarding and profile requirements for business and consumer users with secure role based access.',
        },
        {
          title: 'OTP-Based Verification',
          text: 'Integrating Firebase OTP for phone number verification during signup, login, and password resets, ensuring security and usability.',
        },
        {
          title: 'Advanced Search & Filtering',
          text: 'Implementing efficient, multi criteria search for users and businesses across attributes like location, type, and contact details.',
        },
        {
          title: 'Referral Tracking & Rewards',
          text: 'Building an automated referral system tracking three parties (referrer, referred business, referred user) with reward redemption and payment processing.',
        },
        {
          title: 'Real Time Chat & Notifications',
          text: 'Enabling instant messaging via Firebase and delivering real time notifications for chats and referral events.',
        },
        {
          title: 'User Engagement Features',
          text: 'Supporting favorites marking and providing FAQ and contact support within the app.',
        },
      ],
    },
    {
      title: 'My Contributions',
      text: 'As the sole developer, I handled both frontend and backend development, integrating authentication, referral logic, real time communication, and user engagement features.',
      ol: [
        {
          title: 'User Onboarding & Authentication',
          ul: ['Developed distinct signup flows with Firebase OTP verification for business and consumer users', 'Implemented secure login and password reset with OTP validation'],
        },
        {
          title: 'Search & Filtering',
          ul: ['Built advanced multi criteria search for users and businesses', 'Optimized backend queries for fast and accurate results'],
        },
        {
          title: 'Referral System',
          ul: ['Designed referral tracking for referrer, referred business, and referred user', 'Implemented configurable referral rewards and discount settings for businesses', 'Built reward redemption workflows with payment integration'],
        },
        {
          title: 'Chat & Notifications',
          ul: ['Integrated Firebase for real time chat functionality', 'Implemented notification system for referral redemptions and chat messages'],
        },
        {
          title: 'Support Features',
          ul: ['Implemented FAQ section and contact form for user support'],
        },
        {
          title: 'Frontend Development',
          ul: ['Built responsive React UI with role based access and real time updates'],
        },
      ],
    },
    {
      title: 'Impact',
      ol: [
        {
          title: 'Simplified Onboarding',
          text: 'Seamless signup for both business and consumer users with secure phone verification.',
        },
        {
          title: 'Boosted Growth',
          text: 'Automated referral system encouraged user engagement and business expansion.',
        },
        {
          title: 'Enhanced User Engagement',
          text: 'Real time chat and notifications fostered active communication and awareness.',
        },
        {
          title: 'Robust Security',
          text: 'Phone based OTP authentication ensured secure user access and password management.',
        },
        {
          title: 'Easy Discovery',
          text: 'Advanced filtering allowed users to quickly find relevant businesses and users.',
        },
        {
          title: 'Scalable Platform',
          text: 'Designed to support growing user base with reliable real time features and reward management.',
        },
      ],
    },
  ],
};
