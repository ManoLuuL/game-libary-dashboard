import type { SearchFilters } from '@/globals/types/game';

export type HomePageFilterProps = {
  filters: SearchFilters;
  handleFiltersChange: (newFilters: SearchFilters) => void;
  hasActiveFilters: string | boolean;
  searchQuery: string;
  clearFilters: () => void;
};
