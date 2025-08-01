import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useGameDetails, useGameScreenshots, useGameTrailers } from '@/globals/hooks/use-games';
import { useFavorites } from '@/globals/contexts/favorites-context';
import { GameDetailsPageLoading } from './components/game-details-page-loading';
import { GameDetailsPageError } from './components/game-details-page-error';
import { GameDetailsPageHeader } from './components/game-details-page-header';
import { GameDetailsPageContent } from './components/game-details-page-content';

import 'react-lazy-load-image-component/src/effects/blur.css';

const GameDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const gameParamsId = Number.parseInt(id || '0');

  const { data: game, isLoading, error } = useGameDetails(gameParamsId);
  const { data: screenshots } = useGameScreenshots(gameParamsId);
  const { data: trailers } = useGameTrailers(gameParamsId);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const { id: gameId, name, background_image } = game ?? {};

  const isGameFavorite = gameId ? isFavorite(gameId) : false;

  const handleFavoriteClick = () => {
    if (!game) {
      return;
    }

    if (isGameFavorite) {
      removeFavorite(gameId ?? 1);
    } else {
      addFavorite(game);
    }
  };

  const HeroImageRender = background_image && (
    <div className='relative aspect-video overflow-hidden rounded-xl'>
      <LazyLoadImage
        src={background_image}
        alt={name}
        effect='blur'
        className='h-full w-full object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
    </div>
  );

  if (isLoading) {
    return <GameDetailsPageLoading />;
  }

  if (error || !game) {
    return <GameDetailsPageError />;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='space-y-8'
    >
      <div className='flex items-center space-x-2 text-muted-foreground text-sm'>
        <Link
          to='/'
          className='transition-colors hover:text-primary'
        >
          Início
        </Link>
        <span>/</span>
        <span className='text-foreground'>{name}</span>
      </div>

      <GameDetailsPageHeader
        game={game}
        handleFavoriteClick={handleFavoriteClick}
        isGameFavorite={isGameFavorite}
      />

      {HeroImageRender}

      {/* Main Content */}
      <GameDetailsPageContent
        game={game}
        screenshots={screenshots}
        trailers={trailers}
      />
    </m.div>
  );
};

export default GameDetailsPage;
