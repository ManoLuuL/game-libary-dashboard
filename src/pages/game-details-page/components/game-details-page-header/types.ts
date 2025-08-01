import type { Game } from '@/globals/types/game';

export type GameDetailsPageHeaderProps = {
  game: Game;
  isGameFavorite: boolean;
  handleFavoriteClick: () => void;
};
