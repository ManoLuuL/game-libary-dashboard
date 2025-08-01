import type { Game, GameScreenshot, GameTrailer } from '@/globals/types/game';

export type GameDetailsPageContentLeftColumnProps = {
  game: Game;
  screenshots?: GameScreenshot[];
  trailers?: GameTrailer[];
};
