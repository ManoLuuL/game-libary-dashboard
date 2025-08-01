import type { Game, GameScreenshot, GameTrailer } from '@/globals/types/game';

export type GameDetailsPageContentProps = {
  game: Game;
  screenshots?: GameScreenshot[];
  trailers?: GameTrailer[];
};
