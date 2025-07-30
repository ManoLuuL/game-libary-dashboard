import type { Game } from '@/globals/types/game';

export type GameGridProps = {
  games: Game[];
  loading?: boolean;
  error?: string;
};
