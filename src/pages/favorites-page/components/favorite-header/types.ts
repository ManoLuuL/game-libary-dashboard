import type { Game } from '@/globals/types/game';

export type FavoriteHeaderProps = {
  favorites: Game[];
  handleClearFavorites: () => void;
};
