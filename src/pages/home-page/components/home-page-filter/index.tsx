import FilterBar from '@/components/filter-bar';
import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import type { HomePageFilterProps } from './types';

export const HomePageFilter = (props: HomePageFilterProps) => {
  const { filters, handleFiltersChange, hasActiveFilters, searchQuery, clearFilters } = props;

  const SearchQueryRender = searchQuery && `Buscando por: "${searchQuery}"`;
  const FiltersRender = Object.keys(filters).length > 0 && ` • ${Object.keys(filters).length} filtro(s) ativo(s)`;

  const ClearButtonRender = (
    <div className='mt-4 flex items-center justify-between'>
      <p className='text-muted-foreground text-sm'>
        {SearchQueryRender}
        {FiltersRender}
      </p>
      <Button
        variant='outline'
        size='sm'
        onClick={clearFilters}
        className='text-xs'
      >
        Limpar filtros
      </Button>
    </div>
  );

  return (
    <m.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <FilterBar
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />

      {hasActiveFilters && ClearButtonRender}
    </m.section>
  );
};
