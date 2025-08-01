import { GameDetailsPageContentLeftColumn } from './components/game-details-page-content-left-column';
import { GameDetailsPageContentRightColumn } from './components/game-details-page-content-right-column';
import type { GameDetailsPageContentProps } from './types';

export const GameDetailsPageContent = (props: GameDetailsPageContentProps) => {
  const { game, screenshots, trailers } = props;

  return (
    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
      <GameDetailsPageContentLeftColumn
        game={game}
        screenshots={screenshots}
        trailers={trailers}
      />

      <GameDetailsPageContentRightColumn game={game} />
    </div>
  );
};
