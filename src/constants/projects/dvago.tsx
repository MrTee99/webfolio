import type { Project } from '.';

export const Dvago: Project = {
  filter: ['All Projects', 'Mobile Apps'],
  platform: 'Mobile Application',
  slug: 'dvago',
  cardImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/dvago/card.jpg',
  coverImage: 'https://ik.imagekit.io/c4nxqtjsj/projects/dvago/cover.jpg',
  title: 'Dvago',
  subtitle: 'An e-commerce healthcare app that lets users in Pakistan order authentic medicines and wellness products.',
  tags: ['Typescript', 'React Native', 'React Navigation', 'NativeBase UI', 'Firebase Cloud Messaging', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase Dynamic Links', 'Redux Toolkit', 'Microsoft Codepush', 'Google Maps API', 'Tanstack Query', 'Facebook Pixel'],
  info: [
    ['Industry', 'Online Pharmacy & Health Tech'],
    ['Duration', '6 months'],
    ['Role', 'Frontend Developer'],
    ['Year', '2021'],
  ],
  links: {
    ios: 'https://apps.apple.com/us/app/dvago-pharmacy-healthcare/id1603962269',
    android: 'https://play.google.com/store/apps/details?id=com.dvago',
  },
  recommendedProjects: ['Refered', 'Rocketeams', 'Megnus'],
  overview: "A cross-platform e-commerce mobile app developed using React Native for Android and iOS that enables users to search for medicines, upload prescriptions, view deals, manage orders, track delivery, and more. The app uses Firebase services for analytics, push notifications, crash reporting, and deep linking. It integrates Microsoft App Center's CodePush for over-the-air updates and supports location aware product listings using Google Maps.",
  details: [
    {
      title: 'Challenges',
      ol: [
        {
          title: 'Location-Based Product Listings',
          text: 'Users see inventory from nearby dark stores depending on their selected or current location, requiring real time location detection and dynamic filtering.',
        },
        {
          title: 'Seamless Prescription Handling',
          text: 'Users could upload prescriptions which triggered a backend flow where customer service would verify and process the order, adding a human-in-the-loop experience.',
        },
        {
          title: 'Smooth Checkout and Payment Integration',
          text: 'The checkout flow had to support multiple payment methods, saved cards, vouchers, and order tracking, all while ensuring transactional integrity.',
        },
        {
          title: 'OTA Update System',
          text: 'To avoid frequent app store releases, CodePush was used for delivering quick patches and feature updates without requiring full deployments.',
        },
        {
          title: 'Third-Party Integrations',
          text: 'Integrating tools like Firebase Dynamic Links, Google Maps, and Facebook Pixel required coordinated event tracking and state management.',
        },
      ],
    },
    {
      title: 'My Contributions',
      text: 'As the sole frontend developer, I was responsible for implementing the entire mobile UI, integrating third-party services, and ensuring a seamless cross-platform user experience across both Android and iOS.',
      ol: [
        {
          title: 'Cross-Platform Development',
          ul: ['Built using React Native to ensure a shared codebase for Android and iOS', 'Used NativeBase for consistent UI components across devices'],
        },
        {
          title: 'App Flows and Core Features',
          ul: ['Implemented onboarding carousel, product browsing, prescription uploads, and deal viewing', 'Developed checkout process with voucher system, payment selection, and order tracking', 'Created profile management, feedback/complaints, and past orders functionality'],
        },
        {
          title: 'Maps and Location Integration',
          ul: ['Integrated Google Maps for address selection and branch locator', 'Enabled location based filtering of store inventory'],
        },
        {
          title: 'Firebase Integration',
          ul: ['Setup Firebase Cloud Messaging for push notifications', 'Integrated Firebase Analytics and Crashlytics for real time usage and error tracking', 'Used Firebase Dynamic Links for deep linking across platforms'],
        },
        {
          title: 'OTA & Performance Monitoring',
          ul: ['Used Microsoft App Center CodePush to deliver over-the-air updates', 'Configured crash reporting and usage metrics to improve stability and usability'],
        },
        {
          title: 'Store Deployment & Analytics',
          ul: ['Deployed app to Google Play Store and Apple App Store', 'Integrated Facebook Pixel for marketing analytics and retargeting'],
        },
      ],
    },
    {
      title: 'Impact',
      ol: [
        {
          title: 'Improved Accessibility to Healthcare',
          text: 'Enabled users to easily access and order prescription and non-prescription products from their phones.',
        },
        {
          title: 'Fast Feature Delivery with OTA Updates',
          text: 'Allowed seamless release of critical bug fixes and UI updates without going through app store review delays.',
        },
        {
          title: 'Enhanced Personalization and UX',
          text: 'Location aware features, saved payment methods, and past order history provided a more customized experience.',
        },
        {
          title: 'Reliable Communication and Engagement',
          text: 'Push notifications, dynamic links, and crash reporting helped drive user engagement and improve app quality.',
        },
      ],
    },
  ],
};
