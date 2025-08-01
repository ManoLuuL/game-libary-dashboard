import { Button } from '@/components/ui/button';
import { formatReleaseDate } from '@/globals/utils/format-release-date';
import { getRatingColor } from '@/globals/utils/get-rating-color';
import { Calendar, Heart, Star } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { GameDetailsPageHeaderProps } from './types';

export const GameDetailsPageHeader = (props: GameDetailsPageHeaderProps) => {
  const { game, isGameFavorite, handleFavoriteClick } = props;
  const { name, released, rating, metacritic } = game;

  const formatRelease = formatReleaseDate(released);
  const ratingColor = getRatingColor(rating);

  const favoriteText = isGameFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos';

  const MetacriticRender = metacritic && (
    <div className='flex items-center space-x-1'>
      <span className='font-medium text-xs'>Metacritic:</span>
      <span className='rounded bg-yellow-500 px-2 py-0.5 font-bold text-black text-xs'>{metacritic}</span>
    </div>
  );

  const RatingRender = rating > 0 && (
    <div className='flex items-center space-x-1'>
      <Star className={twMerge('h-4 w-4 fill-current', ratingColor)} />
      <span className={ratingColor}>{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <h1 className='mb-2 font-bold text-3xl md:text-4xl'>{name}</h1>
        <div className='flex items-center space-x-4 text-muted-foreground'>
          <div className='flex items-center space-x-1'>
            <Calendar className='h-4 w-4' />
            <span>{formatRelease}</span>
          </div>
          {RatingRender}
          {MetacriticRender}
        </div>
      </div>

      <div className='flex items-center space-x-2'>
        <Button
          onClick={handleFavoriteClick}
          variant={isGameFavorite ? 'default' : 'outline'}
          className='flex items-center space-x-2'
        >
          <Heart className={twMerge('h-4 w-4', isGameFavorite ? 'fill-current' : '')} />
          <span>{favoriteText}</span>
        </Button>
      </div>
    </div>
  );
};
