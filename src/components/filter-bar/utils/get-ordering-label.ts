import type { SearchFilters } from '@/globals/types/game';

export const getOrderingLabel = (filters: SearchFilters) => {
  switch (filters.ordering) {
    case '-rating':
      return 'Melhor Avaliação';
    case '-released':
      return 'Mais Recentes';
    case '-added':
      return 'Mais Populares';
    case '-metacritic':
      return 'Melhor Metacritic';
    case 'name':
      return 'Nome A-Z';
    case '-name':
      return 'Nome Z-A';
    default:
      return 'Padrão';
  }
};
