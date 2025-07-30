import type { SearchFilters } from '@/globals/types/game';

export const getSelectedGenreName = (filters: SearchFilters, genres: any) => {
  if (!filters.genres || !genres) {
    return null;
  }
  const genre = genres.find((genre) => genre.id.toString() === filters.genres);
  return genre?.name;
};
