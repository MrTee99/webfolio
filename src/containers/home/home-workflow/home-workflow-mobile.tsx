import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { data } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const HomeWorkflowMobile: React.FC = () => (
  <div className={cn('mx-auto flex w-max max-w-full flex-col gap-6 py-8')}>
    <Accordion type="multiple" className="w-[24rem] max-w-full space-y-2">
      {data.workflow.slice(0, 5).map((tab) => (
        <AccordionItem key={tab.id} value={tab.id.toString()}>
          <AccordionTrigger className="group bg-card flex w-full cursor-pointer flex-row items-center justify-between gap-2 rounded-md p-2 data-[state=open]:rounded-b-none [&[data-state=open]>#icon]:rotate-90">
            <div className="flex flex-row items-center gap-2">
              <div className="bg-background dark:bg-muted-foreground/20 flex aspect-square w-[2.125rem] flex-shrink-0 items-center justify-center rounded-md [&>svg]:transition-transform group-hover:[&>svg]:scale-105">
                <tab.icon size={20} />
              </div>
              <h3 className="text-start text-sm font-medium transition-transform group-hover:translate-x-1">{tab.title}</h3>
            </div>
            <div id="icon" className="bg-background mr-1 rotate-0 rounded-full p-0.5 transition-transform group-[data-state=open]:rotate-90">
              <ChevronRight strokeWidth={3} size={16} />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-card h-[17.5rem] w-full max-w-[30rem] flex-1 overflow-hidden rounded-b-md px-3 pt-2 pb-4">
              <p className="text-muted-foreground text-sm font-medium">{tab.description}</p>
              <div className="mt-1 flex w-full items-center justify-center">
                <tab.illustration />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default HomeWorkflowMobile;
