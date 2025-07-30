import type { MouseEvent } from 'react';

export type CardHeaderProps = {
  isGameFavorite: boolean;
  rating: number;
  metacritic: number | null;
  background_image?: string;
  name: string;
  handleFavoriteClick: (e: MouseEvent) => void;
};
