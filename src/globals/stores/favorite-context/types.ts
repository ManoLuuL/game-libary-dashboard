import type { Game } from '@/globals/types/game';

export type UseFavoritesStoreParams = {
  favorites: Game[];
  addFavorite: (game: Game) => void;
  removeFavorite: (gameId: number) => void;
  isFavorite: (gameId: number) => boolean;
  clearFavorites: () => void;
};
