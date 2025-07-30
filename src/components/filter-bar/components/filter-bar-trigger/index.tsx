import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Filter } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { FilterBarTriggerProps } from './types';

export const FilterBarTrigger = (props: FilterBarTriggerProps) => {
  const { activeFiltersCount, isOpen } = props;

  const ActiveFilterBadgeRender = activeFiltersCount > 0 && (
    <Badge
      variant='secondary'
      className='ml-2'
    >
      {activeFiltersCount}
    </Badge>
  );

  return (
    <Button
      variant='outline'
      className='flex w-full items-center justify-between space-x-2 sm:w-auto'
    >
      <div className='flex items-center space-x-2'>
        <Filter className='h-4 w-4' />
        <span>Filtros</span>
        {ActiveFilterBadgeRender}
      </div>
      <ChevronDown className={twMerge('h-4 w-4 transition-transform', isOpen ? 'rotate-180' : '')} />
    </Button>
  );
};
