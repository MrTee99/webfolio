import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import React from 'react';

interface IProps {
  title: string;
  subtitle: string;
}

const CtaBlock: React.FC<IProps> = ({ title, subtitle }) => (
  <div className="mt-0 w-full md:mt-16">
    <div className="bg-card mb-10 flex h-[15rem] w-full flex-col items-center justify-center gap-2 rounded-xl px-6 md:h-[20rem] md:gap-8">
      <h3 className="text-center text-[1.5rem] leading-7 font-medium md:text-[2.5rem]">{title}</h3>
      <h3 className="text-muted-foreground text-center text-[1.25rem] leading-7 font-medium md:text-[2.5rem]">{subtitle}</h3>
      <Button asChild size="lg" className="mt-2 font-semibold md:text-lg">
        <Link to="/contact">Get in touch</Link>
      </Button>
    </div>
  </div>
);

export default CtaBlock;
