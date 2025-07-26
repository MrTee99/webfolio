import BadgeIcon from '@/components/icons/badge-icon';
import BulbIcon from '@/components/icons/bulb-icon';
import CodeIcon from '@/components/icons/code-icon';
import ColorPaletteIcon from '@/components/icons/color-palette-icon';
import DesktopIcon from '@/components/icons/desktop-icon';
import EmailIcon from '@/components/icons/email-icon';
import GithubIcon from '@/components/icons/github-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import LocationIcon from '@/components/icons/location-icon';
import MobileIcon from '@/components/icons/mobile-icon';
import PeopleIcon from '@/components/icons/people-icon';
import PhoneIcon from '@/components/icons/phone-icon';
import RocketOutlineIcon from '@/components/icons/rocket-outline-icon';
import SearchIcon from '@/components/icons/search-icon';
import TargetIcon from '@/components/icons/target-icon';
import WebIcon from '@/components/icons/web-icon';
import DeploymentIllustration from '@/components/illustrations/deployment-illustration';
import DesigningIllustration from '@/components/illustrations/designing-illustration';
import DevelopmentIllustration from '@/components/illustrations/development-illustration';
import PlanningIllustration from '@/components/illustrations/planning-illustration';
import TestingIllustration from '@/components/illustrations/testing-illustration';
import { ShieldIcon } from 'lucide-react';
import { blogFilters } from './blogs';
import { projects as allProjects, projectFilters } from './projects';

const home = {
  title: 'Tahir Saeed',
  subtitle: ['Bringing your ideas to life through creative', 'web, mobile & desktop app solutions'],
  cta: { title: 'Ready to start your project?', subtitle: "Let's build amazing things together" },
};

const about = {
  title: 'My Journey',
  profilePic: { src: 'https://ik.imagekit.io/c4nxqtjsj/myself.jpg', alt: 'Tahir Saeed' },
  description: "I'm a passionate full-stack developer with 4+ years of experience creating digital solutions that solve real problems. With expertise in modern web technologies, I deliver beautiful, functional applications that help businesses and individuals achieve their goals. Whether you&apos;re looking for a new web app, desktop app or a mobile solution, or need to revamp your existing digital presence, I combine technical knowledge with creative problem-solving to deliver exceptional results.",
  myJourney: 'I began my career as a self-taught developer in 2018 with a passion for creating beautiful, functional websites. What started as a hobby quickly evolved into a profession as I honed my skills in both design and development. With a background in computer science and design',
  stats: [
    { count: '15+', title: ['Projects', 'Completed'] },
    { count: '10+', title: ['Happy', 'Clients'] },
    { count: '4+', title: ['Years', 'Experience'] },
    { count: '∞', title: ['Cups', 'of Coffee'] },
  ],
  highlights: [
    { icon: BulbIcon, title: 'Modern Solutions', description: 'Using the latest tech to build powerful and secure apps.' },
    { icon: PeopleIcon, title: 'Collaborative Approach', description: 'Working closely with you to bring your vision to life.' },
    { icon: TargetIcon, title: 'Results Driven', description: 'Focused on creating solutions that deliver real business value.' },
  ],
  values: [
    { icon: BadgeIcon, title: 'Quality', description: 'I never compromise on the quality of my work and always strive for excellence in every line of code.' },
    { icon: PeopleIcon, title: 'Collaboration', description: 'I believe in working closely with clients to ensure their vision is realized, maintaining open communication throughout.' },
    { icon: ShieldIcon, title: 'Integrity', description: 'I am transparent about capabilities, timelines, and costs to maintain clear and honest communication.' },
  ],
  skills: [
    { icon: '/icons/react.svg', title: 'React & React Native', size: 45 },
    { icon: '/icons/next.svg', darkIcon: '/icons/next-dark.svg', title: 'Next JS', size: 45 },
    { icon: '/icons/tailwind.svg', title: 'Tailwind CSS', size: 45 },
    { icon: '/icons/scss.svg', title: 'SCSS', size: 45 },
    { icon: '/icons/zustand.svg', title: 'Zustand', size: 45 },
    { icon: '/icons/redux.svg', title: 'Redux Toolkit', size: 45 },
    { icon: '/icons/js.svg', title: 'Javascript', size: 45 },
    { icon: '/icons/ts.svg', title: 'Typescript', size: 45 },
    { icon: '/icons/hono.svg', title: 'Hono JS', size: 35 },
    { icon: '/icons/nest.svg', title: 'Nest JS', size: 45 },
    { icon: '/icons/drizzle.svg', title: 'Drizzle ORM', size: 45 },
    { icon: '/icons/postgresql.svg', title: 'PostgreSQL', size: 45 },
    { icon: '/icons/mongo.svg', title: 'MongoDB', size: 45 },
    { icon: '/icons/firebase.svg', title: 'Firebase', size: 35 },
    { icon: '/icons/docker.svg', title: 'Docker', size: 45 },
  ],
  social: [
    { title: 'Github', icon: GithubIcon, link: 'https://www.github.com/mrtee99' },
    { title: 'LinkedIn', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/tahirsaeed99' },
  ],
  cta: { title: 'Ready to work together?', subtitle: "Let's collaborate to bring your vision to life" },
};

const services = {
  title: 'Services',
  subtitle: ['I offer specialized development services to help individuals', 'and companies build exceptional digital experiences.'],
  services: [
    { icon: WebIcon, title: ['Web App', 'Development'], description: 'Build responsive web apps using modern frameworks with robust backends to power your business.' },
    { icon: MobileIcon, title: ['Mobile App', 'Development'], description: 'Develop cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.' },
    { icon: DesktopIcon, title: ['Desktop App', 'Development'], description: 'Create custom desktop apps for Windows, macOS, and Linux that are powerful, secure, and user-friendly.' },
  ],
  cta: { title: 'Ready to start your project?', subtitle: "Let's discuss your project requirements" },
};

const projects = {
  title: 'Projects Showcase',
  subtitle: ['Discover the projects that showcase my', 'expertise in building impactful solutions.'],
  filters: projectFilters,
  all: Object.values(allProjects),
  featured: [allProjects.InsightTherapySolutions, allProjects.Megnus, allProjects.Refered],
  cta: { title: 'Have a project in mind?', subtitle: "Let's talk about bringing your vision to life" },
};

const blogs = {
  title: 'Blogs',
  subtitle: ['Discover the lessons, challenges, and successes from', 'my journey to inspire, educate, and empower.'],
  filters: blogFilters,
  all: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  cta: { title: 'Ready to start your project?', subtitle: "Let's build amazing things together" },
};

const workflow = [
  { id: 1, icon: SearchIcon, iconSmallSize: 18, title: 'Planning & Requirements', shortTitle: 'Planning', description: 'Defining project scope, gathering requirements, and creating a detailed roadmap for development.', illustration: PlanningIllustration },
  { id: 2, icon: ColorPaletteIcon, iconSmallSize: 18, title: 'Design & Prototyping', shortTitle: 'Designing', description: 'Creating wireframes, mockups, and interactive prototypes to visualize the user interface and experience.', illustration: DesigningIllustration },
  { id: 3, icon: CodeIcon, iconSmallSize: 18, title: 'Development', shortTitle: 'Development', description: 'Writing clean, efficient code and implementing features according to the project specifications.', illustration: DevelopmentIllustration },
  { id: 4, icon: PeopleIcon, iconSmallSize: 18, title: 'Testing & QA', shortTitle: 'Testing', description: 'Conducting thorough testing to identify and fix bugs, ensuring the software meets quality standards.', illustration: TestingIllustration },
  { id: 5, icon: RocketOutlineIcon, iconSmallSize: 15, title: 'Deployment & Launch', shortTitle: 'Deployment', description: 'Preparing for release, deploying the software to production, and officially launching the product.', illustration: DeploymentIllustration },
  { id: 6, icon: RocketOutlineIcon, iconSmallSize: 15, title: 'Support', shortTitle: 'Support', description: 'Preparing for release, deploying the software to production, and officially launching the product.', illustration: DeploymentIllustration },
];

const contact = {
  title: 'Get In Touch',
  subtitle: ['Ready to start a project or just want to say hello?', 'Reach out and let&apos;s discuss how I can help bring your ideas to life.'],
  details: [
    { icon: PhoneIcon, title: 'Phone', description: '+92 336 2464578' },
    { icon: EmailIcon, title: 'Email', description: 'tahirsaeed99.ts@gmail.com' },
    { icon: LocationIcon, title: 'Location', description: 'Karachi, Pakistan' },
  ],
};

export const data = { home, projects, about, services, workflow, blogs, contact };
