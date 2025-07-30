import { m } from 'framer-motion';
import type { GameGridProps } from './types';
import GameCard from '../game-card';
import { GameGridLoading } from './components/game-grid-loading';
import { GameGridEmpty } from './components/game-grid-empty';
import { GameGridError } from './components/game-grid-error';

const GameGrid = (props: GameGridProps) => {
  const { games, error, loading } = props;

  const GameCardsRender = games.map((game, index) => (
    <GameCard
      key={game.id}
      game={game}
      index={index}
    />
  ));

  if (loading) {
    return <GameGridLoading />;
  }

  if (error) {
    return <GameGridError error={error} />;
  }

  if (!games || games.length === 0) {
    return <GameGridEmpty />;
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    >
      {GameCardsRender}
    </m.div>
  );
};

export default GameGrid;
