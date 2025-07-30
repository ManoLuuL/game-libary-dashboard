import type { SearchFilters } from '@/globals/types/game';

export type FilterBarProps = {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
};
