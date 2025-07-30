import type { SearchFilters } from '@/globals/types/game';

export const getSelectedPlatformName = (filters: SearchFilters, platforms: any) => {
  if (!filters.platforms || !platforms) {
    return null;
  }
  const platform = platforms.find((platform) => platform.id.toString() === filters.platforms);
  return platform?.name;
};
