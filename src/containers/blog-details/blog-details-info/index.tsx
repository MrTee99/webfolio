import ArrowDownIcon from '@/components/icons/arrow-down-icon';
import CalendarIcon from '@/components/icons/calendar-icon';
import FacebookIcon from '@/components/icons/facebook-icon';
import LinkedinFilledIcon from '@/components/icons/linkedin-filled-icon';
import ShareIcon from '@/components/icons/share-icon';
import TwitterIcon from '@/components/icons/twitter-icon';
import { Button } from '@/components/ui/button';
import Chip from '@/components/ui/chip';
import { copyToClipboard } from '@/lib/utils';
import { Link, useCanGoBack, useNavigate, useRouter } from '@tanstack/react-router';
import { ClockIcon } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

const blogTitle = 'Blog Title';
const blogTags = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'];

const BlogDetailsInfo: React.FC = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const canGoBack = useCanGoBack();

  const handleGoBack = () => (canGoBack ? router.history.back() : navigate({ to: '/projects' }));

  const handleSocialShare = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    let url: string | null = null;
    if (platform === 'twitter') url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(router.state.location.href)}&text=${encodeURIComponent(blogTitle)}&hashtags=example,share`;
    else if (platform === 'facebook') url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(router.state.location.href)}`;
    else if (platform === 'linkedin') url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(router.state.location.href)}`;
    if (url !== null) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLinkToClipboard = async () => {
    copyToClipboard(router.state.location.href)
      .then((isSuccess) => isSuccess && toast.success('Blog link copied!'))
      .catch(() => toast.error('Something went wrong!'));
  };

  const handleGenericShare = async () => {
    if (typeof window === 'undefined') await handleCopyLinkToClipboard();
    await navigator.share({ title: blogTitle, text: 'Share this blog!', url: router.state.location.href }).catch(() => handleCopyLinkToClipboard());
  };

  return (
    <div className="mx-auto mt-20 flex w-full flex-col gap-3">
      <Button variant="ghost" size="sm" className="text-muted-foreground max-w-max cursor-pointer px-2" onClick={handleGoBack}>
        <ArrowDownIcon className="rotate-90" />
        <span>Go Back</span>
      </Button>
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold md:text-6xl">{blogTitle}</h1>
        <div className="flex flex-row gap-5">
          {[
            { icon: CalendarIcon, value: 'October 10, 2023' },
            { icon: ClockIcon, value: '5 min read' },
          ].map((item, index) => (
            <div key={index} className="text-muted-foreground flex items-center justify-center gap-1">
              <item.icon className="size-3.5 md:size-4" />
              <span className="mt-0.5 text-xs font-medium md:text-sm">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="bg-card aspect-video w-full rounded-lg"></div>
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <div className="flex w-full flex-1 flex-col gap-4">
            {[
              { title: 'Heading', content: 'A full-featured e-commerce dashboard with real-time analytics, inventory management, and order processing capabilities. Built for RetailTech Inc. to streamline their operations and provide data-driven insights.' },
              { title: 'Heading', content: 'The client needed a centralized solution to manage their growing online store. Their previous system was fragmented across multiple platforms, causing data inconsistencies and making it difficult to get a comprehensive view of their business performance.' },
              { title: 'Heading', content: "I began with extensive research on the client's workflow and pain points. After defining key requirements, I designed a user-centered interface that prioritized the most common tasks. I implemented the solution using React for the frontend with a Node.js API and MongoDB for data storage, with real-time updates using WebSockets." },
              { title: 'Heading', content: 'The dashboard reduced the time spent on inventory management by 65% and provided actionable insights that helped increase sales by 28% within the first quarter of implementation. The client reported significant improvements in their ability to make data-driven decisions.' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-base font-medium">{item.content}</p>
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <h5 className="text-base font-medium">Tags</h5>
              <div className="flex flex-row flex-wrap items-center gap-2">
                {blogTags.map((tag, index) => (
                  <Chip key={index} title={tag} size="lg" />
                ))}
              </div>
            </div>
            <hr className="mt-4 mb-2" />
            <div className="flex flex-row items-center gap-2">
              <h5 className="mr-2 text-base font-medium">Share this article:</h5>
              {[
                { icon: <TwitterIcon />, click: () => handleSocialShare('twitter') },
                { icon: <FacebookIcon className="scale-125" />, click: () => handleSocialShare('facebook') },
                { icon: <LinkedinFilledIcon className="scale-125" />, click: () => handleSocialShare('linkedin') },
                { icon: <ShareIcon />, click: handleGenericShare },
              ].map((social, index) => (
                <Button key={index} variant="ghost" size="icon" className="border-border cursor-pointer border" onClick={social.click}>
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>
          <div className="dark:bg-card sticky top-20 flex w-full flex-col gap-2 rounded-md border-[1.5px] px-3 py-2 max-md:hidden md:max-w-[18rem]">
            <h5 className="text-lg font-semibold">Table of Contents</h5>
            <div className="mt-1 mb-2 flex flex-col gap-3">
              {[
                { heading: 'Heading', subheading: ['Subheading', 'Subheading'] },
                { heading: 'Heading', subheading: ['Subheading', 'Subheading', 'Subheading', 'Subheading'] },
              ].map((detail, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <Link to="." hash="#" className="text-sm font-medium">
                    {detail.heading}
                  </Link>
                  {detail.subheading.map((sub, subIndex) => (
                    <Link to="." hash="#" key={subIndex} className="text-muted-foreground ml-4 text-sm font-medium">
                      {sub}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsInfo;
