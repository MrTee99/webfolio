import { data } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const HomeWorkflowDesktop: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(data.workflow[0]);

  return (
    <div className={cn('flex flex-row items-center justify-center gap-14')}>
      <div className="flex min-w-[18rem] flex-col items-start gap-2">
        {data.workflow.slice(0, 5).map((tab) => (
          <button key={tab.id} className={cn('group hover:bg-card flex w-full cursor-pointer flex-row items-center justify-between gap-2 rounded-md p-2 transition-all', selectedTab.id === tab.id && 'bg-card')} onClick={() => setSelectedTab(tab)}>
            <div className="flex flex-row items-center gap-2">
              <div className={cn('bg-background group-hover:dark:bg-muted-foreground/20 flex aspect-square w-[2.125rem] flex-shrink-0 items-center justify-center rounded-md', selectedTab.id === tab.id && 'dark:bg-muted-foreground/20')}>
                <tab.icon size={20} />
              </div>
              <h3 className="text-start text-sm font-medium">{tab.title}</h3>
            </div>
            {selectedTab.id === tab.id ? (
              <div className="bg-background mr-1 rounded-full p-0.5">
                <ChevronRight strokeWidth={3} size={16} />
              </div>
            ) : null}
          </button>
        ))}
      </div>
      <div className="bg-card h-[19rem] w-full max-w-[30rem] flex-1 overflow-hidden rounded-md px-5 py-4">
        <h3 className="mb-1 text-lg font-medium">{selectedTab.title}</h3>
        <p className="text-muted-foreground text-sm font-medium">{selectedTab.description}</p>
        <div className="mt-1 flex w-full items-center justify-center">
          <selectedTab.illustration />
        </div>
      </div>
    </div>
  );
};

export default HomeWorkflowDesktop;
